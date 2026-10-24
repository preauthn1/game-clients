var G = require( "Global")
var GameG = require("GameGlobal")

var timer = 0.15
var pool = []

var UIZhuangList = {
	extends: cc.Component,

	Hide(){
	    this.uizhunglist.active =(false)
	},

	Init(root){
	    this.uizhunglist = cc.find("UIZhuangList",root)
	    this.attach = cc.find("Attach",this.uizhunglist)
	    this.needChipText = cc.find("Attach/Text",this.uizhunglist).getComponent(cc.Label)
	    this.perfab = cc.find("Attach/ScrollView/Grid/Item",this.uizhunglist)
	
	    this.btn_up = cc.find("Attach/ButtonUp",this.uizhunglist).getComponent(cc.Button)
	    this.btn_down = cc.find("Attach/ButtonDown",this.uizhunglist).getComponent(cc.Button)
	
	    this.hidePos = this.attach.width * -1
		
	    this.btn = this.uizhunglist.getComponent(cc.Button)
	    this.btn.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        UIZhuangList.Hide()
		})
	},

	Show(data, limited){
	    this.UIZhuangList.SetData(data)
	    this.attach.anchoredPosition = cc.v2(this.hidePos, 0)
	    this.needChipText.string = "(上庄最少需要" + G.FormatDecimal(limited, 0) + "金币)"
		this.uizhunglist.active =(true)
		
		var sqs = GameG.NewTween(this.attach)
		sqs.to(timer, {position: cc.v2(0, 0)})			
		sqs.start()
	},

	Hide(){
		this.attach.anchoredPosition = cc.v2(0, 0)
		
		let self = this
		var sqs = GameG.NewTween(this.attach)
		sqs.to(timer, {position: cc.v2(this.hidePos, 0)})
		sqs.call(function(){
			self.uizhunglist.active =(false)
		})				
		sqs.start()
	},

	SetData(data){
		for(let k in (pool)){ 
			let v = pool[k] 

	        v.obj.active =(false)
	    }
	
	    if(data == null ){
	        return
	    }
	
		for(let k in (data)){ 
			let v = data[k] 

	        if(pool[k] == null ){
	            UIZhuangList.CreateClone(k)
	        }
	
	        pool[k].obj.active =(true)
	        pool[k].index.string = k.toString() + "."
	
	        pool[k].id.active =(false)
	        pool[k].idself.active =(false)
	        pool[k].pic.active =(false)
	        pool[k].picself.active =(false)
	        pool[k].coin.active =(false)
	        pool[k].coinself.active =(false)
	
	        if(v.UserID == GameConfig.getUserID() ){
	            pool[k].idself.string = v.UserID.toString()
	            pool[k].coinself.string = G.FormatDecimal(v.Score)
	            pool[k].idself.active =(true)
	            pool[k].picself.active =(true)
	            pool[k].coinself.active =(true)
		}
        else{
	            pool[k].id.string = v.UserID.toString()
	            pool[k].coin.string = G.FormatDecimal(v.Score)
	            pool[k].id.active =(true)
	            pool[k].pic.active =(true)
	            pool[k].coin.active =(true)
	        }
	    }
	},

	CreateClone(index){
	    let clone = cc.instantiate(this.perfab)
	    if (clone == null) { return null }
	    clone.parent =(this.perfab.parent)
	    clone.position = cc.v3(0, 0, 0)
	    clone.scale = 1
	
	    pool[index] = {}
	    pool[index].obj = clone
	    pool[index].id = cc.find("TextId",clone).getComponent(cc.Label)
	    pool[index].coin = cc.find("TextCoin",clone).getComponent(cc.Label)
	    pool[index].index = cc.find("TextIndex",clone).getComponent(cc.Label)
	    pool[index].idself = cc.find("TextIdSelf",clone).getComponent(cc.Label)
	    pool[index].pic = cc.find("people",clone)
	    pool[index].picself = cc.find("peopleSelf",clone)
	    pool[index].coinself = cc.find("TextCoinSelf",clone).getComponent(cc.Label)
	},

	GetButtonUp(){
	    return this.btn_up
	},

	GetButtonDown(){
	    return this.btn_down
	},


};

module.exports = UIZhuangList
