/** 自動旋轉次數(-1.無限, 0.手動, 1~次數) */
let currentCount = 0

/** 用途: 自動旋轉次數選擇 */
var UIAutoSpin = {
    /** 初始化 */
    Init(){

    },
    /** 顯示介面(目前無此介面，故直接切換模式) */
    Show(){
        if(this.GetIsAutoMode() == true){
            this.SetManual()
        }
        else{
            this.SetInfinite()
        }
    },
    /** 輪軸開始轉動 */
    StartSpin(){
        if(currentCount > 0) {
            currentCount = currentCount -1
        }
    },
    /** 輪軸停止轉動 */
    StopSpin(){	
        
    },
    /** 取得是否自動模式 */
    GetIsAutoMode(){
		if(currentCount == 0){
			return false
        } 
        return true
    },
    /** 取得剩餘次數 */
    GetLeftCount(){
        return currentCount
    },
    /** 設置手動模式 */
    SetManual(){
        currentCount = 0
    },
    /** 設置自動模式 */
    SetInfinite(){
        currentCount = -1
    }
};

module.exports = UIAutoSpin;