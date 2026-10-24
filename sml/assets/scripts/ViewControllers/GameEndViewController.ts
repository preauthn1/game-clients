import { _decorator, } from 'cc';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 遊戲結束佈局介面控制器
 */
@ccclass('GameEndViewController')
export class GameEndViewController extends BaseViewController {
    start() {
        super.start();
    }

    update(deltaTime: number) {
        super.update(deltaTime);
    }
}

