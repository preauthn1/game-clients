var path = cc.Class({
    name: "path",
    properties: {
        start: null,
        end: null,
    },

    ctor: function (start, end) {
        this.start = start;
        this.end = end;
    },
});

cc.Class({
    extends: cc.Component,
    extends: require('RouteView'),

    properties: {

    },

    onLoad: function () {
        this.pointSpacing = 40;
        this.h_Expend= 5;
        this.v_Expend= 3;
        this.cornerCount= 2;
        this.generatePath();
        console.log( this.linearPathList.length );
    },

    getPath(pathId) {
        var prefix = pathId.substring(0, 1);
        var pathNumber = pathId.substring(1);
        switch (prefix) {
            case "L":
                return this.linearPathList[pathNumber];

            case "S":
                return this.specialPathList[pathNumber];

            default:
                return null;
        }
    },

    generatePath() {
        this.linearPathList = [];
        this.specialPathList = [];
        this.linearPathList.push(new path(this.leftPoint.position, this.rightPoint.position));
        this.linearPathList.push(new path(this.rightPoint.position, this.leftPoint.position));
        this.linearPathList.push(new path(this.topPoint.position, this.bottomPoint.position));
        this.linearPathList.push(new path(this.bottomPoint.position, this.topPoint.position));

        this.specialPathList.push(new path(this.leftPoint.position, this.longRightPoint.position));
        this.specialPathList.push(new path(this.rightPoint.position, this.longLeftPoint.position));
        this.specialPathList.push(new path(this.topPoint.position, this.longBottomPoint.position));
        this.specialPathList.push(new path(this.bottomPoint.position, this.longTopPoint.position));

        for (let v = 0; v <= this.v_Expend; v++) {
            var v_offset = new cc.v2(0, v * this.pointSpacing);

            if (v == 0) {
                for (let h = 0; h <= this.h_Expend; h++) {
                    var h_offset = new cc.v2(h * this.pointSpacing, 0);
                    this.linearPathList.push(new path(this.leftPoint.position, this.addRoute(this.topPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.leftPoint.position, this.addRoute(this.bottomPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.rightPoint.position, this.deductRoute(this.topPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.rightPoint.position, this.deductRoute(this.bottomPoint.position , h_offset)));
                }

                for (let v2 = 1; v2 <= this.v_Expend; v2++) {
                    var v2_offset = new cc.v2(0, v2 * this.pointSpacing);

                    this.linearPathList.push(new path(this.leftPoint.position, this.addRoute(this.rightPoint.position , v2_offset)));
                    this.linearPathList.push(new path(this.leftPoint.position, this.deductRoute(this.rightPoint.position , v2_offset)));
                    this.linearPathList.push(new path(this.rightPoint.position, this.addRoute(this.leftPoint.position , v2_offset)));
                    this.linearPathList.push(new path(this.rightPoint.position, this.deductRoute(this.leftPoint.position , v2_offset)));
                }
            } else {
                for (let h = 0; h <= this.h_Expend; h++) {
                    var h_offset = new cc.v2(h * this.pointSpacing, 0);

                    this.linearPathList.push(new path(this.addRoute(this.leftPoint.position , v_offset), this.addRoute(this.bottomPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.deductRoute(this.leftPoint.position , v_offset), this.addRoute(this.topPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.addRoute(this.rightPoint.position , v_offset), this.deductRoute(this.bottomPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.deductRoute(this.rightPoint.position , v_offset), this.deductRoute(this.topPoint.position , h_offset)));
                }

                for (let v2 = -this.v_Expend; v2 <= this.v_Expend; v2++) {
                    if (v <= this.v_Expend - this.cornerCount || v2 >= this.cornerCount - this.v_Expend) {
                        var v2_offset = new cc.v2(0, v2 * this.pointSpacing);

                        this.linearPathList.push(new path(this.addRoute(this.leftPoint.position , v_offset), this.addRoute(this.rightPoint.position , v2_offset)));
                        this.linearPathList.push(new path(this.deductRoute(this.leftPoint.position , v_offset), this.addRoute(this.rightPoint.position , v2_offset)));
                        this.linearPathList.push(new path(this.addRoute(this.rightPoint.position , v_offset), this.addRoute(this.leftPoint.position , v2_offset)));
                        this.linearPathList.push(new path(this.deductRoute(this.rightPoint.position , v_offset), this.addRoute(this.leftPoint.position , v2_offset)));
                    }
                }
            }
        }

        for (let h = 0; h <= this.h_Expend; h++) {
            var h_offset = new cc.v2(h * this.pointSpacing, 0);

            if (h == 0) {
                for (let v = 0; v <= this.v_Expend; v++) {

                    this.linearPathList.push(new path(this.topPoint.position, this.deductRoute(this.leftPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.topPoint.position, this.deductRoute(this.rightPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.bottomPoint.position, this.addRoute(this.leftPoint.position , h_offset)));
                    this.linearPathList.push(new path(this.bottomPoint.position, this.addRoute(this.rightPoint.position , h_offset)));
                }

                for (let h2 = 1; h2 <= this.h_Expend; h2++) {
                    var h2_offset = new cc.v2(h2 * this.pointSpacing, 0);

                    this.linearPathList.push(new path(this.topPoint.position, this.addRoute(this.bottomPoint.position , h2_offset)));
                    this.linearPathList.push(new path(this.topPoint.position, this.deductRoute(this.bottomPoint.position , h2_offset)));
                    this.linearPathList.push(new path(this.bottomPoint.position, this.addRoute(this.topPoint.position , h2_offset)));
                    this.linearPathList.push(new path(this.bottomPoint.position, this.deductRoute(this.topPoint.position , h2_offset)));
                }
            } else {
                for (let v = 0; v <= this.v_Expend; v++) {
                    var v_offset = new cc.v2(0, v * this.pointSpacing);

                    this.linearPathList.push(new path(this.addRoute(this.topPoint.position , h_offset), this.deductRoute(this.leftPoint.position , v_offset)));
                    this.linearPathList.push(new path(this.deductRoute(this.topPoint.position , h_offset), this.deductRoute(this.rightPoint.position , v_offset)));
                    this.linearPathList.push(new path(this.addRoute(this.bottomPoint.position , h_offset), this.addRoute(this.leftPoint.position , v_offset)));
                    this.linearPathList.push(new path(this.deductRoute(this.bottomPoint.position , h_offset), this.addRoute(this.rightPoint.position , v_offset)));
                }

                for (let h2 = -this.h_Expend; h2 <= this.h_Expend; h2++) {
                    if (h <= this.h_Expend - this.cornerCount || h2 >= this.cornerCount - this.h_Expend) {
                        var h2_offset = new cc.v2(h2 * this.pointSpacing, 0);

                        this.linearPathList.push(new path(this.addRoute(this.topPoint.position , h_offset), this.addRoute(this.bottomPoint.position , h2_offset)));
                        this.linearPathList.push(new path(this.deductRoute(this.topPoint.position , h_offset), this.addRoute(this.bottomPoint.position , h2_offset)));
                        this.linearPathList.push(new path(this.addRoute(this.bottomPoint.position , h_offset), this.addRoute(this.topPoint.position , h2_offset)));
                        this.linearPathList.push(new path(this.deductRoute(this.bottomPoint.position , h_offset), this.addRoute(this.topPoint.position , h2_offset)));
                    }
                }
            }
        }
    },

    addRoute(original, addOn){
        var positionX = original.x + addOn.x;
        var positionY = original.y + addOn.y;

        return new cc.v2(positionX, positionY);
    },

    deductRoute(original, addOn){
        var positionX = original.x - addOn.x;
        var positionY = original.y - addOn.y;

        return new cc.v2(positionX, positionY);
    },
});