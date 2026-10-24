var G = require( "Global")

function PrefabPool(root, prefabs, prefabNames){
		
	let target = []
	let dicKeys = []
	let prefabPool = []
	
	for(let i in (prefabs)){ 
		let j = prefabs[i] 

		
		if(prefabNames != null) {
			dicKeys[i] = prefabNames[i]
		} 
		else{
			dicKeys[i] = j.name
		}
		
		prefabPool[i] = []
		prefabPool[i][1] = {}
		prefabPool[i][1].enable = false
		prefabPool[i][1].obj = j
	}
	
// 取得索引
	let  GetIndex = function(id){
		for(let i in (dicKeys)){ 
			let j = dicKeys[i] 

			if(j == id) {
				return i
			}
		}
		return 0
	}
	
// 取得新的預製物
	let  GetNewPrefab = function(id){
		let index = GetIndex(id)
		let prefab = prefabPool[index][1].obj
		let obj = cc.instantiate(prefab)		
		obj.parent =(root)
		obj.scale = 1
		obj.active =(false)
		let pool = {}
		pool.enable = false
		pool.obj = obj
		prefabPool[index].push(pool)
		return pool
	}
	
	let  GetPool = function(id){
		let pools = prefabPool[GetIndex(id)]
		
		if(pools == null) {
			return null
		}
		
		let pool = null
		for(let i in (pools)){ 
			let j = pools[i] 

			if(j.enable == false) {
				pool = j
				break
			}
		}
		if(pool == null) {
			pool = GetNewPrefab(id)
		}
		
		pool.enable = true
		
		return pool
	}
	
// 取得Pool
	this.GetParentPool = function(id, parent){
		
		let pool = GetPool(id)
		
		if(pool != null) {			
			pool.obj.position = cc.v2(0, 0)		
			pool.obj.parent =(root)
			pool.obj.scale = 1
			if(parent != null){				
				pool.obj.parent =(parent)
			}
		}
		
		return pool
	}
	
// 取得
	this.Get = function(id){
		return GetPool(id)
	}
	
// 表演
	this.Show = function(id, pos, showDelay, duration){
		
		let pool = GetPool(id)
		
		if(pool != null) {
			pool.obj.position = pos
			
			GameG.NewDelayOnce(function(){
				pool.obj.active =(true)
				
				if(duration > 0) {
					GameG.NewDelayOnce(function(){
						pool.enable = false
						pool.obj.active =(false)
					}, duration)
				}

			}, showDelay)
		}
		
		return pool
	}
	
	this.ParentShow = function(id, parent, showDelay, duration){
		
		let pool = GetPool(id)
		
		if(pool != null) {		
			pool.obj.parent =(parent)
			pool.obj.position = cc.v2(0,0)		
			pool.obj.parent =(root)
			pool.obj.scale = 1
			
			GameG.NewDelayOnce(function(){
				pool.obj.active =(true)
				
				if(duration > 0) {
					GameG.NewDelayOnce(function(){
						pool.enable = false
						pool.obj.active =(false)
					}, duration)
				}

			}, showDelay)
		}
		
		return pool
	}
		
	this.ParentShowLoop = function(id, parent, showTime, count){
		
		let pool = GetParentPool(id, parent)
		
		if(pool != null) {
								
//----->需重新編譯程式碼			let sequence = CS.DG.Tweening.DOTween.Sequence()
			
			showTime = showTime / count
			
			pool.obj.active =(true)
			
			for(let  i = 1;  i <=  count; ++ i){
//----->需重新編譯程式碼				sequence:AppendInterval(showTime)
//----->需重新編譯程式碼				sequence:AppendCallback(function(){
//----->需重新編譯程式碼					pool.obj.active =(false)
//----->需重新編譯程式碼					pool.obj.active =(true)
//----->需重新編譯程式碼				})
			}
//----->需重新編譯程式碼			sequence:OnComplete(function(){ 
//----->需重新編譯程式碼				pool.enable = false
//----->需重新編譯程式碼				pool.obj.active =(false)
//----->需重新編譯程式碼			})
		}
		return pool
	}
	
	this.DisableAll = function(){
		for(let i in prefabPool){
			for(let j in prefabPool[i]){
				let pool = prefabPool[i][j]
				if(pool.enable == true) {
					pool.enable = false
					pool.obj.active =(false)
				}
			}
		}
	}

	this.Disable = function(pool){
		pool.enable = false
		pool.obj.active =(false)
		pool.obj.parent = root	
	}
};

module.exports = PrefabPool
