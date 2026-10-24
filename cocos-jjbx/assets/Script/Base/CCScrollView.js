// Learn cc.Class:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.ScrollView,

    properties: {	
        /** !#en 
		!#zh 是否开启无限滚动。 */
        infinity: cc.Boolean,
        /** !#en 
		!#zh 是否开启无限滚动。 */
        alignCenter: cc.Boolean,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let self = this
        this.contentLayout = this.content.getComponent(cc.Layout)
        
        this.contentPool = []
        this.infinitePool = []
        this.contentEmptyPool = []

        if(this.alignCenter == true){            
            if(this.childAlignCenter != null){
                if(this.infinity == true){
                    // 把選中的更換排序到中間
                    let count = this.content.childrenCount - Math.ceil(this.content.childrenCount * 0.5)
                    while(count != this.childAlignCenter.getSiblingIndex()){
                        this.content.children[0].setSiblingIndex(this.content.childrenCount -1)
                    }
                }
                this.scheduleOnce(function(){
                    this.SetChildAlignCenter(this.childAlignCenter)
                }, 0.1);
                
            }
            else{
                this.ScrollToAlignCenter()
            }
        }

        this.node.on('scroll-began', this.EventScrollBegan, this);

        this.node.on('scrolling', this.EventScrolling, this);

        this.node.on('scroll-ended', this.EventScrollEnd, this);
        
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function(event){
            if(this.isInfiniteScroll == true){
                this.unschedule(this.EventScrollEnd)
                this.scheduleOnce(this.EventScrollEnd, 0.1);
            }
            else{
               this.EventScrollBegan()
            }
        }, this);
        
        this.node.on('child-added', function(event){
            // 重新整理佈局
            this.UpdateLayout()

            if(self.alignCenter == true){
                self.ScrollToAlignCenter()
            }
        }, this);
        
        this.node.on('child-removed', function(event){
            // 重新整理佈局
            this.UpdateLayout()

            if(self.alignCenter == true){
                self.ScrollToAlignCenter()
            }
        }, this);
    },

    UpdateLayout() {
        if(this.contentLayout == null){
            this.contentLayout = this.content.getComponent(cc.Layout)
        }
        if(this.contentLayout != null){
            this.contentLayout.updateLayout()
        }
    },

    EventScrollBegan(event){
        this.InfiniteScrollBegan()
        if(this.callbackScrollBegan != null){
            this.callbackScrollBegan(event)
        }
    },

    SetCallbackScrolling(callback){
        this.callbackScrolling = callback
    },

    EventScrolling(event){
        this.InfiniteScrolling()
        if(this.callbackScrolling != null){
            this.callbackScrolling(event)
        }
    },

    SetCallbackScrollEnd(callback){
        this.callbackScrollEnd = callback
    },
    
    EventScrollEnd(event){
        this.InfiniteScrollEnd()                
        if(this.alignCenter == true){
            this.ScrollToAlignCenter()
        }
        if(this.callbackScrollEnd != null){
            this.callbackScrollEnd(event)
        }
    },

    InfiniteScrollBegan(){
        if(this.infinity == false){
            return
        }

        // 沒有子物件不做任何事情
        if(this.content.childrenCount == 0){
            return
        }
        
        this.isInfiniteScroll = true
        // 將原先content的子物件指回
        for(let i in this.contentPool){
            this.contentPool[i].active = true
            this.contentPool[i].parent = this.content
        }
        for(let i in this.contentEmptyPool){
            this.contentEmptyPool[i].parent = this.content
        }
        // 將滾動用的物件隱藏
        for(let i in this.infinitePool){
            this.infinitePool[i].active = false
            this.infinitePool[i].parent = null
        }

        this.contentPool = []
        // 將沒有用到的子物件移除，否則會影響layout計算位置
        for(let i = this.content.childrenCount -1; i >= 0; --i){
            if(this.content.children[i].active == false){
                this.contentEmptyPool.push(this.content.children[i])
                this.content.children[i].parent = null
            }
        }

        // 無限滾動用範圍的界線
        this.contentMask = {}
        this.contentMask.width = this.content.width
        this.contentMask.height = this.content.height

        // 重新儲存content的子物件
        for(let i in this.content.children){
            this.contentPool.push(this.content.children[i])
        }

        // 儲存第一個子物件相對位置
        let resetPosition = this.contentPool[0].position.add(this.content.position)
        // 備份以便滾動換位           
        let index = 0
        for(let count = 1; count <= 5; count++){
            for(let i in this.contentPool){
                if(this.infinitePool[index] == null){
                    let clone = new cc.Node()
                    this.infinitePool.push(clone)

                    //let txt = this.infinitePool[index].addComponent(cc.Label)
                    //txt.string = count + "__________" + i
                }
                this.infinitePool[index].active = true
                this.infinitePool[index].parent = this.content                    
                this.infinitePool[index].position = cc.v2(0, 0)
                this.infinitePool[index].scale = 1
                this.infinitePool[index].width = this.contentPool[i].width
                this.infinitePool[index].height = this.contentPool[i].height
                this.infinitePool[index].name = this.infinitePool[index].name + "_" + count + "_" + i
                
                if(count == 3){
                    this.contentPool[i].parent = this.infinitePool[index]
                    this.contentPool[i].position = cc.v2(0, 0)
                    this.contentPool[i].scale = 1

                }
                index = index +1
            }
        }
        // 重新整理佈局
        this.UpdateLayout()   

        // 將content指定到相對位置
        resetPosition = resetPosition.sub(this.contentPool[0].parent.position)
        this.setContentPosition(resetPosition)
    },

    InfiniteScrolling() {
        if(this.infinity == false){
            return
        }
        
        if(this.contentPool.length == 0){
            return
        }

        let root = this.content.parent
        let bottom = root.convertToWorldSpaceAR(cc.v2(0, 0)).y - this.contentMask.height * 0.5
        for(let i = this.content.childrenCount -1; i >= 0; --i){
            let rootNode = this.content.children[i]
            let position = rootNode.convertToWorldSpaceAR(cc.v2(0, 0))
            if(bottom > position.y + rootNode.height * 0.5){
                if(rootNode.children[0] != null){
                    let parent = this.content.children[parseInt(i) - this.contentPool.length]
                    if(parent != null){
                        rootNode.children[0].parent = parent
                    }
                }
            }
        }

        let top = root.convertToWorldSpaceAR(cc.v2(0, 0)).y + this.contentMask.height * 0.5
        for(let i in this.content.children){
            let rootNode = this.content.children[i]
            let position = rootNode.convertToWorldSpaceAR(cc.v2(0, 0))
            if(top < position.y - rootNode.height * 0.5){
                if(rootNode.children[0] != null){
                    let parent = this.content.children[parseInt(i) + this.contentPool.length]
                   if(parent != null){
                        rootNode.children[0].parent = parent
                   }
                }
            }
        }

    },

    InfiniteScrollEnd(){
        if(this.infinity == false){
            return
        }
        
        // 沒有子物件不做任何事情
        if(this.contentPool.length == 0){
            return
        }
        this.isInfiniteScroll = false
        // 儲存第一個子物件相對位置
        let resetPosition = null

        for(let i in this.content.children){
            let rootNode = this.content.children[i].children[0] 
            if(rootNode!= null){
                if(resetPosition == null){
                    resetPosition = rootNode.parent.position.add(this.content.position)
                }
                rootNode.parent = this.content
                rootNode.position = cc.v2(0, 0)
                rootNode.scale = 1
            }
        }

        // 將滾動用的物件隱藏
        for(let i in this.infinitePool){
            this.infinitePool[i].active = false
            this.infinitePool[i].parent = null
        }
        // 重新整理佈局
        this.UpdateLayout()   

        // 將content指定到相對位置
        resetPosition = resetPosition.sub(this.content.children[0].position)
        this.setContentPosition(resetPosition)
        // 將原先content的子物件指回
        for(let i in this.contentEmptyPool){
            this.contentEmptyPool[i].parent = this.content
        }
        
        this.contentPool = []   
        this.contentEmptyPool = []     
    },

    // 指定子物件置中
    SetChildAlignCenter(child){
        this.childAlignCenter = child
        if(this.content.activeInHierarchy == false){
            return
        }
        
        // 重新整理佈局
        this.UpdateLayout()   
        let x = this.content.position.x
        let y = this.content.position.y
        if(this.horizontal == true){
            x = child.position.x *-1
        }
        if(this.vertical == true){
            y = child.position.y *-1
        }
        
        cc.tween(this.content)
        .delay(0.05)
        .to(0.2, { position: cc.v2(x, y)})
        .start()        
    },

    // 取得置中的子物件
    GetChildAlignCenter(){
        return this.childAlignCenter
    },

    ScrollToAlignCenter(){
        let nearIndex = 0
        for(let i in this.content.children){
            let compare = this.content.children[nearIndex].position.add(this.content.position)
            let target = this.content.children[i].position.add(this.content.position)
            if(compare.mag() > target.mag()){
                nearIndex = i
            }
        }
        this.SetChildAlignCenter(this.content.children[nearIndex])
    },
});
