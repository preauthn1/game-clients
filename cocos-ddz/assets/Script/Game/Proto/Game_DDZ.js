import { GameMsg_DDZ } from "GameMsg_DDZ" //这里引入文件,msg为package的包名

var Game_DDZ = {

    JiaoDiZhu : 10001,
    JiaoDiZhuRet : 10002,
    QiangDiZhu : 10003,
    QiangDiZhuRet : 10004,
    MingPai : 10005,
    MingPaiRet : 10006,
    ChuPai : 10007,
    ChuPaiRet : 10008,
    Pass : 10009,
    PassRet : 10010,
    TuoGuan : 10011,
    TuoGuanRet : 10012,
    UserRecoverRet : 10013,
    BeforeFapai : 10014,  //通知機器人洗好牌了
    NotifyGameStep : 10112,
    NotifyGameTimeOut : 10113,
    NotifyJiaoDiZhu : 10114,
    NotifyQiangDiZhu : 10115,
    NotifyMingPai : 10116,
    NotifyChuPai : 10117,
    NotifyFaPai : 10118,
    NotifyDiZhuInfo : 10119,
    NotifyRoomInfo : 10120,
    NotifySettlement : 10121,
    NotifyTuoGuan : 10122,
    NotifyDeskCfg : 10123,
    EnableUserChiPaiChi : 10124,  //是否開啟玩家計牌器功能
    ChiPaiChiInfo : 10125,        //計牌器資料

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.JiaoDiZhu, GameMsg_DDZ.DDZ_JiaoDiZhu)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.JiaoDiZhuRet, GameMsg_DDZ.DDZ_JiaoDiZhuRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.QiangDiZhu, GameMsg_DDZ.DDZ_QiangDiZhu)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.QiangDiZhuRet, GameMsg_DDZ.DDZ_QiangDiZhuRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.MingPai, GameMsg_DDZ.DDZ_MingPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.MingPaiRet, GameMsg_DDZ.DDZ_MingPaiRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.ChuPai, GameMsg_DDZ.DDZ_ChuPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.ChuPaiRet, GameMsg_DDZ.DDZ_ChuPaiRet)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.Pass, GameMsg_DDZ.DDZ_Pass)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.PassRet, GameMsg_DDZ.DDZ_PassRet)
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyGameStep, GameMsg_DDZ.DDZ_NotifyGameStep)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyGameTimeOut, GameMsg_DDZ.DDZ_NotifyGameTimeOut)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyJiaoDiZhu, GameMsg_DDZ.DDZ_NotifyJiaoDiZhu)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyQiangDiZhu, GameMsg_DDZ.DDZ_NotifyQiangDiZhu)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyMingPai, GameMsg_DDZ.DDZ_NotifyMingPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyChuPai, GameMsg_DDZ.DDZ_NotifyChuPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyFaPai, GameMsg_DDZ.DDZ_NotifyFaPai)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyDiZhuInfo, GameMsg_DDZ.DDZ_NotifyDizhuInfo)
    
        // 新加
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyRoomInfo, GameMsg_DDZ.DDZ_NotifyRoomInfo)
    
        // 结算
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifySettlement, GameMsg_DDZ.DDZ_NotifySettlement)
    
    
        // 托管
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.TuoGuan, GameMsg_DDZ.DDZ_TuoGuan)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.TuoGuanRet, GameMsg_DDZ.DDZ_TuoGuanRet)
    
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyTuoGuan, GameMsg_DDZ.DDZ_NotifyTuoGuan)
    
        // 场景数据
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.UserRecoverRet, GameMsg_DDZ.DDZ_UserRecoverRet)
    
        // 桌子配置
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.NotifyDeskCfg, GameMsg_DDZ.DDZ_NotifyDeskCfg)
        // 中途入場
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.ChiPaiChiInfo, GameMsg_DDZ.DDZ_ChiPaiChiInfo)
        // 是否顯示記牌器
        NetworkQueue.AddMsgModelName(BClass.Game, Game_DDZ.EnableUserChiPaiChi , GameMsg_DDZ.DDZ_EnableUserChiPaiChi)

    }
};

module.exports = Game_DDZ;