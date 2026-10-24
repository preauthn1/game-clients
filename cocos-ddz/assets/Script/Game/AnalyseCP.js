var AnalyseCP = {
	extends: cc.Component,

	//出牌分析 st_cards(出牌数据),kOper(操作类型 {nOperType=0, nKey = 0, data={}})
	HintTYPE( st_cards, kOper, n_rule ){
		let less=st_cards.length
		let st_data=[]
		let GEnum=[MAX_INDEX_ZI=16]
		if(less<1){ return }
		if(kOper==null){ kOper=[]}

		let compare = function(i1,i2){
			return i1 - i2
		}
		st_cards.sort(compare);

		for(let  i = 1;  i <= GEnum.MAX_INDEX_ZI; ++ i){
			st_data[i]=0
		}
		for(let i in (st_cards)){ 
			let key = st_cards[i] 
			st_data[key]=st_data[key]+1
		}
		if(less==1){
			var obj = {}
			obj.nOperType=1
			obj.nKey=st_cards[1]
			obj.data=[st_cards[1]]
			return kOper.push(obj)
		}
		return this.Analyse(st_data,kOper,less)
	},

	//[[ 提示 ]]//////
	HintChuPai( st_hint, st_kOper, p_logic ){
		if(st_kOper==null){ return }
		
		let len = 0
		let GEnum=[MAX_INDEX_ZI=16]
		for(let i in (p_logic)){ 
			let v = p_logic[i] 

			len = len + v
		}
		if(len<2 && len <st_kOper.num){ return false }
	
		if(this.AnalyseHint(st_hint,st_kOper,p_logic,len) ){

		}
		
		return st_hint.length > 0
	},

	HintChi( st_cards, kOper, b_Hu, n_rule ){
		if(n_rule==null){ n_rule=1
		} 
		else if(n_rule==false){ return false }

		let st_count = []
		let num = st_cards.length
			
		if(num<3){ return false }
			let compare = function(key1, key2){
				return key1 - key2
			}
			st_cards.sort(compare);

			for(let  i = 0;  i <= GEnum.MAX_INDEX_ZI-1; ++ i){
				st_count[i + 1] = 0
			}
			for(let i in (st_cards)){ 
				let nKey = st_cards[i] 
				if(nKey>0){
					st_count[nKey] = st_count[nKey] + 1
			}
		}

		if(this.Analyse_chi(st_count,kOper,0,1,4)){
			return true
		} 
		else if(this.Analyse_chi(st_count,kOper,1,2,2)){

			return true
		}
		return false
	},

	Analyse_chi( st_count, KOper, m1, m2, m3 ){
		let i = 3
		let i1 = 0
		let i2 = 0
		let i3 = 0
		while ( i <= GEnum.MAX_INDEX_ZI-2){
			if (st_count[i] > m1) {
				let max = 16
				if(i1 ==0){ i1 = i + 0 }
				if (i + 1 <= max && st_count[i + 1] > m1){
					i2 = i2 + 1
					st_count[i] = st_count[i] - 0
					st_count[i + 1] = st_count[i + 1] - 0
					st_count[i + 2] = st_count[i + 2] - 0
				} 
				else{
					if(i2 >=m3){ break }
					i1 = 0
					i2 = 0
				}
			}
			i = i + 1
		}
		let data = []
		let len = i2+i1
		for(let  i = i1;  i <= len; ++ i){
			for(let  a = 1;  a <= m2; ++ a){
				data.push(i)
			}
		}
		if(data.length<m2+1){ return false }
		let st_cards = []
		for(let  i = 0;  i <= 16; ++ i){
			st_cards[i + 1] = 0
		}
		for(let i in (data)){ 
			let ma = data[i] 
			st_cards[ma] = st_cards[ma] + 1
		}
		this.Analyse(st_cards,KOper,data).length
		if(KOper.length >0){ KOper[1].data = data }
		
		return KOper.length > 0 && true || false
	},

	Analyse( st_cards, kOper, n_lesskind ){
		let n_rule = n_lesskind
		let n_rule1 = Math.mod(n_lesskind,2)
		let num = n_rule
		if(n_lesskind >0){
			if(n_rule <=5){
				if(this.Analyse1(st_cards, kOper, 1, 1, num) != null){ return false }
				if(this.Analyse1(st_cards, kOper, 2, 2, num) != null){ return false }
	
				if(this.Analyse1(st_cards, kOper, 3, 3, num) != null){ return false }
				if(this.Analyse1(st_cards, kOper, 4, 4, num) != null){ return false }
			} 
			else if(n_rule1==0){
				if(this.Analyse2(st_cards,kOper, 1, 5, 5,n_rule) != null){ return false }
				if(this.Analyse2(st_cards,kOper, 2, 6, 6,n_rule) != null){ return false }
	
				if(this.Analyse2(st_cards,kOper, 3, 6, 7,n_rule) != null){ return false }
				if(this.Analyse4(st_cards,kOper, 4, 4, 9,n_rule) != null){ return false }
				if(this.Analyse3(st_cards,kOper, 3, 6, 8,n_rule) != null){ return false }
			} 
			else if(n_rule1==1){

				if(this.Analyse2(st_cards,kOper, 1, 5, 5,n_rule) != null){ return false }
				if(this.Analyse2(st_cards,kOper, 3, 6, 7,n_rule) != null){ return false }
	
				if(this.Analyse3(st_cards,kOper, 3, 6, 8,n_rule) != null){ return false }
				if(this.Analyse1(st_cards,kOper,3,3,num) != null){ return false }
			} 
			else if(n_rule1==2){

			}
		}
		return true
	},

	getKeyByToIndex( st_cars ,n_key ){
		let GEnum=[MAX_INDEX_ZI=16]
		for(let  key = 1;  key <= GEnum.MAX_INDEX_ZI ; ++ key){
			if(n_key==0){ break }
			if(st_cars[key]==n_key){
				return key
			}
		}
		return 1
	},

	Func_( type, num ){
		if(type==3 && num==4){ 
			return num-1
		} 
		else{
			return num
		}
	},

	Analyse1( st_cards, kOper, n_vars, i1, num ){
		let nKey = this.getKeyByToIndex(st_cards,n_vars)
		let i2 = thisgetKeyByToIndex(st_cards,2)
		let t = num
		if(nKey<1 || num>5){ return true }
		if(kOper.length > 0){ return true }
		if( num==4 && st_cards[nKey] ==2 && st_cards[nKey+1]>1){

		}
		if( num==2 && nKey>14 && nKey<16 && st_cards[nKey] >0 && st_cards[nKey+1] >0){
			let obj = {}
			obj.nOperType=10
			obj.nKey=nKey
			obj.data=[nKey,nKey+1] 
			kOper.push(obj)
		}
		if( num==2 && nKey<15 && st_cards[nKey] ==2 && st_cards[nKey+1]<1){
			let obj = {}
			obj.nOperType=2
			obj.nKey=nKey
			obj.data=[nKey,nKey]
			kOper.push(obj)
		}
		if( num==3 && st_cards[nKey] >=i1 && n_vars==3){
			let obj = {}
			obj.nOperType=3
			obj.nKey=nKey
			obj.data=[nKey,nKey,nKey]
			kOper.push(obj)
		}
		if( num==4 && st_cards[nKey] >=i1 && n_vars==3){
			let obj = {}
			obj.nOperType=3
			obj.nKey=nKey
			obj.data=[nKey]
			kOper.push(obj)
		}
		if( num==5 && st_cards[nKey] >=i1 && n_vars==3 && st_cards[i2]>1){
			let obj = {}
			obj.nOperType=3
			obj.nKey=nKey
			obj.data=[i2,i2]
			kOper.push(obj)
		}
	
		if( num==4 && st_cards[nKey] ==4 && n_vars==4){
			let obj = {}
			obj.nOperType=4
			obj.nKey=nKey
			obj.data=[nKey,nKey,nKey,nKey]
			kOper.push(obj)
		}
		if( num>3 && nKey>2 && st_cards[nKey+1]==1 && st_cards[nKey+2]==1 && st_cards[nKey+3]==1 && st_cards[nKey+4]==1 && (nKey+4) < 15){
			let obj = {}
			obj.nOperType=5
			obj.nKey=nKey+4
			obj.data=[]
			kOper.push(obj)
		}
		return true
	},

	Analyse2( st_cards, kOper, n_vars, n_less, n_type, n_cardKind ){
		let ntype = 0
		let vars = 0
		let key = this.getKeyByToIndex(st_cards,n_vars)
		let t = n_less
		let GEnum=[MAX_INDEX_ZI=16]

		if(kOper.length>0){ return true }
		let i = 3
		let i4 = 0
		let i5 = 0
		let nbegin = 0
		while (i<=GEnum.MAX_INDEX_ZI-2){
			if (i5 * n_vars ==n_cardKind){ break }
			if (st_cards[i] >=n_vars && i >= key){
				if(i5==0){ nbegin=i }
				i5 = i5 + 1
				i4 = i  + 0
		} 
		else {
				i5 = 0 + 0
			}
	
			i = i + 1
		}

		if(i5*n_vars ==n_cardKind){
			var obj = {}
			obj.nOperType=n_type
			obj.nKey=i4
			obj.data=[ ]
			kOper.push(obj);
			return false
		}
	
		return true
	},

	Analyse3( st_cards, kOper, nkey, num, nType, nLenIn ){
		let nKey = 0
		let key = this.getKeyByToIndex(st_cards,nkey)
		let i3 = 0
		let GEnum=[MAX_INDEX_ZI=16]

		if(kOper.length>0){ return true }
		if(num>4 && key>0){
			let i = 3
			while (i<=GEnum.MAX_INDEX_ZI-2){
				if(st_cards[i] >= 3 && (nKey<1 || i-1==nKey) ){
					nKey = i
					i3 = i3 + 1
				}
	
				i = i + 1
			}
		}

		let cha1 = nLenIn - (i3 * nkey)
		let cha2 = nLenIn - cha1
		let i1 = this.getKeyByToIndex(st_cards,1)
		let i2 = this.getKeyByToIndex(st_cards,2)

		if( cha1 ==i3 && (i1>1 || i2>1)){ //单牌
			var obj = {}
			obj.nOperType=nType
			obj.nKey=nKey
			obj.data={}
			obj.data.i1=2
			obj.data.i2=0
			obj.data.i3=cha1
			kOper.push(obj)
		} 
		else if( cha2-cha1 ==i3 && (i1<2 && i2>1)){ //对子
			var obj = {}
			obj.nOperType=nType
			obj.nKey=nKey
			obj.data={}
			obj.data.i1=1
			obj.data.i2=i2
			obj.data.i3=cha1
			kOper.push(obj)
		} 
		else if(cha1==1 && st_cards[nKey]==4){
			var obj = {}
			obj.nOperType=nType
			obj.nKey=nKey
			obj.data={}
			obj.data.i1=2
			obj.data.i2=0
			obj.data.i3=cha1
			kOper.push(obj)		
		}
	
		return kOper.length >0 && false || true
	},

	Analyse4( st_cards, kOper, n_vars, n_less, n_type, n_cardKind ){
		let key = this.getKeyByToIndex(st_cards,n_vars)
		let t = n_less

		let cha = n_cardKind - 4
		let i1 = this.getKeyByToIndex(st_cards,1)
		let i2 = this.getKeyByToIndex(st_cards,2)
		if(kOper.length>0 || key<2){ return true }
		if( t<4 && key<1 && st_cards[key] <4){ return true }

		if( (cha==2 && i2!=1 || cha==2 && i2==1) || (cha==4 && i1==1)){
			var obj = {}
			obj.nOperType=n_type
			obj.nKey=key
			obj.data={}
			obj.data.i1=i1
			obj.data.i2=i2
			obj.data.i3=cha
			kOper.push(obj)
			return false
		}
	
		return true
	},

	AnalyseHint( st_hint, st_kOper, p_logic, num ){
		let n_rule = st_kOper.num
		let i1 = Math.mod(st_kOper.num,2)
		let i = st_kOper.num
		if(i <= 5){
		//p+0 p+1 p+2
			if(i ==1 && num >= st_kOper.num){
				this.AddGroup_0(st_hint, p_logic, st_kOper.nKey, i, 1, 1, 0, 1, num)
			} 
			else if(i ==2 && num >= st_kOper.num){
				this.AddGroup_0(st_hint, p_logic, st_kOper.nKey, i, 2, 2, 0, 1, num)
			} 
			else if(i ==3 && num >= st_kOper.num){
				this.AddGroup_1(st_hint, p_logic, st_kOper.nKey, i, 3, 3, 0, 1, num)
			} 
			else if(i ==4 && num >= st_kOper.num && st_kOper.nOperType>3){	
				this.AddGroup_1(st_hint, p_logic, st_kOper.nKey, i, 4, 4, 0, 1, num)
			} 
			else if(i >3 && num >= st_kOper.num && st_kOper.nOperType==3){
				this.AddGroup_1(st_hint, p_logic, st_kOper.nKey, i, 3, 3, i-3, 1, num)
			} 
			else if(i >3 && num >= st_kOper.num && st_kOper.nOperType==5){	
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey - st_kOper.num + 1, i, 5, 1, 0, i1 + 3, num)
			}
		} 
		else if(i1<2){ //
			let i9 = 0
			if(st_kOper.nOperType==5 && num >= st_kOper.num){
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey - st_kOper.num + 1, i, 5, 1, 0, i1 + 3, num)
			} 
			else if(st_kOper.nOperType==6 && num >= st_kOper.num){
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey - st_kOper.num/2 +2, i, 6, 2, 0, i1 + 3, num)
			} 
			else if(st_kOper.nOperType==7 && num >= st_kOper.num){
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey, i, 7, 3, 0, i1 + 3, num)
			} 
			else if(st_kOper.nOperType==8 && num >= st_kOper.num){
				i9 = st_kOper.data.i1
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey, i, 8, 3, st_kOper.data.i3, i1 + 3, num,i9)
			} 
			else if(st_kOper.nOperType==9 && num >= st_kOper.num){
				i9 = st_kOper.data.i1
				this.AddGroup_2(st_hint, p_logic, st_kOper.nKey, i, 9, 4, st_kOper.data.i3, 1, num,i9)
			}
		} 
		else if(i1==1){
	
		} 
		else if(st_kOper.nOperType !=4){	
			this.AddGroup_1(st_hint, p_logic, i - i, 4, 4, 4, 0, 1, num)
		}
		//天王
		if(p_logic[15] > 0 && p_logic[16] > 0){
			var obj = {}
			obj.nOperType=10
			obj.nKey=16
			obj.data=[15,16]
			st_hint.push(obj)
		}
		if(st_kOper.nOperType !=4 && st_kOper.nOperType !=10){
			this.AddGroup_1(st_hint, p_logic, i - i, 4, 4, 4, 0, 2, num)
		}
	
		return st_hint.length > 0
	},

	AddGroup_0( st_hint, st_count, nKey, nNum, i1, i2, i3,i4,num ){
		let group = {}
		group.nOperType = i1
		group.nKey = 0
		group.data = []
	
		let GEnum=[MAX_INDEX_ZI=16]
		let nVar = 0
		//找 牌
		for(let  key = i4;  key <= GEnum.MAX_INDEX_ZI; ++ key){
			nVar = key==2 && key+12.5 || key
			if(st_count[key] ==i2 && nVar >nKey){
				i4 = key
				break
			} 
			else{
				 nVar = 0
			}
		}
		//加牌
		if(st_count[i4]==i2 && nVar>nKey){
			group.nKey = i4
			for(let  i = 1;  i <= i1; ++ i){
				group.data.push( i4 )
			}
		}
		if(group.nKey > 0){
			st_hint.push(group)
		}
	
		//是否 有相同牌
		if(i4>=16 && i2<4 && st_hint.length<1){ 
			i2 = i2 + 1, 
			i4 = 1
		}
		if(i4 <= 16){ this.AddGroup_0(st_hint, st_count, nKey, nNum, i1, i2, 0,i4+1,num) }
	},

	//i1:牌型,i2:搜索key,i3:带牌count,i4:Index,num:数量
	AddGroup_1( st_hint, st_count, nKey, nNum, i1, i2, i3,i4,num){
		let group = {}
		group.nOperType = i1
		group.nKey = 0
		group.data = []
	
		let GEnum=[MAX_INDEX_ZI=16]
		let nVar = 0
		//找牌
		for(let  key = i4;  key <= GEnum.MAX_INDEX_ZI; ++ key){
			nVar = key==2 && key+12.5 || key
			if(st_count[key] >=i2 && nVar >nKey){
				i4 = key
				break
			} 
			else{
				nVar = 0
			}
		}
		
		if(st_count[i4]==i2 && nVar>nKey){
			group.nKey = i4
			for(let  i = 1;  i <= i1; ++ i){
				group.data.push( i4 )
			}
		}
		
		if(i3 > 0){
			let list = []
			this.AddCardOne(st_count,list,i3,i3,i4)
			if(list.length ==i3){
				for(let i in (list)){ 
					let v = list[i] 
					group.data.push( v )
				}
			}
		}
	
		if(group.nKey > 0 && group.data.length==nNum){
			st_hint.push(group)
		}
	
		if(i4 <= 16){ this.AddGroup_1(st_hint, st_count, nKey, nNum, i1, i2, i3,i4+1,num) }
	},

	AddCardOne( st_cards, st_group, num, i3, key ){
		//>>>跳过2王,最后处理
		for(let i in (st_cards)){ 
			let v = st_cards[i] 

			if(st_group.length ==i3){ break }
			if(v == num && i!= key && (i>2 && i<15) ){
				for(let  n = 1;  n <= i3; ++ n){
					st_group.push(st_group,i)
				}
			}
		}
	
		//>>>最后处理2
		if(st_group.length <i3){
			if(st_cards[2] >0 && st_cards[2]==num && key>2){
				for(let  n = 1;  n <= i3; ++ n){
					st_group.push(st_group,2)
				}
			}
			if(st_group.length <i3){ //王
				for(let  i = 15;  i <= 16; ++ i){
					if(st_cards[i] >0 && st_cards[i]==num && key<15){
						if(st_group.length ==i3){ break }
						for(let  n = 1;  n <= i3; ++ n){
							st_group.push(st_group,i)
						}
					}
				}
			}
		}
		if(st_group.length ==i3){ return }
		if(num<4){ this.AddCardOne(st_cards,st_group, num+1,i3,key) }
	},

	//i1:牌型,i2:搜索key,i3:带牌count,i4:Index,num:数量,i9:one two
	AddGroup_2( st_hint, st_count, nKey, nNum, i1, i2, i3,i4,num, i9 ){
		let group = {}
		group.nOperType = i1
		group.nKey = 0
		group.data = []
	
		let GEnum=[MAX_INDEX_ZI=16]
		let i5 = 0
		let nbegin = i4
		//找 连续牌
		let i = i4
		while (i<=GEnum.MAX_INDEX_ZI-2){
			if (i5 * i2 + i3 ==nNum){ break }
			if (st_count[i] >=i2 && i >= nKey){
				if(i5==0){ nbegin=i }
				i5 = i5 + 1
				i4 = i  + 0
			} 
			else{
				i5 = 0 + 0
			}
	
			i = i + 1
		}

		//组 合
		if(nbegin ==i4 && i5<1){ return }
		for(let  key = nbegin;  key <= i4; ++ key){
			group.nKey = i4
			if(i1==5 && group.nKey<=nKey+nNum-1){ break }
			for(let  i = 1;  i <= i2; ++ i){
				group.data.push( key )
			}
		}
	
		if(i3 > 0 && (i5 * i2)==(nNum-i3) ){ //加牌 提示数量比较
			let one = i9 > 1 && 1 || 2
			let cha = (nNum - i5 * i2) /one
			this.OnceProcess(st_count,group,one,cha, nNum)
		}
	
		if(group.data.length==nNum){
			st_hint.push(group)
		}
	
	//
		if(nbegin+1 <= 13){ this.AddGroup_2(st_hint, st_count, nKey, nNum, i1, i2, i3,nbegin+1,num,i9) }
	},

	OnceProcess(st_cards, stGroup, nOne, cha, nNum ){
	    let one = nOne
	    let num = 0
	    let i3 = one < 2 && 1 || one
	    if(stGroup.data.length < 1){ return }
			for(let i in (st_cards)){ 
			let v = st_cards[i] 

	    	if(v >= one && this.IsQueYiMen(stGroup.data,i)){
	    		num = num + 1
	    	}
	    }
	    if(num < cha){ return }
	
		for(let k in (st_cards)){ 
			let v = st_cards[k] 

	    	if(stGroup.data.length==nNum){ break }
	    	if(v >= one && this.IsQueYiMen(stGroup.data,k)){
				for(let n = 1; n <= i3; ++ n){
	    			stGroup.data.push(k)
	    		}
	    	}
		}
		
	    if(stGroup.data.length==nNum){ return }
	    if(one<4){ this.OnceProcess(st_cards, stGroup, one+1, cha, nNum)}
	},

	IsQueYiMen( st_cards, n_key ){
		let boole=true
		for(let i in (st_cards)){ 
			let v = st_cards[i] 
	    	if(v==n_key){ boole=false }
	    }
	
	    return boole
	},
};

module.exports = AnalyseCP
