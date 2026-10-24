import { _decorator, Node, game, Game, director, Prefab, Label } from 'cc';
import GameManager, { DataType, GameManagerDataChangedCallback, GameStatus } from '../GameManager';
import { CountdownBadgeViewController, CountdownType } from './CountdownBadgeViewController';
import { RuleDialogViewController } from './RuleDialogViewController';
import * as GameConfig from '../Common/GameConfig';
import NetworkManager from '../network/NetworkManager';
import { MessageBClassID } from '../Proto/BClass';
import { PlatformCommonClassID } from '../Proto/Common';
import { LoginGameRoomRet } from '../Proto/Msg/gameRoomMsg';
import { BaseViewController } from './BaseViewController';
import { WaitingViewController } from './WaitingViewController';

import { SML_BetType, SML_GameResult, SML_GameResultWin, SML_Step, SML_StepInfo } from '../Proto/Msg/GameMsg_SML';
import { VideoController } from '../VideoController';
import { AudioManger } from '../../framework/common/AudioManager';
import { GlobalDefine } from '../GlobalDefines';

const { ccclass, property, executionOrder } = _decorator;

const TEST_MODE = false;

export const VERSION_CODE = "V.202304181530";

/**
 * 遊戲佈局介面控制器（主控制器）
 */
@ccclass('GameViewController')
@executionOrder(-1)
export class GameViewController extends BaseViewController implements GameManagerDataChangedCallback {

    @property(Node)
    public fullMaskView: Node;

    @property(CountdownBadgeViewController)
    public countdownBadgeViewController: CountdownBadgeViewController;

    @property(Node)
    public countdownHintViewNode: Node;

    @property(Node)
    public startBetHintViewNode: Node;

    @property(Node)
    public stopBetHintViewNode: Node;

    @property(Node)
    public gameEndViewNode: Node;

    @property(RuleDialogViewController)
    public ruleDialogViewController: RuleDialogViewController;

    @property(WaitingViewController)
    public waitingViewController: WaitingViewController;

    @property(VideoController)
    public videoController: VideoController;

    @property(Prefab)
    public popMessagePrefab: Prefab;

    @property(Node)
    public popMessageContainerNode: Node;

    @property(Node)
    public loadingMaskNode: Node;

    @property(Label)
    public loadingMaskHintLabel: Label;

    private isFirstShowWaitingDialog: boolean = true;

    private showAwardStepDuration: number = 5;

    private startTime: Date;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //#region Overrides
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        super.onLoad();
        this.init();
    }

    init() {
        super.init();
        
        let self = this;

        this.startTime = new Date();

        GameConfig.setLanguage("EN-US");

        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.StepData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultData, this);
        GameManager.sharedInstance().registerOnDataChangedEvent(DataType.GameResultWinData, this);
        GameManager.sharedInstance().popMessageParentNode = this.popMessageContainerNode;
        GameManager.sharedInstance().popMessagePrefab = this.popMessagePrefab;


        AudioManger.sharedInstance().musicVolume = GameConfig.getMusic() ? 1 : 0;
        AudioManger.sharedInstance().soundVolume = GameConfig.getSound() ? 1 : 0;
        AudioManger.sharedInstance().playMusic(GlobalDefine.MusicType.Background, true, false, 0.3);

        game.on(Game.EVENT_HIDE, function() {
            self.startTime = new Date();
        }, this);
        game.on(Game.EVENT_SHOW, function() {
            self.reloadGameConnect();
        }, this);

        this.ruleDialogViewController.init();
        this.ruleDialogViewController.viewNode.active = false;
        this.waitingViewController.init();

        this.loadingMaskHintLabel.string = "Login...";
        this.loadingMaskNode.active = true;
    }

    start() {
        super.start();

        this.videoController.playBaseVideoClip();

        if (this.parseUrl()) {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.connectServer");
            this.connectToServer();
        }
    }

    public onGameStatusChanged(gameStatus: GameStatus) {
        super.onGameStatusChanged(gameStatus);

        var self = this;

        switch (gameStatus) {
            case GameStatus.Login:
                // 第一次登入時，顯示規則對話框
                if (GameManager.sharedInstance().firstLogin) {
                    GameManager.sharedInstance().firstLogin = false;
                    this.fullMaskView.active = true;
                    if (this.ruleDialogViewController != null) {
                        this.ruleDialogViewController.open(() => {
                            self.fullMaskView.active = false;
                            GameManager.sharedInstance().gameStatus = GameStatus.Gaming;
                            AudioManger.sharedInstance().stopMusic(GlobalDefine.MusicType.Background);
                            AudioManger.sharedInstance().playMusic(GlobalDefine.MusicType.Background, true, false, 0.3);
                        });
                    }
                } else {
                    this.fullMaskView.active = false;
                }
                break;
        }
    }
    //#endregion


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //#region Private functions
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    private parseUrl() : boolean {
        var self = this;
        
        let urlData = '';
        if (TEST_MODE) {
            urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwODY5LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjgxNzkxMTU4NjI0IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzEwMDQxMCwiZ2FtZUlEIjoyMjMxLCJnYW1lQ29kZSI6InNtbCIsInN0eWxlTW9kZSI6MSwic2VydmVyQ29ubmVjdGlvbiI6InRmc2VydmVyLmRldi5kZDk5LnNpdGUvd3MvMjIzMTAwNDEwIiwiYWNjZXNzX1Rva2VuIjoiZXlKaGJHY2lPaUpCUlZNaUxDSjBlWEFpT2lKS1YxUWlmUT09LmV5Sk1iMmRwYmxWelpYSkpSQ0k2TVRBeU1EZzJPU3dpVEc5bmFXNU9ZVzFsSWpvaVpHVnRieTB4TmpneE56a3hNVFU0TmpJMElpd2lUV1Z5WTJoaGJuUkpSQ0k2TVRjMU1ERXpMQ0pUY0dWamFXWnBZMGRoYldWSlJDSTZNakl6TVN3aVRHRnVaeUk2SW1WdUxYVnpJaXdpVkc5clpXNUZlSEJwY21Wa1ZHbHRaU0k2TVRZNE1qWTFOakF3TlN3aVVtNWtTVVFpT2lJd01UazNaV1ExTlMxaE1XTTNMVFJoWW1JdFlUZGxOQzAwT0RNMVl6UmhPRGcxWXpVaUxDSlRaWE56YVc5dVZHOXJaVzVTWVhjaU9tNTFiR3dzSWxObGMzTnBiMjVVYjJ0bGJsQkhVeUk2SW1abE1qWTRNemRtTFRZME5HUXROR0ppWkMwNU5EQmxMV1V5WkRRd01UYzVaREV6TkNJc0lsTnBaMjVMWlhraU9pSmtNVFZrWXpsbE1UWm1aVFEyTVRWbE56RXhOMk0zT1RrME5qVmhOelU1WXlJc0lsUnZhMlZ1Vm1WeWMybHZiaUk2TVRBd01Td2lTbmQwVkc5clpXNVVlWEJsSWpveGZRPT0uT2IzZkZTb055SDFOUFhXRllET09VZStiVERGSVoxZEMzZlBFWGVsUnQ5QStUL3MxKzdzaXU4UzBvT2lyOE5aancwOGhOWHFkV0RKakxVK1o5dWhYb0Y3NDdKakgrNEJZSWVGakZNVk5KeHNPVFZZRGhKYm1tNTJvaG9ZMnpnNE56aXVDbW1wek1iWWRjVTJTUE1TMTc0NGxqRmxpTmtPdXNDSk9qUjBkRmZydVlCTHl3cmtKZGovS3JXWFQvTzY1OWpCS1pNQkNOaDE5OXo2M1E5MWFheHo0WjRzblpXR0Z1M1ZWR29haTl6TjlSWkRISHZpMnRUUUd1YXMwTksvOUF6Y0RJUFZRblFxcWcxOXFLRG1hbXhWVXhzNDVDeTA2eXpxSlI3amJFTXNmeTlvTFFLRk9kUGs0TVphalN2SmNvckRWbWNZSmRXa0RFN0xmUFRGN244dVo1L21Ea0dDR2RrYlg1VU5Ncnc3WjgxVmJnTUl2cC9HTmhvQVFnWW1VbDlNV2l0QTZmSkFBR0s4bWZEakxsenVzMTFReHk0a0pqcUVMMVQ4VkV5Z3E3T0JJRGtpOG5yc09IVHBYNDZ3U2ZJWEpyb3JTT1BreXB5SzN6QmZjUFFuOUwyRWlNRlVWdHQ2T2hCdTJhMXN5WjROek04RGtpSloxak1GR2pDNVJtdG5QQ0NIaTBVUWJTc2RoV25EVk9sUUF3WVpOU0Y4Wm9tdDBudDFLcjdBZFZsaGRwMnB6NGxYZkZZVnQwd2hRUVJBN3FlbitOMUczekdPdkw3eWNXeW50NlhQcllQSCs0M3ZNK0ZzVlF6emVER2k3VEFIaFBxN2NPOW9hNlRMQm1ZcG5RSTZlRlI2dGJNZnlaSGZTMDVPYk94SFZrdlpDZUZMb2tUdHg3cTQ9IiwibG9nIjowLCJ0aGlyZFBhcnR5SW5mbyI6eyJnYW1lVmVuZG9ySUQiOjAsIm1ENVRleHQiOm51bGx9fX0=';
        } else {
            var urlPath = window.document.location.pathname;
            var pathItem = urlPath.split('/');
            if (pathItem.length > 2) {
                var lang = pathItem[pathItem.length - 2];
                // GameDataManager.getInstance().seti18nLanguage(lang.toLowerCase());
            }

            urlData = window.location.search.substring(1);
            if (urlData === null || urlData === '') {
                this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
                return false;
            }

            urlData = urlData.split('&nsukey=')[0];
        }

        let parseData = null;
        try {
            parseData = JSON.parse(window.atob(urlData));
        } catch (error) {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
            return false;
        }

        if (parseData === null) {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
            return false;
        }
        const loginData = parseData.data;

        if (loginData.playerID === null || loginData.playerID === '') {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
            return false;
        }

        if (loginData.access_Token === null || loginData.access_Token === '') {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
            return false;
        }

        if (loginData.serverConnection === null || loginData.serverConnection === '') {
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.GameDataError");
            return false;
        }

        if (loginData.referrer) {
            
        }

        if (loginData.log) {
            
        }

        if (loginData.lang) {
            // GameConfig.setLanguage("ZH-TW");
            GameConfig.setLanguage(loginData.lang.toUpperCase());

            // GameDataManager.getInstance().seti18nLanguage(loginData.lang);
            // GameDataManager.getInstance().seti18nLanguage('zh-tw');
        }
        GameConfig.setUserId(loginData.playerID);
        GameConfig.setCert(loginData.access_Token);

        if (window.location.href.indexOf('https://') != -1) {
            GameConfig.setHost('wss://' + loginData.serverConnection);
        } else {
            GameConfig.setHost('ws://' + loginData.serverConnection);
        }

        return true;
    }

    private connectToServer() {
        let self = this;
        const url = GameConfig.getHost();
        NetworkManager.getInstance().beginConnect(url, () => {

            if (GameManager.sharedInstance().reconnection) {
                GameManager.sharedInstance().reconnection = false;
                GameManager.sharedInstance().clearAllRegisterEvents();;
                NetworkManager.getInstance().closeConnect();
                director.loadScene('game');
                return;
            }

            NetworkManager.getInstance().sendMsgData(MessageBClassID.Common, PlatformCommonClassID.RequestHeartBeatConfigID, null);
            NetworkManager.getInstance().loginUserData((loginRoomRetData: LoginGameRoomRet) => {
                if (loginRoomRetData.Code === 1) {
                    GameManager.sharedInstance().gameStatus = GameStatus.Login;
                    GameManager.sharedInstance().gameRoomData = loginRoomRetData;

                    this.loadingMaskHintLabel.string = "";
                    this.loadingMaskNode.active = false;
                } else {
                    let errorMessage = loginRoomRetData.Message ?? GameConfig.getMessageLocation('PlayerCertificationError');
                    this.loadingMaskHintLabel.string = errorMessage;
                    this.loadingMaskNode.active = true;
                    
                    NetworkManager.getInstance().closeConnect();
                }
            });
        }, () => {
            // GameManager.sharedInstance().firstLogin = true;
            GameManager.sharedInstance().gameStatus = GameStatus.None;
            GameManager.sharedInstance().reconnection = true;
            this.loadingMaskHintLabel.string = GameConfig.i18nValue("labeltext.reconnectServer");
            this.loadingMaskNode.active = true;
            NetworkManager.getInstance().reConnect();
        });
    }

    private reloadGameConnect () {
        var holdTime = new Date();
        var holdMillseconds = holdTime.getTime() - this.startTime.getTime();
        holdMillseconds = holdMillseconds * 0.001;
        if (holdMillseconds < 1) {
            return;
        }
        GameManager.sharedInstance().firstLogin = true;
        GameManager.sharedInstance().clearAllRegisterEvents();;
        NetworkManager.getInstance().closeConnect();
        director.loadScene('game');
    }
    //#endregion

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //#region GameManagerDataChangedCallback
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public onGameManagerDataChanged(dataType: DataType, data: any) {
        switch (dataType) {
            case DataType.StepData: {
                let stepData = data as SML_StepInfo;

                if (this.isFirstShowWaitingDialog) {
                    GameManager.sharedInstance().gameStatus = GameStatus.Waiting;

                    var countdownTimestamp = 0;
                    switch (stepData.Step) {
                        case SML_Step.SML_StepStart:
                        case SML_Step.SML_StepFinish:
                        case SML_Step.SML_StepWaitBet:
                            this.isFirstShowWaitingDialog = false;
                            this.waitingViewController.dismiss();
                            break;
                        case SML_Step.SML_StepShowAward:
                            this.showAwardStepDuration = stepData.Time;
                            countdownTimestamp = (this.showAwardStepDuration) * 1000;
                            break;
                    }

                    if (countdownTimestamp != 0 && this.waitingViewController.countdownTimestamp == 0) {
                        this.fullMaskView.active = true;
                        this.waitingViewController.countdownTimestamp = new Date().getTime() + countdownTimestamp;
                        this.waitingViewController.show(() => {
                            if (!this.ruleDialogViewController.viewNode.active) {
                                this.fullMaskView.active = false;
                            }
                        });
                    }
                } else {
                    switch (stepData.Step) {
                        case SML_Step.SML_StepStart:
                        case SML_Step.SML_StepWaitBet:
                        case SML_Step.SML_StepFinish:
                            GameManager.sharedInstance().gameStatus = GameStatus.Gaming;
                            break;
                        case SML_Step.SML_StepShowAward:
                            if (GameManager.sharedInstance().gameStatus === GameStatus.Gaming) {
                                let delay = stepData.Time - 3;
                                if (delay < 0) delay = 0;
                                this.scheduleOnce(() => {
                                    GameManager.sharedInstance().gameStatus = GameStatus.ShowResult;
                                }, delay);
                            }
                            break;
                    }
                }

                if (stepData.Step === SML_Step.SML_StepStart) {
                    this.gameEndViewNode.active = false;
                }

                if (stepData.Step === SML_Step.SML_StepWaitBet) {
                    var delay = stepData.Time - 3;
                    if (delay < 0) delay = 0;
                    this.scheduleOnce(() => {
                        AudioManger.sharedInstance().playSound(2, true, false, 1);
                    }, delay);
                } else {
                    AudioManger.sharedInstance().stopSound(2);
                }

                switch (stepData.Step) {
                    case SML_Step.SML_StepWaitBet: {
                        this.countdownBadgeViewController.min = 0;
                        this.countdownBadgeViewController.max = stepData.Time;
                        this.countdownBadgeViewController.countdownType = CountdownType.Seconds;
                        this.countdownBadgeViewController.setVisible(true);
                        this.countdownBadgeViewController.startCountdown();
                        break;
                    }
                    default: {
                        this.countdownBadgeViewController.stopCountdown();
                        this.countdownBadgeViewController.setVisible(false);
                        break;
                    }
                }

                this.startBetHintViewNode.active = stepData.Step === SML_Step.SML_StepStart;
                this.stopBetHintViewNode.active = stepData.Step === SML_Step.SML_StepShowAward;
                this.countdownHintViewNode.active = stepData.Step === SML_Step.SML_StepWaitBet;
                break;
            }
            case DataType.GameResultData: {
                if (GameManager.sharedInstance().gameStatus === GameStatus.Gaming) {
                    let gameResultData = data as SML_GameResult;
                    switch (gameResultData.Result) {
                        case SML_BetType.SML_BetTypeSaveLeft:
                            this.videoController.play(0, () => {
    
                            });
                            break;
                        case SML_BetType.SML_BetTypeGoalLeft:
                            this.videoController.play(1, () => {
    
                            });
                            break;
                        case SML_BetType.SML_BetTypeSaveMiddle:
                            this.videoController.play(2, () => {
    
                            });
                            break;
                        case SML_BetType.SML_BetTypeGoalMiddle:
                            this.videoController.play(3, () => {
    
                            });
                            break;
                        case SML_BetType.SML_BetTypeSaveRight:
                            this.videoController.play(4, () => {
    
                            });
                            break;
                        case SML_BetType.SML_BetTypeGoalRight:
                            this.videoController.play(5, () => {
    
                            });
                            break;
                    }
                }
                break;
            }
            case DataType.GameResultWinData: {
                let gameResultWinData = data as SML_GameResultWin;
                if (gameResultWinData.WinUserInfo != null && gameResultWinData.WinUserInfo?.length > 0) {
                    gameResultWinData.WinUserInfo.forEach((userInfo, index) => {
                        if (userInfo.UserID === GameConfig.getUserId()) {
                            this.gameEndViewNode.active = true;
                        }
                    });
                }
                break;
            }
        }
    }
    //#endregion
    

}

