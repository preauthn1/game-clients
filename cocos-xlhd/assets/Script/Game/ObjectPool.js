//region *.lua
//Date
//此文件由[BabeLua]插件自动生成



//endregion

var G = require("Global")

function ObjectPool() {
	/*@function: 构造函数
	// -@args: 参数：args:{
							num:数量
							poolInit:pool初始化函数
							create:新建
							objInit:obj初始化函数；
							objInitArgs:obj初始化函数参数
							objDel:删除对象
							poolDel:删除池}
	// -@notify:dtItem是table且无remove方法，构造后自动添加remove方法作为删除方法
	//*/
	this.init = function(args1, args2){
	    let args = args1.__cname == "ObjectPool" && args2 || args1
	    this.dtTransShow = []               // 显示列表 存入transform
	    this.dtTransHide = []               // 隐藏列表 存入transform
	
	    if(args == null ){
			return
		}
		if(args.poolInit ){
			 args.poolInit(this)
		}
	    if(this.dtItem && this.dtItem.parent && this.dtParent==null ){
			this.dtParent = this.dtItem.parent
		}
	
    	// 将参数回调存储
	    this.dtNum = args.num || 0
	    this.obj = {}
	    this.obj.create = args.create
	    this.obj.init = args.objInit
	    this.obj.del = args.objDel
	    this.obj.destroy = args.poolDel
	
    	// 默认创建方法需要在pool初始化时初始化dtItem
	    if(this.obj.create==null && this.dtItem ){
	        this.obj.create = function(pool){
	            return cc.instantiate(pool.dtItem)
	        }
	    }
		
    	// 初始化长度
	    if(this.dtNum>0 && this.obj.create ){
			for(let i = 1; i <= this.dtNum; ++i){
	            let obj = this.obj.create(this)
	            this.dtTransHide[this.dtTransHide.length+1] = obj
	
            	// 绑定remove
	            if(type(obj)=="table" && obj.remove==null ){
	                obj.remove = this.remove
	            }
	
            	// 初始化
	            if(this.dtParent ){
					obj.parent =(this.dtParent)
				}
	            if(this.obj.init ){
					this.obj.init(obj, this, false, args.objInitArgs) 
				}
	        }
	    }
	
	};

	//- 清空缓存
	this.clear = function(){
		for(let _ in (this.dtTransShow)){ 
			let v = this.dtTransShow[_] 
			if(this.obj.del ){
				this.obj.del(this, v)
			}
			v.destroy()
		}
		for(let _ in (this.dtTransHide)){ 
			let v = this.dtTransHide[_] 

	        if(this.obj.del ){
				this.obj.del(this, v) 
			}
			v.destroy()
	    }
	    this.dtTransShow = []
	    this.dtTransHide = []
	};

	//- 获取item并初始化
	this.get = function(args){
	    let obj = null
	    if (this.dtTransHide.length > 0) {
			obj = this.dtTransHide[this.dtTransHide.length]
			this.dtTransHide.pop(); // 移除 (最末端的)
		} 
    	else{
	        obj = this.obj.create(this)
	        if(this.dtParent ){
				obj.parent =(this.dtParent) 
			}
	    } 
		
		this.dtTransShow.push(obj);
	    obj.active =(true)
	    if(this.obj.init ){
			this.obj.init(obj, this, true, args) 
		}
	
	    return obj
	};

	//- 删除item；（obj为transform；item是table且无remove方法，自动添加remove方法作为删除方法）
	this.remove = function(obj){
	    obj.active =(false)
		this.dtTransHide.push(obj);
		for(let k in (this.dtTransShow)){ 
			let v = this.dtTransShow[k] 

	        if(v == obj ){
				this.dtTransShow.splice(k, 1);
	            //table.remove(this.dtTransShow, k)
	            break;
	        }
	    }
	    if(this.obj.del ){
			this.obj.del(this, obj)
		}
	};

	//- 删除池
	this.destroy = function(){
	    this.clear()
	    if(this.obj.destroy ){
			this.obj.destroy() 
		}
	};

	//- 隐藏所有显示对象
	this.hideShows = function(){
		for(let i = this.dtTransShow.length; i <= 1; ++i){
	        if(this.obj.del ){
				this.obj.del(this, this.dtTransShow[i])
			}
		}
		this.dtTransShow = []
	};

	this.ShowTotalCount = function(){
		let total = this.dtTransShow.length + this.dtTransHide
		
		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@ total Count " + (total).toString())
	};

};

module.exports = ObjectPool
