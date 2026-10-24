let path=require('fire-path');


function json2xml(o) {
    var toXml=function (v, name, ind) {
        let xml="<key>" + name + "</key>\n";
        //let tps = 
        if (! isNaN(v)) {
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
    'outputAnim' :function (event, JPath, TPath) {
        if(document.getElementsByClassName("fa fa-database")[0].outerHTML != "<i class=\"fa fa-database\" state=\"idle\"></i>"){
            cc.log("導入的資訊仍在轉換中，請等待左下方橘色的database圖示，由橘色變回灰色再進行下一步。");
        }else{
            cc.log("導入的資訊將開始轉換，請等待左下方橘色的database圖示，由橘色變回灰色再進行下一步。");
            // this.rechParticle(TPath);//改到rechJson之後
            this.rechTexture(JPath, TPath);   
        }
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
                textureList[result.url]=result.uuid;
                self.rechTextureMeta(result.uuid);
            });

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
                    var ext, filename;
                    if (asset && asset.json["type"] == "cc.AnimationClip") {
                        filename=result.url.replace(".json", ".anim");
                        self.outputAni(asset, sendList, filename, self);
                        Editor.assetdb.delete(result.url);
                    }

                    if (asset && asset.json["type"] == "cc.Material") {
                        filename=result.url.replace(".json", ".mtl");
                        self.outputMtl(asset, sendList, filename, self);
                        Editor.assetdb.delete(result.url);
                    }
                    //Particle3D
                    // if (asset && asset.json["type"] == "AZ_ParticleList") {
                    //     self.setParticles(asset.json);
                    // }
                });
            });
            // cc.log("state:",document.getElementsByClassName("fa fa-database")[0].outerHTML == "<i class=\"fa fa-database\" state=\"idle\"></i>");
        });

        //cc.ParticleAsset 改到這
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

                        //填入uuid，新增支援新舊版本
                        var getUUID = textureList[asset['_$nativeAsset']['spriteFrameName']];
                        cc.log("result=",result.path);
                        if(!getUUID){
                            var dPath = self.relativePath(result.url, asset['_$nativeAsset']['spriteFrameName']);
                            getUUID = Editor.assetdb.remote.urlToUuid(dPath);
                            // cc.log("dPath:",dPath);
                            // cc.log("getUUID:",getUUID);
                        }
                        asset['_$nativeAsset']['spriteFrameUuid']=getUUID;//填入正確的UUID   
                        //刪除暫用的spriteFrameName
                        delete asset['_$nativeAsset']['spriteFrameName'];
                        //寫回檔案
                        if (Editor.assetdb.remote.exists(result.url)) {
                            Editor.assetdb.remote.saveExists(result.url, json2xml(asset._nativeAsset, true));
                        }
                        else {
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
            if (override || ! (i in des)) {
                des[i]=src[i];
            }
        }
        return des;
    },

    textureNameToUUID(node, textureList, path) {
        if (node instanceof Array) {
            var len=node.length;
            for (var i=0; i<len; i ++) {
                this.textureNameToUUID(node[i], textureList, path);
            }
        }
        else {

            for (var prop in node) {
                var temp=node[prop];
                if (temp.constructor == "test".constructor) {
                    if (prop == "_fakename") {
                        var getUUID = textureList[node["_fakename"]];
                        if(!getUUID){
                            var dPath = this.relativePath(path, node["_fakename"]);
                            // cc.log("node :",node);
                            // cc.log("dPath:",dPath);
                            //dPath
                            getUUID = Editor.assetdb.remote.urlToUuid(dPath);
                        }
                        node["__uuid__"]=getUUID;//填入正確的UUID   
                        delete node["_fakename"];
                    }
                } else {
                    this.textureNameToUUID(temp, textureList, path);
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
        }
        else {
            for (let prop in node) {
                let temp=node[prop];
                if (temp && temp.constructor !== "test".constructor) {
                    this.colorTypeMissing(temp);
                }
            }
        }

    },


    outputMtl(MtlJson, textureList, ipath, caller) {
        var temp={};
        temp["__type__"]="" + MtlJson.json["type"];
        delete  MtlJson.json["type"];
        var test=caller.merge({}, [temp, MtlJson.json]);
        delete test["0"];
        delete test["1"];

        var cps=test["_techniqueData"]["0"]["props"]["mainTexture"]["path"];
        var testName=caller.relativePath(ipath, cps);
        var uuid=Editor.assetdb.remote.urlToUuid(testName);


        test["_techniqueData"]["0"]["props"]["mainTexture"]["__uuid__"]=uuid;
        delete test["_techniqueData"]["0"]["props"]["mainTexture"]["path"];

        test["_effectAsset"]["__uuid__"]=test["_effectAsset"]["uuid"];
        delete test["_effectAsset"]["uuid"];
        // cc.log("x:",Editor.assetdb.remote.urlToUuid("db://internal/resources/materials/builtin-3d-particle.mtl"));


        MtlJson.json=test;
        var textValue=JSON.stringify(MtlJson.json);

        if (Editor.assetdb.remote.exists(ipath)) {
            Editor.assetdb.remote.saveExists(ipath, textValue);
        }
        else {
            Editor.assetdb.remote.create(ipath, textValue);
        }
    },

    setParticles(list){
        var tmpnod;
        var check = true;
        var name;
        var self = this;
        for (name in list) {
            if(name !== "type")
            {
                tmpnod = cc.find(name);
                if(!tmpnod){
                    check = false;
                    cc.log("not this scene, there's no \""+name+"\"");
                    return;
                }
            }
        }

        if(check){
            var psdatas = [];
            for (var name in list) {
                if(name !== "type")
                {
                    tmpnod = cc.find(name);
                    var ps = tmpnod.getComponent(cc.ParticleSystem3D)||tmpnod.addComponent(cc.ParticleSystem3D);
                    var turl = "db://assets/resources/"+list[name];
                    var psdata = {};
                    psdata.name = ""+name;
                    psdata.uuid = ""+Editor.assetdb.remote.urlToUuid(turl);
                    psdata.url = ""+turl;
                    psdata.destPath = '';
                    psdata.path = '';
                    psdata.hidden=false;
                    psdata.isSubAsset=false;
                    psdata.readonly=false;
                    psdata.type='json';
                    psdata.ps = ps;
                    psdatas.push(psdata);

                }
            }

            psdatas.forEach(function (psdata, index) {
                cc.AssetLibrary.loadAsset(psdata.uuid, function (error, asset){
                    // 讀取粒子設定檔，已自動被轉成JSON，檢查是否需要轉uuid
                    // psdata.json = asset.json;
                    self.setParticle(psdata.ps, asset["json"]);
                });
            });


        }
    },

    setParticle(ps,d){

        if(d==undefined)
        {
            cc.error("data load error");
            return;
        }
        //cc.log(Window.Burst)

        if (!Window.Burst && ps["bursts"][0]) {
            this.Burst=ps["bursts"][0].__proto__;
            //this.Burst
            if(!this.Burst.time){
                this.Burst.constructor();
            }
        }

        var etest=false;
        ps["duration"]=d["duration"];
        ps["_capacity"]=d["_capacity"];
        ps["loop"]=d["loop"];

        ps["duration"]=d["duration"];
        ps["_capacity"]=d["_capacity"];
        ps["loop"]=d["loop"];
        ps["playOnAwake"]=d["playOnAwake"];
        ps["_prewarm"]=d["_prewarm"];
        ps["_simulationSpace"]=d["_simulationSpace"];
        ps["simulationSpeed"]=d["simulationSpeed"];
        ps["startDelay"]["mode"]=d["startDelay"]["mode"];
        this.converOverTime(ps["startDelay"], d["startDelay"]);
        this.converOverTime(ps["startLifetime"], d["startLifetime"]);
        this.converOverTime(ps["startColor"], d["startColor"]);
        ps["scaleSpace"]=d["scaleSpace"];
        this.converOverTime(ps["startSize"], d["startSize"]);
        this.converOverTime(ps["startSpeed"], d["startSpeed"]);
        this.converOverTime(ps["startRotation"], d["startRotation"]);
        this.converOverTime(ps["gravityModifier"], d["gravityModifier"]);
        this.converOverTime(ps["rateOverTime"], d["rateOverTime"]);
        this.converOverTime(ps["rateOverDistance"], d["rateOverDistance"]);
        if(this.Burst)
        {
            l=d["bursts"]?d["bursts"].length:0;
            ps["bursts"]=[];
            for (i=0; i<l; i ++) {
                let lburst                  = new this.Burst.constructor();
                lburst.time                 = d["bursts"][i]["_time"];
                lburst.repeatCount          = d["bursts"][i]["_repeatCount"];
                lburst["minCount"]          = d["bursts"][i]["minCount"];
                lburst["maxCount"]          = d["bursts"][i]["maxCount"];
                lburst["repeatInterval"]    = d["bursts"][i]["repeatInterval"];
                lburst["count"]["mode"]     = 0;
                lburst["count"]["constant"] = 0;
                ps.addBurst(lburst);
            }
        }else{
            l=d["bursts"]?d["bursts"].length:0;
            cc.log(window.url)
            if(l>0){
                ps.addBurst({});
            }
        }
        //_mesh

        cc.AssetLibrary.loadAsset(Editor.assetdb.remote.urlToUuid("db://internal/model/primitives.fbx/quad.mesh"), function (error, asset) {
            if(asset){
                ps["_mesh"]=asset; 
            }
        });

        //慎用，這邊不是比較前後數值，而是當後面的值不為"undefined"、"null"、"false"時會往下進行，並且把數值往前面存 example :if(x = d) 同等於 x = d;之後 if(x)
        if (ps["shapeModule"]["enable"]=d["shapeModule"]["enable"]) {
            ps["shapeModule"]["_shapeType"]=d["shapeModule"]["_shapeType"];
            ps["shapeModule"]["radius"]=d["shapeModule"]["radius"];
            ps["shapeModule"]["alignToDirection"]=d["shapeModule"]["alignToDirection"];
            ps["shapeModule"]["randomDirectionAmount"]=d["shapeModule"]["randomDirectionAmount"];
            ps["shapeModule"]["sphericalDirectionAmount"]=d["shapeModule"]["sphericalDirectionAmount"];
            ps["shapeModule"]["emitFrom"]=d["shapeModule"]["emitFrom"];
        }
        if (ps["colorOverLifetimeModule"]["enable"]=d["colorOverLifetimeModule"]["enable"]) {
            this.converOverTime(ps["colorOverLifetimeModule"]["color"], d["colorOverLifetimeModule"]["color"]);
        }
        if (ps["sizeOvertimeModule"]["enable"]=d["sizeOvertimeModule"]["enable"]) {
            ps["sizeOvertimeModule"]["separateAxes"]=d["sizeOvertimeModule"]["separateAxes"];
            this.converOverTime(ps["sizeOvertimeModule"]["size"], d["sizeOvertimeModule"]["size"]);
        }
        if (ps["velocityOvertimeModule"]["enable"]=d["velocityOvertimeModule"]["enable"]) {
            ps["velocityOvertimeModule"]["space"]=d["velocityOvertimeModule"]["space"];
            this.converOverTime(ps["velocityOvertimeModule"]["x"], d["velocityOvertimeModule"]["x"]);
            this.converOverTime(ps["velocityOvertimeModule"]["y"], d["velocityOvertimeModule"]["y"]);
            this.converOverTime(ps["velocityOvertimeModule"]["z"], d["velocityOvertimeModule"]["z"]);
        }
        if (ps["forceOvertimeModule"]["enable"]=d["forceOvertimeModule"]["enable"]) {
            ps["forceOvertimeModule"]["space"]=d["forceOvertimeModule"]["space"];
            this.converOverTime(ps["forceOvertimeModule"]["x"], d["forceOvertimeModule"]["x"]);
            this.converOverTime(ps["forceOvertimeModule"]["y"], d["forceOvertimeModule"]["y"]);
            this.converOverTime(ps["forceOvertimeModule"]["z"], d["forceOvertimeModule"]["z"], "forceOvertimeModule");
        }
        if (ps["limitVelocityOvertimeModule"]["enable"]=d["limitVelocityOvertimeModule"]["enable"]) {
            ps["limitVelocityOvertimeModule"]["space"]=d["limitVelocityOvertimeModule"]["space"];
            ps["limitVelocityOvertimeModule"]["separateAxes"]=d["limitVelocityOvertimeModule"]["separateAxes"];
            this.converOverTime(ps["limitVelocityOvertimeModule"]["limit"], d["limitVelocityOvertimeModule"]["limit"]);
            this.converOverTime(ps["limitVelocityOvertimeModule"]["limitX"], d["limitVelocityOvertimeModule"]["limitX"]);
            this.converOverTime(ps["limitVelocityOvertimeModule"]["limitY"], d["limitVelocityOvertimeModule"]["limitY"]);
            this.converOverTime(ps["limitVelocityOvertimeModule"]["limitZ"], d["limitVelocityOvertimeModule"]["limitZ"]);
            ps["limitVelocityOvertimeModule"]["dampen"]=d["limitVelocityOvertimeModule"]["dampen"];
        }
        if (ps["rotationOvertimeModule"]["enable"]=d["rotationOvertimeModule"]["enable"]) {
            ps["rotationOvertimeModule"]["_separateAxes"]=d["rotationOvertimeModule"]["_separateAxes"];
            this.converOverTime(ps["rotationOvertimeModule"]["x"], d["rotationOvertimeModule"]["x"]);
            this.converOverTime(ps["rotationOvertimeModule"]["y"], d["rotationOvertimeModule"]["y"]);
            this.converOverTime(ps["rotationOvertimeModule"]["z"], d["rotationOvertimeModule"]["z"]);
        }
        if (ps["textureAnimationModule"]["_enable"]=d["textureAnimationModule"]["_enable"]) {
            ps["textureAnimationModule"]["numTilesX"]=d["textureAnimationModule"]["numTilesX"];
            ps["textureAnimationModule"]["numTilesY"]=d["textureAnimationModule"]["numTilesY"];
            this.converOverTime(ps["textureAnimationModule"]["frameOverTime"], d["textureAnimationModule"]["frameOverTime"]);
            this.converOverTime(ps["textureAnimationModule"]["startFrame"], d["textureAnimationModule"]["startFrame"]);
            ps["textureAnimationModule"]["cycleCount"]=d["textureAnimationModule"]["cycleCount"];
            if(d["textureAnimationModule"]["_flipU"]["constant"])
                ps["textureAnimationModule"]["_flipU"]=d["textureAnimationModule"]["_flipU"]["constant"];
            if(d["textureAnimationModule"]["_flipV"]["constant"])
                ps["textureAnimationModule"]["_flipV"]=d["textureAnimationModule"]["_flipV"]["constant"];

            ps["textureAnimationModule"]["_uvChannelMask"]=d["textureAnimationModule"]["_uvChannelMask"];
        }
        if (d["trailModule"]["_enable"]) {
            this.converOverTime(ps["trailModule"]["lifeTime"], d["trailModule"]["lifeTime"]);
            ps["trailModule"]["_minParticleDistance"]=d["trailModule"]["_minParticleDistance"];
            ps["trailModule"]["_space"]=d["trailModule"]["_space"];
            ps["trailModule"]["existWithParticles"]=d["trailModule"]["existWithParticles"];
            ps["trailModule"]["textureMode"]=d["trailModule"]["textureMode"];
            ps["trailModule"]["widthFromParticle"]=d["trailModule"]["widthFromParticle"];
            ps["trailModule"]["colorFromParticle"]=d["trailModule"]["colorFromParticle"];
            this.converOverTime(ps["trailModule"]["lifeTime"], d["trailModule"]["lifeTime"]);
            this.converOverTime(ps["trailModule"]["colorOverTrail"], d["trailModule"]["colorOverTrail"]);
            this.converOverTime(ps["trailModule"]["colorOvertime"], d["trailModule"]["colorOvertime"]);
            this.converOverTime(ps["trailModule"]["widthRatio"], d["trailModule"]["widthRatio"]);
            ps["trailModule"].enable=true;
        }   

        ps["_renderMode"]=d["_renderMode"];
        ps["_velocityScale"]=d["_velocityScale"];
        ps["_lengthScale"]=d["_lengthScale"];
        l = d["materialPath"].length;
        for (i=0; i<l; i ++) {
            if(d["materialPath"][i]=="null"||d["materialPath"][i]=="Default" )
            {
                continue;
            }
            var omp = d["materialPath"][i];
            this.loadMtl(ps,omp,i);
        }

        this.tempJson=this.particleJson;
        this.particleJson=null;
    },


    blurryPathLoad(path){
        path = path.replace("mat","mtl");
        var pathArr = path.split("/");
        var cmp = "db://assets/resources/";
        var i,j,l = pathArr.length;
        var tmp;
        for(i=l-1;i>=0;i--){
            tmp = "";
            for(j=i;j<l;j++){
                tmp+=pathArr[j]+"/";
            }
            tmp = cmp+tmp;
            tmp = tmp.substr(0,tmp.length-1);
            tmp = Editor.assetdb.remote.urlToUuid(tmp);
            if(tmp)
            {
                return tmp;
            }
        }
    },

    loadMtl(jobj,omp,i){
        var data={};
        data.uuid = this.blurryPathLoad(omp);
        data.omp = omp;
        data.i = i;
        cc.AssetLibrary.loadAsset(data.uuid, function (error, asset) {
            if (asset) {
                if(data.i == 0){
                    jobj.particleMaterial = asset;
                }
                if(data.i == 1){
                    jobj.trailMaterial = asset;
                }
            }
        });
    },

    converOverTime(odata, pdata) {
        if(!pdata)return;
        if (odata["gradient"]){
            this.converGradientRange(odata, pdata);
        }else{
            this.converCurveRange(odata, pdata);
        }
    },

    converCurveRange(odata, pdata) {
        var i, l;
        var a = odata["mode"];
        odata["mode"]=pdata["mode"];
        switch (pdata["mode"]) {
            case 0:
            odata["constant"]=pdata["constant"];
            break;
            case 1:
            l=pdata["curve"]["_keyFrames"].length;
            if (pdata["curve"]["preWrapMode"] !== undefined)
                odata["curve"]["preWrapMode"]=pdata["curve"]["preWrapMode"];
            else
                odata["curve"]["preWrapMode"]="undefined";

            if (pdata["curve"]["postWrapMode"] !== undefined)
                odata["curve"]["postWrapMode"]=pdata["curve"]["postWrapMode"];
            else
                odata["curve"]["postWrapMode"]="undefined";



            for (i=0; i<l; i ++) {
                odata["curve"]["_keyFrames"][i]=new cc.Keyframe(0, 1, 0, 0);
                odata["curve"]["_keyFrames"][i]["time"]=pdata["curve"]["_keyFrames"][i]["time"];
                odata["curve"]["_keyFrames"][i]["value"]=pdata["curve"]["_keyFrames"][i]["value"];
                odata["curve"]["_keyFrames"][i]["inTangent"]=pdata["curve"]["_keyFrames"][i]["inTangent"];
                odata["curve"]["_keyFrames"][i]["outTangent"]=pdata["curve"]["_keyFrames"][i]["outTangent"];
            }
            break;
            case 2:
            l=pdata["curveMin"]["_keyFrames"].length;
            if (pdata["curveMin"]["preWrapMode"] !== undefined)
                odata["curveMin"]["preWrapMode"]=pdata["curveMin"]["preWrapMode"];
            else
                odata["curveMin"]["preWrapMode"]="undefined";

            if (pdata["curveMin"]["postWrapMode"] !== undefined)
                odata["curveMin"]["postWrapMode"]=pdata["curveMin"]["postWrapMode"];
            else
                odata["curveMin"]["postWrapMode"]="undefined";

            for (i=0; i<l; i ++) {
                odata["curveMin"]["_keyFrames"][i]=new cc.Keyframe(
                    pdata["curveMin"]["_keyFrames"][i]["time"],
                    pdata["curveMin"]["_keyFrames"][i]["value"],
                    pdata["curveMin"]["_keyFrames"][i]["inTangent"],
                    pdata["curveMin"]["_keyFrames"][i]["outTangent"]
                    );
            }
            l=pdata["curveMax"]["_keyFrames"].length;
            if (pdata["curveMax"]["preWrapMode"] !== undefined)
                odata["curveMax"]["preWrapMode"]=pdata["curveMax"]["preWrapMode"];
            else
                odata["curveMax"]["preWrapMode"]="undefined";

            if (pdata["curveMax"]["postWrapMode"] !== undefined)
                odata["curveMax"]["postWrapMode"]=pdata["curveMax"]["postWrapMode"];
            else
                odata["curveMax"]["postWrapMode"]="undefined";

            for (i=0; i<l; i ++) {
                odata["curveMax"]["_keyFrames"][i]=new cc.Keyframe(
                    pdata["curveMax"]["_keyFrames"][i]["time"],
                    pdata["curveMax"]["_keyFrames"][i]["value"],
                    pdata["curveMax"]["_keyFrames"][i]["inTangent"],
                    pdata["curveMax"]["_keyFrames"][i]["outTangent"]
                    );
            }
            break;
            case 3:
            odata["constantMin"]=pdata["constantMin"];
            odata["constantMax"]=pdata["constantMax"];
            break;
        }
    },

    converGradientRange(odata, pdata) {
        var i, l;
        odata["mode"]=pdata["mode"];
        switch (pdata["mode"]) {
            case 0://Color
            odata["color"]=new cc.color(
                pdata["color"]["r"],
                pdata["color"]["g"],
                pdata["color"]["b"],
                pdata["color"]["a"]
                );
            break;
            case 1://Gradient
            l=pdata["gradient"]["colorKeys"].length;
            odata["gradient"]["colorKeys"]=new Array(l);
            for (i=0; i<l; i ++) {
                odata["gradient"]["colorKeys"][i]=new cc.ColorKey();
                odata["gradient"]["colorKeys"][i]["color"]=new cc.color(
                    pdata["gradient"]["colorKeys"][i]["color"]["r"],
                    pdata["gradient"]["colorKeys"][i]["color"]["g"],
                    pdata["gradient"]["colorKeys"][i]["color"]["b"],
                    pdata["gradient"]["colorKeys"][i]["color"]["a"]
                    );
                odata["gradient"]["colorKeys"][i]["time"]=pdata["gradient"]["colorKeys"][i]["time"];
            }
            l=pdata["gradient"]["alphaKeys"].length;
            for (i=0; i<l; i ++) {
                odata["gradient"]["alphaKeys"][i]=new cc.AlphaKey();
                odata["gradient"]["alphaKeys"][i]["alpha"]=pdata["gradient"]["alphaKeys"][i]["alpha"];
                odata["gradient"]["alphaKeys"][i]["time"]=pdata["gradient"]["alphaKeys"][i]["time"];
            }
            odata["gradient"]["mode"]=pdata["gradient"]["mode"];
            break;
            case 2://two color
            odata["colorMin"]=new cc.color(
                pdata["colorMin"]["r"],
                pdata["colorMin"]["g"],
                pdata["colorMin"]["b"],
                pdata["colorMin"]["a"]
                );
            odata["colorMax"]=new cc.color(
                pdata["colorMax"]["r"],
                pdata["colorMax"]["g"],
                pdata["colorMax"]["b"],
                pdata["colorMax"]["a"]
                );
            break;
            case 3://two gradient
            l=pdata["gradientMin"]["colorKeys"].length;
            odata["gradientMin"]["colorKeys"]=new Array(l);
            for (i=0; i<l; i ++) {
                odata["gradientMin"]["colorKeys"][i]=new cc.ColorKey();
                odata["gradientMin"]["colorKeys"][i]["color"]=new cc.color(
                    pdata["gradientMin"]["colorKeys"][i]["color"]["r"],
                    pdata["gradientMin"]["colorKeys"][i]["color"]["g"],
                    pdata["gradientMin"]["colorKeys"][i]["color"]["b"],
                    pdata["gradientMin"]["colorKeys"][i]["color"]["a"]
                    );
                odata["gradientMin"]["colorKeys"][i]["time"]=pdata["gradientMin"]["colorKeys"][i]["time"];
            }
            l=pdata["gradientMin"]["alphaKeys"].length;
            for (i=0; i<l; i ++) {
                odata["gradientMin"]["alphaKeys"][i]=new cc.AlphaKey();
                odata["gradientMin"]["alphaKeys"][i]["alpha"]=pdata["gradientMin"]["alphaKeys"][i]["alpha"];
                odata["gradientMin"]["alphaKeys"][i]["time"]=pdata["gradientMin"]["alphaKeys"][i]["time"];
            }
            odata["gradientMin"]["mode"]=pdata["gradientMin"]["mode"];


            l=pdata["gradientMax"]["colorKeys"].length;
            odata["gradientMax"]["colorKeys"]=new Array(l);
            for (i=0; i<l; i ++) {
                odata["gradientMax"]["colorKeys"][i]=new cc.ColorKey();
                odata["gradientMax"]["colorKeys"][i]["color"]=new cc.color(
                    pdata["gradientMax"]["colorKeys"][i]["color"]["r"],
                    pdata["gradientMax"]["colorKeys"][i]["color"]["g"],
                    pdata["gradientMax"]["colorKeys"][i]["color"]["b"],
                    pdata["gradientMax"]["colorKeys"][i]["color"]["a"]
                    );
                odata["gradientMax"]["colorKeys"][i]["time"]=pdata["gradientMax"]["colorKeys"][i]["time"];
            }
            l=pdata["gradientMax"]["alphaKeys"].length;
            for (i=0; i<l; i ++) {
                odata["gradientMax"]["alphaKeys"][i]=new cc.AlphaKey();
                odata["gradientMax"]["alphaKeys"][i]["alpha"]=pdata["gradientMax"]["alphaKeys"][i]["alpha"];
                odata["gradientMax"]["alphaKeys"][i]["time"]=pdata["gradientMax"]["alphaKeys"][i]["time"];
            }
            odata["gradientMax"]["mode"]=pdata["gradientMax"]["mode"];
            break;
        }
    },

    outputAni(AnimJson, textureList, path, caller) {
        var temp={};
        delete  AnimJson.json["type"];
        temp["__type__"]="cc.AnimationClip";
        var test=caller.merge({}, [temp, AnimJson.json]);
        delete test["0"];
        delete test["1"];
        AnimJson.json=test;

        caller.textureNameToUUID(AnimJson.json, textureList, path);

        caller.colorTypeMissing(AnimJson.json);

        var textValue=JSON.stringify(AnimJson.json);
        if (Editor.assetdb.remote.exists(path)) {
            Editor.assetdb.remote.saveExists(path, textValue);
        }
        else {
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
        cc.log("start show any!?");
        Editor.Ipc.sendToMain('animformjson:show', any);
    },

    // relativePath(載體路徑,圖片相對路徑)
    //取相對路徑對應的完整路徑回來
    //ex:載體 "db://assets/resources/Materials/123.json" 中
    //一個path屬性紀載了路徑："../UI/texiao/dizhu_15.png" 時
    //var rlPath = relativePath("db://assets/resources/Materials/123.json","../UI/texiao/dizhu_15.png");
    //rlPath中的值會是"db://assets/resources/UI/texiao/dizhu_15.png"
    //與C#產檔時的[comparePathPos(載體路徑,圖片路徑)]相對應.
    //此時獲得的路徑可以傳至 Editor.assetdb.remote.urlToUuid 獲取UUID
    relativePath(iPath, rPath) {
        var psArr=iPath.replace(/\\/g,'/').split('/');
        var ntArr=rPath.replace(/\\/g,'/').split('/');
        psArr.pop();
        while (ntArr[0] === "..") {
            ntArr.shift();
            psArr.pop();
        }
        var ret = psArr.concat(ntArr).join('/');
        return ret;
    },

    hideButton(){
        //cc.log("state:",document.getElementsByClassName("fa fa-database")[0].outerHTML == "<i class=\"fa fa-database\" state=\"idle\"></i>")
    }
};