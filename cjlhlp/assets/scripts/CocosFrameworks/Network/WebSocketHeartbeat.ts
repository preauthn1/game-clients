import * as ProtoTool from '../Proto/ProtoTool'
import { MessageBClassID } from '../../Proto/BClass';
import { PlatformCommonClassID } from '../../Proto/Common';
import * as ICallback from '../../Data/ICallback';

/**
 * 基礎WebSocket 功能
 */
export class WebSocketHeartbeat {    
    private ws: WebSocket | null = null;
    private opts: ICallback.wsConfig;
    private repeat: number;
    private lockReconnect: boolean = false;
    private forbidReconnect: boolean = false;
    private pingTimeoutId: NodeJS.Timeout;
    private pongTimeoutId: NodeJS.Timeout;


    public onClose: ICallback.webSocketCallback;
    public onError: ICallback.webSocketCallback;
    public onOpen: ICallback.webSocketCallback;
    public onReconnect: ICallback.webSocketCallback;
    public onMessage: ICallback.webSocketMsgCallback;


    constructor (url: string, pingTimeout = 3000, pongTimeout = 10000, reconnectTimeout = 2000, repeatLimit = null) {
        this.opts = {
            url: url,
            pingTimeout: pingTimeout,
            pongTimeout: pongTimeout,
            reconnectTimeout: reconnectTimeout,
            repeatLimit: repeatLimit
        }
        this.ws = null;
        this.repeat = 0;
        this.createWebSocket();
    }

    /**
     * 建立WebSocket 連線
     */
    createWebSocket() {
        try {
            console.log('createWebSocket...');
            this.ws = new WebSocket(this.opts.url);
            this.ws.binaryType = 'arraybuffer';
            this.initEventHandle();
        } catch (e) {
            throw e;
        }
    }

    /**
     * 初始化WebSocket事件
     */
    initEventHandle () {
        var self = this;
        this.ws.onclose = () => {
            self.onClose();
            if (!self.forbidReconnect) {
                self.onReconnect();
            }
        };
        this.ws.onerror = () => {
            self.onError();
            self.reconnect();
        };
        this.ws.onopen = () => {
            self.repeat = 0;
            self.onOpen();
            self.heartCheck();
        };
        this.ws.onmessage = (event) => {
            self.onMessage(event)
        }
    }

    /**
     * Send Message From WebSocket
     * @param msg Send Message
     */
    public senMessage (msg: any) {
        this.ws.send(msg);
    }

    /**
     * WebSocket 重新連接
     */
    reconnect () {
        console.log('reconnect');
        if (this.opts.repeatLimit > 0 && this.opts.repeatLimit <= this.repeat) {
            return;
        }
        if (this.lockReconnect || this.forbidReconnect) {
            return;
        }
        this.lockReconnect = true;
        this.repeat++;
        
        console.log('%c ========== 重新連線 ============ %c', 'color:#f00;', 'color:#fff;');
        this.ws.close();

        this.onReconnect();

        setTimeout(() => {
            this.createWebSocket();
            this.lockReconnect = false;
        }, this.opts.reconnectTimeout);
    }

    /**
     * 關閉WebSocket連線
     */
    public close () {
        this.forbidReconnect = true;
        this.heartReset();
        console.log('%c ================ 手動關閉WebSocket ================ %c', 'color:#f00;', 'color:#fff;');
        this.ws.close();
    }

    //#region 心跳功能
    public setHeartbeat (beatInterval: number, connLoseTime: number) {
        this.opts.pingTimeout = beatInterval * 1000;
        this.opts.pongTimeout = connLoseTime * 1000;
        this.heartCheck();
    }
    /**
     * 心跳檢查
     */
    heartCheck () {
        this.heartReset();
        this.heartStart();
    }

    /**
     * 開始發送心跳
     */
    heartStart () {
        
        var self = this;
        if (this.forbidReconnect) {
            return;
        }
        this.pingTimeoutId = setTimeout(() => {
            let heartbeatMsg = ProtoTool.getProtoEncodeMsg(MessageBClassID.Common, PlatformCommonClassID.HeartBeatID, null);
            // console.log(heartbeatMsg, self.ws.readyState);
            if (self.ws.readyState === WebSocket.OPEN) {
                self.ws.send(heartbeatMsg);
                // console.log(new Date().toLocaleString(),  '00000000000000 發送心跳 00000000000000');
                self.pongTimeoutId = setTimeout(() => {
                    console.log('%c ================ Close HeartBeat ================ %c', 'color:#f00;', 'color:#fff;');
                    self.ws.close();
                }, self.opts.pongTimeout);
            }
        }, this.opts.pingTimeout);
    }

    /**
     * 重置心跳
     */
    heartReset () {
        clearTimeout(this.pingTimeoutId);
        clearTimeout(this.pongTimeoutId);
    }
    //#endregion


}


