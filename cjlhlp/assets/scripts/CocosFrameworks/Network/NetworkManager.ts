import { WebSocket, reciverDataCallback } from './WebSocket';
import { GameSceneType } from '../Data/GameConfig';
import { MessageBClassID } from '../../Proto/BClass';
import { PlatformCommonClassID } from '../../Proto/Common';
import { HeartBeatConfig, TipMessage } from '../../Proto/Msg/commonMsg';
import { GameRoomClassID } from '../../Proto/GameRoom';
import { LoginGameRoomRet } from '../../Proto/Msg/gameRoomMsg';
import * as GameConfig from '../Data/GameConfig'
import * as ICallback from '../../Data/ICallback';


export interface TipMessageReciver { (data: TipMessage): void }
/**
 * WebSocket Network 封包管理
 */
export default class NetworkManager {
    private static instance: NetworkManager;

    public static getInstance(): NetworkManager {
        if (!NetworkManager.instance) {
            NetworkManager.instance = new NetworkManager();
        }
        return NetworkManager.instance;
    }

    private ws: WebSocket | null = null;
    private callback: ICallback.webSocketCallback | null = null;
    private onCloseCallback: ICallback.webSocketCallback | null = null;
    private onceRevicerDataCallback: Map<string, reciverDataCallback> = new Map<string, reciverDataCallback>();
    private onReciverDataCallback: reciverDataCallback = null;
    private onTipMessageDataCallback: TipMessageReciver = null;

    public beginConnect(url: string = null, connCallback: ICallback.webSocketCallback = null, onReconnCallback: ICallback.webSocketCallback = null, onCloseCallback: ICallback.webSocketCallback = null) {
        var self = this;
        this.callback = connCallback;
        this.onCloseCallback = onCloseCallback;

        if (url === null) {
            url = 'ws://0.0.0.0:13101/ws';
        }

        this.ws = new WebSocket(GameSceneType.GameScene, url, function() {
            if (self.callback) {
                self.callback();
                // self.callback = null;
            }
            
        }, function() {
            if (self.onCloseCallback) {
                self.onCloseCallback();
            }
        }, function (data: ICallback.reciverData) {
            // console.log(new Date().toLocaleString(), 'revicerData[mainId]: ' + data.mainId + ', [subId]: ' + data.subId + ',[data]:', JSON.stringify(data.data));
            self.syncRevicerData(data);
        }, function () {
            if (onReconnCallback) {
                onReconnCallback();
            }
        })
    }

    public closeConnect () {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    public reConnect () {
        if (this.ws) {
            this.ws.reconnect();
        }
    }

    public registerReciverData (callback: reciverDataCallback) {
        this.onReciverDataCallback = callback;
    }

    public registerTipReciverData(callback: TipMessageReciver) {
        this.onTipMessageDataCallback = callback;
    }

    private syncRevicerData (data: ICallback.reciverData) {
        if (data.mainId === MessageBClassID.Common) {
            switch (data.subId) {
                case PlatformCommonClassID.HeartBeatConfigID:
                    this.setHeartBeatConfig(data.data as HeartBeatConfig);
                    break;
                case PlatformCommonClassID.TipMessageID:
                    const tipData = data.data as TipMessage;
                    if (tipData.Message !== null && tipData.Message !== '') {
                        if (this.onTipMessageDataCallback) {
                            this.onTipMessageDataCallback(tipData);
                        }
                        // PopupMessageController.getInstance().showPopupMessage(tipData.Message, tipData.Message);
                    }
                    break;
            }
        } else {
            const onceRevicerKey = this.getRevicerKey(data.mainId, data.subId);
            if (this.onceRevicerDataCallback.has(onceRevicerKey)) {
                let reciverCallback = this.onceRevicerDataCallback.get(onceRevicerKey);
                if (reciverCallback) {
                    reciverCallback(data);
                }
                this.onceRevicerDataCallback.delete(onceRevicerKey);
            }
            if (this.onReciverDataCallback) {
                this.onReciverDataCallback(data);
            }
        }
    }

    private getRevicerKey (mainId: number, subId: number): string {
        return mainId + '-' + subId;
    }

    public registerOnceCallbackProtoData (mainId: number, subId: number, callback: reciverDataCallback) {
        const onceRevicerKey = this.getRevicerKey(mainId, subId);
        this.onceRevicerDataCallback.set(onceRevicerKey, callback);
    }

    private setHeartBeatConfig(data: HeartBeatConfig) {
        this.ws.setHeartbeat(data.BeatInterval, data.ConnLoseTimeSpan);
    }

    public loginUserData (userData: any, loginCallback: ICallback.webSocketRevicerCallback) {
        this.registerOnceCallbackProtoData(MessageBClassID.GameRoom, GameRoomClassID.LoginRoomRetID, 
            function(revicerData: ICallback.reciverData) {
                if (loginCallback) {
                    loginCallback(revicerData.data as LoginGameRoomRet)
                }
        })
        // let userData = {
        //     Cer: GameConfig.getCert(),
        //     HDCode: GameConfig.getHDCode(),
        //     HDType: 1,
        //     UserID: GameConfig.getUserId()
        // }
        this.ws.sendMsgData(MessageBClassID.GameRoom, GameRoomClassID.LoginRoomID, userData);
    }

    public sendMsgData(mainId: number, subId: number, data: any) {
        if (this.ws) {
            this.ws.sendMsgData(mainId, subId, data);
        }
    }
}