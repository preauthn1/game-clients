import { WebSocket, reciverDataCallback } from './WebSocket';
import { GameSceneType } from '../Common/GameConfig';
import { MessageBClassID } from '../Proto/BClass';
import { PlatformCommonClassID } from '../Proto/Common';
import { HeartBeatConfig } from '../Proto/Msg/commonMsg';
import { GameRoomClassID } from '../Proto/GameRoom';
import { LoginGameRoomRet } from '../Proto/Msg/gameRoomMsg';
import * as GameConfig from '../Common/GameConfig'
import * as ICallback from '../Data/ICallback';

/**
 * 網路通訊工具
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
    private onceReceiverDataCallback: Map<string, reciverDataCallback> = new Map<string, reciverDataCallback>();
    private onReceiverDataCallback: reciverDataCallback[] = [];

    public beginConnect(url: string = null, connCallback: ICallback.webSocketCallback = null, onReconnCallback: ICallback.webSocketCallback = null) {
        var self = this;
        this.callback = connCallback;

        if (url === null) {
            url = 'ws://0.0.0.0:13101/ws';
        }

        this.ws = new WebSocket(GameSceneType.GameScene, url, () => {
            if (self.callback) {
                self.callback();
                // self.callback = null;
            }
        }, () => {
            // if (self.ws) {
            //     self.ws.close();
            //     self.ws = null;
            // }
        }, (data: ICallback.receiverData) => {
            // console.log(new Date().toLocaleString(), 'receiverData[mainId]: ' + data.mainId + ', [subId]: ' + data.subId + ',[data]:', JSON.stringify(data.data));
            self.syncReceiverData(data);
        }, () => {
            if (onReconnCallback) {
                onReconnCallback();
            }
        });
    }

    public closeConnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    public reConnect() {
        if (this.ws) {
            this.ws.reconnect();
        }
    }

    private syncReceiverData(data: ICallback.receiverData) {
        if (data.mainId === MessageBClassID.Common && data.subId === PlatformCommonClassID.HeartBeatConfigID) {
            this.setHeartBeatConfig(data.data as HeartBeatConfig);
        } else {
            const onceReceiverKey = this.getReceiverKey(data.mainId, data.subId);
            if (this.onceReceiverDataCallback.has(onceReceiverKey)) {
                let reciverCallback = this.onceReceiverDataCallback.get(onceReceiverKey);
                if (reciverCallback) {
                    reciverCallback(data);
                }
                this.onceReceiverDataCallback.delete(onceReceiverKey);
            } else {
                // GameDataManager.getInstance().syncProtoData(data)
                this.onReceiverDataCallback.forEach(cb => {
                    if (cb) {
                        cb(data);
                    }
                })
            }
        }
    }

    private getReceiverKey(mainId: number, subId: number): string {
        return mainId + '-' + subId;
    }

    public registerOnceCallbackProtoData(mainId: number, subId: number, callback: reciverDataCallback) {
        const onceReceiverKey = this.getReceiverKey(mainId, subId);
        this.onceReceiverDataCallback.set(onceReceiverKey, callback);
    }
    
    public registerCallbackProtoData(callback: reciverDataCallback) {
        this.onReceiverDataCallback.push(callback);
    }

    private setHeartBeatConfig(data: HeartBeatConfig) {
        this.ws.setHeartbeat(data.BeatInterval, data.ConnLoseTimeSpan);
    }

    public loginUserData(loginCallback: ICallback.webSocketReceiverCallback) {
        this.registerOnceCallbackProtoData(MessageBClassID.GameRoom, GameRoomClassID.LoginRoomRetID, (receiverData: ICallback.receiverData) => {
            if (loginCallback) {
                loginCallback(receiverData.data as LoginGameRoomRet)
            }
        })
        let userData = {
            Cer: GameConfig.getCert(),
            HDCode: GameConfig.getHDCode(),
            HDType: 1,
            UserID: GameConfig.getUserId()
        }
        this.ws.sendMsgData(MessageBClassID.GameRoom, GameRoomClassID.LoginRoomID, userData);
    }

    public sendMsgData(mainId: number, subId: number, data: any) {
        if (this.ws) {
            this.ws.sendMsgData(mainId, subId, data);
        }
    }
}