import * as GameConfig from './GameConfig';
import { UserRoomLogonData, LoginGameRoomRet, LoginGameRoomInfo, RoomInfo } from '../../Proto/Msg/gameRoomMsg';
import * as ICallback from '../../Data/ICallback';
import { UserStateChange } from '../../Proto/Msg/gameMsg';
import NetworkManager, { TipMessageReciver } from '../Network/NetworkManager';
import * as i18n from 'db://i18n/LanguageData';
import { Enum } from 'cc';
import { TipMessage } from '../../Proto/Msg/commonMsg';
import { MessageController } from '../../Game/MessageController';
import { GameDataManager } from '../../Data/GameDataManager';

/**
 * 遊戲狀態資料管理工具
 */

export enum GameStatus {
    NONE = 0,
    LOADING = 1,
    LOGIN = 2,
    WAITING_NEXT_ROUND = 3,
    BET_START = 4,
    BET_COUNTDOWN = 5,
    BET_END = 6,
    SHOW_GAME_RESULT = 7,
    BET_SCORE = 8,
    ROUND_FINISH = 9,
    RELOADING = 10
}
Enum(GameStatus)

export enum GameDataType {
    UserData = 'UserData',
    BetData = 'BetData',
    BetRetData = 'BetRetData',
    UserBetRet = 'UserBetRet',
    RoundData = 'RoundData',
    GameState = 'GameState',
    GameResult = 'GameResult',
    SettingData = 'SettingData',
    HistoryData = 'HistoryData',
    ResultWinData = 'ResultWinData',
    BetAreaInfo = 'BetAreaInfo'
}
Enum(GameDataType)

export default class BaseGameDataManager {

    protected gameStatus: GameStatus = GameStatus.NONE;

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


    public gameVersion = 'v202404191300';
    public isReConnect: boolean = false;

    public defaultLanguage = 'en-us';


    private gameStatusChangedCallback: Array<ICallback.gameStatusCallback> = [];

    private reciverDataCallback: Map<GameDataType, Array<ICallback.webSocketRevicerCallback>> = new Map<GameDataType, Array<ICallback.webSocketRevicerCallback>>();

    public UserData: UserRoomLogonData = null;
    public RoomInfo: RoomInfo;

    public initGameDataCallback() {
        var self = this;
        NetworkManager.getInstance().registerReciverData(function (data: ICallback.reciverData) {
            self.syncProtoData(data);
        });
    }

    public seti18nLanguage(lang: string = 'en-us') {
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

    public LoginGameRoomData(data: LoginGameRoomRet, error: { (errorMsg: string): void }) {
        var self = this;
        this.checkLoginInfoData(data.LoginRequestData, function (success: boolean, msg: string) {
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

    public clearAllRegisterCallback() {
        this.GameStatus = GameStatus.RELOADING;
        this.gameStatusChangedCallback.length = 0;
        this.reciverDataCallback.clear();
    }

    public checkLoginInfoData(data: LoginGameRoomInfo, callback: { (success: boolean, errorMsg: string) }) {
        if (GameConfig.getUserId(data.UserID.toString()) !== data.UserID) {
            if (callback) {
                callback(false, GameConfig.getMessageLocation('PlayerDataError'));
            }
            return;
        }
        if (GameConfig.getCert(data.UserID.toString()) !== data.Cer) {
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

    public setUserInfoData(data: UserRoomLogonData) {
        this.UserData = Object.assign({}, data);
        this.dataChangeCallback(GameDataType.UserData, this.UserData);
    }

    protected updateUserStateData(data: UserStateChange) {
        if (data.User.UserID === this.UserData.UserID) {
            this.UserData.CashAmount = Object.assign({}, data.User.Score);
            this.dataChangeCallback(GameDataType.UserData, this.UserData);
        }
    }

    protected syncProtoData(data: ICallback.reciverData) {

    }

    protected syncGameStatus(data: any) {

    }

    public registerGameStatusChanged(callback: ICallback.gameStatusCallback) {
        if (this.gameStatusChangedCallback.findIndex(cb => cb === callback) === -1) {
            this.gameStatusChangedCallback.push(callback);
        }
    }

    public unregisterGameStatusChanged(callback: ICallback.gameStatusCallback) {
        const index = this.gameStatusChangedCallback.findIndex(cb => cb === callback);
        if (index !== -1) {
            this.gameStatusChangedCallback.splice(index, 1);
        }
    }

    public registerDataChange(type: GameDataType, callback: ICallback.webSocketRevicerCallback) {
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

    public unregisterDataChange(type: GameDataType, callback: ICallback.webSocketRevicerCallback) {
        if (this.reciverDataCallback.has(type)) {
            var arrCallback = this.reciverDataCallback.get(type);
            var index = arrCallback.findIndex(cb => cb === callback);
            if (index !== -1) {
                arrCallback.splice(index, 1);
                this.reciverDataCallback.set(type, arrCallback);
            }
        }
    }

    protected dataChangeCallback<T>(type: GameDataType, value: T) {
        if (this.reciverDataCallback.has(type)) {
            let arrCallback = this.reciverDataCallback.get(type);
            arrCallback.forEach(callback => {
                callback(value);
            })
        }
    }
}