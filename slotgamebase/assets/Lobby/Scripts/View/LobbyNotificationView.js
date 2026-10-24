var utils = require('Utils');
cc.Class({
  extends: cc.Component,

  properties: {
    speed: 0.5,
    dwellTime: 3,
    canControlNavigator: false,

    notificationMsgs: {
      default: [],
      type: [cc.String]
  },


    containerNode: {
      default: null,
      type: cc.Node
    },

    textNode: {
      default: null,
      type: cc.Node
    },

    /*
    hideButtonNode: {
      default: null,
      type: cc.Node
    },

    expandButtonNode: {
      default: null,
      type: cc.Node
    },
    */

    startPostionY: {
      get: function () {
        return this._startPostionY
      },
      set: function (startPostionY) {
        this._startPostionY = startPostionY
      },
      type: cc.Float,
      visible: false
    },

    movePostionX: {
      get: function () {
        return this._movePostionX
      },
      set: function (movePostionX) {
        this._movePostionX = movePostionX
      },
      type: cc.Float,
      visible: false
    },

    moveInterval: {
      get: function () {
        return this._moveInterval
      },
      set: function (moveInterval) {
        this._moveInterval = moveInterval
      },
      type: cc.Float,
      visible: false
    },

    subscriptions: {
      default: [],
      visible: false
    }
  },

  start: function () {
    /*
    const timerSubscription = Rx.Observable.timer(1000).subscribe(() => {
      this.updateMarqueeLabel(casino.setting.marqueeMessages)
    })

    const marqueeVisible$ = casino.setting.propChange('marqueeVisible')
    const marqueeVisibleSubscription = marqueeVisible$.subscribe((visible) => {
      this.containerNode.active = visible
      this.hideButtonNode.active = visible
      this.expandButtonNode.active = !visible
    })


    this.subscriptions.push(timerSubscription, marqueeVisibleSubscription)
    */
  },
/*
  updateNotification: function () {
    this.notificationView.updateNotification(msg);
  },
  */

  onDestroy: function () {
    /*
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe()
    })
    */
  },

  toggle: function () {
    /*
    if (this.containerNode.active) {
      this.containerNode.active = false
      this.textNode.stopAllActions()

      this.hideButtonNode.active = false
      this.expandButtonNode.active = true

      casino.setting.marqueeVisible = false
    } else {
      this.containerNode.active = true
      this.updateMarqueeLabel(casino.setting.marqueeMessages)

      this.hideButtonNode.active = true
      this.expandButtonNode.active = false

      casino.setting.marqueeVisible = true
    }
    */
  },

  updateNotification: function (list) {
    this.notificationMsgs = list;
    const valueLabel = this.textNode.getComponent(cc.Label);

    this.startPostionY = 0;
    this.movePostionX = this.textNode.x;
    this.moveInterval = this.node.height;

    if (list.length <= 0) {
      valueLabel.string = '';
      this.textNode.stopAllActions();
    } else if (list.length >= 1){
      valueLabel.string = list[0];
      this.startMove();
    }
  },

  startMove: function () {
    this.textNode.y = this.moveInterval;

    this.textNode.stopAllActions();
    this.textNode.runAction(
      this.moveAction(
        this.movePostionX,
        this.startPostionY,
        this.moveInterval,
        this.speed,
        this.dwellTime,
        this.changeText
      )
    )
  },

  changeText: function () {
    const valueLabel = this.textNode.getComponent(cc.Label);
    
    if (this.notificationMsgs.length > 1) {
      let message = this.notificationMsgs.shift();
      this.notificationMsgs.push(message);
    }

    valueLabel.string = this.notificationMsgs[0];

    this.startMove();
  },

  moveAction: function (movePostionX, startPostionY, moveInterval, speed, dwellTime, callBack) {
    return cc.sequence(
      cc.moveTo(speed, cc.p(movePostionX, startPostionY)),
      cc.delayTime(dwellTime),
      cc.moveTo(speed, cc.p(movePostionX, -moveInterval)),
      cc.place(cc.p(movePostionX, moveInterval)),
      cc.callFunc(callBack, this)
    )
  }
})


