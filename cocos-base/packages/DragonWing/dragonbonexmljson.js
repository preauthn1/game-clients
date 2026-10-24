let fs=require("fs");
//let e4xmlJsonClass = require("e4xmlJsonClass");
let parser=new DOMParser();
// var parse = require('xml-parser');

module.exports={

    "transfrome" : function (val) {
        this.Start();
    },

    Start() {
        let folder="db://assets/resources/TestData";
        let self=this;
        this.jsonArr=[];

        //get dragonbone data
        Editor.assetdb.queryAssets(folder + "/**\/*", "dragonbones-atlas", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length === 0) {
                self.loadDragonBones(folder);
                return;
            }

            self.dataLength=results.length;
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    if (err) {
                        throw error;
                    }
                    if (asset) {
                        self.jsonArr[cc.path.mainFileName(cc.path.basename(result.path))]=self.cloneNode(asset._atlasJson);
                    }

                    self.dataLength --;
                    if (self.dataLength === 0) {
                        self.loadDragonBones(folder);
                    }
                });
            });
        });
    },

    loadDragonBones(folder) {

        let self=this;
        Editor.assetdb.queryAssets(folder + "/**\/*", "dragonbones", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length === 0) {
                self.loadXML(folder);
                return;
            }

            self.dataLength=results.length;

            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    if (err) {
                        throw error;
                    }

                    self.dragonBonesAutoTweenOff(asset, result.path);

                    self.dataLength --;
                    if (self.dataLength === 0) {
                        self.loadXML(folder);
                    }
                });
            });
        });
    },

    dragonBonesAutoTweenOff(iNode, path) {
        let testData=this.cloneNode(iNode._dragonBonesJson);
        cc.log("testData :", testData);//animation
        let thisFileNeedSave=false;
        let xjString="";
        if (testData["version"] && testData["version"] === 2.3) {
            var i, l=testData["armature"].length;
            var j, ll;
            for (i=0; i<l; i ++) {
                ll=testData["armature"][i]["animation"].length;
                for (j=0; j<ll; j ++) {
                    if (testData["armature"][i]["animation"][j]["autoTween"] === 1) {
                        testData["armature"][i]["animation"][j]["autoTween"]=0;
                        thisFileNeedSave=true;
                    }
                }
            }
            path=path.replace(Editor.Project.path, "db:/").replace(/\\/g, "/");
            xjString=JSON.stringify(iNode, null, "  ");
            if (Editor.assetdb.remote.exists(path)) {
                Editor.assetdb.remote.saveExists(path, xjString);
            } else {
                Editor.assetdb.remote.create(path, xjString);
            }
        }
    },

    loadXML(folder) {
        let self=this;
        Editor.assetdb.queryAssets(folder + "/**\/*", "text", function (err, results) {
            if (err) {
                throw err;
            }
            if (results.length === 0) {
                return;
            }
            self.dataLength=results.length;
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    if (err) {
                        throw error;
                    }
                    if (asset) {
                        self.expereXMLJSON(asset, result.path);
                    }
                });
            });
        });
    },

    compareNode(A, B) {
        if (A["name"] && B["name"]) {
            return ("" + A["name"]).localeCompare(B["name"]);
        }
        return 0;
    },

    sortArmature(JData, path) {
        path=path.replace(Editor.Project.path, "db:/").replace(/\\/g, "/");
        if (JData["_dragonBonesJson"].constructor === "xxx".constructor)
            JData["_dragonBonesJson"]=JSON.parse(JData["_dragonBonesJson"]);
        let jString=JSON.stringify(JData, null, "  ");
        if (Editor.assetdb.remote.exists(path)) {
        } else {
            Editor.assetdb.remote.create(path, jString);
        }
    },

    sortJson(node) {
        if (node.sort) node.sort(this.compareNode);
        return node;
    },

    expereXMLJSON(XJData, path) {
        path=cc.path.changeExtname(path, ".json").replace(Editor.Project.path, "db:/").replace(/\\/g, "/");
        let xmldata=new DOMParser().parseFromString(XJData.text, "text/xml");
        let xJeson=xmlToJson(xmldata);

        /************* 格式順序總整理 *************/
        xJeson=this.removeAllNodeByName(xJeson, "#text");
        /**---- dragonBones ----**/
        if (xJeson["dragonBones"]) {
            this.dragonBonesName=xJeson["dragonBones"]["@attributes"]["name"];
            xJeson=this.attributesUp(xJeson);
            xJeson=xJeson["dragonBones"];
            xJeson=this.sortJson(xJeson);
            xJeson=this.cleanNodeByNameAndValue(xJeson, "x", "0");
            xJeson=this.cleanNodeByNameAndValue(xJeson, "y", "0");
            xJeson=this.cleanNodeByNameAndValue(xJeson, "z", "0");
            xJeson=this.cleanNodeByNameAndValue(xJeson, "type", "image");
            xJeson=this.mainSet(xJeson);
        }
        /**---- TextureAtlas ----**/
        if (xJeson["TextureAtlas"]) {
            this.dragonBonesName=xJeson["TextureAtlas"]["@attributes"]["name"];
            xJeson=this.attributesUp(xJeson);
            xJeson=xJeson["TextureAtlas"];
            //SubTexture
            xJeson["SubTexture"]=this.SubTextureSet(xJeson["SubTexture"]);
        }

        /************* 格式順序總整理 *************/
        let xjString=JSON.stringify(xJeson, null, "  ");
        if (Editor.assetdb.remote.exists(path)) {
            Editor.assetdb.remote.saveExists(path, xjString);
        } else {
            Editor.assetdb.remote.create(path, xjString);
        }

    },

    setJsonStringErrorType(iNode) {
        if (iNode !== undefined && iNode.constructor === "xxx".constructor)
            iNode=JSON.parse(iNode);
        return iNode;
    },

    SubTextureSet(iNode) {
        //iNode sort
        this.numeric(iNode);
        //iNode=this.sortJson(iNode);

        this.jsonArr["texture"]=this.setJsonStringErrorType(this.jsonArr["texture"]);

        let i, j, l=iNode.length;
        for (i=0; i<l; i ++) {
            let format={
                "name" : "",
                "x" : 0,
                "width" : 0,
                "y" : 0,
                "height" : 0
            };
            iNode[i]=Object.assign(format, iNode[i]);
        }

        return iNode;
    },

    numeric(iNode) {
        if (iNode === "") {
            return iNode;
        }

        if (iNode.constructor === "".constructor && !isNaN(iNode)) {
            iNode=iNode * 1;
        }

        if (iNode.constructor === [].constructor || iNode.constructor === {}.constructor) {
            for (let i in iNode) {
                if (i === "name" && iNode["name"] === "") {
                    iNode["name"]="default";
                }
                iNode[i]=this.numeric(iNode[i]);
            }
        }
        return iNode;
    },


    mainSet(iNode) {
        let format={
            "frameRate" : 0,
            "name" : "",
            "armature" : [],
            "version" : 2.3
        };

        iNode=Object.assign(format, iNode);
        this.numeric(iNode);
        iNode["version"]=iNode["version"] * 1;


        if (iNode["armature"].constructor !== [].constructor) {
            let tmp=this.cloneNode(iNode["armature"]);
            iNode["armature"]=[];
            iNode["armature"].push(tmp);
        }

        iNode["armature"]=this.sortJson(iNode["armature"]);
        let i, l=iNode["armature"].length;
        for (i=0; i<l; i ++) {
            iNode["armature"][i]=this.armSet(iNode["armature"][i]);
        }
        return iNode;
    },

    // armature
    armSet(iNode) {
        let format={
            "name" : "",
            "animation" : [],
            "bone" : [],
            "skin" : []
        };
        iNode=Object.assign(format, iNode);
        // animation 
        if (iNode["animation"].constructor !== [].constructor) {
            let tmp=iNode["animation"];
            iNode["animation"]=[];
            iNode["animation"].push(tmp);
        }

        if (iNode["animation"].constructor === [].constructor) {
            let i, l=iNode["animation"].length;
            for (i=0; i<l; i ++) {
                iNode["animation"][i]=this.armAni(iNode["animation"][i]);
            }
        }

        // bone
        if (iNode["bone"]) {
            if (iNode["bone"].constructor !== [].constructor) {
                let tmp=iNode["bone"];
                iNode["bone"]=[];
                iNode["bone"].push(tmp);
            }

            // if (iNode["bone"].constructor === [].constructor) {
            //     let i, l=iNode["bone"].length
            //     for (i=0; i<l; i ++) {
            //         iNode["bone"][i]=this.armSkn(iNode["bone"][i]);
            //     }
            // }
        }

        // skin
        if (iNode["skin"].constructor !== [].constructor) {
            let tmp=iNode["skin"];
            iNode["skin"]=[];
            iNode["skin"].push(tmp);
        }

        if (iNode["skin"].constructor === [].constructor) {
            let i, l=iNode["skin"].length;
            for (i=0; i<l; i ++) {
                iNode["skin"][i]=this.armSkn(iNode["skin"][i]);
            }
        }
        //skin


        return iNode;
    },

    // armature animation
    armAni(iNode) {
        let format={
            "timeline" : [],
            "name" : "gourd_wukon_lose",
            "scale" : 1,
            "loop" : 0,
            "fadeInTime" : 0,
            "autoTween" : 0,
            "duration" : 30,
            "tweenEasing" : null
        };
        iNode=Object.assign(format, iNode);
        if (iNode["timeline"].constructor !== [].constructor) {
            let tmp=iNode["timeline"];
            iNode["timeline"]=[];
            iNode["timeline"].push(tmp);
        }

        if (iNode["timeline"].constructor === [].constructor) {
            let i, l=iNode["timeline"].length;
            for (i=0; i<l; i ++) {
                iNode["timeline"][i]=this.aniTimeLine(iNode["timeline"][i]);
            }
        }

        if (iNode["autoTween"]) iNode["autoTween"]=0;
        iNode["tweenEasing"]=iNode["tweenEasing"] * 1;
        return iNode;
    },

    //armature skin 
    armSkn(iNode) {
        let format={
            "slot" : [],
            "name" : "default"
        };
        iNode=Object.assign(format, iNode);

        // skin
        if (iNode["slot"]) {
            if (iNode["slot"].constructor !== [].constructor) {
                let tmp=iNode["slot"];
                iNode["slot"]=[];
                iNode["slot"].push(tmp);
            }

            if (iNode["slot"].constructor === [].constructor) {
                let i, l=iNode["slot"].length;
                for (i=0; i<l; i ++) {
                    iNode["slot"][i]=this.skinSlot(iNode["slot"][i]);
                }
            }
        }

        return iNode;
    },

    //armature skin slot
    skinSlot(iNode) {
        let format={
            "name" : "default",
            "z" : 0,
            "display" : [],
            "parent" : "gourd_wukon_lose01"
        };
        iNode=Object.assign(format, iNode);
        if (iNode["display"].constructor !== [].constructor) {
            let tmp=iNode["display"];
            iNode["display"]=[];
            iNode["display"].push(tmp);
        }

        if (iNode["display"].constructor === [].constructor) {
            let i, l=iNode["display"].length;
            for (i=0; i<l; i ++) {
                iNode["display"][i]=this.slotDisp(iNode["display"][i]);
            }
        }
        return iNode;
    },

    //armature skin slot display
    slotDisp(iNode) {
        let format={
            "transform" : {},
            "name" : "",
            "type" : "image"
        };
        iNode=Object.assign(format, iNode);

        return iNode;
    },

    // armature animation timeline 
    aniTimeLine(iNode) {
        let format={
            "name" : "",
            "scale" : 1,
            "frame" : [],
            "offset" : 0
        };

        iNode=Object.assign(format, iNode);

        //this.TimeLineFrame
        //if()
        //skinSlot      
        if (iNode["frame"].constructor !== [].constructor) {
            let tmp=iNode["frame"];
            iNode["frame"]=[];
            iNode["frame"].push(tmp);
        }

        if (iNode["frame"].constructor === [].constructor) {
            let i, l=iNode["frame"].length;
            for (i=0; i<l; i ++) {
                iNode["frame"][i]=this.TimeLineFrame(iNode["frame"][i]);
            }
            // if (iNode["frame"][l - 1]) {
            //iNode["frame"][l-1]
            // cc.log("iNode[\"frame\"][l - 1]", iNode["frame"][l - 1])
            // }
        }

        return iNode;
    },

    // armature animation timeline frame
    TimeLineFrame(iNode) {
        let format={
            "z" : 0,
            "transform" : {},
            "tweenEasing" : 1,
            "duration" : 0
        };

        iNode=Object.assign(format, iNode);
        if (iNode["tweenEasing"] === 1) {
            delete iNode["tweenEasing"];
        }
        if (iNode["tweenEasing"] === "NaN") iNode["tweenEasing"]=null;
        // if (isNaN(iNode["tweenEasing"])) iNode["tweenEasing"]=null;

        // cc.log("transform", iNode["transform"]);
        // cc.log("transform", Object.keys(iNode["transform"]).length);

        if (Object.keys(iNode["transform"]).length === 0) {
            delete iNode["transform"];
            if (iNode["z"] === 0) {
                delete iNode["z"];
            }
        }

        return iNode;
    },

    // clean ============================================================

    cleanNodeByNameAndValue(node, name, value) {
        for (let k in node) {
            if (k === name && (node[k] === value || node[k].toString() === value)) {
                delete node[name];
                return this.cleanNodeByNameAndValue(node, name, value);
            } else if (node[k].constructor !== "test".constructor) {
                node[k]=this.cleanNodeByNameAndValue(node[k], name, value);
            }
        }
        return node;
    },

    removeAllNodeByName(node, name) {
        for (let k in node) {
            if (k === name) {
                delete node[name];
                return this.removeAllNodeByName(node, name);
            }
            if (node[k].constructor !== "test".constructor) {
                node[k]=this.removeAllNodeByName(node[k], name);
            }
        }
        return node;
    },

    attributesUp(node) {
        for (let k in node) {
            if (k == "@attributes") {
                let temp={};
                for (let kk in node["@attributes"]) {
                    temp[kk]=node["@attributes"][kk];
                }
                node["@attributes"]=undefined;
                delete node["@attributes"];
                Object.assign(temp, node);
                node=temp;
                continue;
            }
            if (node[k].constructor !== "test".constructor) {
                node[k]=this.attributesUp(node[k]);
            }
        }
        return node;

    },

    cloneNode(iNode) {
        if (iNode.constructor === "".constructor)
            return JSON.parse(iNode);
        return JSON.parse(JSON.stringify(iNode));
    },

};

//extend for xml to json
window.xmlToJson=function (xml) {
    // Create the return object
    var obj={};

    if (xml.nodeType === 1) {
        // element
        // do attributes
        if (xml.attributes.length>0) {
            obj["@attributes"]={};
            for (var j=0; j<xml.attributes.length; j ++) {
                var attribute=xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName]=attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) {
        // text
        obj=xml.nodeValue;
    }

    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes=[].slice.call(xml.childNodes).filter(function (node) {
        return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
        obj=[].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
        }, "");
    } else if (xml.hasChildNodes()) {
        for (var i=0; i<xml.childNodes.length; i ++) {
            var item=xml.childNodes.item(i);
            var nodeName=item.nodeName;
            if (typeof obj[nodeName] == "undefined") {
                obj[nodeName]=xmlToJson(item);
            } else {
                if (typeof obj[nodeName].push == "undefined") {
                    var old=obj[nodeName];
                    obj[nodeName]=[];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};