//Date
//此文件由[BabeLua]插件自动生成
//endregion
// bit operation

var BitHelper = {
	extends: cc.Component,
	
	init(){
		this.data32 = []
	    for(let  i = 1;  i <= 32; ++i){
			//this.data32[i]=2^(32-i)
			this.data32[i]=Math.pow(2, 32-i)
		}
	},
	

	_b2d(arg){
	    let nr=0
		for(let i = 1; i <= 32; ++i){
	        if(arg[i] ==1 ){
				nr=nr+this.data32[i]
	        }
	    }
		return  nr
	},

	_d2b(arg){
	    arg = arg >= 0 && arg || (0xFFFFFFFF + arg + 1)
	    let tr=[]
		for(let i = 1; i <= 32; ++i){
	        if(arg >= this.data32[i] ){
				tr[i]=1
				arg=arg-this.data32[i]
			} 
			else{
				tr[i]=0
	        }
	    }
		return   tr
	},

   band(a,b){
	    let op1= this._d2b(a)
	    let op2= this._d2b(b)
		let r=[]
		for(let i = 1; i <= 32; ++i){
	        if(op1[i]==1 && op2[i]==1  ){
	            r[i]=1
			} 
			else{
	            r[i]=0
	        }
		}
	    return this._b2d(r)
	    
	},

	bnot(a){
	    let op1= this._d2b(a)
	    let r=[]
		for(let i = 1; i <= 32; ++i){
	        if( op1[i]==1){
	            r[i]=0
			} 
			else{
	            r[i]=1
	        }
	    }
	    return this._b2d(r)
	},

	bor(a,b){
	    let op1 = this._d2b(a)
	    let op2 = this._d2b(b)
	    let r=[]
	    
		for(let i = 1; i <= 32; ++i){
	        if(op1[i]==1 || op2[i]==1  ){
	            r[i]=1
			} 
			else{
				r[i]=0
	        }
	    }
	    return this._b2d(r)
	},

	rshift(a, n){
		/*
	    let op1 = this._d2b(a)
	    n = n <= 32 && n || 32
	    n = n >= 0 && n || 0
		for(let i = 32; i <=  1+n; ++i){
	        op1[i] = op1[i-n]
	    }
		for(let i = 1; i <=  n; ++i){
	        op1[i] = 0
	    }
	    
		return this._b2d(op1)
		*/
		return a >> n
	},

	lshift(a,n){
		/*
	    let op1 = this._d2b(a)
	    n = n <= 32 && n || 32
	    n = n >= 0 && n || 0
		for(let      i = 1;      i <=  32-n; ++i){
	        op1[i] = op1[i+n]
	    }
		for(let      i = 32;      i <=  32-n+1; ++i){
	        op1[i] = 0
	    }
	    
		return this._b2d(op1)
		*/
		return a << n
	},


};

module.exports = BitHelper
