cc.Class({
    extends: cc.Component,

    properties: {
        topPoint: cc.Node,
        bottomPoint: cc.Node,
        leftPoint: cc.Node,
        rightPoint: cc.Node,

        longTopPoint: cc.Node,
        longBottomPoint: cc.Node,
        longLeftPoint: cc.Node,
        longRightPoint: cc.Node,

        pointSpacing: {
            default: 2,
            visible: false,
        },
        h_Expend: {
            default: 5,
            visible: false,
        },
        v_Expend: {
            default: 3,
            visible: false,
        },
        cornerCount: {
            default: 2,
            visible: false,
        },

        linearPathList: {
            default: [],
            visible: false,
        },
        specialPathList: {
            default: [],
            visible: false,
        },
    },
});