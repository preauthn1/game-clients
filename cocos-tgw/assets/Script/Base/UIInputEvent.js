
var UIInputEvent = {
	extends: cc.Component,

	Init(){	    
		this.rootRect = cc.find("Canvas/UIInputEvent")
		this.rootRect.active = false
		
		this.addEvent()
		
		this.eventKeyIndex = 0
		this.eventKeyDown = []
		this.eventKeyUp = []
		this.eventKeyMove = []
	},
	
	addEvent(){
		this.isAddEvent = true
		//this.rootRect.on(cc.Node.EventType.MOUSE_DOWN,  this.onKeyDown, this);
		this.rootRect.on(cc.Node.EventType.TOUCH_START,  this.onKeyDown, this);
		
		//this.rootRect.on(cc.Node.EventType.MOUSE_UP,  this.onKeyUp, this);
		this.rootRect.on(cc.Node.EventType.TOUCH_END,  this.onKeyUp, this);
		this.rootRect.on(cc.Node.EventType.TOUCH_CANCEL,  this.onKeyUp, this);
		
		//this.rootRect.on(cc.Node.EventType.MOUSE_MOVE,  this.onKeyMove, this);
		this.rootRect.on(cc.Node.EventType.TOUCH_MOVE,  this.onKeyMove, this);
	},
	
	removeEvent(){
        if (this.isAddEvent = true){
		    this.isAddEvent = false
			this.rootRect.active = false
            //this.rootRect.off(cc.Node.EventType.MOUSE_DOWN,this.onKeyDown, this);
            this.rootRect.off(cc.Node.EventType.TOUCH_START,this.onKeyDown, this);
			
            //this.rootRect.off(cc.Node.EventType.MOUSE_UP,this.onKeyUp, this);
            this.rootRect.off(cc.Node.EventType.TOUCH_END,this.onKeyUp, this);
            this.rootRect.off(cc.Node.EventType.TOUCH_CANCEL,this.onKeyUp, this);
			
			//this.rootRect.off(cc.Node.EventType.MOUSE_MOVE,  this.onKeyMove, this);
			this.rootRect.off(cc.Node.EventType.TOUCH_MOVE,  this.onKeyMove, this);
        }
	},
	
	CheckShow(){
		let eventCount = 0
		for(let key in this.eventKeyDown){
			if(this.eventKeyDown[key] != null){
				eventCount = eventCount +1
			}
		}
		for(let key in this.eventKeyUp){
			if(this.eventKeyUp[key] != null){
				eventCount = eventCount +1
			}
		}	
		for(let key in this.eventKeyMove){
			if(this.eventKeyMove[key] != null){
				eventCount = eventCount +1
			}
		}	
		this.rootRect.active = (eventCount > 0)
	},
	
	onKeyDown(event){
		for(let key in this.eventKeyDown){
			if(this.eventKeyDown[key] != null){
				this.eventKeyDown[key](event)
			}
		}
		
		// switch(event.keyCode) {
            // case cc.macro.KEY.a:
                // break;
        // }
		
		// event.getID(); //Touch事件的ID
		// event.getLocation(); //Touch事件的手指位置
		// event.getLocationX(); //获取X轴位置
		// event.getLocationY();	//获取触点的 Y 轴位置
		// event.getPreviousLocation();	//获取触点上一次触发事件时的位置对象，对象包含 x 和 y 属性
		// event.getStartLocation(); 	//获取触点初始时的位置对象，对象包含 x 和 y 属性
		// event.getDelta();	//获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性	
	},
	
	onKeyUp(event){
		for(let key in this.eventKeyUp){
			if(this.eventKeyUp[key] != null){
				this.eventKeyUp[key](event)
			}
		}			
	},
	
	onKeyMove(event){
		for(let key in this.eventKeyMove){
			if(this.eventKeyMove[key] != null){
				this.eventKeyMove[key](event)
			}
		}		
	},
	
	RemoveKey(key){
		this.RemoveEventKeyDown(key)
		this.RemoveEventKeyMove(key)
		this.RemoveEventKeyUp(key)
		
		this.CheckShow()
	},
	
	SetEventKeyDown(callback, key){
		if(key == null){
			key = this.eventKeyIndex
			this.eventKeyIndex = this.eventKeyIndex +1
		}
		this.eventKeyDown[key] = callback
		
		this.CheckShow()

		return key
	},
	
	RemoveEventKeyDown(key){
		if(key == null)
			return

		this.eventKeyDown[key] = null
		
		this.CheckShow()
	},
	
	SetEventKeyMove(callback, key){
		if(key == null){
			key = this.eventKeyIndex
			this.eventKeyIndex = this.eventKeyIndex +1
		}
		this.eventKeyMove[key] = callback
		
		this.CheckShow()

		return key
	},
	
	RemoveEventKeyMove(key){
		if(key == null)
			return

		this.eventKeyMove[key] = null
		
		this.CheckShow()
	},
	
	SetEventKeyUp(callback, key){
		if(key == null){
			key = this.eventKeyIndex
			this.eventKeyIndex = this.eventKeyIndex +1
		}
		this.eventKeyUp[key] = callback
		
		this.CheckShow()

		return key
	},
	
	RemoveEventKeyUp(key){
		if(key == null)
			return

		this.eventKeyUp[key] = null
		
		this.CheckShow()
	},
};

module.exports = UIInputEvent
