if (CC_EDITOR) {//依照目前是否為編輯器，從根本註冊時就跳過不需要的判斷和編輯輔助，使運作速度提升。
    cc.Class({
        extends : cc.Component,

        properties : {
            ParticleAnimeEnable : false,
            SpriteMode : false,
            ParticlePic : {
                type : cc.SpriteFrame,
                default : null,
                visible() {
                    // return !this.SpriteMode;
                    return false;
                }
            },
            ParticleFrame : {
                type : cc.SpriteFrame,
                default : [],
                visible() {
                    return this.SpriteMode;
                }
            },
            _tile : {
                displayName : "Tile Slice",
                default : cc.v2(1, 1),
                notify() {
                    this.tile=this._tile;
                    if (!this.SpriteMode && this.ParticlePic && (this.tile.x * this.tile.y)>0) {
                        this.rechTextureMeta(this.tile.x, this.tile.y);
                    }
                },
                visible() {
                    return !this.SpriteMode;
                },
                tooltip : "依照這個參數切割指定圖片作為粒子動畫"
            },
            tile : {
                default : cc.v2(1, 1),
                visible() {
                    return false;
                }
            },
            len : {
                type : cc.Integer,
                default : 0,
                visible : false
            },
            ptcSys : {
                type : cc.ParticleSystem,
                default : null,
                visible : false
            },
            FrameRate : {
                type : cc.Float,
                default : 0.05
            },
            Frametimer : {
                type : cc.Float,
                default : 0,
                //visible : false
            },
            memFile : {
                type : cc.ParticleAsset,
                default : null,
                visible : false
            }
        },

        //經過重新寫入meta檔來設定初始圖片大小
        rechTextureMeta(sx, sy) {
            let spriteFrame=this.ptcSys.spriteFrame;
            if (spriteFrame !== null) {
                let uuid=spriteFrame._uuid;
                let ttWidth=spriteFrame._texture.width;
                let ttHeight=spriteFrame._texture.height;
                let rectW=ttWidth / sx;
                let rectH=ttHeight / sy;
                let offsetX=(ttWidth - rectW) / 2;
                let offsetY=(ttHeight - rectH) / 2;
                Editor.assetdb.queryMetaInfoByUuid(uuid, function (err, info) {
                    var meta=JSON.parse(info.json);
                    meta["trimType"]="custom";
                    meta["offsetX"]=offsetX;
                    meta["offsetY"]=offsetY;
                    meta["trimX"]=0;
                    meta["trimY"]=0;
                    meta["width"]=rectW;
                    meta["height"]=rectH;
                    Editor.assetdb.saveMeta(meta.uuid, JSON.stringify(meta), err => {
                        //存完了
                    });
                });
            }
        },

        start() {
            this.ptcSys=this.node.getComponent(cc.ParticleSystem);
            //使這個與粒子系統的重設功能進行聯動，當粒子系統重設，這邊也要跟著清除
            if (!this.ptcSys.resetInEditor) {
                this.ptcSys.resetInEditor=this.particleSystemReset;
            }
            //直接把這個額外功能塞到粒子系統裡面
            if (!this.ptcSys.Animation) {
                this.ptcSys.Animation=this;
            }
            if (this.ptcSys.spriteFrame) {
                let ttWidth=this.ptcSys.spriteFrame._texture.width;
                let ttHeight=this.ptcSys.spriteFrame._texture.height;
            }
            if (!this.SpriteMode && this.ParticlePic && (this.tile.x * this.tile.y)>0) {
                this.rechTextureMeta(this.tile.x, this.tile.y);
            }
        },

        update(dt) {

            if (!this.ParticlePic) {
                this.ParticlePic=this.ptcSys.spriteFrame;
            }
            //在使用編輯器的時候才去檢查檔案是否被變更，目前不考慮程式中的變動
            if (this.ptcSys && this.memFile !== this.ptcSys.file) {
                this.memFile=this.ptcSys.file;
                if (this.ptcSys.file) {       //拉上粒子設定檔的時候自動套用設定檔資訊
                    this.ptcSys._initWithDictionary(this.ptcSys.file["_$nativeAsset"]);
                    this.onRestore();
                }
            }

            if (this.ParticleAnimeEnable && this.FrameRate !== 0) {
                this.Frametimer=this.Frametimer + dt;
            }

            if (!this.ptcSys._stopped && this.Frametimer>this.FrameRate) {
                while (this.FrameRate !== 0 && this.Frametimer>this.FrameRate) {
                    this.Frametimer-=this.FrameRate;
                }
                let Plen=this.ptcSys._simulator.particles.length;
                if (Plen>0) {
                    let lastP=this.ptcSys._simulator.particles[Plen - 1];
                    if (lastP.frame === undefined) {
                        lastP.frame=Math.floor(Math.random() * this.len);
                    }
                }
                this.updateUVs(true);
            }
        },

        //粒子系統Reset時這個元件也跟著重設
        particleSystemReset() {
            this.Animation.ParticleAnimeEnable=false;
            this.Animation.SpriteMode=false;
            this.Animation.ParticlePic=null;
            this.Animation.tile=cc.Vec2.ONE;
            this.Animation.ParticleFrame=[];
            this.Animation.len=0;
            this.Animation.FrameRate=0.05;
            this.Animation.memFile=null;
            this.stopSystem();
            this.disableRender();
        },

        //讀取額外設定用
        onRestore() {
            if (!this.ptcSys.file) {
                return;
            }
            let self=this;
            if (this.ptcSys.file["_$nativeAsset"]["Sprites_0"] === this.ptcSys.file["_$nativeAsset"]["UVGridX"]) {
                this.ParticleAnimeEnable=false;
                this.ParticlePic=null;
                this.tile=cc.Vec2.ONE;
                this.FrameRate=0.05;
            }

            if (this.ptcSys.file["_$nativeAsset"]["Sprites_0"]) {
                this.SpriteMode=true;
                cc.loader.loadRes("UUIDList.Json", function (error, asset) {
                    let i=0;
                    let SPL=self.ptcSys.file["_$nativeAsset"]["Sprites_0"];
                    while (SPL) {
                        if (asset.json[SPL]) self.ptcSys.file["_$nativeAsset"]["Sprites_" + i]=asset.json[SPL];
                        i ++;
                        SPL=self.ptcSys.file["_$nativeAsset"]["Sprites_" + i];
                    }
                    i=0;
                    SPL=self.ptcSys.file["_$nativeAsset"]["Sprites_0"];
                    self.ParticleFrame=[];
                    while (SPL) {
                        cc.AssetLibrary.loadAsset(SPL, function (error, turAsset) {
                            self.ParticleFrame.push(turAsset);
                            self.ParticleFrame.sort(function (a, b) {
                                let i;
                                for (i=0; i<5; i ++) {
                                    if (self.findNumber(a.name, i)>self.findNumber(b.name, i)) {
                                        return 1;
                                    }
                                    else if (self.findNumber(a.name, i)<self.findNumber(b.name, i)) {
                                        return - 1;
                                    }
                                }
                                if (a>b) {
                                    return 1;
                                }
                                else if (a<b) {
                                    return - 1;
                                }
                                return 0;
                            });
                        });
                        i ++;
                        SPL=self.ptcSys.file["_$nativeAsset"]["Sprites_" + i];
                    }
                });

                this.ParticleAnimeEnable=true;
            }
            else if (this.ptcSys.file["_$nativeAsset"]["UVGridX"]) {
                this.SpriteMode=false;
                this.tile.x=this.ptcSys.file["_$nativeAsset"]["UVGridX"];
                this.tile.y=this.ptcSys.file["_$nativeAsset"]["UVGridY"];
                this.ParticleAnimeEnable=true;
            }

            cc.AssetLibrary.loadAsset(this.ptcSys.file["_$nativeAsset"]["spriteFrameUuid"], function (error, PPLoad) {
                if (self.ptcSys.file["_$nativeAsset"]["UVGridX"]) {
                    self.ParticlePic=PPLoad;
                }
                else {
                    self.ParticlePic=null;
                }
                if (self.ptcSys.spriteFrame !== PPLoad) {
                    self.ptcSys.spriteFrame=PPLoad;
                }
            });

            if (this.ptcSys.file["_$nativeAsset"]["frameRate"] !== undefined) {
                this.FrameRate=this.ptcSys.file["_$nativeAsset"]["frameRate"];
                this.ParticleAnimeEnable=true;
            }
        },

        updateUVs(force) {
            let assembler=this.ptcSys._assembler;
            if (!assembler) {
                return;
            }
            let buffer=assembler.getBuffer();
            let start=force ? 0 : this.ptcSys._simulator._uvFilled;
            let i, j;

            const FLOAT_PER_PARTICLE=4 * assembler._vfmt._bytes / 4;

            let particleCount=this.ptcSys._simulator.particles.length;
            if (!this.SpriteMode) {
                if (buffer) {
                    let vbuf=buffer._vData;
                    for (i=start; i<particleCount; i ++) {
                        let lastP=this.ptcSys._simulator.particles[i];
                        //lastP scale
                        this.len=this.tile.x * this.tile.y;

                        if (lastP.frame === undefined || isNaN(lastP.frame)) {
                            lastP.frame=Math.floor(Math.random() * this.len);
                        }

                        let gx=1.0 / this.tile.x;
                        let gy=1.0 / this.tile.y;
                        let UVX=[];
                        let UVY=[];
                        for (j=0; j<this.len; j ++) {
                            UVX[j]=j % this.tile.x;
                            UVY[j]=Math.floor(j / this.tile.x);
                        }
                        let uvL=UVX[lastP.frame] * gx;
                        let uvR=(UVX[lastP.frame] + 1) * gx;
                        let uvU=UVY[lastP.frame] * gy;
                        let uvD=(UVY[lastP.frame] + 1) * gy;
                        lastP.frame ++;
                        lastP.frame=lastP.frame % this.len;
                        let offset=i * FLOAT_PER_PARTICLE;
                        vbuf[offset + 2]=uvL;
                        vbuf[offset + 3]=uvD;
                        vbuf[offset + 7]=uvR;
                        vbuf[offset + 8]=uvD;
                        vbuf[offset + 12]=uvL;
                        vbuf[offset + 13]=uvU;
                        vbuf[offset + 17]=uvR;
                        vbuf[offset + 18]=uvU;
                    }
                }
                else {
                    for (i=start; i<particleCount; i ++) {
                        let lastP=this.ptcSys._simulator.particles[i];
                        this.len=this.tile.x * this.tile.y;
                        if (lastP.frame === undefined || isNaN(lastP.frame)) {
                            lastP.frame=Math.floor(Math.random() * this.len);
                        }
                        let gx=1.0 / this.tile.x;
                        let gy=1.0 / this.tile.y;
                        let UVX=[];
                        let UVY=[];
                        for (j=0; j<this.len; j ++) {
                            UVX[j]=j % this.tile.x;
                            UVY[j]=Math.floor(j / this.tile.x);
                        }
                        let uvL=UVX[lastP.frame] * gx;
                        let uvU=UVY[lastP.frame] * gy;
                        lastP.frame ++;
                        lastP.frame=lastP.frame % this.len;
                        let offset=i * FLOAT_PER_PARTICLE;
                        vbuf[offset + 2]=uvL;
                        vbuf[offset + 3]=uvU;
                        vbuf[offset + 7]=uvL;
                        vbuf[offset + 8]=uvU;
                        vbuf[offset + 12]=uvL;
                        vbuf[offset + 13]=uvU;
                        vbuf[offset + 17]=uvL;
                        vbuf[offset + 18]=uvU;
                    }
                }
            }
            else {
                this.len=this.ParticleFrame.length;
                if (buffer && this.len>0) {
                    for (i=start; i<particleCount; i ++) {
                        let lastP=this.ptcSys._simulator.particles[i];
                        if (lastP.frame === undefined || isNaN(lastP.frame)) {
                            lastP.frame=Math.floor(Math.random() * this.len);
                        }
                        lastP.frame ++;
                        lastP.frame=lastP.frame % this.len;
                        let uv=this.ParticleFrame[lastP.frame].uv;
                        let offset=i * FLOAT_PER_PARTICLE;
                        vbuf[offset + 2]=uv[0];
                        vbuf[offset + 3]=uv[1];
                        vbuf[offset + 7]=uv[2];
                        vbuf[offset + 8]=uv[3];
                        vbuf[offset + 12]=uv[4];
                        vbuf[offset + 13]=uv[5];
                        vbuf[offset + 17]=uv[6];
                        vbuf[offset + 18]=uv[7];
                    }
                }
            }
        },

        findNumber(str, start=0) {
            let i, j, k, chr2, str2;

            for (i=0; i<str.length; i ++) {
                let chr=str.charAt(i);
                if (!isNaN(chr)) {
                    for (j=i; j<str.length; j ++) {
                        chr2=str.charAt(j);
                        if (isNaN(chr2)) {
                            break;
                        }
                    }
                    k=j;
                    if (start === 0) {
                        str2="";
                        for (j=i; j<k; j ++) {
                            str2+=str[j];
                        }
                        return parseInt(str2);
                    }
                    i=j;
                    start --;
                }
            }
            return null;
        },

        removeThis() {
            this.destroy();
        },

        onDestroy() {
            this.ptcSys.Animation=undefined;
            this.ptcSys=undefined;
        },

        editor : {
            executeInEditMode : true
        }
    });
}
else {
    cc.Class({
        extends : cc.Component,

        properties : {
            SpriteMode : false,
            ParticlePic : {
                type : cc.SpriteFrame,
                default : null
            },
            ParticleFrame : {
                type : cc.SpriteFrame,
                default : []
            },
            tile : {
                default : cc.v2(1, 1),
            },
            len : {
                type : cc.Integer,
                default : 0,
            },
            ptcSys : {
                type : cc.ParticleSystem,
                default : null,
            },
            FrameRate : {
                type : cc.Float,
                default : 0.05
            },
            Frametimer : {
                type : cc.Float,
                default : 0,
            },
            firstFrameCount : 0,
        },

        start() {
            this.ptcSys=this.node.getComponent(cc.ParticleSystem);
            //使這個與粒子系統的重設功能進行聯動，當粒子系統重設，這邊也要跟著清除
            //直接把這個額外功能塞到粒子系統裡面
            if (this.ptcSys) {
                if (!this.ptcSys.Animation) {
                    this.ptcSys.Animation=this;
                }
                if (this.ptcSys.file) {
                    if (this.ptcSys.file) {       //拉上粒子設定檔的時候自動套用設定檔資訊
                        this.onRestore();
                    }
                }
            }
            else {
                this.destroy();
            }
            this.firstFrameCount=0;

            this.assembler=this.ptcSys._assembler;
            if (this.assembler) {
                //偷buffer
                this.buffer=this.assembler.getBuffer();
            }

            //清理顯示圖片，避免每個粒子一開始的閃圖
            //this.ptcSys.spriteFrame=null;
        },

        update(dt) {
            if (this.ptcSys._simulator.particles == null) {
                return;
            }
            if (this.FrameRate !== 0) {
                this.Frametimer=this.Frametimer + dt;
            }
            if (!this.ptcSys._stopped && this.Frametimer>this.FrameRate) {
                while (this.FrameRate !== 0 && this.Frametimer>this.FrameRate) {
                    this.Frametimer-=this.FrameRate;
                }
                let Plen=this.ptcSys._simulator.particles.length;
                if (Plen>0) {
                    let lastP=this.ptcSys._simulator.particles[Plen - 1];
                    if (lastP.frame === undefined) {
                        lastP.frame=Math.floor(Math.random() * this.len);
                    }
                }
                this.updateUVs(true);
            }
        },

        updateUVs(force) {
            if (!this.assembler) {
                return;
            }
            let start=force ? 0 : this.ptcSys._simulator._uvFilled;
            let i, j;

            const FLOAT_PER_PARTICLE=4 * this.assembler._vfmt._bytes / 4;
            let vbuf=this.buffer._vData;

            let particleCount=this.ptcSys._simulator.particles.length;
            if (!this.SpriteMode) {
                if (this.buffer) {
                    for (i=start; i<particleCount; i ++) {
                        let lastP=this.ptcSys._simulator.particles[i];
                        this.len=this.tile.x * this.tile.y;
                        if (lastP.frame === undefined || isNaN(lastP.frame)) {
                            lastP.frame=Math.floor(Math.random() * this.len);
                        }
                        let gx=1.0 / this.tile.x;
                        let gy=1.0 / this.tile.y;
                        let UVX=[];
                        let UVY=[];
                        for (j=0; j<this.len; j ++) {
                            UVX[j]=j % this.tile.x;
                            UVY[j]=Math.floor(j / this.tile.x);
                        }
                        let uvL=UVX[lastP.frame] * gx;
                        let uvR=(UVX[lastP.frame] + 1) * gx;
                        let uvU=UVY[lastP.frame] * gy;
                        let uvD=(UVY[lastP.frame] + 1) * gy;
                        lastP.frame ++;
                        lastP.frame=lastP.frame % this.len;
                        let offset=i * FLOAT_PER_PARTICLE;
                        vbuf[offset + 2]=uvL;
                        vbuf[offset + 3]=uvD;
                        vbuf[offset + 7]=uvR;
                        vbuf[offset + 8]=uvD;
                        vbuf[offset + 12]=uvL;
                        vbuf[offset + 13]=uvU;
                        vbuf[offset + 17]=uvR;
                        vbuf[offset + 18]=uvU;
                        lastP.wasLoad=true;
                    }
                }
            }
            else {
                this.len=this.ParticleFrame.length;
                if (buffer && this.len>0) {
                    for (i=start; i<particleCount; i ++) {
                        let lastP=this.ptcSys._simulator.particles[i];
                        if (lastP.frame === undefined || isNaN(lastP.frame)) {
                            lastP.frame=Math.floor(Math.random() * this.len);
                        }
                        lastP.frame ++;
                        lastP.frame=lastP.frame % this.len;
                        let uv=this.ParticleFrame[lastP.frame].uv;
                        let offset=i * FLOAT_PER_PARTICLE;
                        vbuf[offset + 2]=uv[0];
                        vbuf[offset + 3]=uv[1];
                        vbuf[offset + 7]=uv[2];
                        vbuf[offset + 8]=uv[3];
                        vbuf[offset + 12]=uv[4];
                        vbuf[offset + 13]=uv[5];
                        vbuf[offset + 17]=uv[6];
                        vbuf[offset + 18]=uv[7];
                    }
                }
            }
        },

        removeThis() {
            this.destroy();
        },

        onDestroy() {
            this.ptcSys.Animation=undefined;
            this.ptcSys=undefined;
        },

        editor : {
            executeInEditMode : true
        }
    });
}




