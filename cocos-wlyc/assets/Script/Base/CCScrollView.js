// Learn cc.Class:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let CCScrollView = cc.Class({
    extends: cc.Component,

    properties: {	
        /** !#en 
		!#zh 是否开启无限滚动。 */
        infinity: cc.Boolean,
        /** !#en 
		!#zh 是否开启无限滚动。 */
        alignCenter: cc.Boolean,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad(){
        this.scroll = this.node.getComponent(cc.ScrollView)
        this.contentLayout = this.scroll.content.getComponent(cc.Layout)
        
        this.contentPool = []
        this.infinitePool = []
        this.contentEmptyPool = []
    },

    start () {
        this.scroll.node.on('scroll-began', this.EventScrollBegan, this);

        this.scroll.node.on('scrolling', this.EventScrolling, this);

        this.scroll.node.on('scroll-ended', this.EventScrollEnd, this);
        
        this.scroll.node.on(cc.Node.EventType.MOUSE_WHEEL, function(event){
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

            this.ScrollToAlignCenter()
        }, this);
        
        this.node.on('child-removed', function(event){
            // 重新整理佈局
            this.UpdateLayout()

            this.ScrollToAlignCenter()
        }, this); 
    },

    onEnable(){
        let self = this
        this.scheduleOnce(function(){
            self.ScrollToAlignCenter()
        }, 0.05)
        
    },

    UpdateLayout() {
        if(this.contentLayout == null){
            this.contentLayout = this.scroll.content.getComponent(cc.Layout)
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
        this.SetChildNearCenter()
        if(this.callbackScrollEnd != null){
            this.callbackScrollEnd(event)
        }
    },

    InfiniteScrollBegan(){
        if(this.infinity == false){
            return
        }

        // 沒有子物件不做任何事情
        if(this.scroll.content.childrenCount == 0){
            return
        }
        
        this.isInfiniteScroll = true
        // 將原先content的子物件指回
        for(let i in this.contentPool){
            this.contentPool[i].active = true
            this.contentPool[i].parent = this.scroll.content
        }
        for(let i in this.contentEmptyPool){
            this.contentEmptyPool[i].parent = this.scroll.content
        }
        // 將滾動用的物件隱藏
        for(let i in this.infinitePool){
            this.infinitePool[i].active = false
            this.infinitePool[i].parent = null
        }

        this.contentPool = []
        // 將沒有用到的子物件移除，否則會影響layout計算位置
        for(let i = this.scroll.content.childrenCount -1; i >= 0; --i){
            if(this.scroll.content.children[i].active == false){
                this.contentEmptyPool.push(this.scroll.content.children[i])
                this.scroll.content.children[i].parent = null
            }
        }

        // 無限滾動用範圍的界線
        this.contentMask = {}
        this.contentMask.width = this.scroll.content.width
        this.contentMask.height = this.scroll.content.height

        // 重新儲存content的子物件
        for(let i in this.scroll.content.children){
            this.contentPool.push(this.scroll.content.children[i])
        }

        if(this.contentPool.length == 0){
            return
        }

        // 儲存第一個子物件相對位置
        let resetPosition = this.contentPool[0].position.add(this.scroll.content.position)
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
                this.infinitePool[index].parent = this.scroll.content                    
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
        this.scroll.setContentPosition(resetPosition)
    },

    InfiniteScrolling() {
        if(this.infinity == false){
            return
        }
        
        if(this.contentPool.length == 0){
            return
        }

        let root = this.scroll.content.parent
        let bottom = root.convertToWorldSpaceAR(cc.v2(0, 0)).y - this.contentMask.height * 0.5
        for(let i = this.scroll.content.childrenCount -1; i >= 0; --i){
            let rootNode = this.scroll.content.children[i]
            let position = rootNode.convertToWorldSpaceAR(cc.v2(0, 0))
            if(bottom > position.y + rootNode.height * 0.5){
                if(rootNode.children[0] != null){
                    let parent = this.scroll.content.children[parseInt(i) - this.contentPool.length]
                    if(parent != null){
                        rootNode.children[0].parent = parent
                    }
                }
            }
        }

        let top = root.convertToWorldSpaceAR(cc.v2(0, 0)).y + this.contentMask.height * 0.5
        for(let i in this.scroll.content.children){
            let rootNode = this.scroll.content.children[i]
            let position = rootNode.convertToWorldSpaceAR(cc.v2(0, 0))
            if(top < position.y - rootNode.height * 0.5){
                if(rootNode.children[0] != null){
                    let parent = this.scroll.content.children[parseInt(i) + this.contentPool.length]
                   if(parent != null){
                        rootNode.children[0].parent = parent
                   }
                }
            }
        }

    },

    InfiniteScrollToAlignCenter(child){
        if(this.infinity == false){
            return
        }
        
        let count = 0
        let index = 0
        for(let i in this.scroll.content.children){
            if(this.scroll.content.children[i].active == true){
                count = count +1
                if(this.scroll.content.children[i] == child){
                    index = parseInt(i) +1
                }
            }
        }
        count = index - Math.floor(count * 0.5)

        this.InfiniteScrollBegan()
        
        for(let i = this.scroll.content.childrenCount -1; i >= 0; --i){
            let rootNode = this.scroll.content.children[i]
            if(rootNode.children[0] != null && count < 0){
                let parent = this.scroll.content.children[parseInt(i) - this.contentPool.length]
                if(parent != null){
                    rootNode.children[0].parent = parent
                    count = count +1
                }
            }
        }

        for(let i in this.scroll.content.children){
            let rootNode = this.scroll.content.children[i]
            if(rootNode.children[0] != null && count > 0){
                let parent = this.scroll.content.children[parseInt(i) + this.contentPool.length]
               if(parent != null){
                    rootNode.children[0].parent = parent
                    count = count -1
               }
            }
        }

        this.InfiniteScrollEnd()
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

        for(let i in this.scroll.content.children){
            let rootNode = this.scroll.content.children[i].children[0] 
            if(rootNode!= null){
                if(resetPosition == null){
                    resetPosition = rootNode.parent.position.add(this.scroll.content.position)
                }
                rootNode.parent = this.scroll.content
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
        resetPosition = resetPosition.sub(this.scroll.content.children[0].position)
        this.scroll.setContentPosition(resetPosition)
        // 將原先content的子物件指回
        for(let i in this.contentEmptyPool){
            this.contentEmptyPool[i].parent = this.scroll.content
        }
        
        this.contentPool = []   
        this.contentEmptyPool = []     
    },

    // 指定子物件置中
    SetChildAlignCenter(child){
        this.ScrollToAlignCenter(child)
        this.childAlignCenter = child
    },

    // 取得置中的子物件
    GetChildAlignCenter(){
        return this.childAlignCenter
    },

    SetChildNearCenter(){
        if(this.scroll == null){
            return;
        }
        if(this.scroll.content == null){
            return;
        }
        let nearIndex = 0
        for(let i in this.scroll.content.children){
            if(this.scroll.content.children[i].active == true){
                let compare = this.scroll.content.children[nearIndex].position.add(this.scroll.content.position)
                let target = this.scroll.content.children[i].position.add(this.scroll.content.position)
                if(compare.mag() >= target.mag()){
                    nearIndex = i
                }
            }
        }
        this.SetChildAlignCenter(this.scroll.content.children[nearIndex])
    },

    ScrollToAlignCenter(child){
        if(this.alignCenter == false){
            return;
        }
        if(this.scroll == null){
            return;
        }
        if(this.scroll.content == null){
            return;
        }

        if(child == null){
            child = this.GetChildAlignCenter()
        }

        this.InfiniteScrollToAlignCenter(child)
        this.UpdateLayout()
        let x = this.scroll.content.position.x
        let y = this.scroll.content.position.y
        if(this.scroll.horizontal == true){
            x = child.position.x *-1
        }
        if(this.scroll.vertical == true){
            y = child.position.y *-1
        }
        
        this.scroll.setContentPosition(cc.v2(x, y))
    },
});

cc.CCScrollView = module.exports = CCScrollView;
