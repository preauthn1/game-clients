import { _decorator, Component, Node, SpriteFrame, Vec3, tween, Vec2, Size } from 'cc';
import { BaseCoinTemplate } from './BaseCoinTemplate';
const { ccclass, property } = _decorator;

/**
 * Show on table Coin Template for prefab
 */
@ccclass('ShowCoinTemplate')
export class ShowCoinTemplate extends BaseCoinTemplate {

    start() {

    }

    update(deltaTime: number) {
        
    }

    showCoinItem(betCoin: number, betIcon: SpriteFrame, moveToPos: Vec3, shiftPos: Size, randomTime: number = 3) {
        super.setCoinItem(0, betCoin, betIcon);
        this.node.setScale(new Vec3(0.7, 0.7, 0.7));
        const durationTime = 0.3 + (Math.random() * randomTime) / 10;
        const shiftX = (Math.random() * shiftPos.x - (shiftPos.x / 2)) / 2 * 0.7;
        const shiftY = (Math.random() * shiftPos.y - (shiftPos.y / 2)) / 2 * 0.7 + 50;
        tween()
            .target(this.node)
            .by(durationTime, { position: new Vec3(moveToPos.x + shiftX, moveToPos.y + shiftY, moveToPos.z) })
            .to(0.3, { scale: new Vec3(0.5, 0.5, 0.5) })
            .start();
    }
}


