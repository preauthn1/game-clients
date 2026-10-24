var GData = require("GData")
var functionsEx = require("functionsEx")
var _AnalyseCP = require("AnalyseCP")
var _CPoker = require("CountPoker")
var GameG = require("GameGlobal")
var UIManager = require("UIManager")

var networkQueue = null
var Game_DDZ = null
var BClass = null
var GameService = null

var RoomTips = {}
RoomTips.Allot = "正在分配座位……"
RoomTips.WaitOtherPlayer = "正在等待其他玩家进入……"
RoomTips.ReAllot = "正在重新分配座位……"
RoomTips.WaitGameStart = "等待游戏开始……"
RoomTips.Restore = "正在恢复游戏场景……"

var GameControl = {
	extends: cc.Component,    
    
    Init(PrefabM)
    {
        this.InputManager = cc.find("Canvas/InputManager").getComponent("InputManager")

	    let root = cc.find("Canvas/DDZScene")

		networkQueue = require("NetworkQueue");
		Game_DDZ = require("Game_DDZ")
        BClass = require("BClass")
        GameService = require("GameService")

        this.initEvent()

        this.PrefabM = PrefabM

        //--[初始化,取值]-------
        this.root = {}
        this.root.left = cc.find("Node_Left", root)
        this.root.down = cc.find("Node_Down", root)
        this.root.right= cc.find("Node_Right", root)
        example.invalid = cc.find("Node_Top", root)
        this.pNaoZ = cc.find("Node_NaoZhong", root)
        this.pOper1 = cc.find("Node_Oper_1", root)
        this.pOper2 = cc.find("Node_Oper_2", root)
        this.pOper3 = cc.find("Node_Oper_3", root)
        this.pOper4 = cc.find("Node_Oper_4", root)
        this.pOper5 = cc.find("Node_Oper_5", root)
        this.pOper6 = cc.find("Node_Oper_6", root)
        this.pOper7 = cc.find("Node_Oper_7", root)
        this.Pane1 = cc.find("Panel1", root)

        this.PCContainer = cc.find("CountPoker", root)
        this.PokerCount = cc.find("CountPoker/PokerPanel", root)
        this.ChuPaiPanel = cc.find("CountPoker/ChuPaiPanel", root)
        this.BtnCount = cc.find("CountPoker/BtnCount", root).getComponent(cc.Button)
        this.BtnSwitch = cc.find("CountPoker/BtnSwitch", root).getComponent(cc.Button)
    
        this.PokerCount.active=(false)
        this.ChuPaiPanel.active=(false)
        this.ShowPokerCount=1
        this.InitPokerCount=0
        this.SeatTwoDistance=-270
        this.SeatThreeDistance=-270
        this.SeatTwoPrevDistance=12
        this.SeatThreePrevDistance=12
        
        this.ResultNode = cc.find("ResultUI", root)
        this.Node_Ani = cc.find("Node_Ani", root)
        this.Landlord = cc.find("Landlord", root)

        //明牌
        this.pOper7.active=(false)
        this.Pane1.active=(false)
        this.ResultNode.active=(false)
        
        //按钮
        this.BtnChat = cc.find("BtnChat", root).getComponent(cc.Button)
        this.BtnTuoG = cc.find("BtnTuoGuang", root).getComponent(cc.Button)
     
        this.BtnRecharge = cc.find("BtnRecharge", root).getComponent(cc.Button)

        //托管
        this.Trusteeship = cc.find("Trusteeship", root)
        this.Trusteeship.active=(false)
        //[数据]
        //[闹钟]----
        this.pCompass = require("Compass")
        this.pCompass.Init()
        this.pCompass.SetRoot(this.pNaoZ)
        this.pCompass.Hide()
    
        //结算界面
        this.pResultLayer = require("ResultOneLayer")
        this.pResultLayer.Init(this.ResultNode,this)
        this.pResultLayer.Hide()
        
        //创建位置
        GData.Chairs = []
        GData.Chairs[1] = require("Chair")
        GData.Chairs[1].Init(root, this,this.root.down, 1, 1, this.PrefabM)
        GData.Chairs[2] = require("Chair")
        GData.Chairs[2].Init(root, this,this.root.right, 2, 2, this.PrefabM)
        GData.Chairs[3] = require("Chair")
        GData.Chairs[3].Init(root, this,this.root.left, 3, 3, this.PrefabM)

        for (var i in GData.Chairs) {
            var chair = GData.Chairs[i]
            if( chair ){
                chair.Clear()
            }
        }

        this.doStart()
    },

    initEvent()
    {
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyDeskCfg, GameControl.NotifyDeskCfg)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.JiaoDiZhuRet, GameControl.JiaoDiZhuRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.QiangDiZhuRet, GameControl.QiangDiZhuRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.MingPaiRet, GameControl.MingPaiRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.ChuPaiRet, GameControl.ChuPaiRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.PassRet, GameControl.PassRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.TuoGuanRet, GameControl.TuoGuanRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyFaPai, GameControl.NotifyFaPai)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyGameStep, GameControl.NotifyGameStep)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyGameTimeOut, GameControl.NotifyGameTimeOut)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyJiaoDiZhu, GameControl.NotifyJiaoDiZhu)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyQiangDiZhu, GameControl.NotifyQiangDiZhu)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyMingPai, GameControl.NotifyMingPai)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyTuoGuan, GameControl.NotifyTuoGuan)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyChuPai, GameControl.NotifyChuPai)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyDiZhuInfo, GameControl.NotifyDiZhuInfo)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifyRoomInfo, GameControl.NotifyRoomInfo)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.NotifySettlement, GameControl.NotifySettlement)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.UserRecoverRet, GameControl.UserRecoverRet)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.ChiPaiChiInfo, GameControl.ChiPaiChiInfo)
        networkQueue.RegMsgHook(BClass.Game, Game_DDZ.EnableUserChiPaiChi, GameControl.EnableUserChiPaiChi)

        GameService.RegNotifyGameSceneInit(GameControl.NotifyGameSceneInit)
        GameService.RegUserEnterMsg(GameControl.UserEnterMsg)
        GameService.RegUserStateChangeMsg(GameControl.UserStateChangeMsg)
        GameService.RegUserLeaveMsg(GameControl.UserLeaveMsg)
        GameService.RegGameEndMsg(GameControl.GameEndMsg)
    },
    
    doStart(  )
    {
        //按钮事件
        this.BtnCount.node.on('click', this.onClick_BtnCount, this)
        this.BtnSwitch.node.on('click', this.onClick_SwitchPokerCount, this)
        this.BtnChat.node.on('click', this.onClick_Chat, this)
        this.BtnTuoG.node.on('click', this.onClick_TuoG, this)
    
        this.BtnRecharge.node.on('click', this.onClick_RechargeCoin, this)
        //开始游戏
        cc.find("Btn_mpKaiShi", this.pOper1).getComponent(cc.Button).node.on('click', this.onClick_MingPaiStart, this)
        cc.find("Btn_KaiShi", this.pOper1).getComponent(cc.Button).node.on('click', this.onClick_StartGame, this)
        //叫地主
        cc.find("Button_buJiao", this.pOper2).getComponent(cc.Button).node.on('click', this.onClick_Bujiao, this)
        cc.find("Button_JIaodz", this.pOper2).getComponent(cc.Button).node.on('click', this.onClick_JiaoDZ, this)
        
        //出牌
        cc.find("Button_OutOper", this.pOper4).getComponent(cc.Button).node.on('click', this.onClick_OutCard, this)
        cc.find("Button_HintOper", this.pOper4).getComponent(cc.Button).node.on('click', this.onClick_Hint, this)
        cc.find("Button_PassOper", this.pOper4).getComponent(cc.Button).node.on('click', this.onClick_Pass, this)

        cc.find("Button_MpOper", this.pOper7).getComponent(cc.Button).node.on('click', this.onClick_MingPai, this)
        cc.find("Button_OutOper", this.pOper7).getComponent(cc.Button).node.on('click', this.onClick_OutCard, this)
        
        cc.find("Button", this.pOper5).getComponent(cc.Button).node.on('click', this.onClick_OutCard, this)
        cc.find("Button", this.pOper6).getComponent(cc.Button).node.on('click', this.onClick_Pass, this)
    
        //抢地主
        cc.find("Button_Qdz", this.pOper3).getComponent(cc.Button).node.on('click', this.onClick_QiangDZ, this)
        cc.find("Button_buqiang", this.pOper3).getComponent(cc.Button).node.on('click', this.onClick_Buqiang, this)
    
        //托管
        cc.find("Button", this.Trusteeship).getComponent(cc.Button).node.on('click', this.onClick_TuoG, this)
    
    
        //--[[等待分配]]
        UIManager.ShowMessageGameFull(RoomTips.Allot)
    
        //Muisc
        GameG.PlayGameBGM("Muisc")
    },

    initUI(  )
    {
        this.pCompass.Hide()
        this.pCompass.Destroy()
        this.pResultLayer.Hide()
        
        var node_root = cc.find("node_root", this.Node_Ani)
        functionsEx.removeAllChild(node_root)
    },

    Update(  )
    {
        //--弹窗 发牌 出牌 不做操作s
        if(GData.bDialog ||
            GData.cbGameStatus == GEnum.GameStatus.kGSFaPai_1
            )
        {
            return
        }

        var chair = null
        if( this.InputManager.GetMouseButtonDown()){
            var loc = this.InputManager.touchPos
            chair = GData.Chairs[1]
            chair.Touch_Begin( loc)
        }
        else if(this.InputManager.GetMouseButton()){
            //Moveto
            var loc = this.InputManager.touchPos
            chair = GData.Chairs[1]
            chair.Touch_Move( loc )
        }
        else if(this.InputManager.GetMouseButtonUp()){
            //MoveEnd
            var loc = this.InputManager.touchPos
            chair = GData.Chairs[1]
            chair.Touch_End( loc )
        }
    },
    //更新
    
    // 按键功能 ------------------------
    //托管
    onClick_TuoG( pSender ){
        //出牌后才可手动托管
        if(GData.cbGameStatus <GEnum.GameStatus.kGSChuPai_1){
            return
        }
        GameG.PlayGameSound("button")
        networkQueue.SendMsg(BClass.Game, Game_DDZ.TuoGuan)
    },

    //退出
    onClick_Quit( pSender ){
        GameG.PlayGameSound("button")
        GameG.ExitGame()
    },

    //帮助
    onClick_Help( pSender ){
        GameG.PlayGameSound("button")
        this.pRuleLayer.Show()
    },

    //设置
    onClick_Sett( pSender ){
        GameG.PlayGameSound("button")
        this.pSetConfigLayer.Show()
    },
    
    //换桌开始
    onClick_MingPaiStart( pSender ){
        GameG.PlayGameSound("button")
        for (var i in GData.Chairs) {
            any
            chair.Clear()
        }
        this.pCompass.Hide()
        this.pOper1.active=(false)
        this.Pane1.active=(false)
        //换桌
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.UserQueueID)
    },

    //开始游戏
    onClick_StartGame( pSender ){
        GameG.PlayGameSound("button")
        this.pCompass.Hide()
        this.pOper1.active=(false)
        this.pOper7.active=(false)
        this.Pane1.active=(false)
        //清除椅子
        for (var i in GData.Chairs) {
            var chair = GData.Chairs[i]
            chair.ClearPanel1()
            chair.ClearPanel2()
            chair.PassOper(false)
            chair.DelHandCard()
            if(i >1){
                chair.CardBlack.active=(false)
            }
        }
    
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID)
    },
    
    onClick_JiaoDZ(  ){
        GameG.PlayGameSound("button")
        var struct = {}
        struct.IsJiaoDiZhu = true
        networkQueue.SendMsg(BClass.Game, Game_DDZ.JiaoDiZhu, struct)
    },
    
    onClick_Bujiao(  ){
        GameG.PlayGameSound("button")
        var struct = {}
        struct.IsJiaoDiZhu = false
        networkQueue.SendMsg(BClass.Game, Game_DDZ.JiaoDiZhu, struct)
    },
    
    onClick_QiangDZ(  ){
        GameG.PlayGameSound("button")
        var struct = {}
        struct.IsRob = true
        networkQueue.SendMsg(BClass.Game, Game_DDZ.QiangDiZhu, struct)
    },
    
    onClick_Buqiang(  ){
        GameG.PlayGameSound("button")
        var struct = {}
        struct.IsRob = false
        networkQueue.SendMsg(BClass.Game, Game_DDZ.QiangDiZhu, struct)
    },
    
    onClick_OutCard(  ){
        GData.Chairs[1].Click_BtnOper( GEnum.PkOper.OutOper )
    },
    
    onClick_Hint(){
        GData.Chairs[1].Click_BtnOper( GEnum.PkOper.HintOper )
    },
    
    onClick_Pass(){
        GData.Chairs[1].Click_BtnOper( GEnum.PkOper.Pass )
    },
    
    //明牌
    onClick_MingPai(){
        GameG.PlayGameSound("button")
        var struct = {}
        struct.IsMingPai = true
        networkQueue.SendMsg(BClass.Game, Game_DDZ.MingPai, struct)
    },
    
    onClick_BtnCount(){
        if (this.PokerCount.active || this.ChuPaiPanel.active) {
            this.PokerCount.active=(false);
            this.ChuPaiPanel.active=(false);
        }
        else{
            this.ChuPaiPanel.active=(false);
            this.PokerCount.active=(true);
        }
    },

    onClick_SwitchPokerCount(){
        if (this.PokerCount.active ) {
            this.PokerCount.active=(false);
            this.ChuPaiPanel.active=(true);
        }
        else{
            this.ChuPaiPanel.active=(false);
            this.PokerCount.active=(true);
        }
    },

    //飘字动画
    Ani_FlyTo( graphic ){
        graphic.active=(true)
        var rt = graphic.rectTransform
        var c = graphic.color
        c.a = 0
        graphic.color = c
    
        var loc = GData.WorldToScreenPoint( rt.position )
        var wpos =  GData.ScreenToWorldPoint(new cc.v3(loc.x,loc.y+20,10.0))
        var wpos1 =  GData.ScreenToWorldPoint(new cc.v3(loc.x,loc.y+40,10.0))
        //->>>>>>Ani_
        // var sequence = CS.DG.Tweening.DOTween.Sequence()
        // sequence:Append(graphic.transform:DOMoveY(wpos.y, 0.5))
        // sequence:Join(graphic:DOColor(cc.Color(c.r, c.g, c.b, 1), 0.5))
        // sequence:AppendInterval(0.5)
        // sequence:Append(graphic.transform:DOMoveY(wpos1.y, 0.5))
        // sequence:Join(graphic:DOColor(cc.Color(c.r, c.g, c.b, 0), 0.5))
        // sequence:OnComplete(function(  ){
        //     this.textBs.position = this.tbsPos
        // })
    },

    //游戏准备倒计时
    ReadyTime(){
        var _text = cc.find("Text", this.pOper1).getComponent(cc.Label)
        this.pOper1.active=(true)
        _text.string = GData.stDeskConfig.nGameOvertime.toString() + "s"
        this.RemoveCountDown("ddz")
        this.StartCountDown(GData.stDeskConfig.nGameOvertime, "ddz", function( dt ){
            _text.string = dt.toString() + "s"
            if(dt <=0 && GData.Chairs[1].GetUserState()== null ){ 
                GameG.ExitGame()
                return
            }
            
            if(dt <=0 && GData.Chairs[1].GetUserState()<GEnum.UserStatus.US_JUSHOU){
                GameG.ExitGame()
            }
        },1.0)
    },    
    
    doDestroy()
    {
        var node_root = cc.find("node_root", this.Node_Ani)
        var children = node_root.children;
        for (var i = 0; i < children.length; ++i) {
            if(children[i] !=null){
                children[i].destroy()
            }
        }
    },

    playGameJieShuAni( st ){
        var fileName=""
        this.doDestroy()
        var uid = G.User.GetCurrentUser().UserID
        var bWin = false
        var bLandlord = false
        for (var i in st.Settlement) {
            var v = st.Settlement[i]
            if(v.UserId==uid){
                if(v.Money>0){
                    bWin = true
                }
                if(v.IsDiZhu){
                    bLandlord=true
                }
            }
        }

        //>>>>>>
        //创建动画
        if(bWin && (!bLandlord)){ //农民胜利
            fileName="FX_ShengLi"
        }
        else if(bWin==false && (!bLandlord)){ //农民失败
            fileName="FX_ShiBai" 
        }
        else if(bWin==true && bLandlord){	//地主胜利
            fileName="FX_dzShengLi"
        }
        else if(bWin==false && bLandlord){  //地主失败
            fileName="FX_dzShiBai"
        }
        if(st.ChunTianOdds>0){ //[春天]
            fileName="chuntian"
        }
        if(st.FanChunTianOdds>0){ //[反春天]
            fileName="FX_nmchuntian"
        }
        //结算音效
        GameG.PlayGameSound( bWin && "win" || "fail" )
    
        var mask = cc.find("mask", this.Node_Ani)
        if(fileName!=""){
            mask.active=(true)
            var node_root = cc.ind("node_root", this.Node_Ani)
            var prefab = this.PrefabM.LoadGameObject(fileName)
            var node = cc.instantiate(prefab)
            node.setParent(node_root)
        }

        //隐藏蒙版
        let self = this
        setTimeout(function () {
            mask.active(false)
            self.doDestroy()
        }.bind(this), 1000 * 1.8);
    },
    
    //设置剩餘撲克牌
    setCountPoker(sec){
        // var sq = CS.DG.Tweening.DOTween.Sequence()
        if (this.InitPokerCount==0) {
            this.InitPokerCount=1
            this.PokerCount.active(true);
        }
       
        if (this.ShowPokerCount==1) { 
            // sq:AppendInterval(sec)
            // sq:AppendCallback(function(  ){
            //     var AllPoker = _CPoker.AllPoker()
            //     for (var i in AllPoker) {
            //         var v = AllPoker[i]
            //         cc.find("PVcontent/T_"+(i).toString(), this.PokerCount).getComponent(cc.Label).strint=(v) .toString()
            //     }
            // })   
        }	
    },
    
    //设置上下家poker
    setChuPaiPoker(Cards,Seat)
    {
        if (Cards.length==0){
            return
        }
        var cp=""
        var bonusdistance=0;
        var cd=8;
    
        //region 排序
        var st_card = {}
    
        for (var i in Cards) {
            var var1 = Cards[i]
            if(var1 == null){
                break
            }
            if(var1.Number >0){
                st_card.pUser(var1.Number)            
            }
        }

		let compare = function(i1,i2){
			return ii - i2
		}
		st_card.sort(compare);

        for (var i in st_card){
            var v = st_card[i]
            if(st_card.length==2 && st_card[1]==15 && st_card[2]==16) {
                cp=cp+"王炸"
                bonusdistance=bonusdistance+28
                break;
            }
            else{
                cp=cp+(_CPoker.ConvertPString(v)).toString()
            }
            if (v==15 || v==16) {
                bonusdistance=bonusdistance+28
            }
            if (v>10 || v<15) {
                bonusdistance=bonusdistance+4
            }
            if (v==13) {
                bonusdistance=bonusdistance+6
            }
            if (v==12) {
                bonusdistance=bonusdistance+10
            }
            if (v==11) {
                bonusdistance=bonusdistance+4
            }
            if (v==10) {
                bonusdistance=bonusdistance+10
            }  
        }

        var sCard = "CP"
        var Go = this.PrefabM.LoadGameObject(sCard)
        var CPk = cc.instantiate(Go)
        CPk.scale = 1
        var distance=0
        //上家處理
        if (Seat==3) {
            CPk.setParent(cc.find("PUcontent", this.ChuPaiPanel));
            distance=(((Cards.length *cd)+bonusdistance)/2)+this.SeatThreePrevDistance+10
            this.SeatThreePrevDistance=(((Cards.length *cd)+bonusdistance)/2)
            this.SeatThreeDistance=this.SeatThreeDistance+distance
            CPk.position = cc.v3( this.SeatThreeDistance, 0, 0)
        }
        //下家處理
        if (Seat==2) {
            CPk.setParent(cc.find("PDcontent", this.ChuPaiPanel));
            distance=(((Cards.length *cd)+bonusdistance)/2)+this.SeatTwoPrevDistance+10
            this.SeatTwoPrevDistance=(((Cards.length *cd)+bonusdistance)/2)
            this.SeatTwoDistance=this.SeatTwoDistance+distance
            CPk.position = cc.v3( this.SeatTwoDistance, 0, 0)
        }

        CPk.width = (Cards.length *12)+bonusdistance
        CPk.height = 30
        CPk.active=(true)
        CPk.getComponent(cc.Label).string=(cp).toString()
    },
    
    //游戏场断线
    //调用此方法清理界面
    NotifyGameSceneInit(){
        //清理椅子数据
        for (var i in GData.Chairs){
            var v = GData.Chairs[i]
            if( v ){
                v.Clear()
            }       
        }

        //清理桌子
        //>>>>
        this.initUI()
        GData.bDialog = false
        GData.cbGameStatus = -1
    },

    //网络消息
    //桌子消息--------------------------
    //用户进入桌子消息
    UserEnterMsg( p_msg ){
        var st = p_msg.User
        UIManager.HideMessageGameFull()
        var nUid = G.User.GetCurrentUserID()
        if(nUid == st.UserID){
            GData.nOwnSeatId = st.SeatNo           
            UIManager.ShowMessageGameFull(RoomTips.WaitOtherPlayer)
        }
    
        var index = GData.SwitchToView(st.SeatNo)
        var chair = GData.Chairs[index]
        if( chair ){
            chair.SetUser(st)
            chair.UpdateUserInfo( st )
            if(chair.pUser.StateValue==3){
                chair.Readyc(true)
            }
        }
    },
    
    //用户状态改变
    UserStateChangeMsg( p_msg )	{
        var st = p_msg.User
    
        var chair = GData.GetViewChair(st.SeatNo)
        if( chair!= null ){
            chair.UpdateUserInfo( st )
        }    
    
        //处理换桌
        if(G.User.CurrentUserTableNo() ==-1){
            for (var i in GData.Chairs){
                var chair = GData.Chairs[i]
                chair.Clear()
            }
            
            this.pCompass.Hide()
            this.pOper1.active=(false)
            this.Pane1.active=(false)
            this.pOper7.active=(false)
            UIManager.ShowMessageGameFull(RoomTips.ReAllot)
        }
    },

    //用户离开
    UserLeaveMsg(  p_msg ){
        var st = p_msg.User
        var chair = GData.GetByUserID(st.UserID)
        if( chair ){
            chair.init()
            chair.Hide()
        }
    },

    //游戏结束
    GameEndMsg( st )
    {
        this.ReadyTime()
        this.pResultLayer.ReadyTime()
        this.pResultLayer.SHow()
    
        //add by Bob
        this.SeatTwoDistance=-270
        this.SeatThreeDistance=-270
        this.SeatTwoPrevDistance=12
        this.SeatThreePrevDistance=12
    
        _CPoker.Init();
        this.setCountPoker(0);
        
        var childrenPUcontent = cc.find("PUcontent". this.ChuPaiPanel).children;
        for (var i = 0; i < childrenPUcontent.length; ++i) {
            if( childrenPUcontent[i] ){
                childrenPUcontent[i].destroy()
            }
        }

        var childrenPDcontent = cc.find("PDcontent". this.ChuPaiPanel).children;
        for (var i = 0; i < childrenPDcontent.length; ++i) {
            if( childrenPDcontent[i] ){
                childrenPDcontent[i].destroy()
            }
        }    
    
        //特殊处理>>>>>
        //不是正常结束游戏
        if(this.pResultLayer.stData == null){
            for (var i in GData.Chairs){
                var v = GData.Chairs[i]
                v.Rest()
            }
            this.pCompass.Hide()
        }
    },
    
    
    //[[桌子配置]]----------
    NotifyDeskCfg(st)
    {
        GData.stDeskConfig.nDeskBaseScore = st.Difen
        GData.stDeskConfig.nGameOvertime = st.TimeOut
        GData.stDeskConfig.nGameBaseBeishu = st.Odds
        GData.stDeskConfig.nGameMaxBeishu = st.MaxOdd 
        
    }, 
    
    //10001 =游戏
    //[[ 游戏命令 ]]--------------------------
    JiaoDiZhuRet(p_msg)
    {
    },  
    
    QiangDiZhuRet(p_msg)
    {
    },  
    
    MingPaiRet(p_msg)
    {
    },  
    
    ChuPaiRet(p_msg)
    {
    },  
    
    PassRet(p_msg)
    {
    },  
    
    TuoGuanRet(p_msg)
    {
    },    
    
    
    //[[游戏消息]]------
    //[[广播,]]---------------
    NotifyFaPai(p_msg)
    {
        //處理初始化計牌器 add by bob
        _CPoker.Init();
        _CPoker.FaPai(p_msg.Cards.Cards);    
        this.setCountPoker(3);
        
        UIManager.HideMessageGameFull()
        var num = p_msg.Cards.Cards.length
        GData.Rest()
        this.pCompass.Hide()
    
        for (var i in GData.Chairs){
            var v = GData.Chairs[i]
            v.Rest()
        }

        for (var i in GData.Chairs){
            var v = GData.Chairs[i]
            v.Readyc(false)
        }

        //发牌
        for (var i in GData.Chairs){
            var chair = GData.Chairs[i]
            chair.AddHandCount(num)
            if(chair.nIndex ==1){
                chair.AddCards(p_msg.Cards.Cards,false)
                chair.logic.Ani_DealCard17()
            }
        }
        //重新发牌
        this.pOper2.active=(false)
        
    },
    
    NotifyGameStep(p_msg)
    {
        GData.cbGameStatus = p_msg.Step
    
        if(GData.cbGameStatus == GEnum.GameStatus.kGSResult_1){
            this.pCompass.Hide()
        }
     },
    
    NotifyGameTimeOut(p_msg)
    {
        var index = GData.SwitchToView(p_msg.SeatNo)
        var chair = GData.Chairs[index]
    
        //时间
        this.pCompass.SetActionTime(p_msg.TimeOut)
        this.pCompass.SetDir(p_msg.SeatNo)
        this.pCompass.Show()
    
        if(GData.cbGameStatus == GEnum.GameStatus.kGSJiaoPai && index==1){//自己
    
        }
        else if(GData.cbGameStatus == GEnum.GameStatus.kGSJiaoPai 
            || GData.cbGameStatus == GEnum.GameStatus.kGSQiangDizhu){
            chair.HideDZ()
        }
        else if(GData.cbGameStatus == GEnum.GameStatus.kGSMIngPai && chair.nIndex==1){ //显示明牌

        }
        else if(GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1 && chair.nIndex==1){
            chair.ClearPanel2()
            
            if( !chair.bTrusteeship) {
                this.BtnTuoG.node.active=(true)
                chair.ShowOper(GData.cbGameStatus)
            }
        }
        else if(GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1){
            chair.ClearPanel2()
        }
        else if(GData.cbGameStatus == GEnum.GameStatus.kGSResult_1){
            this.pCompass.Hide()
        }
        else{

        }
    
        //显示操作
        this.pOper1.active=(false)
        this.pOper7.active=(GData.cbGameStatus == GEnum.GameStatus.kGSMIngPai && chair.nIndex==1)
        this.pOper2.active=(GData.cbGameStatus == GEnum.GameStatus.kGSJiaoPai && chair.nIndex==1)
        this.pOper3.active=(GData.cbGameStatus == GEnum.GameStatus.kGSQiangDizhu && chair.nIndex==1)
        var b = (GData.cbGameStatus == GEnum.GameStatus.kGSMIngPai || GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1)
    },
    
    NotifyJiaoDiZhu(p_msg)
    {
        var index = GData.SwitchToView(p_msg.SeatNo)
        var chair = GData.Chairs[index]
    
        if( chair) {
            chair.ShowJiaDiZhu(p_msg.IsJiaoDiZhu)
            chair.LandlordSound(1,p_msg.IsJiaoDiZhu)
        }
    
    },
    
    NotifyQiangDiZhu(p_msg)
    {
        var index = GData.SwitchToView(p_msg.SeatNo)
        var chair = GData.Chairs[index]
    
        if( chair) {
            chair.ShowQiangDizhu(p_msg.IsQiang)
            chair.LandlordSound(2,p_msg.IsQiang)
        }
    
    },
    
    NotifyMingPai(p_msg)
    {
        //----------------[先不处理明牌]------------------
        var chair = GData.GetViewChair(p_msg.SeatNo)
        chair.bMingPai = p_msg.IsMing
        if(p_msg.IsMing){
            chair.playMingpaiAction()
        }
        //->>>>>
        if(p_msg.IsMing && chair.nIndex >1){
            chair.SetMingPai(p_msg.Mpcs.Cards)
        }
    },
    
    NotifyTuoGuan(p_msg)
    {
        var chair = GData.GetViewChair(p_msg.UserSeat)
        chair.SetTrusteeship(p_msg.State)
        if(chair.nIndex ==1){
            //显示自己托管
            this.Trusteeship.active=(p_msg.State)
            GData.Chairs[1].COper()
        }
    
    },   
    
    NotifyChuPai(p_msg)
    {
        var chair = GData.GetViewChair(p_msg.SeatNo)
        //add by bob 出牌扣計牌器
        if(chair.nIndex !=1){
            _CPoker.ChuPai(p_msg.Cards.Cards);
            this.setCountPoker(0);
            this.setChuPaiPoker(p_msg.Cards.Cards,chair.nIndex);
        }
        chair.Oper(p_msg)
        chair.SetHandCardNum( p_msg )
    
        if(chair.nIndex ==1){
            chair.bHaveOut = true
            chair.HideOper()
        }
    
    },
    
    NotifyDiZhuInfo(p_msg)
    {
        var index = GData.SwitchToView(p_msg.SeatNo)
        var chair = GData.Chairs[index]
        //设定为乘法还加法
        GData.Calculation=p_msg.Calculation
        var Sprite = cc.find("Sprite", this.Pane1).getComponent(cc.Sprite)
        Sprite.node.active=(false)
        if(GData.oct >= 9 && GData.oct <=13){
            var list = []
            list[8]="duizi"
            list[9]="shunzi"
            list[10]="tonghua"
            list[11]="xiaowang"
            list[12]="dawang"
            list[13]="baozi"
            if( GData.Calculation==1) {
                GameG.SetImageSprite(Sprite, G.GetGamePName(), list[GData.oct]+"1", false)
            }
            else{
                GameG.SetImageSprite(Sprite, G.GetGamePName(), list[GData.oct], false)
            }
            //特效
            var ani_ = cc.find("ani_", this.Pane1)
            cc.find(list[index], ani_).active=(true)
            let self = this
            setTimeout(function () {
                cc.find(list[index], ani_).active=(false)
                cc.find("Sprite", self.Pane1).active=(true)
            }.bind(this), 1000 * 2.5);
        }

        //add by bob 出牌扣計牌器
        if(chair.nIndex ==1){
            _CPoker.Dizu(p_msg.Cards.Cards);
            this.setCountPoker(0);
        }
    
        //加牌
        if(chair.nIndex ==1){
            chair.AddCards(p_msg.Cards.Cards,true)
            chair.logic.SortCard()
            setTimeout(function () {
                chair.SetPanel1Enabled(false)
                chair.logic.Ani_LandlordCard3(p_msg.Cards.Cards)
                chair.logic.CardDizhuIcon()
            }.bind(this), 1000 * 0.01);

            setTimeout(function () {
                chair.SetPanel1Enabled(true)
            }.bind(this), 1000 * 0.3);
        }
        
        //恢复
        for (var i in GData.Chairs){
            var v = GData.Chairs[i]
            if(i>GData.PLAY_NUM){
                break
            }
            v.HideDZ()
        }

        //地 主
        var banker = cc.instantiate(this.Landlord)
        banker.active=(true)
        banker.setParent(this.node)
        var loc = chair.imgDz.position
        banker.transform.DOMove(loc, 0.5).OnComplete(function(  ){
            chair.ShowDiZhu(true)
            chair.AddHandCount(20)
            banker.destroy()
        })
    
        this.Pane1.active=(true)

        let compare = function(card1, card2){
            return card1.Number - card2.Number
        }
        p_msg.Cards.Cards.sort(compare);

        //加牌
        for (var i in p_msg.Cards.Cards){
            var var1 = p_msg.Cards.Cards[i]
            var card = cc.find("poker_" + i.toString(), this.Pane1).getComponent(cc.Sprite)
            if(card && var1){
                var Asset = "poker_" + var1.Color.toString() + "_" + var1.Number.toString()
                GameG.SetImageSprite(card, G.GetGamePName(), Asset, false)
            }
        }
    },
    
    //当前游戏倍数
    NotifyRoomInfo( st )
    {
        GData.Chairs[1].SetCurBeishu(st.NowOdds)
    
        //倍数
        //>>>地主牌阶段
        if (GData.cbGameStatus == GEnum.GameStatus.kGSQiangDizhu){
            var index = st.oct
            if( st.oct >= 9 && st.oct <=14 ){
                GData.oct= st.oct
            }
            else{
                cc.find("Sprite", this.Pane1).active=(false)
            }
        }
        //>>>出牌阶段
        if (GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1){
            if(st.oct == 5 ){ //炸弹

            }
        }

        //>>>明牌
        if (GData.cbGameStatus == GEnum.GameStatus.kGSMIngPai){
    
        }
    
        //>>>结束阶段
        if (GData.cbGameStatus == GEnum.GameStatus.kGSResult_1){

        }
    },
    
    //结算
    NotifySettlement( st )
    {
        //显示手牌
        var nUid = G.User.GetCurrentUser().UserID
        var chair = null
        for (var i in st.Settlement){
            var vData = st.Settlement[i]
            if(nUid != vData.UserId){
                chair = GData.GetByUserID(vData.UserId)
                if(!chair.bMingPai && chair.get_chair_idx()!=st.WinSeat){
                    chair.logic.OperOut(vData.cards.Cards)
                }
            }
        }

        //清空数据
        GData.Clear()
        chair = GData.GetViewChair(st.WinSeat)
        chair.JieShule()
        this.BtnTuoG.node.active=(false)
        //清除状态
        for (var i in GData.Chairs) {
            var v = GData.Chairs[i]
            v.PassOper(false)
            v.ShowDiZhu(false)
            v.SetTrusteeship(false)
            v.ShowNotice(false)
        }

        //结束动画
        this.playGameJieShuAni( st )
    
        //发送动画完成
        let self = this
        setTimeout(function () {
            GameService.SendUserActionCommit("end")
            self.pResultLayer.SetData(st)
        }.bind(this), 1000 * 0.3);
    
        //取消托管
        this.Trusteeship.active=(false)
    
        GameG.PlayGameBGM("Muisc")
    },
    
    //恢复
    //场景,数据---------
    UserRecoverRet(st)
    {
        initUI()
        GData.Clear()
        GData.Chairs[1].SetCurBeishu(st.Odds)
        GData.cbGameStatus = st.GameStep
    
        if(GData.cbGameStatus==GEnum.GameStatus.kGSResult_1 || GData.cbGameStatus==GEnum.GameStatus.kGSReady){ //此阶段不恢复

        }
        else{
            this.pCompass.SetDir(st.OptSeat)
            this.pCompass.Show()
            this.pCompass.SetActionTime(st.OptLastTime)
            
    
            //恢复手牌
            for (var i in st.Opi) {
                if(i>GData.PLAY_NUM){
                    break
                }
                var v = st.Opi[i]
                if(v.SeatNo==GData.nOwnSeatId){
                    var chair = GData.Chairs[1]
                    chair.RecoverHandCard(v.Cards.Cards)
                    _CPoker.RecoverRet(v.Cards.Cards)
                    this.setCountPoker(0);
                }
            }
    
            //用户数据
            for (var i in st.Opi) {
                if(i>GData.PLAY_NUM){
                    break
                }
                var v = st.Opi[i]
                var chair=GData.GetViewChair(v.SeatNo)
                chair.bDizhu = v.IsDiZhu
                chair.bMingPai = v.IsMingPai
                chair.AddHandCount(v.CardsCount)
            }
    
            //组合数据(明牌)
            for (var i in st.Opi) {
                if(i>GData.PLAY_NUM){
                    break
                }
                if(st.GameStep < GEnum.GameStatus.kGSChuPai_1){
                    break
                }
                var v = st.Opi[i]
                if(v.SeatNo!=GData.nOwnSeatId && v.IsMingPai){
                    var chair=GData.GetViewChair(v.SeatNo)
                    chair.SetMingPai(v.Cards.Cards)
                }
            }

            for (var i in st.Opi) {
                if(i>GData.PLAY_NUM){
                    break
                }
                var v = st.Opi[i]
                var chair=GData.GetViewChair(v.SeatNo)
                chair.HintNotice()
            }
    
            //出牌数据
            var sf1="恢复出牌:"
            var sf2=""
            for (var i in st.Sci) {
                if(i>GData.PLAY_NUM){
                    break
                }
                if(st.IsSendCard==false){
                    break
                }
                var v = st.Sci[i]
                //没有人出牌
                var chair = GData.GetViewChair(v.SeatNo)
                //操作玩家 不处理
                if(v.SeatNo==st.OptSeat && GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1){
                }
                else{
                    chair.RecoverOutCard( v )
                    sf1 = sf1+"idx_"+v.SeatNo+"_num_"+v.SendType
                }
            }

            //>>>>>>>游戏阶段
            //叫地主
            var chair = GData.GetViewChair(st.OptSeat)
            if (GData.cbGameStatus == GEnum.GameStatus.kGSJiaoPai){
                for (var i in st.Opi){
                    var v = st.Opi[i]
                    var chair=GData.GetViewChair(v.SeatNo)
                    var isJdz = false

                    if(v.IsJiaoDiZhu =="UANOTDO"){
                        isJdz = false
                    }
                    else if(v.IsJiaoDiZhu =="UADO"){
                        isJdz = true
                    }
                    
                    if(v.IsJiaoDiZhu != "UANONE"){
                        chair.ShowJiaDiZhu(isJdz)
                    }
                }

                if(GData.nOwnSeatId==st.OptSeat){
                    this.pOper2.active(true)
                }
            }

            //抢地主
            if (GData.cbGameStatus == GEnum.GameStatus.kGSQiangDizhu){
                for (var i in st.Opi){
                    var v = st.Opi[i]
                    var chair=GData.GetViewChair(v.SeatNo)
                    var isQdz = false
        
                    //>>处理叫地主(抢地主阶段 自己叫过地主则不显示)
                    if(v.IsJiaoDiZhu =="UADO" && v.SeatNo==GData.nOwnSeatId && GData.nOwnSeatId==st.OptSeat){
                    }
                    else if(v.IsJiaoDiZhu =="UADO"){
                        chair.ShowJiaDiZhu(true)
                    }
                    //>>抢地主
                    if(v.IsQiangDiZhu =="UANOTDO"){
                        isQdz = false
                    }
                    else if(v.IsQiangDiZhu =="UADO"){
                        isQdz = true
                    }
                    if(v.IsQiangDiZhu != "UANONE"){
                        chair.ShowQiangDizhu(isQdz)
                    }
                }
                if(GData.nOwnSeatId==st.OptSeat){
                    this.pOper3.active=(true)
                }
            }
            //明牌阶段>>>>>>>>>
            if (GData.cbGameStatus == GEnum.GameStatus.kGSMIngPai){
                if (GData.nOwnSeatId==st.OptSeat ){
                    this.pOper7.active=(true)
                }
            }
            if (GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1){
                if (GData.nOwnSeatId==st.OptSeat ){

                }
                //托管
                for (var i in st.Opi){
                    var v = st.Opi[i]
                    var chair = GData.GetViewChair(v.SeatNo)
                    chair.SetTrusteeship(v.IsTuoGuan)
                }
    
                //清除出牌区
                chair.ClearPanel2()
                chair.HideOper()
            }
            if (GData.cbGameStatus == GEnum.GameStatus.kGSResult_1){
    
                GData.cbGameStatus = -1
                GData.Clear()
        
                this.pCompass.Hide()
                this.pOper1.active=(true)
            }
    
            GData.Calculation=st.Calculation
            //[[地主玩家]]----------
            //牌:icon
            if(GData.cbGameStatus > GEnum.GameStatus.kGSQiangDizhu){
                let compare = function(v, va){
                    return v.Number - va.Number
                }
                st.DiZhuCards.Cards.sort(compare);

                var chair=GData.GetViewChair(st.DiZhuSeat)
                chair.ShowDiZhu(true)
                this.Pane1.active=(true)
    
                for (var i in st.DiZhuCards.Cards){
                    var var1 = st.DiZhuCards.Cards[i]
                    var sf = "poker_" + i.toString()
                    var card = cc.find(sf, this.Pane1).getComponent(cc.Sprite)
                    var Asset = "poker_" + var1.Color.toString() + "_" + var1.Number.toString()
                    GameG.SetImageSprite(card, G.GetGamePName(), Asset, false)
                }

                var index = st.DiZhuCardType
                if( index >= 9 && index <=13 ){
                    cc.find("Sprite", this.Pane1).active=(true)
                    var Sprite = cc.find("Sprite", this.Pane1).getComponent(cc.Sprite)
                    var list = []
                    list[8]="duizi"
                    list[9]="shunzi"
                    list[10]="tonghua"
                    list[11]="xiaowang"
                    list[12]="dawang"
                    list[13]="baozi"
                    if( GData.Calculation == 1) {
                        GameG.SetImageSprite(Sprite, G.GetGamePName(), list[index]+"1", false)
                    }
                    else{
                        GameG.SetImageSprite(Sprite, G.GetGamePName(), list[index], false)
                    }
                }
            }
    
            //可操作椅子
            if ( GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1 && GData.nOwnSeatId==st.OptSeat  && (!st.IsSendCard) ){
                GData.Chairs[1].nodeOper2.active=(true)
            }
            if (GData.cbGameStatus == GEnum.GameStatus.kGSChuPai_1){
                var n = 0
                var list = {}
                var st,st_oper = null
                for (var i in st.Sci){
                    var v = st.Sci[i]
                    if(v.SeatNo!=GData.nOwnSeatId && v.SendType<2){
                        n = n + v.SendType
                    }
    
                    list[v.SeatNo] = v
                }
                
                if( n < 1 && GData.nOwnSeatId==st.OptSeat ){
                    GData.Chairs[1].nodeOper2.active=(true)
                }
        
                //计算 数据(出牌)
                if( n > 0){
                    //上家数据(出牌)
                    var st_card = {}
                    for (var i = GData.PLAY_NUM; i = 2; i = i -1){
                        var index = GData.SwitchToIndex( i )
                        st_oper = list[index]
                        if(st_oper.SendType==1 && st_oper.SeatNo!=st.OptSeat){
                            for (var j in st_oper.SendOutCards.Cards){
                                var v = st_oper.SendOutCards.Cards[j]
                                if ((v) && v.Number>0) {
                                    st_card.pUser(v.Number)
                                }
                            }
                            break
                        }
                    }

                    if(st_card.length<1){
                        return
                    }
                    var KOper = {}
                    if(_AnalyseCP.HintTYPE(st_card,KOper,0)){

                    }
                    var kOper = KOper[1]
                    if(kOper.nKey!=null && kOper.nOperType > 0){
                        kOper.nKey = (kOper.nKey==2) && kOper.nKey+12.5 || kOper.nKey
                        GData.stCHUPHint = []
                        var obj = {}
                        obj.nOperType=kOper.nOperType
                        obj.nSeatId=st_oper.SeatNo
                        obj.num=st_oper.SendOutCards.Cards.length
                        obj.nKey=kOper.nKey
                        obj.data=kOper.data                    
                        GData.stCHUPHint.push(obj)
                    }

                    if(GData.stCHUPHint.length >1){

                    }
    
                    if (GData.nOwnSeatId==st.OptSeat){
                        if(GData.stCHUPHint.length >0){
                            GData.Chairs[1].ShowOper( GData.cbGameStatus )
                        }
                    }
                }
            }
        }
    },
    
    ChiPaiChiInfo(p_msg)
    {
            _CPoker.Recovery(p_msg.ShengYuPai);
            this.setCountPoker(0)
            //上下家不準改使用座位號判斷
            if(p_msg.ShangChia != null) {
                for (var i in p_msg.ShangChia) {
                    var v = p_msg.ShangChia[i]
                    this.setChuPaiPoker(v.Cards, GData.SwitchToView(v.SeatNo)) 
                }
            }
            if(p_msg.HsiaChia != null) {
                for (var i in p_msg.HsiaChia) {
                    var v = p_msg.HsiaChia[i]
                    this.setChuPaiPoker(v.Cards, GData.SwitchToView(v.SeatNo))
                }
            }
            
    },

    EnableUserChiPaiChi(p_msg)
    {
        this.PCContainer.active=(p_msg.Status)

    },
};

module.exports = GameControl