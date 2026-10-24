var InputManager = cc.Class({
    extends: cc.Component,

	onLoad() {
        this.pressTime = 0.2;               // 累計按下時間超過此數值時為Press

        this.touchPos = null;               // 滑鼠按下位置
        this.mouseDown = false;             // 按下滑鼠
        this.mousePress = false;            // 長按滑鼠
        this.isMouseDown = false;           // 是否累計按下滑鼠時間
        this.accMouseDown = 0;              // 累計按下時間
        
        this.inputKey = new Map();          // 紀錄按下的按鈕
        this.inputKeyAccTime = new Map();   // 累計按下時間
    },

    start()
    {
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.touch_down, this);
        // this.node.on(cc.Node.EventType.MOUSE_UP, this.touch_up, this);
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.touch_move, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_down, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_up, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);	
    },	

    update(dt) {
        if (this.isMouseDown == true)
        {
            this.accMouseDown += dt;
            if (this.accMouseDown > this.pressTime){
                this.mousePress = true;
            }
        }

        let self = this
        this.inputKeyAccTime.forEach(function(value, key) {
            self.inputKeyAccTime.set(key, value + dt)
        })
    },

    lateUpdate: function (dt) {
        this.inputKey.clear()
        this.mouseDown = false
    },

    touch_down (event) {
        // if (event._button != 0)
        //     return;

        this.mouseDown = true;
        this.isMouseDown = true;
        this.accMouseDown = 0;
        this.touchPos = event.getLocation()		
	},

    touch_up (event) {
        // if (event._button != 0)
        //     return;
                
        this.mouseDown = false;
		this.isMouseDown=false;
        this.mousePress = false;
		this.touchPos = event.getLocation()		
	},

    touch_move(event) {
        // if (event._button != 0)
        //     return;
                
        this.touchPos = event.getLocation()
	},

    onKeyDown(event) {
        // 如果按著隔一段時間又會收到,所以用計時方式判斷是否再次按下
		if (this.inputKeyAccTime.has(event.keyCode) == true){
            return
        }

        let hasValue = this.inputKey.has(event.keyCode)
        if (hasValue == false){
            this.inputKey.set(event.keyCode, 0)
            this.inputKeyAccTime.set(event.keyCode, 0)
        }
    },

    onKeyUp(event) {
        this.inputKey.delete(event.keyCode)
        this.inputKeyAccTime.delete(event.keyCode)
    },

	GetKeyDown(keyCode){
		if (this.inputKey.has(keyCode) == true)
        {
            return true
        }
        else
        {
            return false
        }
	},

	GetKey(keyCode){
		if (this.inputKeyAccTime.has(keyCode) == true)
        {
            let value = this.inputKeyAccTime.get(keyCode)
            if (value > this.pressTime)
                return true;
            else
                return false;
        }
        else
        {
			return false
        }
    },
    // 按下滑鼠
    GetMouseButtonDown(){
        return this.mouseDown;
    },
    // 長按滑鼠
    GetMouseButton(){
        return this.isMouseDown;
    },
    // 放開滑鼠
    GetMouseButtonUp(){
        return !this.isMouseDown;
    },    
});

module.exports = InputManager;