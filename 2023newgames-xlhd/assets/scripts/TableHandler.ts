import { _decorator, Component, Node } from 'cc';
import { BaseHander } from './BaseHander';
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';
import { GlowHandler } from './GlowHandler';
import { PokerHandler } from './PokerHandler';
import { LHD_Setting } from './Proto/Msg/gameMsg_LHD';
import { StatusBarHandler } from './StatusBarHandler';
import { StatusHandler } from './StatusHandler';
import { TrandHandler } from './TrandHandler';
const { ccclass, property } = _decorator;

/**
 * 初始化Game Table控制器
 */
@ccclass('TableHandler')
export class TableHandler extends BaseHander {
    @property(StatusHandler)
    public statusHandler: StatusHandler;
    @property(PokerHandler)
    public pokerHandler: PokerHandler;
    @property(StatusBarHandler)
    public topStatusHandler: StatusBarHandler;
    @property(GlowHandler)
    public glowHandler: GlowHandler;
    @property(TrandHandler)
    public trandHandler: TrandHandler;

    start() {
        super.start();
    }

    init() {
        super.init();
        var self = this;
        this.trandHandler.init();
        this.statusHandler.init();
        this.pokerHandler.init();
        this.topStatusHandler.init();
        this.glowHandler.init();
        GameDataManager.getInstance().registerDataChange(ICallback.GameDataType.SettingData, function(data: any) {
            self.syncGameSettingData(data as LHD_Setting);
        })
    }

    update(deltaTime: number) {
        
    }

    syncGameSettingData(data: LHD_Setting) {
        this.glowHandler.syncBetSettingData(data);
        this.topStatusHandler.syncGameSettingData(data);
        this.trandHandler.syncGameSettingData(data);
    }
    
    initAltas (callback: {():void}) {
        this.pokerHandler.initAltas(callback);
    }

    updateGameStatus (status: ICallback.GameStatus) {
        super.updateGameStatus(status);
        switch (this.gameStatus) {
            case ICallback.GameStatus.LOGIN:
                if (this.nodeBase) {
                    this.nodeBase.active = true;
                }
                break;
        }
    }
}


