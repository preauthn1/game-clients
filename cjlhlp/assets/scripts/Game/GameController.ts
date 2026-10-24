import { _decorator, game, Game, director } from 'cc';
import { BaseGameController, ParseUrlStatus } from '../CocosFrameworks/Game/BaseGameController';
import { GameDataManager } from '../Data/GameDataManager';
import { GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import NetworkManager from '../CocosFrameworks/Network/NetworkManager';
import { MessageBClassID } from '../Proto/BClass';
import { PlatformCommonClassID } from '../Proto/Common';
import { LoginGameRoomRet } from '../Proto/Msg/gameRoomMsg';
import { LoadingHandler } from './LoadingHandler';
import { BaseGameHandler } from './BaseGameHandler';
import * as GameConfig from '../CocosFrameworks/Data/GameConfig';
import { AudioManger } from './AudioManger';
import { DialogController, DialogMode } from './Dialog/DialogController';
import { GameManager } from './GameManager';
import { getConnectIp } from '../CocosFrameworks/Data/GameConfig';
import { TipMessage } from '../Proto/Msg/commonMsg';
import { MessageController } from './MessageController';
const { ccclass, property } = _decorator;


@ccclass('GameController')
export class GameController extends BaseGameController {

    @property(BaseGameHandler)
    public arrayBaseHandler: BaseGameHandler[] = [];
    @property(LoadingHandler)
    public loadingHandler: LoadingHandler;
    private startTime: Date;
    private loadingFinishCount = 0;
    private gameStatus: GameStatus = GameStatus.NONE;
    private reconnectTimes = 0;
    start() {
        let self = this;
        this.loadingFinishCount = 0;
        GameDataManager.getInstance().initGameDataCallback();
        NetworkManager.getInstance().registerTipReciverData(function(data: TipMessage) {
            // console.log('tipMessageParam:', data.Param);
            MessageController.getInstance().showHintMessageWithLabelText(data.Message, data.Message);
            if (data.MsgType === 2) {
                self.loadingHandler.showLoadingHint(data.Message);
                GameDataManager.getInstance().clearAllRegisterCallback();
                NetworkManager.getInstance().closeConnect();
            }
        });
        this.startTime = new Date();
        GameDataManager.getInstance().seti18nLanguage();
        this.loadingHandler.init();
        this.loadingHandler.showLoadingHint('');
        GameDataManager.getInstance().registerGameStatusChanged(function (status: GameStatus) {
            self.gameStatus = status;
            if (self.gameStatus === GameStatus.LOGIN && (GameManager.getInstance() ? GameManager.getInstance()?.isFirstLogin : true)) {
                GameManager.getInstance().isFirstLogin = false;
                DialogController.getInstance().showDialog(example.invalid);
            }
        });
        GameDataManager.getInstance().GameStatus = GameStatus.LOADING;
        this.initAllBaseGameHandler();
    }

    private initAllBaseGameHandler() {
        let self = this;
        this.arrayBaseHandler[this.loadingFinishCount].init(function () {
            self.loadingFinishCount += 1;
            self.loadingHandler.updateProcessBar(self.loadingFinishCount / self.arrayBaseHandler.length);
            if (self.loadingFinishCount === self.arrayBaseHandler.length) {
                self.init();
            } else {
                self.initAllBaseGameHandler();
            }
        })
    }

    protected init() {
        let self = this;
        game.on(Game.EVENT_HIDE, function () {
            self.startTime = new Date();
        }, this);
        game.on(Game.EVENT_SHOW, function () {
            self.reloadGameConnect();
        }, this);
        super.init();
    }

    private reloadGameConnect() {
        let holdTime = new Date();
        let holdMillseconds = holdTime.getTime() - this.startTime.getTime();
        holdMillseconds = holdMillseconds * 0.001;
        if (holdMillseconds < 1) {
            return;
        }
        GameDataManager.getInstance().clearAllRegisterCallback();
        NetworkManager.getInstance().closeConnect();
        director.loadScene('game');
    }

    protected onParseUrlStatusChange(status: ParseUrlStatus, data: any): void {
        switch (status) {
            case ParseUrlStatus.LANGUAGE:
                GameDataManager.getInstance().seti18nLanguage(data);
                break;
            default:
                // console.log(this.gameStatus);
                if (this.gameStatus === GameStatus.LOADING || this.gameStatus === GameStatus.LOGIN) {
                    this.loadingHandler.showLoadingHint(data);
                }
                break;
        }
    }

    protected onConnected(userData: any): void {
        let self = this;
        NetworkManager.getInstance().sendMsgData(MessageBClassID.Common, PlatformCommonClassID.RequestHeartBeatConfigID, null);
        self.onParseUrlStatusChange(ParseUrlStatus.CONNECTION_DATA, GameConfig.getMessageLocation('login'));
        NetworkManager.getInstance().loginUserData(userData, function (loginRoomRetData: LoginGameRoomRet) {
            if (loginRoomRetData.Code === 1) {
                GameDataManager.getInstance().LoginGameRoomData(loginRoomRetData, function (errorMsg: string) {
                });
                AudioManger.getInstance().playBGMAudio();
            } else {
                // console.log(loginRoomRetData);
                self.onParseUrlStatusChange(ParseUrlStatus.ERROR, loginRoomRetData.Message ?? GameConfig.getMessageLocation('PlayerCertificationError', 'Player Certification Error'));
                self.closeConnect();
            }
        });
    }

    protected onConnectFail(userData: any): void {
            GameDataManager.getInstance().isReConnect = true;
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('reconnectServer', 'Server Connecting'));
    }

    protected onConnectClose(UserData: any): void {
        if (this.gameStatus === GameStatus.LOGIN && this.reconnectTimes < 5) {
            this.reconnectTimes += 1;
            GameDataManager.getInstance().isReConnect = true;
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('reconnectServer', 'Server Connecting'));
        } else {
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('connectFailed', 'Connected Failed'));
            this.closeConnect();
        }    
    }

    protected closeConnect(): void {
        GameDataManager.getInstance().isReConnect = false;
        GameDataManager.getInstance().clearAllRegisterCallback();
        super.closeConnect();
    }
}


