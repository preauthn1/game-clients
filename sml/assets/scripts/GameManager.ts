/**
 * 遊戲管理器
 */

import { _decorator, Node, Enum, Prefab, instantiate } from 'cc';
import NetworkManager from './network/NetworkManager';
import * as ICallback from './Data/ICallback';
import { MessageBClassID } from './Proto/BClass';
import { PlatformCommonClassID } from './Proto/Common';
import { GameMessageClassID } from './Proto/Game';
import { LookOnUserNotify, UserEnter, UserLeave, UserLuckScoreRet, UserStateChange } from './Proto/Msg/gameMsg';
import { SML_GameMessageClassID } from './Proto/Game_SML';
import { SML_Bet, SML_BetRequest, SML_BetResponse, SML_BoardCastBet, SML_GameRecords, SML_GameResult, SML_GameResultWin, SML_RoundInfo, SML_Setting, SML_StepInfo } from './Proto/Msg/GameMsg_SML';
import { LoginGameRoomRet } from './Proto/Msg/gameRoomMsg';
import Long from 'long';
import { PopMessageViewController } from './ViewControllers/PopMessageViewController';

const { ccclass, } = _decorator;

export enum GameStatus {
    None = 0,
    Loading = 1,
    Login = 2,
    Gaming = 3,
    Waiting = 4,
    ShowResult = 5,
}

Enum(GameStatus)

export interface OnGameStatusChangedEvent { (status: GameStatus): void }

export interface GameManagerDataChangedCallback {
    onGameManagerDataChanged(dataType: DataType, data: any): void
}

export enum DataType {
    UserData = 'UserData',
    BetData = 'BetData',
    BetRetData = 'BetRetData',
    BetClearData = 'BetClearData',
    BetClearRetData = 'BetClearRetData',
    RoundData = 'RoundData',
    GameState = 'GameState',
    PokerResult = 'PokerResult',
    SettingData = 'SettingData',
    TrandData = 'TrandData',
    ResultWinData = 'ResultWinData',
    StepData = 'StepData',
    UserStateChangedData = 'UserStateChangedData',
    UserRoomLogonData = 'UserRoomLogonData',
    GameResultData = 'GameResultData',
    GameResultWinData = 'GameResultWinData',
    RecordData = 'RecordData',
    BoardcastData = 'BoardcastData',
}

@ccclass('GameManager')
export default class GameManager {
    private static instance: GameManager = null;
    public static sharedInstance() {
        if (GameManager.instance == null) {
            GameManager.instance = new GameManager();
            GameManager.instance.init();
        }
        return GameManager.instance;
    }

    public get gameStatus(): GameStatus { return this.currentGameStatus; }

    public set gameStatus(status: GameStatus) {
        if (this.currentGameStatus !== status) {
            this.currentGameStatus = status;
            this.gameStatusChangedEvents.forEach((event) => {
                if (event != null) {
                    event(this.currentGameStatus);
                }
            });
        }
    }

    public get firstLogin() { return this.isFirstLogin; }
    
    public set firstLogin(value: boolean) { this.isFirstLogin = value; }

    public get reconnection() { return this.isReconnection; }
    
    public set reconnection(value: boolean) { this.isReconnection = value; }

    public get gameRoomData(): LoginGameRoomRet { return this.loginGameRoomRet; }

    public set gameRoomData(data: LoginGameRoomRet) {
        this.loginGameRoomRet = data;
        this.dispatchDataChangedEvent(DataType.UserRoomLogonData, data.UserData);
    }

    public get betCoin(): Long { return this.currentBetCoin; }

    public set betCoin(data: Long) { this.currentBetCoin = data; }

    public get popMessageParentNode(): Node { return this.popMessageContainerNode; }

    public set popMessageParentNode(node: Node) { this.popMessageContainerNode = node; }

    public get popMessagePrefab(): Prefab { return this.popMessagePrefabObject; }

    public set popMessagePrefab(prefab: Prefab) { this.popMessagePrefabObject = prefab; }

    private currentGameStatus: GameStatus = GameStatus.None;

    private isFirstLogin: boolean = true;
    
    private isReconnection: boolean = false;
    
    private loginGameRoomRet: LoginGameRoomRet;

    private currentBetCoin: Long = null;

    private popMessageContainerNode: Node;

    private popMessagePrefabObject: Prefab;

    private gameStatusChangedEvents: Array<OnGameStatusChangedEvent> = [];

    private onDataChangedEventMap: Map<DataType, Array<GameManagerDataChangedCallback>> = new Map<DataType, Array<GameManagerDataChangedCallback>>();

    /**
     * 註冊資料變化通知事件
     * @param dataType 資料類型
     * @param eventCallback 資料變化通知事件
     */
    public registerOnDataChangedEvent(dataType: DataType, target: GameManagerDataChangedCallback) {
        var registerEventCallbacks = [];
        if (this.onDataChangedEventMap.has(dataType)) {
            registerEventCallbacks = this.onDataChangedEventMap.get(dataType);
            if (registerEventCallbacks.find(cb => cb === target)) {
                return;
            }
        }
        registerEventCallbacks.push(target);
        this.onDataChangedEventMap.set(dataType, registerEventCallbacks);
    }

    /**
     * 反註冊資料變化通知事件
     * @param dataType 資料類型
     * @param target 資料變化通知事件
     */
    public unregisterOnDataChangedEvent(dataType: DataType, target: GameManagerDataChangedCallback) {
        if (this.onDataChangedEventMap.has(dataType)) {
            var registerEventCallbacks = this.onDataChangedEventMap.get(dataType);
            var index = registerEventCallbacks.findIndex(cb => cb === target);
            if (index !== -1) {
                registerEventCallbacks.splice(index, 1);
                this.onDataChangedEventMap.set(dataType, registerEventCallbacks);
            }
        }
    }

    public clearAllRegisterEvents() {
        this.onDataChangedEventMap.clear();
        this.gameStatusChangedEvents.length = 0;
    }

    public registerOnGameStatusChangedEvent(event: OnGameStatusChangedEvent) {
        this.gameStatusChangedEvents.push(event);
    }

    public showPopMessage(message: string) {
        const popMessage = instantiate(this.popMessagePrefab);
        this.popMessageParentNode.addChild(popMessage);
        const popMessageViewController = popMessage.getComponent(PopMessageViewController);
        popMessageViewController.showPopMessage(message);
    }

    private init() {
        NetworkManager.getInstance().registerCallbackProtoData((data: ICallback.receiverData) => {
            switch (data.mainId as MessageBClassID) {
                case MessageBClassID.Common:
                    if (this.onHandleCommonMessage(data.subId, data.data)) return;
                    break;
                case MessageBClassID.Game:
                    if (this.onHandleGameMessage(data.subId, data.data)) return;
                    break;
                default:
                    // console.log(data.mainId, data.subId, data.data);
                    break;
            }
            // console.log(data.mainId, data.subId, data.data);
        });
    }


    private onHandleCommonMessage(messageId: number, parsedData: any): boolean {
        switch (messageId) {
            case PlatformCommonClassID.TipMessageID: {
                return true;
            }
            case PlatformCommonClassID.HeartBeatID: {
                return true;
            }
            case PlatformCommonClassID.HeartBeatReturnID: {
                return true;
            }
            case PlatformCommonClassID.RequestHeartBeatConfigID: {
                return true;
            }
            case PlatformCommonClassID.HeartBeatConfigID: {
                return true;
            }
            case PlatformCommonClassID.IPReportID: {
                return true;
            }
            case PlatformCommonClassID.ConnTokenID: {
                return true;
            }
            case PlatformCommonClassID.ServerInfoID: {
                return true;
            }
        }
        return false;
    }

    private onHandleGameMessage(messageId: number, parsedData: any): boolean {
        switch (messageId) {
            case GameMessageClassID.UserEnterID: {
                let data = parsedData as UserEnter;
                return true;
            }
            case GameMessageClassID.UserLeaveID: {
                let data = parsedData as UserLeave;
                return true;
            }
            case GameMessageClassID.UserStateChangeID: {
                this.dispatchDataChangedEvent(DataType.UserStateChangedData, parsedData as UserStateChange);
                return true;
            }
            case GameMessageClassID.GameStartID: {
                return true;
            }
            case GameMessageClassID.GameEndID: {
                return true;
            }
            case GameMessageClassID.LookOnUserNotifyID: {
                let data = parsedData as LookOnUserNotify;
                // if (data.UserID == GameConfig.getUserId()) {
                    // todo:jason receive user state changed event
                // }
                return true;
            }
            case GameMessageClassID.UserLuckScoreRetID: {
                let data = parsedData as UserLuckScoreRet;
                // if (data.UserID == GameConfig.getUserId()) {
                    // todo:jason receive user state changed event
                // }
                return true;
            }









            case SML_GameMessageClassID.SMLSettingID: {
                this.dispatchDataChangedEvent(DataType.SettingData, parsedData as SML_Setting);
                return true;
            }
            case SML_GameMessageClassID.SMLStepID: {
                // console.log("SMLStepID:", parsedData as SML_StepInfo);
                this.dispatchDataChangedEvent(DataType.StepData, parsedData as SML_StepInfo);
                return true;
            }
            case SML_GameMessageClassID.SMLRoundID: {
                // console.log("SMLRoundID:", parsedData as SML_RoundInfo);
                this.dispatchDataChangedEvent(DataType.RoundData, parsedData as SML_RoundInfo);
                return true;
            }
            case SML_GameMessageClassID.SMLBoardCastBetID: {
                // console.log("SMLBoardCastBetID:", parsedData as SML_RoundInfo);
                this.dispatchDataChangedEvent(DataType.BoardcastData, parsedData as SML_BoardCastBet);
                return true;
            }
            case SML_GameMessageClassID.SMLGameResultID: {
                // console.log("SMLGameResultID:", parsedData as SML_GameResult);
                this.dispatchDataChangedEvent(DataType.GameResultData, parsedData as SML_GameResult);
                return true;
            }
            case SML_GameMessageClassID.SMLGameResultWinID: {
                // console.log("SMLGameResultWinID:", parsedData as SML_GameResultWin);
                this.dispatchDataChangedEvent(DataType.GameResultWinData, parsedData as SML_GameResultWin);
                return true;
            }
            case SML_GameMessageClassID.SMLRecordsID: {
                // console.log("SMLRecordsID:", parsedData as SML_GameRecords);
                this.dispatchDataChangedEvent(DataType.RecordData, parsedData as SML_GameRecords);
                return true;
            }
            case SML_GameMessageClassID.SMLRichestListID: {
                // console.log("SMLRichestListID:", parsedData as SML_RichestList);
                return true;
            }
            case SML_GameMessageClassID.SMLLuckyStarListID: {
                // console.log("SMLLuckyStarListID:", parsedData as SML_LuckyStarList);
                return true;
            }
            case SML_GameMessageClassID.SMLBetID: {
                // console.log("SMLBetID:", parsedData as SML_Bet);
                this.dispatchDataChangedEvent(DataType.BetData, parsedData as SML_Bet);
                return true;
            }
            case SML_GameMessageClassID.SMLBetRetID: {
                // console.log("SMLBetRetID:", parsedData as SML_BetResponse);
                this.dispatchDataChangedEvent(DataType.BetRetData, parsedData as SML_BetResponse);
                return true;
            }
            case SML_GameMessageClassID.SMLBetClearID: {
                // console.log("SMLBetClearID:", parsedData as SML_BetRequest);
                this.dispatchDataChangedEvent(DataType.BetClearData, parsedData as SML_BetRequest);
                return true;
            }
            case SML_GameMessageClassID.SMLBetClearRetID: {
                // console.log("SMLBetClearRetID:", parsedData as SML_BetResponse);
                this.dispatchDataChangedEvent(DataType.BetClearRetData, parsedData as SML_BetResponse);
                return true;
            }
        }
        return false;
    }

    private dispatchDataChangedEvent(dataType: DataType, data: any) {
        if (!this.onDataChangedEventMap.has(dataType)) return;
        
        let eventCallbacks = this.onDataChangedEventMap.get(dataType);
        eventCallbacks.forEach((target, index) => {
            if (target != null) {
                target.onGameManagerDataChanged(dataType, data);
            }
        });
    }
}