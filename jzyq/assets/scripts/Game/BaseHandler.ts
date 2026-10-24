import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import GameDataManager from '../Data/GameDataManager';
import { GameStatus, GameStatusToString } from '../Data/GameData';

/**
 * 基本Game Handler class
 */

@ccclass('BaseHandler')
export class BaseHandler extends Component {
    @property({ type: GameStatus })
    public gameStatus: GameStatus = GameStatus.NONE;
    @property({
        type: Node
    })
    public nodeBase: Node;
    public initCallback: ({():void})

    updateGameStatus (status: GameStatus) {
        this.gameStatus = status;
    }

    init(callback:{():void} = null) {
        var self = this;
        this.initCallback = callback;
        GameDataManager.getInstance().registerGameStatusChanged(function (status: GameStatus) {
            self.updateGameStatus(status);
        });
    }

    initAltas (callback: {():void}) {

    }
}


