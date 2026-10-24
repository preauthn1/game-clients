function MScrollChooseH(scrollRect, optionHeight, chooseAction){
	scrollRect.inertia = false
	scrollRect.elastic = false
	
	let contentRT = scrollRect.content
	let pool = null
	let isShow = false
	let scrolling = false
	
	// 取得按鈕索引
	var GetIndex = function(){
		let posY = contentRT.position.y	+ scrollRect.node.height * 0.5 - optionHeight * 0.5
		// 計算索引
		let index =  Math.abs(Math.floor(posY / optionHeight))
		return index
	};
	
	// 計算位置
	var CalTargetPosY = function(index)
	{
		let targetPosY = optionHeight * index * -1 - optionHeight * 0.5
		return targetPosY
	}

	// 重置索引位置
	var SetTargetPosY = function(targetPosY){
		contentRT.position = cc.v3(contentRT.position.x, targetPosY, 0)	
	}	

	// 移動
	var Move = function(index, action){
		let targetPosY = CalTargetPosY(index)

		cc.tween(contentRT)
		.to(0.2, {position: cc.v2(contentRT.position.x, targetPosY)})
		.call(function(){

			if(action != null){
				// 調用選擇
				if (pool[index])
					action(pool[index].index)
			}
		})
		.start();
	};

	// 重置索引位置
	var ResetIndexPos = function(){
		
	}

	//設定Pool
	this.SetPool = function(poolTarget){
		pool = poolTarget
		let count = 0
		pool.forEach(function(item, i) {
			item.index = count
			count = count +1
		})
		contentRT.height = count * optionHeight
		ResetIndexPos()
	};
	
	var MouseDown = function(event){
		scrolling = true
	};
	var MouseUp = function(event){
		if(scrolling == true){
			let index = GetIndex()
			this.ChooseIndex(index)
			scrolling = false
		}
	};
	var MouseEnter = function(event){
		scrolling = true
	};
	var MouseLeave = function(event){
		if(scrolling == true){
			let index = GetIndex()
			this.ChooseIndex(index)
			scrolling = false
		}
	};

	//顯示
	this.Show = function(){
		isShow = true	
		
		scrollRect.node.on("mousedown", MouseDown, this);
		scrollRect.node.on("mouseup", MouseUp, this);			
		scrollRect.node.on("mouseenter", MouseEnter, this);			
		scrollRect.node.on("mouseleave", MouseLeave, this);	

		scrollRect.node.on(cc.Node.EventType.TOUCH_START, MouseDown, this);
		scrollRect.node.on(cc.Node.EventType.TOUCH_END, MouseUp, this);			
		scrollRect.node.on(cc.Node.EventType.TOUCH_CANCEL, MouseLeave, this);			
	};
	
	//關閉
	this.Close = function(){
		isShow = false

		if (scrollRect.node){	
			scrollRect.node.off("mousedown", MouseDown, this);
			scrollRect.node.off("mouseup", MouseUp, this);	

			scrollRect.node.off(cc.Node.EventType.TOUCH_START, MouseDown, this);
			scrollRect.node.off(cc.Node.EventType.TOUCH_END, MouseUp, this);			
			scrollRect.node.off(cc.Node.EventType.TOUCH_CANCEL, MouseLeave, this);			
		}
	};
	
	// 立即選擇
	this.ChooseNow = function(){
		console.log("ChooseNow")
		if(pool == null) return

		let index = GetIndex()
		let targetPosY = CalTargetPosY(index)
		SetTargetPosY(targetPosY)

		if(chooseAction != null){
			chooseAction(pool[index + 1].index)
		}
	};
	
	// 選擇索引 (飛到目的地)
	this.ChooseIndex = function(index){
		Move(index, chooseAction)
	};

	// 移動索引 (飛到目的地)
	this.MoveIndex = function(index){
		Move(index, null)
	}
	
	// 直接移動索引位置 (直接目的地)
	this.MoveIndexPos = function(index){
		index = index % pool.length
		let targetPosY = CalTargetPosY(index)
		SetTargetPosY(targetPosY)
	}
};

module.exports = MScrollChooseH;
