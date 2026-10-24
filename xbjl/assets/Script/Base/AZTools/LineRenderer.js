var GameG = require("GameGlobal")

cc.Class({
    extends: cc.Component,

    properties: {
        Node: cc.Node,
        Attach: cc.Node,
    },

	setPosition: function(index, position){
        if (this.Line == null){
            this.Line = []
        }
		for(let i= this.Line.length; i <= index; ++i)
			this.Line.push(new cc.v2(position.x, position.y));  	
		
		this.Line[index] = new cc.v2(position.x, position.y)
	},

    show(isShow){
        if (this.Line == null)
            return

        if (this.Line.length <= 1)
            return

        if (isShow == true){
            for(let i= 0; i < this.Line.length - 1; ++i){
                if (this.Data == null){
                    this.Data = []
                }
                
                let data = this.Data[i]
                if (this.Data[i]  == null){
                    let clone = cc.instantiate(this.Node)
                    clone.parent = this.Attach
                    this.Data.push(clone)
                    data = clone
                }
                
                data.getComponent(cc.MotionStreak).reset()
                data.active = true
                data.position = this.Line[i]

                this.draw(data, this.Line[i+1])
            }
        }
        else{
            for(let i= 0; i < this.Data.length - 1; ++i){
                this.Data[i].active = false
            }
        }
    },

	getPosition: function(index){
		if(this.Line.length > index)
			return this.Line[index];
		else
			return cc.Vec2(0, 0);
	},

    draw(clone, pos){
		let sequence = GameG.NewTween(clone) 
		sequence.delay(0.02)
        sequence.to(0.05, {position: pos})
		sequence.start()
	},

});