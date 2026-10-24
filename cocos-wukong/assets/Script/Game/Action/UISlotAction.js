cc.Class({
    extends: cc.Component,

    properties: {
        index: 0,

        actionName: "",

        startAction: {
            default: [],
            type: cc.Integer,
            displayName: "按下開始按鈕",
        },

        startStopAction1: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸1開始停止",
        },

        startStopAction2: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸2開始停止",
        },
        
        startStopAction3: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸3開始停止",
        },

        stopAction1: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸1停止",
        },

        stopAction2: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸2停止",
        },
        
        stopAction3: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸3停止",
        },

        stopAllAction: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸全部停止",
        },
    },
});
