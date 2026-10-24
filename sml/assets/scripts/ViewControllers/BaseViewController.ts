import { _decorator, Component, } from 'cc';
import GameManager, { GameStatus } from '../GameManager';
const { ccclass, property } = _decorator;

/**
 * 基礎佈局介面控制器
 */
@ccclass('BaseViewController')
export class BaseViewController extends Component {
    
    protected onLoad() {
        // console.log("onLoad:", this.name);
    }

    protected start() {
        
    }

    protected update(deltaTime: number) {
        
    }

    public init() {
        var self = this;
        GameManager.sharedInstance().registerOnGameStatusChangedEvent((gameStatus) => {
            self.onGameStatusChanged(gameStatus);
        });
    }

    protected onGameStatusChanged(gameStatus: GameStatus) {

    }

}

