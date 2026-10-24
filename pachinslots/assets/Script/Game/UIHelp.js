var UIBase = require("UIBase")

cc.Class({
    extends: UIBase,

    properties: {
        page: {
            default: [], 
            type: cc.Node,
        },
    },

    Init () {

        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        let self = this

        this.btn_page_L = cc.find("page_info/btn_page_L", this.node)
        this.btn_page_L.on('click', function () {           
            self.nowIndex -= 1
            if (self.nowIndex < 0){
                self.nowIndex = self.page.length - 1
            }
            self.updatePage()
        })

        this.btn_page_R = cc.find("page_info/btn_page_R", this.node)
        this.btn_page_R.on('click', function () {
            self.nowIndex += 1
            if (self.nowIndex > self.page.length - 1){
                self.nowIndex = 0
            }            
            self.updatePage()
        })

        this.prefab = cc.find("page_info/page/info_icon", this.node)

        let page = cc.find("page", this.node)
        var children = page.children;
        this.page = []
        for (var i = 0; i < children.length; ++i) {
            let pageData = {}
            pageData.pic = children[i]

            let clone = cc.instantiate(this.prefab)
            clone.parent = this.prefab.parent
            pageData.light = cc.find("light", clone)

            this.page.push(pageData)

            pageData.pic.active = false
            pageData.light.active = false
        }

        this.prefab.active = false

        this.nowIndex = 0
        this.updatePage()
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
});
