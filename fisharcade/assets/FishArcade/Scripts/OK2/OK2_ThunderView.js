cc.Class({
    extends: cc.Component,

    properties: {
        poolView: cc.Node,
        target: {
            default: null,
            visible: false,
        }
    },

    update(dt) {
        if (this.target != null) {
            this.updateLightning();
        } else {
            this.node.active = false;
        }
    },

    setTarget(target) {
        this.target = target;
        this.node.active = true;
    },

    removeTarget(target){
        if(this.target == target){
            this.target = null;
        }
    },

    resetTarget(){
        this.target = null;
    },

    updateLightning() {
        this.node.active = true;
        var position = this.poolView.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.getPosition()));
        var targetVector = this.getDistance(position, this.target.position);
        this.node.height = Math.floor(targetVector);

        var angle = this.getAngle(this.target.position);
        this.node.rotation = angle;
    },

    getDistance: function(pos1, pos2)
    {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) +
        Math.pow(pos1.y - pos2.y, 2));
    },

    getAngle: function(point)
    {
        var pos = this.poolView.convertToNodeSpaceAR(this.node.parent.convertToWorldSpaceAR(this.node.getPosition()));
        var _angle = Math.atan2(point.y - pos.y, point.x - pos.x) * (180/Math.PI);
        if (_angle < 0) {
            _angle = 360 - (-_angle);
        }
        var _angle = (_angle - 90) * -1;
        return _angle;
    },
});
