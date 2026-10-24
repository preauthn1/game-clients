//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G=require("Global");
var GameG = require("GameGlobal")
//local SingleCount = 20;
var BeadRoadCount=30;
var BigRoadCount=30;
var DayanluCount=15;
var XiaoyanluCount=15;
var ZhanglangluCount=15;
var DayanluRight=0;
var XiaoyanluRight=0;
var ZhanglangluRight=0;
var DayanluZhiLuo=false;
var XiaoyanluZhiLuo=false;
var ZhanglangluZhiLuo=false;
var BigRoadData=[];
var BigRoadDataColumn=1;
var BigRoadDataRow=1;
var eyeRed="eye_red";
var eyeBlue="eye_blue";
var xiaoyanluBlue="xiaoyanlu_blue";
var xiaoyanluRed="xiaoyanlu_red";
var zhanglangluBlue="zhanglanglu_blue";
var zhanglangluRed="zhanglanglu_red";

var btn_close=null;
var btn_closeBG=null;

var txt_long=null;
var txt_he=null;
var txt_hu=null;
var txt_total=null;

var img_rate=null;
var img_rateMid=null;
var attach_rateMid=null;
var txt_rateLong=null;
var txt_rateHu=null;

var nextLongDayanlu=null;
var nextLongXiaoyanlu=null;
var nextLongZhanglanglu=null;

var nextHuDayanlu=null;
var nextHuXiaoyanlu=null;
var nextHuZhanglanglu=null;

var LongHuMin=null;
var HeMin=null;
var LongHuMax=null;
var HeMax=null;

var Rate=[];
var BigRoadLast = null;


//珠盘路
var BeadRoadObj = {}
var BeadRoad = []

//大路
var BigRoadObj = {}
var BigRoad = []
var BigRoadUse

//大眼路
var DayanluObj = {}
var Dayanlu = []
var DayanluColumnUse
var DayanluRowUse = 1
var DayanluRight = 0

//小眼路
var XiaoyanluObj = {}
var Xiaoyanlu = []
var XiaoyanluColumnUse = 1
var XiaoyanluRowUse = 1
	
//蟑螂路
var ZhanglangluObj = {}
var Zhanglanglu = []
var ZhanglangluColumnUse = 1
var ZhanglangluRowUse = 1

var ChartLayer={
    extends:cc.Component,

    init () {
        this.initUi();
    },

    onExit() {
        this.root.active=false;
    },

    initUi() {

        let canvas=cc.find("Canvas");
        let self=this;
        let root=cc.find("GameLayer/ChartLayer", canvas);
        this.root = root;

        btn_close=cc.find("ButtonClose", root).getComponent(cc.Button);
        btn_close.node.on('click', function () {
            xlhd.gameAudio.btnClick();
            self.onExit();
        });
        btn_closeBG=cc.find("CloseBG", root).getComponent(cc.Button);
        btn_closeBG.node.on('click', function () {
            self.onExit();
        });

        txt_long=cc.find("Down/TextLong", root).getComponent(cc.Label);
        txt_he=cc.find("Down/TextHe", root).getComponent(cc.Label);
        txt_hu=cc.find("Down/TextHu", root).getComponent(cc.Label);
        txt_total=cc.find("Down/TextTotal", root).getComponent(cc.Label);

        img_rate=cc.find("Rate", root).getComponent(cc.Sprite);
        img_rateMid=cc.find("RateMid", root).getComponent(cc.Sprite);
        attach_rateMid=cc.find("Rate/AttachMid", root);
        txt_rateLong=cc.find("RateMid/TextLong", root).getComponent(cc.Label);
        txt_rateHu=cc.find("RateMid/TextHu", root).getComponent(cc.Label);

        nextLongDayanlu=cc.find("NextRound/NextLongDayanlu", root).getComponent(cc.Sprite);
        nextLongXiaoyanlu=cc.find("NextRound/NextLongXiaoyanlu", root).getComponent(cc.Sprite);
        nextLongZhanglanglu=cc.find("NextRound/NextLongZhanglanglu", root).getComponent(cc.Sprite);

        nextHuDayanlu=cc.find("NextRound/NextHuDayanlu", root).getComponent(cc.Sprite);
        nextHuXiaoyanlu=cc.find("NextRound/NextHuXiaoyanlu", root).getComponent(cc.Sprite);
        nextHuZhanglanglu=cc.find("NextRound/NextHuZhanglanglu", root).getComponent(cc.Sprite);

        LongHuMin=cc.find("TableLimit/LongHuMin", root).getComponent(cc.Label);
        HeMin=cc.find("TableLimit/HeMin", root).getComponent(cc.Label);
        LongHuMax=cc.find("TableLimit/LongHuMax", root).getComponent(cc.Label);
        HeMax=cc.find("TableLimit/HeMax", root).getComponent(cc.Label);

        //胜率用纪录
        Rate=[];

        //珠盘路
        BeadRoad=[];
        BeadRoadObj = {};
        BeadRoadObj.grid={};
        BeadRoadObj.grid.rect=cc.find("BeadRoad/ScrollRect/Grid", root);
        BeadRoadObj.grid.layout=cc.find("BeadRoad/ScrollRect/Grid", root).getComponent(cc.Layout);
		BeadRoadObj.grid.perfab = cc.find("BeadRoad/ScrollRect/Grid/Content",root);
		BeadRoadObj.grid.initPos = BeadRoadObj.grid.rect.position;  
        for (let i=1; i<=BeadRoadCount; ++ i) {
            self.CreateBeadRoad();
        }

        //大路
        BigRoad=[];
        BigRoadUse=1;
        BigRoadObj = {};
		BigRoadObj.grid = {};
		BigRoadObj.grid.rect =cc.find("BigRoad/ScrollRect/Grid", root);
		BigRoadObj.grid.layout =cc.find("BigRoad/ScrollRect/Grid", root).getComponent(cc.Layout);
		BigRoadObj.grid.perfab = cc.find("BigRoad/ScrollRect/Grid/Content",root);
		BigRoadObj.grid.initPos = BigRoadObj.grid.rect.position;
        for (let i=1; i<=BigRoadCount; ++ i) {
            self.CreateBigRoad();
        }

        //大眼路
        Dayanlu=[];
        DayanluColumnUse=1;
        DayanluRowUse=1;
        DayanluObj = {};
		DayanluObj.grid = {};
		DayanluObj.grid.rect =cc.find("Dayanlu/ScrollRect/Grid", root);
		DayanluObj.grid.layout =cc.find("Dayanlu/ScrollRect/Grid", root).getComponent(cc.Layout);
		DayanluObj.grid.perfab = cc.find("Dayanlu/ScrollRect/Grid/Content",root);
		DayanluObj.grid.initPos = DayanluObj.grid.rect.position;
        for (let i=1; i<=DayanluCount; ++ i) {
            self.CreateDayanlu();
        }

        //小眼路
        Xiaoyanlu=[];
        XiaoyanluColumnUse=1;
        XiaoyanluRowUse=1;
        XiaoyanluObj = {};
		XiaoyanluObj.grid = {};
		XiaoyanluObj.grid.rect =cc.find("Xiaoyanlu/ScrollRect/Grid", root);
		XiaoyanluObj.grid.layout =cc.find("Xiaoyanlu/ScrollRect/Grid", root).getComponent(cc.Layout);
		XiaoyanluObj.grid.perfab = cc.find("Xiaoyanlu/ScrollRect/Grid/Content",root);
		XiaoyanluObj.grid.initPos = XiaoyanluObj.grid.rect.position;
        for (let i=1; i<=XiaoyanluCount; ++ i) {
            self.CreateXiaoyanlu();
        }

        //蟑螂路
        Zhanglanglu=[];
        ZhanglangluColumnUse=1;
        ZhanglangluRowUse=1;
		ZhanglangluObj = {};
		ZhanglangluObj.grid = {};
		ZhanglangluObj.grid.rect =cc.find("Zhanglanglu/ScrollRect/Grid", root);
		ZhanglangluObj.grid.layout =cc.find("Zhanglanglu/ScrollRect/Grid", root).getComponent(cc.Layout);
		ZhanglangluObj.grid.perfab = cc.find("Zhanglanglu/ScrollRect/Grid/Content",root);
		ZhanglangluObj.grid.initPos = ZhanglangluObj.grid.rect.position;
        for (let i=1; i<=ZhanglangluCount; ++ i) {
            self.CreateZhanglanglu();
        }
    },

    updateLimit(min, longMax, heMax) {
        LongHuMin.string=xlhd.gameLayer.MoneyText(min);
        HeMin.string=xlhd.gameLayer.MoneyText(min);
        LongHuMax.string=xlhd.gameLayer.MoneyText(longMax);
        HeMax.string=xlhd.gameLayer.MoneyText(heMax);
    },

    CreateClone(perfab) {
        let clone=cc.instantiate(perfab);
        if (clone == null) {
            return null
        }
        clone.parent=(perfab.parent);
        clone.position=cc.v3(0, 0, 0);
        clone.scale=1;

        return clone
    },

    CreateBeadRoad() {
        let perfab=cc.find("BeadRoad/ScrollRect/Grid/Content", this.root);
        let clone=this.CreateClone(perfab);

		let index = BeadRoad.length
		if (index == 0)
			index = 1		
		BeadRoad[index] = []
        clone.active =(true)
        
		if (BeadRoadObj.grid.root == null)
			BeadRoadObj.grid.root = []        
        BeadRoadObj.grid.root[index] = clone

        for (let j=1; j<=clone.childrenCount; ++ j) {
            BeadRoad[index][j]={};
            BeadRoad[index][j].root=cc.find("Item_" + j, clone);
            BeadRoad[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            BeadRoad[index][j].img.node.active=false;
            BeadRoad[index][j].resultUse = false;
        }
        xlhd.gameLayer.CreateBeadRoad();
    },

    CreateBigRoad() {
        let perfab=cc.find("BigRoad/ScrollRect/Grid/Content", this.root);
        let clone=this.CreateClone(perfab);

		let index = BigRoad.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		BigRoad[index] = []
		clone.active =(true)

		if (BigRoadObj.grid.root == null)
			BigRoadObj.grid.root = []
		BigRoadObj.grid.root[index] = clone

        for (let j=1; j<=clone.childrenCount; ++ j) {
            BigRoad[index][j]={};
            BigRoad[index][j].root=cc.find("Item_" + j, clone);
            BigRoad[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            BigRoad[index][j].txt=cc.find("Item_" + j + "/Text", clone).getComponent(cc.Label);
            BigRoad[index][j].img.node.active=false;
            BigRoad[index][j].txt.node.active=false;
            BigRoad[index][j].txt.string="";
            BigRoad[index][j].resultUse=0;   //結果
            BigRoad[index][j].columnUse=0;     //
            BigRoad[index][j].HuCount=0;     //和的次数
        }
        xlhd.gameLayer.CreateBigRoad();
    },

    CreateDayanlu() {
        let perfab=cc.find("Dayanlu/ScrollRect/Grid/Content", this.root);
        let clone=this.CreateClone(perfab);

		let index = Dayanlu.length
		if (index == 0)
			index = 1
		clone.name = "Content_" + index
		Dayanlu[index] = []
		clone.active =(true)

		if (DayanluObj.grid.root == null)
			DayanluObj.grid.root = []
		DayanluObj.grid.root[index] = clone

        for (let j=1; j<=clone.childrenCount; ++ j) {
            Dayanlu[index][j]={};
            Dayanlu[index][j].root=cc.find("Item_" + j, clone);
            Dayanlu[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            Dayanlu[index][j].img.node.active=false;
            Dayanlu[index][j].resultUse=0;   //結果
        }
    },

    CreateXiaoyanlu() {
        let perfab=cc.find("Xiaoyanlu/ScrollRect/Grid/Content", this.root);
        let clone=this.CreateClone(perfab);

		let index = Xiaoyanlu.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		Xiaoyanlu[index] = []
		clone.active =(true)

		if (XiaoyanluObj.grid.root == null)
			XiaoyanluObj.grid.root = []
		XiaoyanluObj.grid.root[index] = clone

        for (let j=1; j<=clone.childrenCount; ++ j) {
            Xiaoyanlu[index][j]={};
            Xiaoyanlu[index][j].root=cc.find("Item_" + j, clone);
            Xiaoyanlu[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            Xiaoyanlu[index][j].img.node.active=false;
            Xiaoyanlu[index][j].resultUse=0;   //結果
        }
    },

    CreateZhanglanglu() {
        let perfab=cc.find("Zhanglanglu/ScrollRect/Grid/Content", this.root);
        let clone=this.CreateClone(perfab);

		let index = Zhanglanglu.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		Zhanglanglu[index] = []
		clone.active =(true)

		if (ZhanglangluObj.grid.root == null)
			ZhanglangluObj.grid.root = []
		ZhanglangluObj.grid.root[index] = clone

        for (let j=1; j<=clone.childrenCount; ++ j) {
            Zhanglanglu[index][j]={};
            Zhanglanglu[index][j].root=cc.find("Item_" + j, clone);
            Zhanglanglu[index][j].img=cc.find("Item_" + j + "/Image", clone).getComponent(cc.Sprite);
            Zhanglanglu[index][j].img.node.active=false;
            Zhanglanglu[index][j].resultUse=0;   //結果
        }
    },

    //- 更新界面
    update(data) {

    },

    //- 显示界面
    show() {
        this.root.active=true
    },

    UpdateBeadRoad(result, effect) {
        for (let i=1; i<BeadRoad.length; ++ i) {
            for (let j=1; j<BeadRoad[i].length; ++ j) {
                let obj = BeadRoad[i][j]
                if (obj.resultUse == false) {
                    obj.resultUse = true
                    let gameLayerObj=xlhd.gameLayer.GetBeadRoad(i,j);
                    if (result == 1) {
                        obj.img.node.active=true;
                        GameG.SetImageSprite(obj.img, G.GetGamePName(), "roadmap_blue");
                        gameLayerObj.img.node.active=true;
                        GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), "roadmap_blue");
                    }
                    else if (result == 2) {
                        obj.img.node.active=true;
                        GameG.SetImageSprite(obj.img, G.GetGamePName(), "roadmap_green");
                        gameLayerObj.img.node.active=true;
                        GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), "roadmap_green");
                    }
                    else if (result == 3) {
                        obj.img.node.active=true;
                        GameG.SetImageSprite(obj.img, G.GetGamePName(), "roadmap_red");
                        gameLayerObj.img.node.active=true;
                        GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), "roadmap_red");
                    }
                    else {
                        obj.img.node.active=false;
                    }

                    if (effect == true) {
                        this.ShowEffect(obj.img);
                        this.ShowEffect(gameLayerObj.img);
                    }

                    this.ShowCurrentResult(BeadRoad, i, BeadRoadCount, BeadRoadObj.grid);
                    return
                }
            }
        }

        this.CreateBeadRoad();
        this.UpdateBeadRoad(result, effect);
    },

    UpdateBigRoadData(result, effect) {
        if (result == 2) {
            return;
        }
        let gameLayerNext=xlhd.gameLayer.GetRoadUI().nextRound;

        if (BigRoadDataColumn != 1 || BigRoadDataRow>1) {
            if (BigRoadData[BigRoadDataColumn][BigRoadDataRow - 1] != result) {
                BigRoadDataColumn=BigRoadDataColumn + 1;
                BigRoadDataRow=1;
                this.CloseZhiLuo();
            }
        }
        if (BigRoadData[BigRoadDataColumn] == null) {
            BigRoadData[BigRoadDataColumn]=[];
        }
        BigRoadData[BigRoadDataColumn][BigRoadDataRow]=result;

        //更新大眼路
        if ((BigRoadDataColumn>=2 && BigRoadDataRow>=2) || BigRoadDataColumn>=3)
        {
            if (DayanluZhiLuo) {
                this.UpdateDayanlu(1, effect);
            }
            else if (BigRoadDataRow == 1) {

                let dayanluResult=BigRoadData[BigRoadDataColumn - 1].length == BigRoadData[BigRoadDataColumn - 2].length && 1 || 2;
                this.UpdateDayanlu(dayanluResult, effect);
            }
            else if (BigRoadDataRow>1) {

                let dayanluResult=BigRoadData[BigRoadDataColumn - 1][BigRoadDataRow] != null && 1 || 2;
                this.UpdateDayanlu(dayanluResult, effect);
                if (dayanluResult == 2) {
                    DayanluZhiLuo=true;
                }
            }
        }

        //下局大眼路
        if (BigRoadDataColumn>=2) {
            nextLongDayanlu.node.active=true;
            nextHuDayanlu.node.active=true;
            gameLayerNext.nextLongDayanlu.node.active=true;
            gameLayerNext.nextHuDayanlu.node.active=true;
            let nextlong="";
            let nexthu="";
            let youwu=BigRoadData[BigRoadDataColumn - 1][BigRoadDataRow + 1] == null; //有無
            let qizheng=BigRoadData[BigRoadDataColumn - 1].length == BigRoadData[BigRoadDataColumn].length; //齊整
            if (result == 1) {
                if (DayanluZhiLuo) {
                    nextlong=eyeRed;
                }
                else {
                    nextlong=youwu && eyeBlue || eyeRed;
                }
                nexthu=qizheng && eyeRed || eyeBlue;
            }
            else if (result == 3) {

                if (DayanluZhiLuo) {
                    nexthu=eyeRed;
                }
                else {
                    nexthu=youwu && eyeBlue || eyeRed;
                }
                nextlong=qizheng && eyeRed || eyeBlue;
            }
            GameG.SetImageSprite(nextLongDayanlu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(gameLayerNext.nextLongDayanlu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(nextHuDayanlu, G.GetGamePName(), nexthu);
            GameG.SetImageSprite(gameLayerNext.nextHuDayanlu, G.GetGamePName(), nexthu);
        }


        //更新小眼路
        if ((BigRoadDataColumn>=3 && BigRoadDataRow>=2) || BigRoadDataColumn>=4)
        {
            if (XiaoyanluZhiLuo) {
                this.UpdateXiaoyanlu(1, effect);
            }
            else if (BigRoadDataRow == 1) {

                let xiaoyanluResult=BigRoadData[BigRoadDataColumn - 1].length == BigRoadData[BigRoadDataColumn - 3].length && 1 || 2;
                this.UpdateXiaoyanlu(xiaoyanluResult, effect);
            }
            else if (BigRoadDataRow>1) {

                let xiaoyanluResult=BigRoadData[BigRoadDataColumn - 2][BigRoadDataRow] != null && 1 || 2;
                this.UpdateXiaoyanlu(xiaoyanluResult, effect);
                if (xiaoyanluResult == 2) {
                    XiaoyanluZhiLuo=true;
                }
            }
        }

        //下局小眼路
        if (BigRoadDataColumn>=3) {
            nextLongXiaoyanlu.node.active=true;
            nextHuXiaoyanlu.node.active=true;
            gameLayerNext.nextLongXiaoyanlu.node.active=true;
            gameLayerNext.nextHuXiaoyanlu.node.active=true;
            let nextlong="";
            let nexthu="";
            let youwu=BigRoadData[BigRoadDataColumn - 2][BigRoadDataRow + 1] == null; //有無
            let qizheng=BigRoadData[BigRoadDataColumn - 2].length == BigRoadData[BigRoadDataColumn].length; //齊整
            if (result == 1) {
                if (XiaoyanluZhiLuo) {
                    nextlong=xiaoyanluRed;
                }
                else {
                    nextlong=youwu && xiaoyanluBlue || xiaoyanluRed;
                }
                nexthu=qizheng && xiaoyanluRed || xiaoyanluBlue;
            }
            else if (result == 3) {

                if (XiaoyanluZhiLuo) {
                    nexthu=xiaoyanluRed;
                }
                else {
                    nexthu=youwu && xiaoyanluBlue || xiaoyanluRed;
                }
                nextlong=qizheng && xiaoyanluRed || xiaoyanluBlue;
            }
            GameG.SetImageSprite(nextLongXiaoyanlu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(gameLayerNext.nextLongXiaoyanlu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(nextHuXiaoyanlu, G.GetGamePName(), nexthu);
            GameG.SetImageSprite(gameLayerNext.nextHuXiaoyanlu, G.GetGamePName(), nexthu);
        }


        //更新蟑螂路
        if ((BigRoadDataColumn>=4 && BigRoadDataRow>=2) || BigRoadDataColumn>=5)
        {
            if (ZhanglangluZhiLuo) {
                this.UpdateZhanglanglu(1, effect);
            }
            else if (BigRoadDataRow == 1) {

                let zhanglangluResult=BigRoadData[BigRoadDataColumn - 1].length == BigRoadData[BigRoadDataColumn - 4].length && 1 || 2;
                this.UpdateZhanglanglu(zhanglangluResult, effect);
            }
            else if (BigRoadDataRow>1) {

                let zhanglangluResult=BigRoadData[BigRoadDataColumn - 3][BigRoadDataRow] != null && 1 || 2;
                this.UpdateZhanglanglu(zhanglangluResult, effect);
                if (zhanglangluResult == 2) {
                    ZhanglangluZhiLuo=true;
                }
            }
        }

        //下局蟑螂路
        if (BigRoadDataColumn>=4) {
            nextLongZhanglanglu.node.active=true;
            nextHuZhanglanglu.node.active=true;
            gameLayerNext.nextLongZhanglanglu.node.active=true;
            gameLayerNext.nextHuZhanglanglu.node.active=true;
            let nextlong="";
            let nexthu="";
            let youwu=BigRoadData[BigRoadDataColumn - 3][BigRoadDataRow + 1] == null; //有無
            let qizheng=BigRoadData[BigRoadDataColumn - 3].length == BigRoadData[BigRoadDataColumn].length; //齊整
            if (result == 1) {
                if (ZhanglangluZhiLuo) {
                    nextlong=zhanglangluRed;
                }
                else {
                    nextlong=youwu && zhanglangluBlue || zhanglangluRed;
                }
                nexthu=qizheng && zhanglangluRed || zhanglangluBlue;
            }
            else if (result == 3) {

                if (ZhanglangluZhiLuo) {
                    nexthu=zhanglangluRed;
                }
                else {
                    nexthu=youwu && zhanglangluBlue || zhanglangluRed;
                }
                nextlong=qizheng && zhanglangluRed || zhanglangluBlue;
            }
            GameG.SetImageSprite(nextLongZhanglanglu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(gameLayerNext.nextLongZhanglanglu, G.GetGamePName(), nextlong);
            GameG.SetImageSprite(nextHuZhanglanglu, G.GetGamePName(), nexthu);
            GameG.SetImageSprite(gameLayerNext.nextHuZhanglanglu, G.GetGamePName(), nexthu);
        }


        BigRoadDataRow=BigRoadDataRow + 1;


    },

    UpdateBigRoad(result, effect) {
        this.UpdateBigRoadData(result, effect)
        let row=1;
        let gameLayerBigRoad=xlhd.gameLayer.uiRoot.road.bigRoad;
        let gameLayerBigRoadLast=null;
        for (let i=BigRoadUse; i<BigRoad.length; ++ i) {
            for (let j=row; j<BigRoad[i].length; ++ j) {
                if (i != BigRoadUse && j != row) {
                    break;
                }
                else if (BigRoad[i][j].resultUse == 0) {
                    BigRoadObj.grid.root[i].active=true;
                    let obj=BigRoad[i][j];
					if (obj.txt.node == null || obj.txt.node.parent == null)
                        return
                    
                    let gameLayerObj = xlhd.gameLayer.GetBigRoad(i, j)
                    
                    if (result == 2) {
                        if (BigRoadLast != null) {
                            obj=BigRoadLast;
                            gameLayerObj=gameLayerBigRoadLast;
                        }

                        obj.HuCount=obj.HuCount + 1;

                        obj.txt.node.active=true;
                        obj.txt.string=(obj.HuCount).toString();

                        gameLayerObj.txt.node.active=true;
                        gameLayerObj.txt.string=(obj.HuCount).toString();

                        if (effect == true) {
                            this.ShowEffect(obj.txt);
                            this.ShowEffect(gameLayerObj.txt);
                        }
                    }
                    else {
                        gameLayerObj.img.node.active=true;
                        obj.img.node.active=true;
                        obj.resultUse=result;
                        obj.columnUse=BigRoadUse;
                        if (effect == true) {
                            this.ShowEffect(obj.img);
                            this.ShowEffect(gameLayerObj.img);
                        }
                        if (result == 1) {
                            GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeBlue);
                            GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), eyeBlue);
                        }
                        else if (result == 2) {
                            GameG.SetImageSprite(obj.img, G.GetGamePName(), "eye_green");
                            GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), "eye_green");
                        }
                        else if (result == 3) {
                            GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeRed);
                            GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), eyeRed);
                        }
                        else {
                            obj.img.node.active=false;
                            obj.txt.node.active=false;
                            obj.resultUse=0;
                            obj.columnUse=0;
                            obj.HuCount=0;
                            obj.txt.string="";
                        }
                    }
                    this.ShowCurrentResult(BigRoad, i, BigRoadCount, BigRoadObj.grid);
                    
                    return
                }
                //不同结果换行
                else if (BigRoad[i][1].resultUse == 1 && result == 3) {
                    BigRoadUse=BigRoadUse + 1;
                    row=1;
                    break;
                }
                //不同结果换行
                else if (BigRoad[i][1].resultUse == 3 && result == 1) {
                    BigRoadUse=BigRoadUse + 1;
                    row=1;
                    break;
                }
                //其他结果已使用向右排序
                else if (BigRoad[i][j].resultUse != result && result != 2) {
                    row=j - 1;
                    BigRoadLast=BigRoad[i][row];
                    gameLayerBigRoadLast=gameLayerBigRoad[i][row];
                    break;
                }
                //其他结果已使用向右排序
                else if (BigRoad[i][j].columnUse != BigRoadUse) {
                    row=j - 1;
                    BigRoadLast=BigRoad[i][row];
                    gameLayerBigRoadLast=gameLayerBigRoad[i][row];
                    break;
                }
                //到底向右排序
                else if (j == BigRoad[i].length - 1) {
                    row=j;
                    BigRoadLast=BigRoad[i][row];
                    gameLayerBigRoadLast=gameLayerBigRoad[i][row];
                    break;
                }
                else {
                    BigRoadLast=BigRoad[i][j];
                    gameLayerBigRoadLast=gameLayerBigRoad[i][j];
                }
            }
        }

        this.CreateBigRoad();
        this.UpdateBigRoad(result, effect);
    },

    CloseZhiLuo() {
        DayanluZhiLuo=false;
        XiaoyanluZhiLuo=false;
        ZhanglangluZhiLuo=false;
    },

    //更新大眼路
    UpdateDayanlu(result, effect) {
        //不同結果換行
        if (DayanluColumnUse != 1 || DayanluRowUse != 1) {
            if (result != Dayanlu[DayanluColumnUse][DayanluRowUse - 1].resultUse) {
                DayanluRight=0;
                DayanluColumnUse=DayanluColumnUse + 1;
                DayanluRowUse=1;
            }
        }

        let column=DayanluColumnUse + DayanluRight;
        if (Dayanlu.length - column<3) {
            this.CreateDayanlu();
        }

        let obj=Dayanlu[column][DayanluRowUse];
        obj.img.node.active=true;
        obj.resultUse=result;
        if (effect == true) {
            this.ShowEffect(obj.img);
        }
        if (result == 2) {
            GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeBlue);
        }
        else if (result == 1) {

            GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeRed);
        }
        else {
            obj.img.node.active=false;
            obj.resultUse=0;
        }

        if (DayanluRowUse == 6 || Dayanlu[column][DayanluRowUse + 1].resultUse != 0) {
            DayanluRight=DayanluRight + 1;
        }
        else {
            DayanluRowUse=DayanluRowUse + 1;
        }
    },

    //更新小眼路
    UpdateXiaoyanlu(result, effect) {
        //不同結果換行
        if (XiaoyanluColumnUse != 1 || XiaoyanluRowUse != 1) {
            if (result != Xiaoyanlu[XiaoyanluColumnUse][XiaoyanluRowUse - 1].resultUse) {
                XiaoyanluRight=0;
                XiaoyanluColumnUse=XiaoyanluColumnUse + 1;
                XiaoyanluRowUse=1;
            }
        }


        let column=XiaoyanluColumnUse + XiaoyanluRight;
        if (Xiaoyanlu.length - column<3) {
            this.CreateXiaoyanlu();
        }

        let obj=Xiaoyanlu[column][XiaoyanluRowUse]
        obj.img.node.active=true;
        obj.resultUse=result;
        if (effect == true) {
            this.ShowEffect(obj.img);
        }
        if (result == 2) {
            GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluBlue);
        }
        else if (result == 1) {

            GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluRed);
        }
        else {
            obj.img.node.active=false;
            obj.resultUse=0;
        }

        if (XiaoyanluRowUse == 6 || Xiaoyanlu[column][XiaoyanluRowUse + 1].resultUse != 0) {
            XiaoyanluRight=XiaoyanluRight + 1;
        }
        else {
            XiaoyanluRowUse=XiaoyanluRowUse + 1;
        }
    },

    //更新蟑螂路
    UpdateZhanglanglu(result, effect) {
        //不同結果換行
        if (ZhanglangluColumnUse != 1 || ZhanglangluRowUse != 1) {
            if (result != Zhanglanglu[ZhanglangluColumnUse][ZhanglangluRowUse - 1].resultUse) {
                ZhanglangluRight=0;
                ZhanglangluColumnUse=ZhanglangluColumnUse + 1;
                ZhanglangluRowUse=1;
            }
        }

        let column=ZhanglangluColumnUse + ZhanglangluRight;
        if (Zhanglanglu.length - column<3) {
            this.CreateZhanglanglu();
        }

        let obj=Zhanglanglu[column][ZhanglangluRowUse];
        obj.img.node.active=true;
        obj.resultUse=result;
        if (effect == true) {
            this.ShowEffect(obj.img);
        }
        if (result == 2) {
            GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluBlue);
        }
        else if (result == 1) {

            GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluRed);
        }
        else {
            obj.img.node.active=false;
            obj.resultUse=0;
        }

        if (ZhanglangluRowUse == 6 || Zhanglanglu[column][ZhanglangluRowUse + 1].resultUse != 0) {
            ZhanglangluRight=ZhanglangluRight + 1;
        }
        else {
            ZhanglangluRowUse=ZhanglangluRowUse + 1;
        }
    },

    ClearBeadRoad() {
		BeadRoadObj.grid.rect.position = BeadRoadObj.grid.initPos;
        let gameLayerObj=xlhd.gameLayer.GetBeadRoadObj();
        gameLayerObj.grid.rect.position=gameLayerObj.grid.initPos;

        for (let i=1; i<BeadRoad.length; ++ i) {
            BeadRoadObj.grid.root[i].active=(i<=BeadRoadCount);
            for (let j=1; j<BeadRoad[i].length; ++ j) {
                BeadRoad[i][j].img.node.active=false;
                BeadRoad[i][j].resultUse=false;
				xlhd.gameLayer.GetBeadRoad(i, j).img.node.active =(false)
            }
        }
    },

    ClearBigRoad() {
        BigRoadData=[];
        BigRoadDataRow=1;
        BigRoadDataColumn=1;
        this.CloseZhiLuo();

        BigRoadUse=1;
        BigRoadLast=null;
		BigRoadObj.grid.rect.position = BigRoadObj.grid.initPos;
        let gameLayerObj=xlhd.gameLayer.GetBigRoadObj();
        gameLayerObj.grid.rect.position=gameLayerObj.grid.initPos;

        for (let i=1; i<BigRoad.length; ++ i) {
			BigRoadObj.grid.root[i].active =(i <= BigRoadCount)
            BigRoad[i].useCount=0;
            for (let j=1; j<BigRoad[i].length; ++ j) {
                BigRoad[i][j].img.node.active=false;
                BigRoad[i][j].txt.node.active=false;
                BigRoad[i][j].resultUse=0;
                BigRoad[i][j].columnUse=0;
                BigRoad[i][j].HuCount=0;
                BigRoad[i][j].txt.string="";

				let gameLayerObj = xlhd.gameLayer.GetBigRoad(i, j);
                gameLayerObj.img.node.active=false;
                gameLayerObj.txt.node.active=false;
            }
        }
    },

    ClearDayanlu() {
        DayanluColumnUse=1;
        DayanluRowUse=1;
        DayanluRight=0;


        nextLongDayanlu.node.active=false;
        nextHuDayanlu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextLongDayanlu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextHuDayanlu.node.active=false;

		DayanluObj.grid.rect.position = DayanluObj.grid.initPos;
        for (let i=1; i<Dayanlu.length; ++ i) {
            for (let j=1; j<Dayanlu[i].length; ++ j) {
                Dayanlu[i][j].img.node.active=false;
                Dayanlu[i][j].resultUse=0;
            }
        }
    },

    ClearXiaoyanlu() {
        XiaoyanluColumnUse=1;
        XiaoyanluRowUse=1;
        XiaoyanluRight=0;
        nextLongXiaoyanlu.node.active=false;
        nextHuXiaoyanlu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextLongXiaoyanlu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextHuXiaoyanlu.node.active=false;

		XiaoyanluObj.grid.rect.position = XiaoyanluObj.grid.initPos;
        for (let i=1; i<Xiaoyanlu.length; ++ i) {
            for (let j=1; j<Xiaoyanlu[i].length; ++ j) {
                Xiaoyanlu[i][j].img.node.active=false;
                Xiaoyanlu[i][j].resultUse=0;
            }
        }
    },

    ClearZhanglanglu() {
        ZhanglangluColumnUse=1;
        ZhanglangluRowUse=1;
        ZhanglangluRight=0;
        nextLongZhanglanglu.node.active=false;
        nextHuZhanglanglu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextLongZhanglanglu.node.active=false;
        xlhd.gameLayer.GetRoadUI().nextRound.nextHuZhanglanglu.node.active=false;

		ZhanglangluObj.grid.rect.position = ZhanglangluObj.grid.initPos;
        for (let i=1; i<Zhanglanglu.length; ++ i) {
            for (let j=1; j<Zhanglanglu[i].length; ++ j) {
                Zhanglanglu[i][j].img.node.active=false;
                Zhanglanglu[i][j].resultUse=0;
            }
        }
    },

    SetRound() {
        txt_long.string=(xlhd.resultRound.LongWin).toString();
        txt_he.string=(xlhd.resultRound.HeWin).toString();
        txt_hu.string=(xlhd.resultRound.HuWin).toString();
        txt_total.string=(xlhd.resultRound.RoundID).toString();

        let gameLayerTotal=xlhd.gameLayer.uiRoot.road.total;
        gameLayerTotal.long.string=(xlhd.resultRound.LongWin).toString();
        gameLayerTotal.he.string=(xlhd.resultRound.HeWin).toString();
        gameLayerTotal.hu.string=(xlhd.resultRound.HuWin).toString();
        gameLayerTotal.total.string=(xlhd.resultRound.RoundID).toString();
    },

    //- 更新界面
    addRst(data, round, effect) {
        let result=1;
        if (data[0].Number>data[1].Number) {
            result=1;
        }
        else if (data[0].Number == data[1].Number) {
            result=2;
        }
        else if (data[0].Number<data[1].Number) {
            result=3;
        }
        
        //清掉所有路单
        if (round == 1) {
            this.ClearBeadRoad();
            this.ClearBigRoad();
            this.ClearDayanlu();
            this.ClearXiaoyanlu();
            this.ClearZhanglanglu();
        }

        this.UpdateBeadRoad(result, effect);
        this.UpdateBigRoad(result, effect);
        this.UpdateRate(result);
        this.SetRound();
    },

    UpdateRate(result) {

        Rate[Rate.length + 1]=result;

        let longWin=0;
        let total=0;

        for (let i=1; i<=Rate.length; ++ i) {
            if (Rate[i] == 1) {
                longWin=longWin + 1;
                total=total + 1;
            }
            else if (Rate[i] == 3) {

                total=total + 1;
            }
        }

        let rateLong=Math.floor(G.CaseWhen(total>0, longWin / total, 0) * 100);
        let rateHu=G.CaseWhen(total>0, 100 - rateLong, 0);

        txt_rateLong.string=rateLong + "%";
        txt_rateHu.string=rateHu + "%";

        img_rate.scale=cc.v3(G.CaseWhen(rateLong>0, rateLong / 100, 0.5), 1, 1);
        img_rateMid.position=attach_rateMid.position;
    },

    ShowEffect(obj) {
		obj.node.opacity = 255

		var tween = GameG.NewTween(obj.node)
		tween.to(0.5, {opacity: 0})
		tween.to(0.5, {opacity: 255})
		tween.to(0.5, {opacity: 0})
		tween.to(0.5, {opacity: 255})
		tween.start()
    },

	ShowCurrentResult(pool,column,columnMax,grid){
		let count = G.CaseWhen( column < columnMax, 0, column - columnMax)
		let item = grid.perfab.width
		grid.rect.position = cc.v2(item * count * -1 + grid.initPos.x, grid.initPos.y)
	},



};

module.exports=ChartLayer;
