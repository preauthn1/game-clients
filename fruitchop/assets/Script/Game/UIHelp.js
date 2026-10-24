var GameG = require("GameGlobal");

/** 幫助UI */
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
                        
            self.updatePage()
            self.updateButton()
        }

        this.btnPlay = cc.find("PlayButton", this.node)

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
        this.updateButton()

        this.hide()
    },

    updateButton(){
        if (this.nowIndex == 0){
            this.btnPageL.active = false
        }
        else{
            this.btnPageL.active = true
        }

        if (this.nowIndex != this.page.length - 1){
            this.btnPlay.active = false
            this.btnPageR.active = true
        }
        // 按到最後一頁顯示play
        else{
            this.btnPlay.active = true
            this.btnPageR.active = false
        }
    },

    /** 更新點點 */
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

    clickPlay(){
        this.hide()
        this.GameLayer.playClickSound()
        this.GameLayer.UIMatch.show()
    },

});
