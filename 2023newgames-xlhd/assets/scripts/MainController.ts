import { _decorator, Component, Node, game, Game, director } from 'cc';
import { BaseHander } from './BaseHander';
import * as i18n from 'db://i18n/LanguageData';
import * as GameConfig from './Common/GameConfig';
import NetworkManager from './network/NetworkManager';
import GameDataManager from './GameDataManager';
import * as ICallback from './Data/ICallback';
import { LoadingHandler } from './LoadingHandler';
import { TableHandler } from './TableHandler';
import { DialogHandler } from './Dialog/DialogHandler';
import { LoginGameRoomRet } from './Proto/Msg/gameRoomMsg';
import { MessageHandler } from './MessageHandler';
import { MessageBClassID } from './Proto/BClass';
import { PlatformCommonClassID } from './Proto/Common';
import { GameManager } from './GameManager';
import { AudioManger } from './AudioManger';
const { ccclass, property } = _decorator;

const TEST_MODE = false;

/**
 * 主要控制台
 * 解析登入，連線、覆連等功能
 */
@ccclass('MainController')
export class MainController extends BaseHander {
    @property(LoadingHandler)
    public loadingHandler: LoadingHandler;
    @property(TableHandler)
    public tableHanddler: TableHandler;
    private isWaitingMessage: boolean = false;
    private startTime: Date;



    start() {
        super.start();
        this.init();
    }
    
    init() {
        var self = this;
        super.init();
        this.startTime = new Date();
        GameDataManager.getInstance().seti18nLanguage();
        this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('gameLoading'));
        this.loadingHandler.init();
        this.tableHanddler.init();
        this.tableHanddler.initAltas(function() {
            self.parseUrl();
        })
        
        game.on(Game.EVENT_HIDE, function() {
            self.startTime = new Date();
        }, this);
        game.on(Game.EVENT_SHOW, function() {
            self.reloadGameConnect();
        }, this);
        GameDataManager.getInstance().GameStatus = ICallback.GameStatus.LOADING;
    }

    update(deltaTime: number) {
        
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.LOGIN:
                if (GameManager.getInstance().isFirstLogin) {
                    DialogHandler.getInstance().showDialog(ICallback.DialogType.RULE);
                }
                break;
            case ICallback.GameStatus.WAITING_NEXT_ROUND:
                this.isWaitingMessage = true
                MessageHandler.getInstance().showMessageContent(GameConfig.getMessageLocation('NextNewGame'));
                break;
            case ICallback.GameStatus.BET_START:
                if (this.isWaitingMessage) {
                    this.isWaitingMessage = false;
                    MessageHandler.getInstance().hideMessageContent();
                }
                break;
            case ICallback.GameStatus.RELOADING:
                break;
        }
    }

    parseUrl () {
        var self = this;
        this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('connectServer'));
        let urlData = '';
        if (TEST_MODE) {
            urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwNDAyLCJwbGF5ZXJOYW1lIjoiZGVtby0xNjc5ODIyNjcwNDY1IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzAwMDQxMCwiZ2FtZUlEIjoyMjMwLCJnYW1lQ29kZSI6InhsaGQiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzIyMzAwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXlNRFF3TWl3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qYzVPREl5Tmpjd05EWTFJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKVGNHVmphV1pwWTBkaGJXVkpSQ0k2TWpJek1Dd2lUR0Z1WnlJNkltVnVMWFZ6SWl3aVZHOXJaVzVGZUhCcGNtVmtWR2x0WlNJNk1UWTRNRFk0T1RJME5Dd2lVbTVrU1VRaU9pSmpPVEU0WkRnd1ppMDNaRGczTFRRek5EZ3RZV0ptTnkweE1EUTFNRGN6WVRFM09UZ2lMQ0pUWlhOemFXOXVWRzlyWlc1U1lYY2lPbTUxYkd3c0lsTmxjM05wYjI1VWIydGxibEJIVXlJNklqbGxaVFE0T1RreExUWmhOVEV0TkdWaFppMWlabUZpTFRnNFlqY3pOMlpoT1RGa01TSXNJbE5wWjI1TFpYa2lPaUk1WWpNek1qZ3pNemRpTURFek5UYzNZekZqTkRFeE1qUTJZMlUzWTJNMk5DSXNJbFJ2YTJWdVZtVnljMmx2YmlJNk1UQXdNU3dpU25kMFZHOXJaVzVVZVhCbElqb3hmUT09Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmowQ2JtaFFzZU4xc0ZWa0UrU3o0bnFOK0lnemlZNFVVejFvb011Y1VMYTBjSGZLT3d5OGZEQktMc0pzNFRFYmtzQUN5b0lwMTkvRTRkcC9qQzlWaXlYbzRsakZsaU5rT3VzQ0pPalIwZEZmcnVZQkx5d3JrSmRqL0tyV1hUL082NTlqQktaTUJDTmgxOTl6NjNROTFhYThURUlPemozOE9nMjRSbk5qR2QvNjU5UlpESEh2aTJ0VFFHdWFzME5LLzlBemNESVBWUW5RcXFnMTlxS0RtYW0yT0FQYkY2WlROV0pYWE5mTXNMYmY4QTc2NkNXTGNMcFlKUjRCNHpuRXIzZVdYVkE0WmN5L3QwZkZ2V09BeXB4ZlQyVnRVZy82RVdlM3RFZGRmRWxJNzFWejNzU0FsVG9DK0E3TkZ3WXMxeWw5TVdpdEE2ZkpBQUdLOG1mRGpMbHp1czExUXh5NGtKanFFTDFUOFZFeWdxN09CSURraThucnNPSFRwWDQ2d1NkM3VuNGtxTklKQWFjUldvWitTVXpkNWxRaXphcTZRU01oa0tCTGEzWm5VN2pha2YyNVpPWXRuWWdRbExDakNjZWRVbW4vQUJJU1BacmJTRERTbm1jR1ZrcU5vVlEwU0hOWWMzVzU4K3QzZncvM0NucTRoNERxbkhjb25vNjRhczFWbHRRK3NDU1VReHRuREJPS1Q0c3Y3Z3RqeElMU0JvVGFwVjRLUHRmeEhlREdpN1RBSGhQcTdjTzlvYTZUTEJtWXBuUUk2ZUZSNnRiTWZ5WkhmUzA1T2JPeEhWa3ZaQ2VGTG9rVHR4N3E0PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19';
            // urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwMjg2LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjc5MzYzODU0Njg4IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzIwMDQxMCwiZ2FtZUlEIjoyMjMyLCJnYW1lQ29kZSI6Imp6eXEiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzIyMzIwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXlNREk0Tml3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qYzVNell6T0RVME5qZzRJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKVGNHVmphV1pwWTBkaGJXVkpSQ0k2TWpJek1pd2lUR0Z1WnlJNkltVnVMWFZ6SWl3aVZHOXJaVzVGZUhCcGNtVmtWR2x0WlNJNk1UWTRNREl5TnpnM05Td2lVbTVrU1VRaU9pSTFNRFJpWW1WbU1DMWpNVE0yTFRSa056UXRZakJpTkMwMU1ERXhaVFUyTURJell6UWlMQ0pUWlhOemFXOXVWRzlyWlc1U1lYY2lPbTUxYkd3c0lsTmxjM05wYjI1VWIydGxibEJIVXlJNklqWmxOVGxoWTJVekxURTNNVGt0TkRreU1TMWlPV05oTFRZMU9Ua3lOMll3WkdKa01DSXNJbE5wWjI1TFpYa2lPaUkzTldJM04ySmxPR1l3WmpObFl6azJaR1ExWldGbU4yVXhNVFF5TVRBeE15SXNJbFJ2YTJWdVZtVnljMmx2YmlJNk1UQXdNU3dpU25kMFZHOXJaVzVVZVhCbElqb3hmUT09Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmpseE5lZnJtMTZIWHZaM0VSSFA4eFZHZ1lqU2ZXS0NwT2VJVGx3VEFHV1k4SGZLT3d5OGZEQktMc0pzNFRFYmtzZmsyZHpYYlQ4a2hyTjN6SGxONGRTWTRsakZsaU5rT3VzQ0pPalIwZEZmcnVZQkx5d3JrSmRqL0tyV1hUL082NTlqQktaTUJDTmgxOTl6NjNROTFhYTBib1YzY0ZKaVh4amZrd1BCSjNPNHQ5UlpESEh2aTJ0VFFHdWFzME5LLzlBemNESVBWUW5RcXFnMTlxS0RtYW02MGxIaSt3YVgrMW5kZHpsV1gxVGhqYUxvUStwUGVGSUJtRnk3K0hVRnVpRWJvTVExVXlxM2FEeUhhdGU2WWU4dmhOUi96OHdYYll0M3hnN0lXU00yRkxDanJrSWhJMStGN0RzVzZIT2c2Rmw5TVdpdEE2ZkpBQUdLOG1mRGpMbHp1czExUXh5NGtKanFFTDFUOFZFeWdxN09CSURraThucnNPSFRwWDQ2d1M5ZmhxdWlZVWFSb0NKNVp0ODFqTXcrREs5SlYvZUpFM1VlN1g3VU54eTVaMXdpdkFjZGY2WXZId2Z3R0hHV3IyVXk2RDB6ZXJzcWRZMCtTeklHNmtGa2Y2SVJTZ1NBMUtKV1RZUjZTM01KME5DRzNEbXdvRzdDUXYyZVJvR0F2bHhIbzYvTzZNU2NtdkdnMGlwWVo4UW1LajlWS0pTc3BUd01UL1E0V0RUZUxlREdpN1RBSGhQcTdjTzlvYTZUTEJtWXBuUUk2ZUZSNnRiTWZ5WkhmUzA1T2JPeEhWa3ZaQ2VGTG9rVHR4N3E0PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19';
        } else {
            var urlPath = window.document.location.pathname;
            var pathItem = urlPath.split('/');
            if (pathItem.length > 2) {
                var lang = pathItem[pathItem.length - 2];
                GameDataManager.getInstance().seti18nLanguage(lang.toLowerCase());
            }

            urlData = window.location.search.substring(1);
            if (urlData === null || urlData === '') {
                this.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError'));
                return;
            }

            urlData = urlData.split('&nsukey=')[0];

        }

        let parseData = null;
        try {
            parseData = JSON.parse(window.atob(urlData));     
        } catch (error) {
            console.log(error);
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError'));
            return;    
        }

        if (parseData === null) {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError'));
            return;
        }
        const loginData = parseData.data;
        // console.log('parseData:', loginData);

        if (loginData.playerID === null || loginData.playerID === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('PlayerDataError'));
            return;
        }

        if (loginData.access_Token === null || loginData.access_Token === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('PlayerCertificationError'));
            return;
        }

        if (loginData.serverConnection === null || loginData.serverConnection === '') {
            self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('GameDataError'));
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

    reloadGameConnect () {
        var holdTime = new Date();
        var holdMillseconds = holdTime.getTime() - this.startTime.getTime();
        holdMillseconds = holdMillseconds * 0.001;
        if (holdMillseconds < 1) {
            return;
        }
        GameManager.getInstance().isFirstLogin = true;
        GameDataManager.getInstance().clearAllRegisterCallback();
        NetworkManager.getInstance().closeConnect();
        director.loadScene('game');
    }

    startConnect () {
        let self = this;
        const url = GameConfig.getConnectIp();
        NetworkManager.getInstance().beginConnect(url, function() {
            if (GameManager.getInstance().isFirstLogin || !GameDataManager.getInstance().isReConnect) {
                self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('login'));
                NetworkManager.getInstance().sendMsgData(MessageBClassID.Common, PlatformCommonClassID.RequestHeartBeatConfigID, null);
                NetworkManager.getInstance().loginUserData(function(loginRoomRetData: LoginGameRoomRet) {
                    if (loginRoomRetData.Code === 1) {
                        self.loadingHandler.showLoadingHint(GameConfig.getMessageLocation('dataConfirm'));
                        GameDataManager.getInstance().LoginGameRoomData(loginRoomRetData);
                        AudioManger.getInstance().playBGMAudio();
                    } else {
                        MessageHandler.getInstance().showMessageContent(loginRoomRetData.Message ?? GameConfig.getMessageLocation('PlayerCertificationError'));
                        NetworkManager.getInstance().reConnect();
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
            MessageHandler.getInstance().showMessageContent(GameConfig.getMessageLocation('reconnectServer'));
        });
    }
}


