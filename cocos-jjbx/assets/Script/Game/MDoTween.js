function MDoTween (root){
	this.pool = []
// 建立新的
	this.Create = function(node){
		if(node == null){
			node = root
		}
		let sequence = cc.tween(node)
		this.pool[sequence] = sequence
		return sequence
	}
	
// 移除
	this.Remove = function(sequence){
		if(this.pool[sequence] != null){
			this.pool[sequence].stop()
			this.pool[sequence] = null
		}
	}
	
// 漸縮放
	this.DOScale = function(node, size, t){
		//console.warn("~~~DOScale",node, size, t)
		let self = this
		let sequence = cc.tween(node)
		.to(t, { scale: size })
		.call(function(){
			self.pool[sequence] = null
		})
		.start()
		this.pool[sequence] = sequence
	}
	
// 漸顏色
// isActive = 結束後是否關閉物件 (nil=不處理)
	this.DOColor = function(node, targetColor, t, isActive){
		//console.warn("~~~DOColor",node, targetColor, t, isActive)
		let self = this
		// 打開
		node.active =(true)
		let sequence = cc.tween(node)
		.to(t, { color: targetColor })
		.call(function(){
			if(isActive != null) {
				node.active =(isActive)
			}
			self.pool[sequence] = null
		})
		.start()
		this.pool[sequence] = sequence
	}

	// 漸顏色
	// isActive = 結束後是否關閉物件 (nil=不處理)
	this.DOAlpha = function(node, startAlpha, endAlpha, t, isActive){
		//console.warn("~~~DOAlpha",node, startAlpha, endAlpha, t, isActive)
		let self = this
		node.opacity = startAlpha
		// 打開
		node.active =(true)
		let sequence = cc.tween(node)
		.to(t, { opacity: endAlpha })
		.call(function(){
			if(isActive != null) {
				node.active =(isActive)
			}
			self.pool[sequence] = null
		})
		.start()
		this.pool[sequence] = sequence
	}
		
// 移動
	this.DOMove = function(node, pos, t, callback){
		//console.warn("~~~DOMove",node, pos, t)
		let self = this
		let sequence = cc.tween(node)
		.to(t, { position: pos })
		.call(function(){
			self.pool[sequence] = null
			if(callback != null){
				callback()
			}
		})
		.start()
		this.pool[sequence] = sequence
	}
	
// 間隔回調
	this.IntervalCallback = function(t, action){
		//console.warn("~~~IntervalCallback",t)
		let self = this
		let sequence = cc.tween(root)
		.delay(t)
		.call(function(){
			if(action != null) {
				action()
			}
			self.pool[sequence] = null
		})
		.start()
		this.pool[sequence] = sequence		
	}
	
// 清除所有
	this.Kill = function(){
		for(let i in (this.pool)){ 
			this.pool[i].stop()
			this.pool[i] = null
		}
	}
		

};

module.exports = MDoTween
