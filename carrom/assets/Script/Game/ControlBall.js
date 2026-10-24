cc.Class({
    extends: cc.Component,

    properties: {
        ErrorObj: cc.Node
    },

    show(){
        this.node.active = true
        this.ErrorObj.active = false
        this.accInTheBall = 0 // 累計有多少球重疊
    },

    hide(){
        this.node.active = false
    },

    setPosition(position){
        this.node.position = position
    },

    /** 是否直接顯示重疊 */
    showError(isShowError){
        this.isShowError = isShowError
    },

    /** 更新重疊顯示提示 */
    updateError(){
        if (this.isCollision() == true){
            this.ErrorObj.active = true
        }
        else{
            this.ErrorObj.active = false
        }
    },

    /** 是否和其他球重疊 */
    isCollision(){
        if (this.accInTheBall > 0){
            return true
        }
        else{
            return false
        }
    },

    onCollisionEnter (other, self) {
		if (other.node.group == "ball"){
            this.accInTheBall += 1

            if (this.isShowError == true){
                this.updateError()
            }            
        }
    },

    onCollisionExit (other, self) {
		if (other.node.group == "ball"){
            this.accInTheBall -= 1
            
            if (this.isShowError == true){
                this.updateError()
            }
        }
    }
});
