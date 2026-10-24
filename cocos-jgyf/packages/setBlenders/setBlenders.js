let fs=require("fs");
let AssetsListPath="resources/particleAssetList.Json";//file to uuid from Cocos
let nodeListPath="resources/ParticleList.JSON";//node to file from Unity        
let AssetsList=null;

let blendData=[];
blendData[cc.macro.ZERO]="[ZERO(0)]";
blendData[cc.macro.ONE]="[ONE(1)]";
blendData[cc.macro.SRC_COLOR]="[SRC_COLOR(768)]";
blendData[cc.macro.SRC_ALPHA]="[SRC_ALPHA(770)]";
blendData[cc.macro.DST_COLOR]="[DST_COLOR(774)]";
blendData[cc.macro.DST_ALPHA]="[DST_ALPHA(772)]";
blendData[cc.macro.ONE_MINUS_SRC_COLOR]="[ONE_MINUS_SRC_COLOR(769)]";
blendData[cc.macro.ONE_MINUS_SRC_ALPHA]="[ONE_MINUS_SRC_ALPHA(771)]";
blendData[cc.macro.ONE_MINUS_DST_COLOR]="[ONE_MINUS_DST_COLOR(775)]";
blendData[cc.macro.ONE_MINUS_DST_ALPHA]="[ONE_MINUS_DST_ALPHA(773)]";
blendData[cc.macro.ONE_MINUS_CONSTANT_COLOR]="[ONE_MINUS_CONSTANT_COLOR(32770)]";
blendData[cc.macro.ONE_MINUS_CONSTANT_ALPHA]="[ONE_MINUS_CONSTANT_ALPHA(32772)]";

module.exports={
    "fixblend" : function (val) {
        this.fixblend();
    },
    "fixblend2" : function (val) {
        this.fixblend2();
    },
    "blendTest" : function (val) {
        this.blendTest();
    },
    // t:cc.ParticleSystem
    //t:cc.Sprite

    blendTest() {

        window.nodePath=function (inode) {
            if (!inode) return "[undefine]";
            let node=inode.node || inode;
            let getTop=function (n) {
                if (n.parent) {
                    return getTop(n.parent) + "/" + n.name;
                }
                return n.name;
            };
            if (node.parent !== null && node.parent !== undefined) {
                node.path=getTop(node).replace("Game/", "");
            }
            return node.path;
        };

        let scene=cc.director.getScene();
        let list=scene.getComponentsInChildren(cc.ParticleSystem);
        let i, l=list.length;
        let wasT=false;
        cc.log("============================================================================================================");
        for (i=0; i<l; i ++) {
            if (list[i].srcBlendFactor === cc.macro.SRC_ALPHA) {
                if (list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT=true;
                    cc.log(window.nodePath(list[i].node), "Particle\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                }
            }
        }
        if (wasT) cc.log("=================================================================");
        wasT=false;
        for (i=0; i<l; i ++) {
            if (list[i].srcBlendFactor === cc.macro.DST_ALPHA) {
                if (list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT=true;
                    cc.log(window.nodePath(list[i].node), "Particle\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)] [ONE_MINUS_SRC_ALPHA(771)]");
                }
            }
        }
        if (wasT) cc.log("=================================================================");
        wasT=false;
        list=scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v=list[key];
            if (v._srcBlendFactor === cc.macro.SRC_ALPHA) {
                if (v._dstBlendFactor === cc.macro.DST_ALPHA) {  //DST_ALPHA 半透明, ONE 也是半透明
                    wasT=true;
                    cc.log(window.nodePath(v.node), "Sprite\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                }
            }
        }
        if (wasT) cc.log("============================================================================================================");
        wasT=false;
        list=scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v=list[key];
            if (v._srcBlendFactor === cc.macro.DST_ALPHA) {
                wasT=true;
                cc.log(window.nodePath(v.node), "Sprite\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [" + blendData[v._dstBlendFactor] + "(" + v._dstBlendFactor + ")]");
            }
        }
        cc.log("============================================================================================================");
    },

    fixblend() {

        window.nodePath=function (inode) {
            if (!inode) return "[undefine]";
            let node=inode.node || inode;
            let getTop=function (n) {
                if (n.parent) {
                    return getTop(n.parent) + "/" + n.name;
                }
                return n.name;
            };
            if (node.parent !== null && node.parent !== undefined) {
                node.path=getTop(node).replace("Game/", "");
            }
            return node.path;
        };

        let scene=cc.director.getScene();
        let list=scene.getComponentsInChildren(cc.ParticleSystem);
        let i, l=list.length;

        // wasT=false;           
        list=scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v=list[key];
            if (v._srcBlendFactor === cc.macro.DST_ALPHA) {
                cc.log(window.nodePath(v.node));
                v._srcBlendFactor=cc.macro.ONE;
            }
            if (v._srcBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                cc.log(window.nodePath(v.node));
                v._srcBlendFactor=cc.macro.ZERO;
            }
            if (v._dstBlendFactor === cc.macro.DST_ALPHA) {
                cc.log(window.nodePath(v.node));
                v._dstBlendFactor=cc.macro.ONE;
            }
            if (v._dstBlendFactor === cc.macro.ONE_MINUS_DST_ALPHA) {
                cc.log(window.nodePath(v.node));
                v._dstBlendFactor=cc.macro.ZERO;
            }
            
        }
        // if (wasT) cc.log("============================================================================================================");


    },
    
    fixblend2() {
        window.nodePath=function (inode) {
            if (!inode) return "[undefine]";
            let node=inode.node || inode;
            let getTop=function (n) {
                if (n.parent) {
                    return getTop(n.parent) + "/" + n.name;
                }
                return n.name;
            };
            if (node.parent !== null && node.parent !== undefined) {
                node.path=getTop(node).replace("Game/", "");
            }
            return node.path;
        };

        let scene=cc.director.getScene();
        let list=scene.getComponentsInChildren(cc.ParticleSystem);
        let i, l=list.length;

        let wasT=false;
        for (i=0; i<l; i ++) {
            if (list[i].srcBlendFactor === cc.macro.SRC_ALPHA) {
                if (list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT=true;
                    cc.log(window.nodePath(list[i].node), "Particle\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                    list[i].custom=true;
                    list[i].srcBlendFactor=cc.macro.SRC_ALPHA;
                    list[i].dstBlendFactor=cc.macro.ONE;
                }
            }
        }
        if (wasT) cc.log("============================================================================================================");
        wasT=false;
        for (i=0; i<l; i ++) {
            if (list[i].srcBlendFactor === cc.macro.DST_ALPHA) {
                if (list[i].dstBlendFactor === cc.macro.DST_ALPHA) {
                    wasT=true;
                    cc.log(window.nodePath(list[i].node), "Particle\t", blendData[list[i].srcBlendFactor], blendData[list[i].dstBlendFactor], "to [SRC_ALPHA(770)] [ONE_MINUS_SRC_ALPHA(771)]");
                    list[i].custom=true;
                    list[i].srcBlendFactor=cc.macro.SRC_ALPHA;
                    list[i].dstBlendFactor=cc.macro.ONE_MINUS_SRC_ALPHA;
                }
            }
        }
        if (wasT) cc.log("============================================================================================================");
        wasT=false;
        list=scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v=list[key];
            if (v._srcBlendFactor === cc.macro.SRC_ALPHA && v._dstBlendFactor === cc.macro.DST_ALPHA) {      //DST_ALPHA 半透明, ONE 也是半透明
                wasT=true;
                cc.log(window.nodePath(v.node), "Sprite\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [ONE(1)]");
                v._srcBlendFactor=cc.macro.SRC_ALPHA;
                v._dstBlendFactor=cc.macro.ONE;
            }
        }
        if (wasT) cc.log("============================================================================================================");
        wasT=false;
        list=scene.getComponentsInChildren(cc.Sprite);
        for (let key in list) {
            let v=list[key];
            if (v._srcBlendFactor === cc.macro.DST_ALPHA) {
                wasT=true;
                cc.log(window.nodePath(v.node), "Sprite\t", blendData[v._srcBlendFactor], blendData[v._dstBlendFactor], "to [SRC_ALPHA(770)] [" + blendData[v._dstBlendFactor] + "(" + v._dstBlendFactor + ")]");
                v._srcBlendFactor=cc.macro.ONE;
            }
        }
        // if (wasT) cc.log("============================================================================================================");


    },
};