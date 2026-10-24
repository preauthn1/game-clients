
function MCountdown(root){
		
	this.text = null
	this.timeMax = null
	this.timeShow = null
	this.completeFunc = null
	this.isInit = false
	this.sequence = null
	
// 是否有初始化
	this.IsInit = function(){
		if(this.isInit == false){
			console.log("!!!!! MCountdown 未Init")
			return false
		}
		return true
	}
		
// 初始化
	this.Init = function(text, timeMax, timeShow, completeFunc){
		this.text = text
		this.text.node.active =(false)
		this.timeMax = timeMax
		this.timeShow = timeShow
		this.completeFunc = completeFunc
		this.isInit = true
		window.countdown  = text
	}
	
// 開始計時
	this.Start = function(){
	
		if(this.IsInit()){
			
			this.text.string = ""
			
			let countdownIndex = this.timeMax
			let self = this
			this.sequence = cc.tween(root)
			.parallel(
				cc.tween().delay(1),
				cc.tween().call(function(){
					countdownIndex = countdownIndex-1
					self.text.node.active = (self.timeShow >= countdownIndex)
					self.text.string = countdownIndex
				})
			)
			.repeat(this.timeMax)
			.call(function(){
				if(self.completeFunc != null){
					self.completeFunc()
				}
				self.Stop()
			})
			.start()
		}		
	}
	
// 停止計時
	this.Stop = function(){
	
		if(this.IsInit()){
			this.text.node.active =(false)
			if(this.sequence != null){
				this.sequence.stop()
				this.sequence = null
			}
		}
	}
};

module.exports = MCountdown
