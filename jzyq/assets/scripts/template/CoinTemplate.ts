import { _decorator, SpriteFrame, Toggle, ToggleComponent } from 'cc';
import * as ICallback from '../Data/ICallback';
import { BaseCoinTemplate } from './BaseCoinTemplate';
import Long from 'long';
const { ccclass, property } = _decorator;

/**
 * 籌碼 Template for Prefab
 */
@ccclass('CoinTemplate')
export class CoinTemplate extends BaseCoinTemplate {
    @property(ToggleComponent)
    public button: ToggleComponent;
    
    private betCallback: ICallback.betCoinCallback;

    setCoinItem(index: number, betCoin: Long, betIcon: SpriteFrame, callback: ICallback.betCoinCallback = null) {
        var self = this;
        super.setCoinItem(index, betCoin, betIcon);
        this.button.node.on(Toggle.EventType.TOGGLE, function(toggle: ToggleComponent) {
            if (toggle.isChecked && callback) {
                callback(self);
            }
        });
        this.betCallback = callback;
    }

    enableCoin(isEnable: boolean) {
        this.button.enabled = isEnable;
    }
}


