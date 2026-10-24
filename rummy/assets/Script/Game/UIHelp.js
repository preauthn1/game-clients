var GameG = require("GameGlobal");

cc.Class({
    extends: cc.Component,

    init(GameLayer){
        this.GameLayer = GameLayer

        let Label_Version = cc.find("Version", this.node).getComponent(cc.Label)
        Label_Version.string = GameG.GetGameVersion()

        let self = this

        let changePage = function(value){
            self.GameLayer.playClickSound()
            self.nowIndex += value
            if (self.nowIndex < 0){
                self.nowIndex = self.page.length - 1
            }
            if (self.nowIndex > self.page.length - 1){
                self.nowIndex = 0
            }              
            self.updatePage()            
        }

        this.btnPageL = cc.find("PreButton", this.node)
        this.btnPageL.on('click', function () {           
            changePage(-1)
        })

        this.btnPageR = cc.find("NextButton", this.node)
        this.btnPageR.on('click', function () {
            changePage(1)
        })

        this.prefab = cc.find("page/info_icon", this.node)

        let page = cc.find("page_data", this.node)
        var children = page.children;
        this.page = []
        for (var i = 0; i < children.length; ++i) {
            let clone = cc.instantiate(this.prefab)
            clone.parent = this.prefab.parent

            let pageData = {}
            pageData.pic = children[i]
            pageData.pic.active = false
            pageData.light = cc.find("light", clone)
            pageData.light.active = false
            this.page.push(pageData)
        }

        this.prefab.active = false

        this.nowIndex = 0
        this.updatePage()

        this.hide()
    },

    updatePage(){
        for (var i = 0; i < this.page.length; ++i) {
            let pageData = this.page[i]
            if (i == this.nowIndex){
                pageData.pic.active = true
                pageData.light.active = true  
            }
            else{
                pageData.pic.active = false
                pageData.light.active = false
            }           
        }
    },    

    show(){
        this.node.active = true
    },

    hide(){
        this.node.active = false
    },

    clickClose(){
        this.hide()
        this.GameLayer.playClickSound()
    },    
});
