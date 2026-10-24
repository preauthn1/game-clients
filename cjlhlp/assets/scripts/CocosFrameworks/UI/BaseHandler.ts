import { _decorator, Component, Node } from 'cc';
import BaseGameDataManager, { GameStatus } from '../Data/BaseGameDataManager';
const { ccclass, property } = _decorator;

/**
 * 基本Game Handler class
 */
@ccclass('BaseHandler')
export class 
BaseHandler extends Component {
    @property({ group: { name: 'BaseData', id: '0', displayOrder: 0}, type: GameStatus })
    public gameStatus: GameStatus = GameStatus.NONE;
    @property({ group: { name: 'BaseData', id: '0', displayOrder: 0}, type: Node })
    public nodeBase: Node;
    public initCallback: ({():void})

    protected updateGameStatus (status: GameStatus) {
        this.gameStatus = status;
    }

    public init(callback:{():void} = null) {
        this.initCallback = callback;
    }

    protected initAltas (callback: {():void}) {

    }
}


