cc.Class({
    extends: cc.Component,

    properties: {
        type: 0,
        RigidBody: cc.RigidBody
    },
    
    init(UIGame){
        this.UIGame = UIGame
        this.RigidBody.linearDamping = this.UIGame.damging
    },

    /** 進到洞裡 */
    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.group == "hole"){
            this.UIGame.ballInHole(this.type, otherCollider.tag)
            this.node.destroy()
        }
    },
});
