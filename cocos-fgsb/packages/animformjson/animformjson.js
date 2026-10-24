let path=require('fire-path');

function json2xml(o) {
    var toXml=function (v, name, ind) {
        let xml="<key>" + name + "</key>\n";
        //let tps = 
        if (!isNaN(v)) {
            if (v.toString().indexOf('.') !== - 1) {
                xml+="<real>" + v + "</real>\n";
            } else {
                xml+="<integer>" + v + "</integer>\n";
            }
        } else {
            xml+="<string>" + v + "</string>\n";
        }
        return xml;
    }, xml="";
    for (var m in o)
        xml+=toXml(o[m], m, "");
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://example.invalid/DTDs/PropertyList-1.0.dtd\">\n<plist version=\"1.0\">\n<dict>\n"
        + xml.replace(/\t/g, "") + "</dict>\n</plist>";
}

module.exports={

    'outputAnim' : function (event, JPath, TPath) {
        this.rechParticle(TPath);
        this.rechTexture(JPath, TPath);
    },

    rechTexture(JPath, TPath) {
        let self=this;
        Editor.assetdb.queryAssets(TPath + '/**\/*', "sprite-frame", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length == 0) {
                return;
            }
            let textureList=[];
            results.forEach(function (result, index) {
                textureList[result.path.replace(/^.*[\\\/]/, '')]=result.uuid;

                self.rechTextureMeta(result.uuid);

            });

            if (Editor.assetdb.remote.exists("db://assets/resources/UUIDList.Json")) {
                Editor.assetdb.remote.saveExists("db://assets/resources/UUIDList.Json", (JSON.stringify(Object.assign({}, textureList))));
            } else {
                Editor.assetdb.remote.create("db://assets/resources/UUIDList.Json", (JSON.stringify(Object.assign({}, textureList))));
            }
            self.rechJson(JPath, textureList, self);
        });
    },
    //AssetDB
    rechTextureMeta(uuid) {
        Editor.assetdb.queryMetaInfoByUuid(uuid, function (err, info) {
            var meta=JSON.parse(info.json);
            // cc.log("load meta:", meta);
            meta["trimType"]='custom';
            meta["offsetX"]=0;
            meta["offsetY"]=0;
            meta["trimX"]=0;
            meta["trimY"]=0;
            meta["width"]=meta["rawWidth"];
            meta["height"]=meta["rawHeight"];
            Editor.assetdb.saveMeta(meta.uuid, JSON.stringify(meta), err => {
                //存完了
            });
        });
    },

    rechParticle(TPath) {
        let self=this;
        Editor.assetdb.queryAssets(TPath + '/**\/*', "particle", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length === 0) {
                return;
            }
            let particleAssetList=[];
            results.forEach(function (result, index) {
                let name=result.path.replace(/^.*[\\\/]/, '');
                particleAssetList[name]=result.uuid;
            });
            if (Editor.assetdb.remote.exists("db://assets/resources/particleAssetList.Json")) {
                Editor.assetdb.remote.saveExists("db://assets/resources/particleAssetList.Json", (JSON.stringify(Object.assign({}, particleAssetList))));
            } else {
                Editor.assetdb.remote.create("db://assets/resources/particleAssetList.Json", (JSON.stringify(Object.assign({}, particleAssetList))));
            }
        });
    },

    rechJson(folder, textureList, caller) {
        let self=caller;
        let sendList=textureList;
        Editor.assetdb.queryAssets(folder + '/**\/*', "json", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length == 0) {
                return;
            }
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    if (asset && asset.json["type"] == "cc.AnimationClip") {
                        let ext=path.extname(result.path);
                        let filename=result.url.replace(".json", ".anim");
                        self.outputAni(asset, sendList, filename, self);
                        Editor.assetdb.delete(result.url);
                    }
                });
            });
        });
        //cc.ParticleAsset
        Editor.assetdb.queryAssets(folder + '/**\/*', "particle", function (err, results) {
            if (err) {
                throw err;
            }
            let Len=results.length;
            if (Len === 0) {
                return;
            }
            var i=0;
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    //讀取粒子設定檔，已自動被轉成JSON，檢查是否需要轉uuid
                    if (asset['_$nativeAsset']['spriteFrameName'] != undefined) {
                        //填入uuid
                        asset['_$nativeAsset']['spriteFrameUuid']=textureList[asset['_$nativeAsset']['spriteFrameName']];
                        //刪除暫用的spriteFrameName
                        delete asset['_$nativeAsset']['spriteFrameName'];
                        //寫回檔案
                        if (Editor.assetdb.remote.exists(result.url)) {
                            Editor.assetdb.remote.saveExists(result.url, json2xml(asset._nativeAsset, true));
                        } else {
                            Editor.assetdb.remote.create(result.url, json2xml(asset._nativeAsset, true));
                        }
                    }

                    i ++;
                    if (i === Len) {
                        self.addExtentForParticle();
                    }
                });
            });

        });
    },

    merge(des, src, override) {
        var i;
        if (src instanceof Array) {
            for (i=0, len=src.length; i<len; i ++)
                this.merge(des, src[i], override);
        }
        for (i in src) {
            if (override || !(i in des)) {
                des[i]=src[i];
            }
        }
        return des;
    },

    textureNameToUUID(node, textureList) {
        if (node instanceof Array) {
            var len=node.length;
            for (var i=0; i<len; i ++) {
                this.textureNameToUUID(node[i], textureList);
            }
        } else {
            for (var prop in node) {
                var temp=node[prop];
                if (temp.constructor == "test".constructor) {
                    if (prop == "_fakename") {
                        node["__uuid__"]=textureList[node["_fakename"]];//填入正確的UUID   
                        delete node["_fakename"];
                    }
                } else {
                    this.textureNameToUUID(temp, textureList);
                }
            }
        }
    },

    colorTypeMissing(node) {
        if (node["color"]) {
            let len=node["color"].length;
            for (var i=0; i<len; i ++) {
                if (node["color"][i]["value"]["__type__"] === undefined) {
                    node["color"][i]["value"]["__type__"]="cc.Color";
                    let r=node["color"][i]["value"]["r"];
                    let g=node["color"][i]["value"]["g"];
                    let b=node["color"][i]["value"]["b"];
                    delete node["color"][i]["value"]["r"];
                    delete node["color"][i]["value"]["g"];
                    delete node["color"][i]["value"]["b"];
                    node["color"][i]["value"]["r"]=r;
                    node["color"][i]["value"]["g"]=g;
                    node["color"][i]["value"]["b"]=b;
                }
            }
        }
        if (node instanceof Array) {
            let len=node.length;
            for (let i=0; i<len; i ++) {
                this.colorTypeMissing(node[i]);
            }
        } else {
            for (let prop in node) {
                let temp=node[prop];
                if (temp.constructor !== "test".constructor) {
                    this.colorTypeMissing(temp);
                }
            }
        }

    },

    outputAni(AnimJson, textureList, path, caller) {
        var temp={};
        delete AnimJson.json["type"];
        temp["__type__"]="cc.AnimationClip";
        var test=caller.merge({}, [temp, AnimJson.json]);
        delete test["0"];
        delete test["1"];
        AnimJson.json=test;
        caller.textureNameToUUID(AnimJson.json, textureList);

        caller.colorTypeMissing(AnimJson.json);

        var textValue=JSON.stringify(AnimJson.json);
        if (Editor.assetdb.remote.exists(path)) {
            Editor.assetdb.remote.saveExists(path, textValue);
        } else {
            Editor.assetdb.remote.create(path, textValue);
        }
    },

    addExtentForParticle() {
        let canvas=cc.find("Canvas");
        if (canvas == null) {
            return;
        }
        let psa=canvas.getComponentsInChildren(cc.ParticleSystem);
        let i, l=psa.length;
        let tmp;
        for (i=0; i<l; i ++) {
            if (psa[i].file && psa[i].file['_$nativeAsset'] && psa[i].file['_$nativeAsset']["GObjScaleX"]) {
                psa[i].node.scaleX=psa[i].file['_$nativeAsset']["GObjScaleX"];
            }

            if (psa[i].file && psa[i].file['_$nativeAsset'] && psa[i].file['_$nativeAsset']["GObjScaleY"]) {
                psa[i].node.scaleY=psa[i].file['_$nativeAsset']["GObjScaleY"];
            }

            if (psa[i].file && psa[i].file['_$nativeAsset'] && psa[i].file['_$nativeAsset']["Sprites_0"] !== psa[i].file['_$nativeAsset']["UVGridX"]) {
                tmp=psa[i].node.getComponent("ParticleAnimation") || psa[i].node.addComponent("ParticleAnimation");
            } else {
                if (tmp=psa[i].node.getComponent("ParticleAnimation")) {
                    tmp.removeThis();
                }
            }
        }
    },

    // main.js中可以打印出完整结构
    show(any) {
        Editor.Ipc.sendToMain('animformjson:show', any);
    }
}
;
