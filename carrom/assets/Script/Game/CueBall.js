cc.Class({
    extends: cc.Component,

    properties: {
        RigidBody: cc.RigidBody
    },

    init(control){
        this.control = control
        this._sleep = true;
        this.RigidBody.linearDamping = control.UIGame.damging
        this.hide()
    },

    show(){
        this.node.active = true
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    getPosition(){
        return this.node.position
    },

    addVelocity (velocity) {
        this.show()
        this.node.position=new cc.v2(0, 0);
        this._sleep = false;
        this.RigidBody.linearVelocity = velocity;
    },

    update (dt) {
        // 偵測球是否停止
        if (!this.RigidBody.awake && !this._sleep) {
            this._sleep = true;
            this.control.onwballSleep()
        }
    },

    /** 進到洞裡 */
    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == "hole"){
            this.node.active = false
            this._sleep = true;
            this.control.cueBallInHole(selfCollider.tag, otherCollider.tag)
        }
    },
});
