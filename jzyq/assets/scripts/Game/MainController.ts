import { _decorator, Component, Node, game, Game, director } from 'cc';
import GameDataManager from '../Data/GameDataManager';
import * as GameConfig from '../Common/GameConfig';
import NetworkManager from '../network/NetworkManager';
import { MessageBClassID } from '../Proto/BClass';
import { PlatformCommonClassID } from '../Proto/Common';
import { LoginGameRoomRet } from '../Proto/Msg/gameRoomMsg';
import { LoadingHandler } from './LoadingHandler';
import { GameStatus } from '../Data/GameData';
import { BaseHandler } from './BaseHandler';
import { GameManager } from './GameManager';
import { AudioManger } from './AudioManger';
import { DialogController, DialogType } from '../Dialog/DialogController';
const { ccclass, property } = _decorator;


const TEST_MODE = false;
/**
 * 主要控制台
 * 解析登入，連線、覆連等功能
 */
@ccclass('MainController')
export class MainController extends BaseHandler {
    @property(BaseHandler)
    public arrayBaseHandler: BaseHandler[] = [];
    @property(LoadingHandler)
    public loadingHandler: LoadingHandler;
    private startTime: Date;
    private loadingFinishCount = 0;

    start() {
        this.loadingFinishCount = 0;
        GameDataManager.getInstance().initGameDataCallback();
        this.startTime = new Date();
        GameDataManager.getInstance().seti18nLanguage();
        this.loadingHandler.init();
        this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('gameLoading'));
        GameDataManager.getInstance().GameStatus = GameStatus.LOADING;
        this.initAllBaseHandler();
    }

    init() {
        super.init();
        var self = this;
        game.on(Game.EVENT_HIDE, function() {
            self.startTime = new Date();
        }, this);
        game.on(Game.EVENT_SHOW, function() {
            self.reloadGameConnect();
        }, this);
        this.parseUrl();   
    }

    updateGameStatus (status: GameStatus) {
        super.updateGameStatus(status);
        // console.log('updateGameStatus:', GameStatusToString[this.gameStatus]);
        switch (this.gameStatus) {
            case GameStatus.LOGIN:
                if (GameManager.getInstance().isFirstLogin) {
                    DialogController.getInstance().showDialog(DialogType.RuleDialog);
                }
                break;
        }
        
    }

    initAllBaseHandler() {
        var self = this;
        this.arrayBaseHandler[this.loadingFinishCount].init(function() {
            self.loadingFinishCount += 1;
            self.loadingHandler.updateProcessBar(self.loadingFinishCount / self.arrayBaseHandler.length);
            if (self.loadingFinishCount === self.arrayBaseHandler.length) {
                self.init();
            } else {
                self.initAllBaseHandler();
            }
        });
    }

    reloadGameConnect () {
        var holdTime = new Date();
        var holdMillseconds = holdTime.getTime() - this.startTime.getTime();
        holdMillseconds = holdMillseconds * 0.001;
        if (holdMillseconds < 1) {
            return;
        }
        // GameManager.getInstance().isFirstLogin = true;
        GameDataManager.getInstance().clearAllRegisterCallback();
        NetworkManager.getInstance().closeConnect();
        director.loadScene('game');
    }

    parseUrl () {
        var self = this;
        this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('connectServer'));
        let urlData = '';
        if (TEST_MODE) {
            urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwMjg4LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjc5MzY2MDI1Mzc5IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzIwMDQxMCwiZ2FtZUlEIjoyMjMyLCJnYW1lQ29kZSI6Imp6eXEiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzIyMzIwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXlNREk0T0N3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qYzVNelkyTURJMU16YzVJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKVGNHVmphV1pwWTBkaGJXVkpSQ0k2TWpJek1pd2lUR0Z1WnlJNkltVnVMWFZ6SWl3aVZHOXJaVzVGZUhCcGNtVmtWR2x0WlNJNk1UWTRNREl6TURBek1Td2lVbTVrU1VRaU9pSXdZbUU1WTJOaFlTMWhPRFU1TFRReVpqZ3RZak0zWkMwd05UWTJZamhrTVRNMFpqVWlMQ0pUWlhOemFXOXVWRzlyWlc1U1lYY2lPbTUxYkd3c0lsTmxjM05wYjI1VWIydGxibEJIVXlJNklqUXhaR1JsTlRZMExXUTFaamt0TkRsaVpDMDVZemxoTFdFNFpXVmxNak5qWVRrMU1DSXNJbE5wWjI1TFpYa2lPaUkyWVdNd01tWTVZalV3WW1RNU1ETmxZMkV3WmpCaVltTTROamsxTVRFeE1TSXNJbFJ2YTJWdVZtVnljMmx2YmlJNk1UQXdNU3dpU25kMFZHOXJaVzVVZVhCbElqb3hmUT09Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmpseE5lZnJtMTZIWHZaM0VSSFA4eFZQNWowbHBHLzRWVVBIOVhmUGFrQ0FVSGZLT3d5OGZEQktMc0pzNFRFYmtzdEljY2EwYjI4YlpqTVRHQmFjcWFXNDRsakZsaU5rT3VzQ0pPalIwZEZmcnVZQkx5d3JrSmRqL0tyV1hUL082NTlqQktaTUJDTmgxOTl6NjNROTFhYTBib1YzY0ZKaVh4amZrd1BCSjNPNHQ5UlpESEh2aTJ0VFFHdWFzME5LLzlBemNESVBWUW5RcXFnMTlxS0RtYW03UmIvN0NUN3RCaG9lNUJkZnBuME9rRXZFNTk4RmxieVZFZUkxVExRMlh6ZmFQa0VLQnRIb3RXZWZPMGdzVDN0N0hkMWVMOUNvWjBwM1huU1ByWmNnY3l5bHRqQ1pObUswU1JVVG5FeEJLMWw5TVdpdEE2ZkpBQUdLOG1mRGpMbHp1czExUXh5NGtKanFFTDFUOFZFeWdxN09CSURraThucnNPSFRwWDQ2d1M1Yjg5ZUFwZDJYK3FRV2JhRG1aUWp1d1lPcHRYWW9QUXNEOVM4VlNtWHphVDVFdy84aDlKZTYzeVBnZ0U1REIyRjdDVTFkNEdTYitSUVNNZTl0S2VWSDlhNk1XNE9YNmxMNHU3UmdNQUQ1dUErOURpQ1NxWWRBVndVY1lSelZ3WU5ZTVR5U0hkZU4wVHpCcnlEbVBZK1ZQUE5ObGxwclEyNjNZZVRIT1E5am5lREdpN1RBSGhQcTdjTzlvYTZUTEJtWXBuUUk2ZUZSNnRiTWZ5WkhmUzA1T2JPeEhWa3ZaQ2VGTG9rVHR4N3E0PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19';
            // urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwMjg2LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjc5MzYzODU0Njg4IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzAwMDQxMCwiZ2FtZUlEIjoyMjMwLCJnYW1lQ29kZSI6InhsaGQiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzIyMzAwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXlNREk0Tml3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qYzVNell6T0RVME5qZzRJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKVGNHVmphV1pwWTBkaGJXVkpSQ0k2TWpJek1Dd2lUR0Z1WnlJNkltVnVMWFZ6SWl3aVZHOXJaVzVGZUhCcGNtVmtWR2x0WlNJNk1UWTRNREl6TURJek1Td2lVbTVrU1VRaU9pSXpOek5oTkdSbU5pMHdNamRrTFRSaE1HTXRPV00xTWkwNU9XRTJORGRpTjJObU1UUWlMQ0pUWlhOemFXOXVWRzlyWlc1U1lYY2lPbTUxYkd3c0lsTmxjM05wYjI1VWIydGxibEJIVXlJNklqY3dZelZsWldaaExUUmlaakV0TkRabE5TMDVOR0kzTFdaalpHRTJORFptTVRZM1lpSXNJbE5wWjI1TFpYa2lPaUprT0dabU5UaGxZelJsTmpVek1HRXdNMlJrTjJabVlUVTJOV016WW1WbU9TSXNJbFJ2YTJWdVZtVnljMmx2YmlJNk1UQXdNU3dpU25kMFZHOXJaVzVVZVhCbElqb3hmUT09Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmpseE5lZnJtMTZIWHZaM0VSSFA4eFZHZ1lqU2ZXS0NwT2VJVGx3VEFHV1k4SGZLT3d5OGZEQktMc0pzNFRFYmtzZmsyZHpYYlQ4a2hyTjN6SGxONGRTWTRsakZsaU5rT3VzQ0pPalIwZEZmcnVZQkx5d3JrSmRqL0tyV1hUL082NTlqQktaTUJDTmgxOTl6NjNROTFhYThURUlPemozOE9nMjRSbk5qR2QvNjU5UlpESEh2aTJ0VFFHdWFzME5LLzlBemNESVBWUW5RcXFnMTlxS0RtYW00VXlUQzJiOXMrMmpoU2J2c05Qak1vRXZFNTk4RmxieVZFZUkxVExRMlh6ZnRxeWdKcno0NzRmWmY1cWcxOXcxaC96dGVQTnZ4STNrNE9uc2FpVEViRTAwc0RyQWpZc0ZGTkcwdWwvb3Q1dmw5TVdpdEE2ZkpBQUdLOG1mRGpMbHp1czExUXh5NGtKanFFTDFUOFZFeWdxN09CSURraThucnNPSFRwWDQ2d1NicnhvbTRIdmJReklzSDdmVWN4NUVrNm03SGllUURoZWJYYnRET2FkelNUWXRzelRLcXU4cEdnOU9ER00ycTBmNEpWbnlhREZmK2lJcUVJeWpYRlFQeUVNRjBjM1BTa1V5aXdyQUFHNjFtYmFJOHBWUWRJaGhhcStNT2hiS2hFVzJVSEpoZHYxbEVGL01HVVVnN0pvVmRmbi9NWEdUR1kwWFhoaWozTzI4RnplREdpN1RBSGhQcTdjTzlvYTZUTEJtWXBuUUk2ZUZSNnRiTWZ5WkhmUzA1T2JPeEhWa3ZaQ2VGTG9rVHR4N3E0PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19';
        } else {
            var urlPath = window.document.location.pathname;
            var pathItem = urlPath.split('/');
            if (pathItem.length > 2) {
                var lang = pathItem[pathItem.length - 2];
                GameDataManager.getInstance().seti18nLanguage(lang.toLowerCase());
            }

            urlData = window.location.search.substring(1);
            if (urlData === null || urlData === '') {
                this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
                return;
            }

            urlData = urlData.split('&nsukey=')[0];

        }

        let parseData = null;
        try {
            parseData = JSON.parse(window.atob(urlData));     
        } catch (error) {
            console.log(error);
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;    
        }

        if (parseData === null) {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;
        }
        const loginData = parseData.data;
        // console.log('parseData:', JSON.stringify(loginData));

        if (loginData.playerID === null || loginData.playerID === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('PlayerDataError', 'Player Data Error'));
            return;
        }

        if (loginData.access_Token === null || loginData.access_Token === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('PlayerCertificationError', 'Player Certification Error'));
            return;
        }

        if (loginData.serverConnection === null || loginData.serverConnection === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;
        }

        if (loginData.referrer) {
            //TODO
        }

        if (loginData.log) {

        } 

        if (loginData.lang) {
            GameConfig.setLanguage(loginData.lang);
            GameDataManager.getInstance().seti18nLanguage(loginData.lang);
            // GameDataManager.getInstance().seti18nLanguage('zh-tw');
        }
        GameConfig.setUserId(loginData.playerID);
        GameConfig.setCert(loginData.access_Token);

        if (window.location.href.indexOf('https://') != -1) {
            GameConfig.setConnectIp('wss://' + loginData.serverConnection);
        } else {
            GameConfig.setConnectIp('ws://' + loginData.serverConnection);
        }
        this.startConnect();
    }

    startConnect () {
        let self = this;
        const url = GameConfig.getConnectIp();
        NetworkManager.getInstance().beginConnect(url, function() {
            console.log('connecting');
            if (GameManager.getInstance().isFirstLogin || !GameDataManager.getInstance().isReConnect) {
                self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('login'));
                NetworkManager.getInstance().sendMsgData(MessageBClassID.Common, PlatformCommonClassID.RequestHeartBeatConfigID, null);
                NetworkManager.getInstance().loginUserData(function(loginRoomRetData: LoginGameRoomRet) {
                    if (loginRoomRetData.Code === 1) {
                        self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('dataConfirm'));
                        GameDataManager.getInstance().LoginGameRoomData(loginRoomRetData, function(errorMsg: string) {
                        });
                        AudioManger.getInstance().playBGMAudio();
                    } else {
                        self.loadingHandler.showLoadingHint(loginRoomRetData.Message ?? GameConfig.getMessageLocation('PlayerCertificationError', 'Player Certification Error'));
                        NetworkManager.getInstance().closeConnect();
                    }
                });
            } else {
                if (GameDataManager.getInstance().isReConnect) {
                    GameDataManager.getInstance().isReConnect = false;
                    GameDataManager.getInstance().clearAllRegisterCallback();
                    NetworkManager.getInstance().closeConnect();
                    director.loadScene('game');
                }
            }
        }, function() {
            GameDataManager.getInstance().isReConnect = true;
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('reconnectServer', 'Server Connecting'));
        });
    }
}


