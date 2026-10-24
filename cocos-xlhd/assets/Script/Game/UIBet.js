var G=require("Global");
var GameG=require("GameGlobal");
var poolCount=100;
var gameLayer=null;

function UIBet(index, root, rootFront) {
    gameLayer=require("GameLayer");

    let canvas=cc.find("Canvas/GameLayer");
    let perfab=cc.find("GameLayer/CastPool/PfCast", canvas);

    let anchor_start=cc.find("GameLayer/downMune/users", canvas);

	this.root = root


    let txt_all=cc.find("TextAll", rootFront).getComponent(cc.Label);
    let txt_my=cc.find("TextMy", rootFront).getComponent(cc.Label);
    let luckyStar=cc.find("Star", rootFront).getComponent(cc.Sprite);
    let luckyStarStartPos=luckyStar.position;

    let btn=root.getComponent(cc.Button);
    let range=cc.find("Range", root);
    let blink=cc.find("blink", root).getComponent(cc.Sprite);
    let luckyStarEffect=cc.find("LuckyStarEffect", root);
    let luckyStarEffectPos=luckyStarEffect.position;
    luckyStarEffect.active=false;

    let pool=[];
    let roadmap=[];
    let castBetAll=0;
    let castBetMy=0;
    let useIndex=0;
    let callback=null;

    this.SetCallback=function (data) { callback=data; }
    btn.node.on('click', function () { callback(index); })

    let CreateClone=function (index) {
        let clone=cc.instantiate(perfab);
        if (clone == null) {
            return null;
        }
        clone.parent=perfab.parent;
        clone.position=cc.v3(0, 0, 0);
        clone.scale=1;

        pool[index]={};
        pool[index].root=clone;
        pool[index].btn=cc.find("btn", clone).getComponent(cc.Button);
        pool[index].img=cc.find("btn", clone).getComponent(cc.Sprite);
        pool[index].bet=cc.find("bet", clone).getComponent("TextControl");
        pool[index].use=false;	//使用中
        pool[index].userId=0;
    };

    let RecycleCastBetChip=function (i) {
        pool[i].use=false;
        pool[i].count=0;
        pool[i].userId=0;
        pool[i].bettype=0;
        pool[i].root.active=false;
    };

    for (let i=1; i<=poolCount; ++ i) {
        CreateClone(i);
    }

    let GetCurrentChip=function (num, index) {
        for (let k in (pool)) {
            let v=pool[k];

            if (v.use == false) {
                v.use=true;
                v.bet.text=gameLayer.MoneyText(num);
                v.count=num;
                v.root.active=true;
				v.root.setSiblingIndex(-1)
                //v.root.setSiblingIndex(- 1);//v.root.SetAsLastSibling()
                v.root.angle=0;
                GameG.SetImageSprite(v.img, G.GetGamePName(), xlhd.gameData.GetBetBtnImg(xlhd.dtBaseBet[index]) + "_2");
                return v;
            }
        }
        return null;
    };

    let GetCastBetChip=function (num, index) {
        let clone=GetCurrentChip(num, index);
        if (clone == null) {
            // 从头开始
            for (let k in (pool)) {
                let v=pool[k];

                if (v.userId != GameG.getUserID()) {
                    if (k>useIndex) {
                        useIndex=k;
                        if (useIndex>=pool.length) {
                            useIndex=0;
                        }
                        v.use=false;
                        break
                    }
                }
            }
            clone=GetCurrentChip(num, index);
        }
        if (clone == null) {
            CreateClone(pool.length + 1);
            clone=GetCurrentChip(num, index);
        }

        return clone;
    };

    let GetCastBetRange=function (root) {
		let targetPos = GameG.LocalConvertWorldPointAR(range)
		let targetPosX = targetPos.x 
		let rangeX = (Math.random() - 0.5) * (range.width - root.width)
		targetPosX = targetPosX + rangeX

		let targetPosY = targetPos.y
		let rangeY = (Math.random() - 0.5) * (range.height - root.height)
		targetPosY = targetPosY + rangeY

		return cc.v3(targetPosX,targetPosY)
    };

    let IsCanPlayAudio=true;
    let playAudio=function () {
        if (IsCanPlayAudio == true) {
            IsCanPlayAudio=false;
            GameG.PlayGameSound("adAddCastMax");
            setTimeout(function () {
                IsCanPlayAudio=true;
            }, 200);//DelayInvoke(0.2, function ()...
        }
    };

    this.GetCastBetAll=function () {
        return castBetAll;
    };
    // 下注失敗的時候回收籌碼
    this.ClearBetRetError=function (num, userId) {
        for (let k in (pool)) {
            let v=pool[k];

            if (v.use == true && v.userId == userId && v.count == num) {
                RecycleCastBetChip(k);
                return
            }
        }
    };

    this.ShowCastBetChip=function (num, bettype, index, show, startPos, userId) {
        if (num == 0) {
            return
        }
        startPos=startPos || GameG.LocalConvertWorldPointAR(anchor_start);
        let obj=GetCastBetChip(num, index);
        obj.userId=userId;
        obj.index=index;
        obj.bettype=bettype;
        if (userId == GameG.getUserID()) {
            GameG.PlayGameSound("adAddCast")
        }
        else {
            playAudio()
        }

        if (show == false) {
            obj.root.position=GetCastBetRange(obj.root)
        } else {
            obj.root.stopAllActions();
            obj.root.position=startPos;
            obj.root.scale=1;

            let sequence=cc.tween(obj.root);
            sequence.to(0.5, { position : GetCastBetRange(obj.root) }, { easing : 'quadInOut' });
            sequence.to(0.5, { scale : 0.8 }, { easing : 'quadInOut' });
            sequence.start();
        }
    };

    this.ShowClearBetChip=function (userId, targetPos) {

        targetPos=targetPos || anchor_start.position
        for (let k in (pool)) {
            let v=pool[k]

            if (v.use == true && v.userId == userId) {
                playAudio();

                obj.root.stopAllActions();
                let sequence=cc.tween(obj.root);
                sequence.to(0.5, { position : targetPos }, { easing : 'quadInOut' });
                sequence.call(function () {
                    RecycleCastBetChip(k);
                });
                sequence.start();
            }
        }
    };

    //桌面底注
    this.ShowBroadCastBetAll=function (num) {
        castBetAll=num;
        txt_all.string=gameLayer.MoneyText(num || 0)
    };
    //自己底注
    this.ShowBroadCastBetMy=function (num) {
        castBetMy=num
        txt_my.string=gameLayer.MoneyText(num || 0)
    };

    let CheckShowWinChip=function (data, userId) {
        //庄家全部回收
        if (userId == null) {
            return true;
            //指定回收
        }
        else if (data.userId == userId) {

            return true;
        }
        return false;
    };

    //庄家赔付
    this.CloneWinChip=function (bettype) {
        let self=this;
        let pos = GameG.LocalConvertWorldPointAR(xlhd.gameLayer.uiRoot.zhuang)
        let sequence=null;
        for (let i=0; i<=pool.length; i ++) {
            let obj=pool[i];
            if (obj) {                                    
                if (obj.use && obj.bettype == bettype) {
                    if (sequence == null){
                        sequence = GameG.NewTween(this.root)
                    }
                    sequence.delay(0.005);
                    sequence.call(function () {
                        self.ShowCastBetChip(obj.count, obj.bettype, obj.index, true, pos, obj.userId);
                    });
                }
            }
        }
		if (sequence)
            sequence.start();
    };


    //赢钱动画
    this.ShowWinChip=function (targetPos, userId) {
        let delayTimer = 0;
		let isPlayAudio = false

		targetPos = targetPos || GameG.LocalConvertWorldPointAR(anchor_start)
        for (let k in (pool)) {
            let v=pool[k];
            if (v.use == true && CheckShowWinChip(v, userId) == true) {
                v.use=false;
				delayTimer = delayTimer + 0.01
				let sequence = GameG.NewTween(v.root)
                sequence.delay(0.005);
                sequence.call(function () {
					if (isPlayAudio == false){
						isPlayAudio = true
						playAudio()
                    }
                })
                sequence.to(0.7, { position : targetPos }, { easing : 'quadInOut' });
                sequence.call(function () {
                    RecycleCastBetChip(k);
                });
                sequence.start();
            }
        }
    };

    this.ChangeChipUserId=function (data, iswin) {
        for (let k in (pool)) {
            let v=pool[k]

            if (v.use == true) {
                if (iswin == true && v.userId != GameG.getUserID()) {
                    v.userId=0
                }
                else if (iswin == false) {

                    v.userId=0
                }
            }
        }
        for (let _ in (data)) {
            let userId=data[_];

            for (let k in (pool)) {
                let v=pool[k];

                if (v.userId == 0) {
                    v.userId=userId;
                    break
                }
            }
        }
    };

    this.GameStart=function () {
        this.ShowBroadCastBetAll(0);
        this.ShowBroadCastBetMy(0);
        this.StopLuckyStar();
        for (let k in (pool)) {
            let v=pool[k];

            RecycleCastBetChip(k)
        }
    };

    this.GameEnd=function (data) {
        this.ShowBroadCastBetAll(0);
        this.ShowBroadCastBetMy(0);
        this.StopLuckyStar();
        IsCanPlayAudio=true;
        //AZLDC -- CS.TimeManager.Instance.StopAllDelayInvoke()
    };

    let sequenceStar=null
    this.ShowLuckyStar=function () {
        if (sequenceStar != null) {
            return
        }
        let self=this
        luckyStarEffect.active=true
        luckyStarEffect.position=luckyStarEffectPos
        luckyStar.active=true
        luckyStar.color=cc.Color.WHITE;
        luckyStar.opacity = 0;
        let sequence=cc.tween(luckyStarEffect);
        sequence.to(1.5, { position : luckyStar.position }, { easing : 'circIn' });
        sequence.to(0.3, { color : cc.Color(luckyStar.color.r, luckyStar.color.g, luckyStar.color.b, 1) }, { easing : 'circIn' });
        sequence.call(function () {
            self.ShowLuckyStarLoop();
        });
    };

    this.ShowLuckyStarLoop=function () {
        luckyStarEffect.active=false;
        sequenceStar=cc.tewwn(luckyStar);
        sequenceStar.to(0.5, { position : cc.v3(0, 0, 25) });
        sequenceStar.to(1, { position : cc.v3(0, 0, - 10) });
        sequenceStar.to(0.5, { position : cc.v3(0, 0, 0) });
        sequenceStar.to(1, { position : cc.v3(0, 0, - 10) });
        sequenceStar.to(0.5, { position : cc.v3(0, 0, 25) });
        sequenceStar.repeatForever();
        sequenceStar.start();
    };


    this.StopLuckyStar=function () {
        luckyStarEffect.active=false;
        luckyStar.active=false;
        luckyStar.scale=1;
        if (sequenceStar != null) {
            sequenceStar.stop();
            sequenceStar=null;
        }
    };

    // 开始赢家闪烁
    this.ShowBlinkWin=function (times) {
        blink.node.active=true;
		blink.node.opacity = 0

        let self=this
        let sequence=cc.tween(blink.node);
		for(let i = 1; i <= times; ++i ){
            sequence.to(0.3, { opacity : 255 });
            sequence.delay(0.4);
            sequence.to(0.3, { opacity : 0 });
        }
        sequence.call(function () {
            self.StopBlinkWin();
        });
        sequence.start();      
    };

    // 停止赢家闪烁
    this.StopBlinkWin=function () {
        blink.node.active=false;
		blink.node.opacity = 255
    }
};

module.exports=UIBet;
