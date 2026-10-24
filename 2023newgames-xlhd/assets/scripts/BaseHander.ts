import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import * as ICallback from './Data/ICallback';
import GameDataManager from './GameDataManager';

/**
 * 基本Game Handler class
 */
@ccclass('BaseHander')
export class BaseHander extends Component {
    @property({ type: ICallback.GameStatus })
    public gameStatus: ICallback.GameStatus = ICallback.GameStatus.NONE;
    @property({
        type: Node
    })
    public nodeBase: Node;
    public initCallback: ({():void})
    start() {
              
    }

    updateGameStatus (status: ICallback.GameStatus) {
        this.gameStatus = status;
    }

    init(callback:{():void} = null) {
        var self = this;
        this.initCallback = callback;
        GameDataManager.getInstance().registerGameStatusChanged(function (status: ICallback.GameStatus) {
            self.updateGameStatus(status);
        });
    }

    initAltas (callback: {():void}) {

    }
}


