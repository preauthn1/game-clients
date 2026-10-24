/** 每一個Touch的資料 */
class Touch 
{
    id = 0;

    touchPos = null;               // 滑鼠按下位置
    mouseDown = false;             // 按下滑鼠
    mousePress = false;            // 長按滑鼠
    isMouseDown = false;           // 是否累計按下滑鼠時間
    accMouseDown = 0;              // 累計按下時間

    touch_move_callback = null;
    touch_end_callback = null;

    touchCourse = [];               // 滑鼠軌跡

    // 紀錄滑鼠按下位置
    SetTouchPos(pos){
        this.touchPos = pos
        this.touchCourse.push(pos)
        if(this.touchCourse.length > 5)
            this.touchCourse.shift();
    };
    // 
    SetTouchDown(){
        this.touchCourse = [];
        this.touchCourse.length = 0;
    };
    // 按下滑鼠
    GetMouseButtonDown(){
        return this.mouseDown;
    };
    // 長按滑鼠
    GetMouseButton(){
        return this.isMouseDown;
    };
    // 按下位置
    GetTouchPos(){
        return this.touchPos;
    };
    // 滑動軌跡的向量
    GetCourseDirection(){
        if(this.touchCourse.length < 2)
            return new cc.Vec2(0, 0)

        let checkDistance = 5
        let lastPos = this.touchCourse[this.touchCourse.length -1]
        let firstPos = this.touchCourse[0]
        for (let i = this.touchCourse.length -2; i >= 0; i--){  
            let x = lastPos.x - this.touchCourse[i].x
            let y = lastPos.y - this.touchCourse[i].y
            let vector = new cc.Vec2(x, y)
            let distance = vector.len()
            if(distance > checkDistance)
                return vector
        }

        let x = lastPos.x - firstPos.x
        let y = lastPos.y - firstPos.y
        return new cc.Vec2(x, y)
    };
}

/** 玩家操作 */
var InputManager = cc.Class({
    extends: cc.Component,

	properties:
	{
        maxTouchCount: 2, // 同時間最多幾點觸碰

        pressTime: 0.2, // 累計按下時間超過此數值時為Press
	},

    start()
    {
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, this.touch_down, this);
        // this.node.on(cc.Node.EventType.MOUSE_UP, this.touch_up, this);
        // this.node.on(cc.Node.EventType.MOUSE_MOVE, this.touch_move, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_down, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_up, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);      
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_up, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.isUse = false
    },	

    begin(){
        this.isUse = true

        this.inputKey = new Map();          // 紀錄按下的按鈕
        this.inputKeyAccTime = new Map();   // 累計按下時間

        this.inputLsit = [];
        for (let i = 0; i < this.maxTouchCount; i++){
            let touch = new Touch();
            touch.id = i;
            this.inputLsit.push(touch);
        }

        this.touthID = null
    },

    end(){
        if (!this.isUse == true){
            return
        }

        this.isUse = false

        this.touch_down_callback = null;
        this.touch_up_callback = null;
        this.touch_move_callback = null;

        for (let i = 0; i < this.inputLsit.length; i++){
            let touch = this.inputLsit[i]
            if (touch.touch_end_callback != null){
                touch.touch_end_callback()
                touch.touch_end_callback = null
            }
        }
        this.inputLsit = []

        this.touthID = null
    },

    getTouch(id){
        // return this.inputLsit[id]
        return this.inputLsit[0]
    },

    update(dt) {
        if (!this.isUse == true){
            return
        }

        for (let i = 0; i < this.maxTouchCount; i++){
            let touch = this.getTouch(i);
            if (touch.isMouseDown == true)
            {
                touch.accMouseDown += dt;
                if (touch.accMouseDown > this.pressTime){
                    touch.mousePress = true;
                }
            }
        }

        let self = this
        this.inputKeyAccTime.forEach(function(value, key) {
            self.inputKeyAccTime.set(key, value + dt)
        })
    },

    lateUpdate: function (dt) {
        if (!this.isUse == true){
            return
        }

        this.inputKey.clear()

        for (let i = 0; i < this.maxTouchCount; i++){
            let touch = this.getTouch(i);
            touch.mouseDown = false;
        }
    },

    touch_down (event) {
        if (!this.isUse == true){
            return
        }

        if (this.touthID != null){
            return
        }

        // if (event.touch._id >= this.maxTouchCount)
        //     return;

        this.touthID = event.touch._id

        let touch = this.getTouch(event.touch._id);
        touch.mouseDown = true;
        touch.isMouseDown = true;
        touch.accMouseDown = 0;
        touch.SetTouchPos(event.getLocation());
        touch.SetTouchDown();

        if (this.touch_down_callback != null){
            this.touch_down_callback(touch)
        }        
	},

    touch_up (event) {
        if (!this.isUse == true){
            return
        }

        if (this.touthID != event.touch._id){
            return
        }

        // if (event.touch._id >= this.maxTouchCount)
        //     return;
         
        let touch = this.getTouch(event.touch._id);
        touch.mouseDown = false;
		touch.isMouseDown=false;
        touch.mousePress = false;
        touch.SetTouchPos(event.getLocation());

        if (touch.touch_end_callback != null){
            touch.touch_end_callback();

            touch.touch_move_callback = null;
            touch.touch_end_callback = null;
        }

        if (this.touch_up_callback != null){
            this.touch_up_callback(touch)
        }

        this.touthID = null
	},

    touch_move(event) {
        if (!this.isUse == true){
            return
        }
                
        if (this.touthID != event.touch._id){
            return
        }

        // if (event.touch._id >= this.maxTouchCount)
        //     return;

        let touch = this.getTouch(event.touch._id);
        touch.SetTouchPos(event.getLocation());

        if (touch.touch_move_callback != null)
            touch.touch_move_callback(touch.touchPos)
        
        if (this.touch_move_callback != null){
            this.touch_move_callback(touch)
        }
	},

    // 按下滑鼠
    GetMouseButtonDown(id){
        return this.getTouch(id).GetMouseButtonDown();
    },
    // 長按滑鼠
    GetMouseButton(id){
        return this.getTouch(id).GetMouseButton();
    },
    // 取得按下位置
    GetTouchPos(id){
        return this.getTouch(id).GetTouchPos();
    },
    // 滑動軌跡的向量
    GetCourseDirection(id){
        return this.getTouch(id).GetCourseDirection();
    },

    onKeyDown(event) {
        if (!this.isUse == true){
            return
        }
              
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
        if (!this.isUse == true){
            return
        }

        this.inputKey.delete(event.keyCode)
        this.inputKeyAccTime.delete(event.keyCode)
    },

	GetKeyDown(keyCode){
        if (!this.isUse == true){
            return
        }

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
        if (!this.isUse == true){
            return
        }
                
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
});

module.exports = InputManager;