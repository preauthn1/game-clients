import * as GameConfig from '../Common/GameConfig';
import { UserRoomLogonData, LoginGameRoomRet, LoginGameRoomInfo, RoomInfo } from '../Proto/Msg/gameRoomMsg';
import * as ICallback from '../Data/ICallback';
import { MessageBClassID } from '../Proto/BClass';
import { GameMessageClassID } from '../Proto/Game';
import { UserStateChange } from '../Proto/Msg/gameMsg';
import NetworkManager from '../network/NetworkManager';
import * as i18n from 'db://i18n/LanguageData';
import { GameDataType, GameStatus, GameStatusToString } from '../Data/GameData';
import { JZYQ_Bet, JZYQ_BetRequest, JZYQ_Step, JZYQ_StepInfo } from '../Proto/Game/GameMsg_JZYQ';
import { JZYQ_GameMessageClassID } from '../Proto/Game/Game_JZYQ';

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

    private gameStatus: GameStatus = GameStatus.NONE;

    public get GameStatus(): GameStatus {
        return this.gameStatus;
    }

    public set GameStatus(status: GameStatus) {
        if (this.gameStatus !== status) {
            this.gameStatus = status;
            this.gameStatusChangedCallback.forEach(cb => {
                if (cb) {
                    cb(this.gameStatus);
                }
            })
        };
    }


    public gameVersion = 'v202303311030';
    public isReConnect: boolean = false;

    public defaultLanguage = 'en-us';
    

    private gameStatusChangedCallback: Array<ICallback.gameStatusCallback> = [];

    private reciverDataCallback: Map<GameDataType, Array<ICallback.webSocketRevicerCallback>> = new Map<GameDataType, Array<ICallback.webSocketRevicerCallback>>();

    public UserData: UserRoomLogonData = null;
    public RoomInfo: RoomInfo;

    public initGameDataCallback() {
        var self = this;
        NetworkManager.getInstance().registerReciverData(function( data: ICallback.reciverData) {
            self.syncProtoData(data);
        });
    }

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

    public LoginGameRoomData (data: LoginGameRoomRet, error: {(errorMsg: string): void}) {
        var self = this;
        this.checkLoginInfoData(data.LoginRequestData, function(success: boolean, msg: string) {
            if (success) {
                self.setUserInfoData(data.UserData);
                self.GameStatus = GameStatus.LOGIN;
            } else {
                if (error) {
                    error(msg);
                }
            }
        })
    }

    public clearAllRegisterCallback () {
        this.GameStatus = GameStatus.RELOADING;
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
        this.dataChangeCallback(GameDataType.UserData, this.UserData);
    }

    private updateUserStateData (data: UserStateChange) {
        if (data.User.UserID === this.UserData.UserID) {
            this.UserData.CashAmount = Object.assign({}, data.User.Score);
            this.dataChangeCallback(GameDataType.UserData, this.UserData);
        }
    }

    public syncProtoData(data: ICallback.reciverData) {
        if (data.mainId === MessageBClassID.Game) {
            switch (data.subId) {
                case GameMessageClassID.UserStateChangeID:
                    if (data.data.User.UserID === this.UserData.UserID) {
                        // console.log('UserStateChangeId:', data.data);
                        this.updateUserStateData(data.data as UserStateChange);   
                    }
                    break;
                case JZYQ_GameMessageClassID.JZYQSettingID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQSettingID:', data.data);
                    this.dataChangeCallback(GameDataType.SettingData, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQStepID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQStepID:', data.data);
                    this.syncGameStatus(data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQRoundID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQRoundID:', data.data);
                    this.dataChangeCallback(GameDataType.RoundData, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQBoardCastBetID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQBoardCastBetID:', data.data);
                    this.dataChangeCallback(GameDataType.BetRetData, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQGameResultID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQGameResultID:', data.data);
                    this.dataChangeCallback(GameDataType.GameResult, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQGameResultWinID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQGameResultWinID:', data.data);
                    this.dataChangeCallback(GameDataType.ResultWinData, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQRecordsID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQRecordsID:', data.data);
                    this.dataChangeCallback(GameDataType.TrandData, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQBetRetID:
                    this.dataChangeCallback(GameDataType.UserBetRet, data.data);
                    break;
                case JZYQ_GameMessageClassID.JZYQBetClearRetID:
                    // console.log(new Date().toLocaleString(),  ' - JZYQBetClearRetID:', data.data);
                    break;
            }
        }
    }

    private syncGameStatus (data: JZYQ_StepInfo) {
        // console.log(new Date().toLocaleString(), 'syncGameStatus:', data);
        switch (data.Step) {
            case JZYQ_Step.JZYQ_StepPrepare:
                break;
            case JZYQ_Step.JZYQ_StepStart:
                this.GameStatus = GameStatus.BET_START;
                break;
            case JZYQ_Step.JZYQ_StepFinish:
                this.GameStatus = GameStatus.BET_FINISH;
                break;
            case JZYQ_Step.JZYQ_StepWaitBet:
                if (this.gameStatus === GameStatus.BET_START || data.Time > 2) {
                    this.GameStatus = GameStatus.BET_COUNTDOWN;
                } else {
                    this.GameStatus = GameStatus.WAITING_NEXT_ROUND;
                }
                break;
            case JZYQ_Step.JZYQ_StepShowAward:
                if (this.gameStatus === GameStatus.BET_COUNTDOWN) {
                    this.GameStatus = GameStatus.BET_SCORE;
                } else {
                    this.GameStatus = GameStatus.WAITING_NEXT_ROUND;
                }
                break;
        }
        this.dataChangeCallback(GameDataType.GameState, data);
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

    public registerDataChange (type: GameDataType, callback: ICallback.webSocketRevicerCallback) {
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

    public unregisterDataChange (type: GameDataType, callback: ICallback.webSocketRevicerCallback) {
        if (this.reciverDataCallback.has(type)) {
            var arrCallback = this.reciverDataCallback.get(type);
            var index = arrCallback.findIndex(cb => cb === callback);
            if (index !== -1) {
                arrCallback.splice(index, 1);
                this.reciverDataCallback.set(type, arrCallback);
            }
        }
    }

    private dataChangeCallback(type: GameDataType, value: any) {
        if (this.reciverDataCallback.has(type)) {
            let arrCallback = this.reciverDataCallback.get(type);
            arrCallback.forEach(callback => {
                callback(value);
            })
        }
    }

    public sendBetData (data: JZYQ_Bet) {
        const sendMsgData: JZYQ_BetRequest = {
            Bet: data
        }
        NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, JZYQ_GameMessageClassID.JZYQBetID, sendMsgData);
    }
}