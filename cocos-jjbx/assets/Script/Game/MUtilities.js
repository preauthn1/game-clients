
var MUtilities = {
	extends: cc.Component,

// 調整文字大小
// lengthMax = 超過文字長度開始縮減
// percentCoe = 超過文字長度縮減百分比係數(1% = 0.01)
	AdjustTextSize(uiText, lengthMax, percentCoe){
	// 檢查是否超過文字長度
		if(uiText.string.length > lengthMax){
			let length = uiText.string.length - lengthMax
			let value = 1 - (percentCoe * length)
			uiText.scale = 1 * value
	} 
	else{
			uiText.scale = 1
		}
	},


};

module.exports = MUtilities
