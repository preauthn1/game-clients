cc.Class({
    extends: cc.Component,

    properties: {
        leftArrowNode:cc.Node,
        rightArrowNode:cc.Node,
        leftArrowBtn:cc.Button,
        rightArrowBtn:cc.Button,
        content:cc.Node,
        contentPageIndex:0,
        contentPagePosX:[cc.String],

        previousXPos:0,
    },
    start () {
        this.leftArrowBtn.node.on('click', function () {
            this.clickFunction(true);
        }, this);
        this.rightArrowBtn.node.on('click', function () {
            this.clickFunction(false);
        }, this);
        this.leftArrowNode.active = false;

        var scrollViewEventHandler = new cc.Component.EventHandler();
        scrollViewEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
        scrollViewEventHandler.component = "ScrollManager";// This is the code file name
        scrollViewEventHandler.handler = "callback";
        scrollViewEventHandler.customEventData = "foobar";

        var scrollview = this.node.getComponent(cc.ScrollView);
        scrollview.scrollEvents.push(scrollViewEventHandler);
    },
    clickFunction(isLeft){
        this.leftArrowNode.active = true;
        this.rightArrowNode.active = true;
        if(isLeft){
            this.contentPageIndex--;
            if(this.contentPageIndex <= 0){
                this.contentPageIndex = 0;
                this.leftArrowNode.active = false;
            }
        }else{
            this.contentPageIndex++;
            if(this.contentPageIndex >= this.contentPagePosX.length-1){
                this.contentPageIndex = this.contentPagePosX.length-1;
                this.rightArrowNode.active = false;
            }
        }
        this.updateContentPage();
    },
    updateContentPage(){
    
        if(this.contentPageIndex <= 0){
            this.leftArrowNode.active = false;
        }else{
            this.leftArrowNode.active = true;
        }
        if(this.contentPageIndex >= this.contentPagePosX.length-1){
            this.rightArrowNode.active = false;
        }else {
            this.rightArrowNode.active = true;
        }

        this.content.stopAllActions();
        let endPos = this.contentPagePosX[this.contentPageIndex];
        this.content.runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(endPos, this.content.position.y)),
            cc.callFunc(this.endMove, this),
        ));
    },
    endMove(){


    },
    callback: function (scrollview, eventType, customEventData) {
        // here scrollview is a Scrollview component object instance
        // here the eventType === value in the cc.ScrollView.EventType enum
        // here the customEventData parameter is equal to you set before the "foobar"
        // console.log(eventType);
        // console.log(eventType);
        // console.log(this.content.position.x);

        if(eventType == 9){
            // this.rightArrowNode.active = false;
            let count = this.previousXPos - this.content.position.x;
            if( count > 0){ ////swipe left
                // console.log("Swipe left");
                for(let i =0;i<this.contentPagePosX.length;i++){
                    // console.log(i +" / " +this.contentPagePosX[i]+" / " +this.content.position.x);
                    if(this.content.position.x > this.contentPagePosX[i]){
                        this.contentPageIndex = i;
                        break;
                    }
                }  
            } 
            else{
                // console.log("Swipe right");
                for(let i =this.contentPagePosX.length-1;i>=0;i--){
                    // console.log(i +" / " +this.contentPagePosX[i]+" / " +this.content.position.x);
                    if(this.content.position.x < this.contentPagePosX[i]){
                        this.contentPageIndex = i;
                        i = 0;
                        break;
                    }
                }  
            }
            // //check position
            this.updateContentPage();
            this.previousXPos = this.content.position.x;
        }

        
    }

    // update (dt) {},
});
