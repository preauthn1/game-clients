var LabelSprite = cc.Class({
    extends: cc.Component,
    
    start(){
        if(this.initFinish != true){
            this.init()
        }
    },

    init () {
        this.initFinish = true
        this.poolLabel = []
        this.poolSprite = []

        this.char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

        this.layout = this.node.getComponent(cc.Layout)
        if(this.layout == null){
            this.layout = this.node.addComponent(cc.Layout)
        }
        if(this.node.width > 0){
            this.layout.type = cc.Layout.Type.GRID
            this.layout.resizeMode = cc.Layout.ResizeMode.NONE
            this.layout.startAxis = cc.Layout.AxisDirection.HORIZONTAL
        }
        else{
            this.layout.type = cc.Layout.Type.HORIZONTAL
            this.layout.resizeMode = cc.Layout.ResizeMode.NONE
        }
        
        for(let i in this.node.children){
            let sprite = this.node.children[i].getComponent(cc.Sprite)
            if(sprite != null){
                sprite.node.active = false
                this.poolSprite.push(sprite)
            }
        }
    },

	Set(content){
        if(this.initFinish != true){
            this.init()
            
            this.label = this.node.getComponent(cc.Label)
            this.label.string = ""
        }
        for(let i in this.poolLabel){
            this.poolLabel[i].node.active = false
        }
        for(let i in this.poolSprite){
            this.poolSprite[i].node.active = false
        }
        // 處理文字及圖片
        let labelIndex = 0
        let spriteName = null
        let labelContent = null
        for(let i in content){
            if(content[i] == "{"){
                spriteName = ""
            }
            else if(content[i] == "}"){
                if(labelContent != null){
                    this.SetLabel(labelIndex, labelContent)
                    labelIndex = labelIndex + 1
                    labelContent = null
                }
                this.SetSprite(spriteName)
                spriteName = null
            }
            else if(content[i] == " "){
                if(labelContent != null){
                    labelContent = labelContent + content[i]
                    this.SetLabel(labelIndex, labelContent)
                    labelIndex = labelIndex + 1
                    labelContent = null
                }
                else{
                    this.SetLabel(labelIndex, content[i])
                    labelIndex = labelIndex + 1
                }
            }
            else if(content[i] == "\n"){
                if(labelContent != null){
                    this.SetLabel(labelIndex, labelContent)
                    labelIndex = labelIndex + 1
                    labelContent = null
                }
            }
            else if(spriteName != null){
                spriteName = spriteName + content[i]
            }
            else if(this.char.includes(content[i]) == false){
                if(labelContent != null){
                    this.SetLabel(labelIndex, labelContent)
                    labelIndex = labelIndex + 1
                    labelContent = null
                }
                         
                this.SetLabel(labelIndex, content[i])
                labelIndex = labelIndex + 1
                labelContent = null
            }
            else{
                if(labelContent == null){
                    labelContent = content[i]
                }
                else{
                    labelContent = labelContent + content[i]
                }
            }
        }

        if(labelContent != null){
            this.SetLabel(labelIndex, labelContent)
            labelIndex = labelIndex + 1
            labelContent = null
        }
    },
    
    SetLabel(index, content){
        let clone = new cc.Node()
        clone.parent = this.node
        clone.setSiblingIndex(-1)
        clone.name = "Label"
        clone.color = this.node.color
        
        let label = clone.addComponent(cc.Label)
        label.string = content
        label.overflow = cc.Label.Overflow.NONE
        label.cacheMode = cc.Label.CacheMode.BITMAP
        label.verticalAlign = cc.Label.VerticalAlign.CENTER
        if(this.label != null){
            label.fontSize = this.label.fontSize
            label.font = this.label.font
            label.lineHeight = this.label.lineHeight
        }
        this.poolLabel[index] = label
    },

    SetSprite(content){
        for(let i in this.poolSprite){
            let sprite = this.poolSprite[i]
            if(sprite.node.name == content){
                sprite.node.active = true
                sprite.node.setSiblingIndex(-1)
            }
        }
    },
})

module.exports = LabelSprite
