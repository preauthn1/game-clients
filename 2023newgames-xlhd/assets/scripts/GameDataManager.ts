import * as GameConfig from './Common/GameConfig';
import { UserRoomLogonData, LoginGameRoomRet, LoginGameRoomInfo, RoomInfo } from './Proto/Msg/gameRoomMsg';
import * as ICallback from './Data/ICallback';
import { MessageBClassID } from './Proto/BClass';
import { GameMessageClassID } from './Proto/Game';
import { LHD_GameMessageClassID } from './Proto/Game_LHD';
import { AllUserActionCommited, UserStateChange } from './Proto/Msg/gameMsg';
import { LHD_Sate, LHD_Bet, LHD_BetArr } from './Proto/Msg/gameMsg_LHD';
import NetworkManager from './network/NetworkManager';
import * as i18n from 'db://i18n/LanguageData';
import { MessageHandler } from './MessageHandler';
import { GameStatus } from './Data/ICallback';

/**
 * 遊戲狀態資料管理工具
 */
export default class GameDataManager {
    private static instance: GameDataManager;

    public static getInstance(): GameDataManager {
        if (!GameDataManager.instance) {
            GameDataManager.instance = new GameDataManager();
        }
        return GameDataManager.instance;
    }

    private gameStatus: ICallback.GameStatus = ICallback.GameStatus.NONE;

    public get GameStatus(): ICallback.GameStatus {
        return this.gameStatus;
    }

    public set GameStatus(status: ICallback.GameStatus) {
        this.gameStatus = status;
        this.gameStatusChangedCallback.forEach(cb => {
            if (cb) {
                cb(this.gameStatus);
            }
        })
    }


    public gameVersion = 'v202306121610';
    public isReConnect: boolean = false;

    public defaultLanguage = 'en-us';
    

    private gameStatusChangedCallback: Array<ICallback.gameStatusCallback> = [];

    private reciverDataCallback: Map<ICallback.GameDataType, Array<ICallback.webSocketRevicerCallback>> = new Map<ICallback.GameDataType, Array<ICallback.webSocketRevicerCallback>>();

    public UserData: UserRoomLogonData = null;
    public RoomInfo: RoomInfo;

    public seti18nLanguage (lang: string = 'en-us') {
        this.defaultLanguage = lang;
        switch (lang) {
            case 'en-us':
                i18n.init('enUS');
                break;
            case 'zh-cn':
                i18n.init('zhCN');
                break;
            case 'zh-tw':
                i18n.init('zhTW');
                break;
            default:
                i18n.init('enUS');
                break;
        }
        i18n.updateSceneRenderers();
    }

    public LoginGameRoomData (data: LoginGameRoomRet) {
        var self = this;
        this.checkLoginInfoData(data.LoginRequestData, function(success: boolean, msg: string) {
            if (success) {
                self.setUserInfoData(data.UserData);
                self.GameStatus = ICallback.GameStatus.LOGIN;
            } else {
                MessageHandler.getInstance().showMessageContent(msg === '' ? GameConfig.getMessageLocation('PlayerCertificationError') : msg);
            }
        })
    }

    public clearAllRegisterCallback () {
        this.GameStatus = ICallback.GameStatus.RELOADING;
        this.gameStatusChangedCallback.length = 0;
        this.reciverDataCallback.clear();
    }

    public checkLoginInfoData (data: LoginGameRoomInfo, callback: {(success: boolean, errorMsg: string)}) {
        if (GameConfig.getUserId() !== data.UserID) {
            if (callback) {
                callback(false, GameConfig.getMessageLocation('PlayerDataError'));
            }
            return;
        }
        if (GameConfig.getCert() !== data.Cer) {
            if (callback) {
                callback(false, GameConfig.getMessageLocation('PlayerCertificationError'));
            }
            return;
        }
        if (GameConfig.getHDCode() !== data.HDCode) {
            if (callback) {
                callback(false, '');
            }
            return;
        }

        if (GameConfig.getHDType() !== data.HDType) {
            if (callback) {
                callback(false, '');
            }
            return;
        }

        if (callback) {
            callback(true, '');
        }

    }

    public setUserInfoData (data: UserRoomLogonData) {
        this.UserData = Object.assign({}, data);
        this.dataChangeCallback(ICallback.GameDataType.UserData, this.UserData);
    }

    private updateUserStateData (data: UserStateChange) {
        if (data.User.UserID === this.UserData.UserID) {
            this.UserData.CashAmount = Object.assign({}, data.User.Score);
            this.dataChangeCallback(ICallback.GameDataType.UserData, this.UserData);
        }
    }

    public syncProtoData(data: ICallback.reciverData) {
        if (data.mainId === MessageBClassID.Game) {
            switch (data.subId) {
                case LHD_GameMessageClassID.LHDStateID:
                    this.dataChangeCallback(ICallback.GameDataType.GameState, data.data);
                    const stateData = data.data as LHD_Sate;
                    if (stateData.State === 0) {
                        this.gameStatus = ICallback.GameStatus.BET_COUNTDOWN;
                    }
                    break;
                case LHD_GameMessageClassID.LHDSettingID:
                    this.dataChangeCallback(ICallback.GameDataType.SettingData, data.data);
                    break;
                case GameMessageClassID.AllUserActionCommitID:
                    this.syncGameStatus(data.data as AllUserActionCommited);
                    break;
                case LHD_GameMessageClassID.LHDGameResultPokerID:
                    this.dataChangeCallback(ICallback.GameDataType.PokerResult, data.data);
                    break;
                case LHD_GameMessageClassID.LHDGameResultWinID:
                    this.dataChangeCallback(ICallback.GameDataType.ResultWinData, data.data);
                    break;
                case LHD_GameMessageClassID.LHDBroadCastBetID:
                    this.dataChangeCallback(ICallback.GameDataType.BetData, data.data);
                    break;
                case LHD_GameMessageClassID.LHDBetRetID:
                    this.dataChangeCallback(ICallback.GameDataType.BetRetData, data.data);
                    break;
                case LHD_GameMessageClassID.LHDResultCardListID:
                    this.dataChangeCallback(ICallback.GameDataType.TrandData, data.data);
                    break;
                case GameMessageClassID.UserStateChangeID:
                    if (data.data.User.UserID === this.UserData.UserID) {
                        this.updateUserStateData(data.data as UserStateChange);   
                    }
                    break;
                case LHD_GameMessageClassID.LHDRoundID:
                    this.dataChangeCallback(ICallback.GameDataType.RoundData, data.data);
                    break;
            }
        }
    }

    private syncGameStatus (data: AllUserActionCommited) {
        switch (data.ActionName) {
            case 'gamestart':
                this.GameStatus = ICallback.GameStatus.BET_START;
                break;
            case 'end':
                if (this.GameStatus === ICallback.GameStatus.BET_SCORE) {
                    this.GameStatus = ICallback.GameStatus.BET_FINISH;
                }
                break;
            case 'kaijiang':
                if (this.GameStatus === ICallback.GameStatus.SHOW_POKER) {
                    this.GameStatus = ICallback.GameStatus.BET_SCORE;
                }
                break;
        }
    }

    public registerGameStatusChanged (callback: ICallback.gameStatusCallback) {
        if (this.gameStatusChangedCallback.findIndex(cb => cb === callback) === -1) {
            this.gameStatusChangedCallback.push(callback);
        }
    }

    public unregisterGameStatusChanged (callback: ICallback.gameStatusCallback) {
        const index = this.gameStatusChangedCallback.findIndex(cb => cb === callback);
        if (index !== -1) {
            this.gameStatusChangedCallback.splice(index, 1);
        }
    }

    public registerDataChange (type: ICallback.GameDataType, callback: ICallback.webSocketRevicerCallback) {
        var arrCallback = [];
        if (this.reciverDataCallback.has(type)) {
            arrCallback = this.reciverDataCallback.get(type);
            if (arrCallback.find(cb => cb === callback)) {
                return;
            }
        }
        arrCallback.push(callback);
        this.reciverDataCallback.set(type, arrCallback);
    }

    public unregisterDataChange (type: ICallback.GameDataType, callback: ICallback.webSocketRevicerCallback) {
        if (this.reciverDataCallback.has(type)) {
            var arrCallback = this.reciverDataCallback.get(type);
            var index = arrCallback.findIndex(cb => cb === callback);
            if (index !== -1) {
                arrCallback.splice(index, 1);
                this.reciverDataCallback.set(type, arrCallback);
            }
        }
    }

    private dataChangeCallback(type: ICallback.GameDataType, value: any) {
        if (this.reciverDataCallback.has(type)) {
            let arrCallback = this.reciverDataCallback.get(type);
            arrCallback.forEach(callback => {
                callback(value);
            })
        }
    }

    public sendBetData (data: LHD_Bet) {
        const sendMsgData: LHD_BetArr = {
            BetArr: [data]
        }
        NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, LHD_GameMessageClassID.LHDBetID, sendMsgData);
    }
}