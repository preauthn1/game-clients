let fs             = require("fs");
let AssetsListPath = "resources/particleAssetList.Json";//file to uuid from Cocos
let nodeListPath   = "resources/ParticleList.JSON";//node to file from Unity        
let AssetsList     = null;

module.exports = {
    
    "particles" : function(val){
        this.hookStart();
    },
    
    hookStart(){
        let self = this;
        url      = cc.url.raw(AssetsListPath);
        cc.loader._getResUuid(url, "Json");
        
        cc.loader.load(url, function(err, res){
            AssetsList = res;
            url        = cc.url.raw(nodeListPath);
            cc.loader.load(url, function(err, res){
                for(var k in res){
                    self.loadParticle(AssetsList[res[k].replace(/^.*[\\\/]/, "")], k);
                }
            });
        });
    },
    
    loadParticle(uuid, item){
        cc.AssetLibrary.loadAsset(uuid, function(err, asset){
            let objNode = cc.find(item);
            if(!objNode){
                cc.warn("沒有", item, "元件");
            }else{
                let nowptc  = objNode.getComponent(cc.ParticleSystem) || objNode.addComponent(cc.ParticleSystem);
                nowptc.file = asset;
            }
        });
    },
    
};