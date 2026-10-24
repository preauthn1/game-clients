cc.Class({
    extends: cc.Component,

    editor : {
        executeInEditMode : true,
        menu : 'Action/UISlotAction'
    },

    properties: {
        index: 0,

        actionName: "",

        startAction: {
            default: [],
            type: cc.Integer,
            displayName: "按下開始按鈕",
        },

        startStopAccAction1: {
            default: [],
            type: cc.Integer,
            displayName: "累積1軸 開始停止",
        },

        startStopAccAction2: {
            default: [],
            type: cc.Integer,
            displayName: "累積2軸 開始停止",
        },
        
        startStopAccAction3: {
            default: [],
            type: cc.Integer,
            displayName: "累積2軸 開始停止",
        },

        stopAccAction1: {
            default: [],
            type: cc.Integer,
            displayName: "累積1軸 停止",
        },

        stopAccAction2: {
            default: [],
            type: cc.Integer,
            displayName: "累積2軸 停止",
        },

        stopAccAction3: {
            default: [],
            type: cc.Integer,
            displayName: "累積3軸 停止",
        },
        
        startStopAction1: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸1 開始停止",
        },

        startStopAction2: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸2 開始停止",
        },
        
        startStopAction3: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸3 開始停止",
        },

        stopAction1: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸1 停止",
        },

        stopAction2: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸2 停止",
        },
        
        stopAction3: {
            default: [],
            type: cc.Integer,
            displayName: "輪軸3 停止",
        },        
    },
});
