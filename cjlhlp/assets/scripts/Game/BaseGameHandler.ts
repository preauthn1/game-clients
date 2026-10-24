import { _decorator, Component, Node } from 'cc';
import { BaseHandler } from '../CocosFrameworks/UI/BaseHandler';
import { GameStatus } from '../CocosFrameworks/Data/BaseGameDataManager';
import { GameDataManager } from '../Data/GameDataManager';
const { ccclass, property } = _decorator;

@ccclass('BaseGameHandler')
export class BaseGameHandler extends BaseHandler {

    public init(callback?: () => void): void {
        let self = this;
        super.init(callback);
        GameDataManager.getInstance().registerGameStatusChanged(function (status: GameStatus) {
            self.updateGameStatus(status);
        });
        if (callback) {
            callback();
        }
    }

    protected updateGameStatus(status: GameStatus): void {
        super.updateGameStatus(status);
    }
}


