import { _decorator, Component, size } from 'cc';
import { WebSocketHeartbeat } from './WebSocketHeartbeat';
import { GameSceneType } from '../Common/GameConfig';
import { DataTool } from '../Tools/DataTool';
import { MessageBClassID } from '../Proto/BClass';
import { PlatformCommonClassID } from '../Proto/Common';
import * as ProtoTool from '../Tools/ProtoTool';
import * as ICallback from '../Data/ICallback';

export interface reciverDataCallback { (data: ICallback.reciverData): void }

/**
 * WebSocket Status Callback 管理
 */
export class WebSocket {

    private _WebSocketHB: WebSocketHeartbeat | null = null;
    private revicerDataCallback: reciverDataCallback | null = null;

    // private callbackMap: Map<string, reciverCallbackData> = new Map<string, reciverCallbackData>();

    constructor (name: GameSceneType, url: string, onConnect: ICallback.webSocketCallback, onClose: ICallback.webSocketCallback, reciverCallback: reciverDataCallback, onReconnect: ICallback.webSocketCallback = null) {
        let self = this;
        this.revicerDataCallback = reciverCallback;
        this._WebSocketHB = new WebSocketHeartbeat(url);

        this._WebSocketHB.onOpen = function () {
            // console.log('connecting...' + name);
            //TODO Init Game
            if (onConnect) {
                onConnect();
            }
        }

        this._WebSocketHB.onReconnect = function () {
            console.log('%c =============== WebSocket onReconnect =============== ', 'color:#f00;');
            if (onReconnect) {
                onReconnect();
            }
            self._WebSocketHB.reconnect();
        }

        this._WebSocketHB.onClose = function () {
            console.log('%c =============== WebSocket onClose =============== ', 'color:#f00;');
            if (onClose) {
                onClose();
            }
        }

        this._WebSocketHB.onError = function () {
            console.log('%c =============== WebSocket onError =============== ', 'color:#f00;');
        }

        this._WebSocketHB.onMessage = function (event: MessageEvent) {
            console.log('%c =============== WebSocket onMessage =============== ', 'color:#f00;');
            let revicerData = new Uint8Array(event.data);
            let packageSize = self.parseRevicerData(self._WebSocketHB, revicerData);
            if (packageSize === -1) {
                //TODO reconnect
                return;
            }

            while (revicerData.length > packageSize) {
                revicerData = revicerData.slice(packageSize, revicerData.length);
                packageSize = self.parseRevicerData(self._WebSocketHB, revicerData);
                if (packageSize === -1) {
                    //TODO reconnect
                    return;
                }
            }
        }
    }

    public close () {
        this._WebSocketHB.close();
    }

    public reconnect () {
        this._WebSocketHB.reconnect();
    }

    // public regCallbackRevicerData(mainId: number, subId: number, callback: webSocketRevicerCallback, isOnce: boolean = false) {
    //     const callbackKey = mainId + '-' + subId;
    //     let callbackData: reciverCallbackData = {
    //         mainId: mainId,
    //         subId: subId,
    //         isOnce: isOnce,
    //         callback: callback
    //     }
    //     this.callbackMap.set(callbackKey, callbackData);
    // }

    // public unregCallbackRevicerData(mainId: number, subId: number) {
    //     const callbackKey = mainId + '-' + subId;
    //     if (this.callbackMap.has(callbackKey)) {
    //         this.callbackMap.delete(callbackKey);
    //     }
    // }

    // private sendRevicerCallback(reciverData: reciverData) {
    //     const callbackKey = reciverData.mainId + '-' + reciverData.subId;
    //     if (this.callbackMap.has(callbackKey)) {
    //         let callbackData: reciverCallbackData = this.callbackMap.get(callbackKey);
    //         callbackData.callback(reciverData.data);
    //         if (callbackData.isOnce) {
    //             this.callbackMap.delete(callbackKey);
    //         }
    //     }
    // }

    public sendMsgData (mainId: number, subId: number, data: any) {
        let encodeMsg = ProtoTool.getProtoEncodeMsg(mainId, subId, data);
        // console.log(' >>>>>>>> SendGameMsg >>>>>>>> ' + mainId + '-' + subId, data);
        if (this._WebSocketHB) {
            this._WebSocketHB.senMessage(encodeMsg);
        } else {
            console.error('WebSocketHeartbeat is null, can not send data!!!');
        }
    }

    

    public sendData (data: any) {
        this._WebSocketHB.senMessage(data);
    }

    public setHeartbeat (beatInterval: number, connLostTime: number) {
        this._WebSocketHB.setHeartbeat(beatInterval, connLostTime);
    }

    private parseRevicerData(ws: WebSocketHeartbeat, data: Uint8Array) {
        let size = DataTool.bytes2Int(data.slice(1, 4)) + 4;
        if (data.length - size < 0) {
            console.log('%c !!!!!!!!!! 封包大小錯誤 !!!!!!!!!!', 'color:#f00;');
            return -1;
        }

        let mainId = DataTool.bytes2Int(data.slice(5, 8));
        let subId = DataTool.bytes2Int(data.slice(9, 12));
        if (mainId === MessageBClassID.Common && subId === PlatformCommonClassID.HeartBeatReturnID) {
            ws.heartCheck();
        }

        let parseData = data.slice(0, size);
        let decodeData = parseData.slice(12, parseData.length);

        const protoDecodeData = ProtoTool.getProtoDecodeMsg(mainId, subId, decodeData);
        if (this.revicerDataCallback) {
            this.revicerDataCallback(protoDecodeData);
        }
        // console.log(new Date().toLocaleString(), 'revicerData[mainId]: ' + mainId + ', [subId]: ' + subId + ',[data]:', JSON.stringify(protoDecodeData.data));
        // this.sendRevicerCallback(protoDecodeData);
        return size;
    }
}


