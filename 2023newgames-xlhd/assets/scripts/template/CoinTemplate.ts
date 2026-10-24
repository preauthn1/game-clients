import { _decorator, SpriteFrame, Toggle } from 'cc';
import * as ICallback from '../Data/ICallback';
import { BaseCoinTemplate } from './BaseCoinTemplate';
const { ccclass, property } = _decorator;

/**
 * 籌碼 Template for Prefab
 */
@ccclass('CoinTemplate')
export class CoinTemplate extends BaseCoinTemplate {
    @property(Toggle)
    public button: Toggle;
    
    private betCallback: ICallback.betCoinCallback;

    setCoinItem(index: number, betCoin: number, betIcon: SpriteFrame, isBetCoin = false, callback: ICallback.betCoinCallback = null) {
        super.setCoinItem(index, betCoin, betIcon);
        this.betCallback = callback;
    }
}


