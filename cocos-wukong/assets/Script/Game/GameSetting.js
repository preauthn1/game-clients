cc.Class({
    extends: cc.Component,

    properties: {
		reelSpeed: {
			default: 150,
			tooltip: "輪軸轉動的速度",
		},

		autoStopTime: {
			default: 5,
			tooltip: "論軸開始滾動後，多久時間後自動停止",
		},

		autoStopTimeInterval: {
			default: 0.5,
			tooltip: "自動停止時，每一個輪軸停止間格時間",
		},

		autoSpinStartTime: {
			default: 1,
			tooltip: "停止後經過多久自動Spin",
		},		

		autoSpinStopTime: {
			default: 1,
			tooltip: "自動Spin間隔多久後停止時間",
		},

		autoSpinInsertCoinsTimeInterval: {
			default: 0.5,
			tooltip: "自動Spin投幣表現間隔時間",
		},

		symbolHeightScale: {
			default: 0.85,
			tooltip: "同一輪軸符號間格縮放",
        },
        
		resultDelayShowTime: {
			default: 1,
			tooltip: "停輪後延遲多久後開始顯示",
        },
                
		resultShowOneTime: {
			default: 3,
			tooltip: "顯示一條線的間隔時間",
        },
        
        winScoreShowTime: {
			default: 0.9,
			tooltip: "贏錢金額增加動畫的顯示時間",
		},
		
		reelStopButton: {
			default: true,
			tooltip: "點輪軸是否有停止該輪著功能",
		},
    },
});
