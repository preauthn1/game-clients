let fs             = require("fs");
let AssetsListPath = "resources/particleAssetList.Json";//file to uuid from Cocos
let nodeListPath   = "resources/ParticleList.JSON";//node to file from Unity        
let AssetsList     = null;

//顯示說明用
let blendData                                = [];
blendData[cc.macro.ZERO]                     = "[ZERO(0)]";
blendData[cc.macro.ONE]                      = "[ONE(1)]";
blendData[cc.macro.SRC_COLOR]                = "[SRC_COLOR(768)]";
blendData[cc.macro.SRC_ALPHA]                = "[SRC_ALPHA(770)]";
blendData[cc.macro.DST_COLOR]                = "[DST_COLOR(774)]";
blendData[cc.macro.DST_ALPHA]                = "[DST_ALPHA(772)]";
blendData[cc.macro.ONE_MINUS_SRC_COLOR]      = "[ONE_MINUS_SRC_COLOR(769)]";
blendData[cc.macro.ONE_MINUS_SRC_ALPHA]      = "[ONE_MINUS_SRC_ALPHA(771)]";
blendData[cc.macro.ONE_MINUS_DST_COLOR]      = "[ONE_MINUS_DST_COLOR(775)]";
blendData[cc.macro.ONE_MINUS_DST_ALPHA]      = "[ONE_MINUS_DST_ALPHA(773)]";
blendData[cc.macro.ONE_MINUS_CONSTANT_COLOR] = "[ONE_MINUS_CONSTANT_COLOR(32770)]";
blendData[cc.macro.ONE_MINUS_CONSTANT_ALPHA] = "[ONE_MINUS_CONSTANT_ALPHA(32772)]";

module.exports = {
    "fixblend"  : function (val) {
        this.fixblend();
    },
    "blendTest" : function (val) {
        this.blendTest();
    },
    // t:cc.ParticleSystem
    //t:cc.Sprite

    blendTest() {

        //Node路徑功能
        window.nodePath = function (inode) {
            if(!inode) return "[undefine]";
            let node   = inode.node || inode;
            let getTop = function (n) {
                if(n.parent) {
                    return getTop(n.parent) + "/" + n.name;
                }
                return n.name;
            };
            if(node.parent !== null && node.parent !== undefined) {
                node.path = getTop(node).replace("Game/", "");
            }
            return node.path;
        };

        cc.log("注意：這個設定建議值是經過測試後，取windows網頁與ios盡量類似的圖片效果參數");
        cc.log("注意：目前的測試參數只適用於透明底色的透明圖片，不適用於黑底不透明圖片濾色");
        cc.log("=================================================================");
        let scene = cc.director.getScene();
        //粒子渲染建議
        let list  = scene.getComponentsInChildren(cc.ParticleSystem);
        let i, l  = list.length;
        let wasT  = false;
        for (i = 0; i < l; i++) {
            if(list[i].srcBlendFactor === cc.macro.SRC_ALPHA) {
                if(list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT = true;
                    cc.log(window.nodePath(list[i].node), "\t<Particle>\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                }
            }
        }
        if(wasT) cc.log("=================================================================");
        wasT = false;
        for (i = 0; i < l; i++) {
            if(list[i].srcBlendFactor === cc.macro.DST_ALPHA) {
                if(list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT = true;
                    cc.log(window.nodePath(list[i].node), "\t<Particle>\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)]" +
                        " [ONE_MINUS_SRC_ALPHA(771)]");
                }
            }
        }
        if(wasT) cc.log("=================================================================");
        wasT = false;
        //圖片渲染建議
        list = scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v = list[key];
            if(v._srcBlendFactor === cc.macro.SRC_ALPHA) {
                if(v._dstBlendFactor === cc.macro.DST_ALPHA) {  //DST_ALPHA 半透明, ONE 也是半透明
                    wasT = true;
                    cc.log(window.nodePath(v.node), "\t<Sprite>\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                }
            }
        }
        if(wasT) cc.log("============================================================================================================");
        wasT = false;
        for (let key in list) {
            let v = list[key];
            if(v._srcBlendFactor === cc.macro.DST_ALPHA) {
                wasT = true;
                cc.log(window.nodePath(v.node), "\t<Sprite>\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [" + blendData[v._dstBlendFactor] + "(" + v._dstBlendFactor + ")]");
            }
        }
    },

    fixblend() {
        //Node路徑功能
        window.nodePath = function (inode) {
            if(!inode) return "[undefine]";
            let node   = inode.node || inode;
            let getTop = function (n) {
                if(n.parent) {
                    return getTop(n.parent) + "/" + n.name;
                }
                return n.name;
            };
            if(node.parent !== null && node.parent !== undefined) {
                node.path = getTop(node).replace("Game/", "");
            }
            return node.path;
        };

        let scene = cc.director.getScene();
        let list  = scene.getComponentsInChildren(cc.ParticleSystem);
        cc.log("注意：這個設定值是經過測試後，取windows網頁與ios盡量類似的圖片效果參數");
        cc.log("注意：目前的測試參數只適用於透明底色的透明圖片，不適用於黑底不透明圖片濾色");
        cc.log("若使用DST_ALPHA參數的粒子元件將都被修改為ONE");
        cc.log("若使用ONE_MINUS_DST_ALPHA參數的粒子元件將都被修改為ZERO");
        cc.log("=================================================================");
        //粒子渲染自動修改
        for (let key in list) {
            let v       = list[key];
            let srcSets = "";
            let dstSets = "";
            //srcBlendFactor
            //dstBlendFactor
            if(v.srcBlendFactor === cc.macro.DST_ALPHA) {
                v.srcBlendFactor = cc.macro.ONE;
                srcSets          = ", src frome DST_ALPHA to ONE";
            }
            if(v.srcBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                v.srcBlendFactor = cc.macro.ZERO;
                srcSets          = ", src frome ONE_MINUS_DST_ALPHA to ZERO";
            }
            if(v.dstBlendFactor === cc.macro.DST_ALPHA) {
                v.dstBlendFactor = cc.macro.ONE;
                dstSets          = ", src frome DST_ALPHA to ONE";
            }
            if(v.dstBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                v.dstBlendFactor = cc.macro.ZERO;
                dstSets          = ", src frome ONE_MINUS_DST_ALPHA to ZERO";
            }
            if(srcSets !== "" && dstSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Particle>\t", srcSets, dstSets);
            }
            else if(srcSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Particle>\t", srcSets);
            }
            else if(dstSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Particle>\t", dstSets);
            }
        }

        cc.log("=================================================================");
        //圖片渲染自動修改
        list = scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v       = list[key];
            let srcSets = "";
            let dstSets = "";
            if(v._srcBlendFactor === cc.macro.DST_ALPHA) {
                v._srcBlendFactor = cc.macro.ONE;
                srcSets           = ", src frome DST_ALPHA to ONE";
            }
            if(v._srcBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                v._srcBlendFactor = cc.macro.ZERO;
                srcSets           = ", src frome ONE_MINUS_DST_ALPHA to ZERO";
            }
            if(v._dstBlendFactor === cc.macro.DST_ALPHA) {
                v._dstBlendFactor = cc.macro.ONE;
                dstSets           = ", src frome DST_ALPHA to ONE";
            }
            if(v._dstBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                v._dstBlendFactor = cc.macro.ZERO;
                dstSets           = ", src frome ONE_MINUS_DST_ALPHA to ZERO";
            }
            if(srcSets !== "" && dstSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Sprite>\t", srcSets, dstSets);
            }
            else if(srcSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Sprite>\t", srcSets);
            }
            else if(dstSets !== "") {
                cc.log(window.nodePath(list[key].node), "\t<Sprite>\t", dstSets);
            }
        }
        // if (wasT) cc.log("============================================================================================================");

    },
};