var functionsEx = {
	extends: cc.Component,

	//销毁游戏物体
	Destroy( Go ){
	    Go.destroy();
	},

	removeAllChild( parent ){
		var children = parent.children;
		for (var i = 0; i < children.length; ++i) {
			children[i].destroy()
		}
	},
	
	//@param    sName:要切割的字符串  
	//@return   nMaxCount，字符串上限,中文字为2的倍数  
	//@param    nShowCount：显示英文字个数，中文字为2的倍数,可为空  
	//@note     函数实现：截取字符串一部分，剩余用“...”替换</span>  
	getShortName(sName,nMaxCount,nShowCount){  
	    if(sName == null || nMaxCount == null ){  
	        return  
	    }  
	    let sStr = sName  
	    let tCode = []  
	    let tName = []  
	    let nLenInByte = sStr.length  
	    let nWidth = 0  
	    if(nShowCount == null ){  
	       nShowCount = nMaxCount - 3  
	    }  
		for(let i = 1; i <= nLenInByte; ++ i){  
	        let curByte = string.byte(sStr, i)  
	        let byteCount = 0;  
	        if(curByte>0 && curByte<=127 ){  
	            byteCount = 1  
			} 
			else if( curByte>=192 && curByte<223 ){  
				byteCount = 2  
			} 
			else if( curByte>=224 && curByte<239 ){  
				byteCount = 3  
			} 
			else if( curByte>=240 && curByte<=247 ){  
				byteCount = 4  
			}  
			let char = null  
			if(byteCount > 0 ){  
				char = string.sub(sStr, i, i+byteCount-1)  
				i = i + byteCount -1  
			}  
			if(byteCount == 1 ){  
				nWidth = nWidth + 1  
				tName.push(char)  
				tCode.push(1)  
			} 
			else if( byteCount > 1 ){  
				nWidth = nWidth + 2  
				tName.push(char)  
				tCode.push(2)  
			}  
		}  
	      
		if(nWidth > nMaxCount ){  
	        let _sN = ""  
	        let _len = 0  
			for(let i = 1; i <= tName.length; ++ i){  
	            _sN = _sN + tName[i]  
	            _len = _len + tCode[i]  
	            if(_len >= nShowCount ){  
	                break  
	            }  
	        }  
	        sName = _sN + "."  
	    }  
	    return sName  
	},


};

module.exports = functionsEx
