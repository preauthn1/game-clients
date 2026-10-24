var G = require( "Global")

var UIUser = {
	extends: cc.Component,

	Create(root){
		let target = []
		
		root.active =(false)
		
		let rootStartPos = root.position
		let rootStartScale = root.scale
	//头像
	    let img_head =cc.find("head", root).getComponent(cc.Sprite)
    //编码
	    let txt_id =cc.find("name", root).getComponent(cc.Label)
	//金额
	    let txt_coin =cc.find("coinbg/coin", root).getComponent(cc.Label)
	
	    let txt_addCoin =cc.find("addCoin", root).getComponent(cc.Label)
		let txt_subCoin =cc.find("subCoin", root).getComponent(cc.Label)
		let addCoinStartPos = txt_addCoin.position
		
		let userId = -1
		
	    target.AnimAddCoin = function(data,timer){
			timer = timer || 1
			let rnum= math.modf(data/100)
			if(rnum == 0) { 
				return
			}
			txt_subCoin.active =(rnum < 0)
			txt_addCoin.active =(rnum > 0)
			
			let ob = null		
			
			if(rnum < 0) {
				txt_subCoin.text = G.Tool.UserHelper.ToCash(data)
				ob = txt_subCoin
	} 
		else{
				txt_addCoin.text ="+"+ G.Tool.UserHelper.ToCash(data)
				ob = txt_addCoin
			}
	
			ob.position = addCoinStartPos		
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sequence:Append(ob:DOMove(addCoinStartPos + cc.v3(0,75,0), 1.2))
	//----->需重新編譯程式碼		sequence:AppendInterval(0.3)
	//----->需重新編譯程式碼		sequence.call( function(){ 
	//----->需重新編譯程式碼			ob.active =(false)
	//----->需重新編譯程式碼		})
		}
		
		
		target.AnimShake = function(dir){
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sequence:Append(root:DOMove(cc.v3(rootStartPos.x + dir,root.position.y,0), 0.1))
	//----->需重新編譯程式碼		sequence:Append(root:DOMove(cc.v3(rootStartPos.x,root.position.y,0), 0.15))
	//----->需重新編譯程式碼		sequence.call( function(){ root.position = rootStartPos })
		}
		
		target.AnimChangeUser = function(){
			root.scale = rootStartScale
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sequence:Append(root:DOScale(cc.v3(0,1.2,1), 0.25))
	//----->需重新編譯程式碼		sequence:Append(root:DOScale(rootStartScale, 0.05))
	//----->需重新編譯程式碼		sequence.call( function(){ root.scale = rootStartScale })
		}
		
		target.GameStart = function(){
	        target.SetActive(false)
			userId = -1
		}
		
	    target.GameEnd = function(data){
	        target.SetActive(false)
			userId = -1
	    }
	//
		target.SetActive = function(enable){
			root.active =(enable)
		}
		
		target.SetGameUser = function(data){
			img_head:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(data.FaceID))
			txt_id.text = hhdz.IDTitle + tostring(data.UserID)
			txt_coin.text = G.Tool.UserHelper.ToCash(data.Score)
		}
		
		target.SetHead = function(faceId){
			img_head:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(faceId))
		}
		
		target.SetUserId = function(id){
			if(txt_id.text != hhdz.IDTitle + tostring(id) ){
				target.AnimChangeUser()
			}
			userId = id
			txt_id.text = hhdz.IDTitle + tostring(id)
		}
		
		target.SetScore = function(score){
			txt_coin.text = G.Tool.UserHelper.ToCash(score)
		}
		
		target.GetPosition = function(){
			return img_head.position
		}
		
		target.GetUserId = function(){
			return userId
		}
		
		
		
		return target
	},


};

module.exports = UIUser
