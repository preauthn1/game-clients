import { _decorator, Sprite, director, SceneAsset } from 'cc';
import * as GameConfig from '../Common/GameConfig';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 載入進度佈局介面控制器
 */
@ccclass('LoadingViewController')
export class LoadingViewController extends BaseViewController {

    @property(Sprite)
    public loadingBarSprite: Sprite;

    ////////////////////////////////////////////////////////////////////////////////
    //#region Lifecycle
    ////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        super.onLoad();
        
        // GameConfig.setLanguage("EN-US");

        this.loadingBarSprite.fillStart = 0;
        this.loadingBarSprite.fillRange = -1;
    }

    start() {
        super.start();

        director.addPersistRootNode(this.node);
        this.loadingGame();
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Private functions
    ////////////////////////////////////////////////////////////////////////////////
    private loadingGame() {
        var self = this;
        this.loadingBarSprite.fillStart = 0;
        director.preloadScene('game', (completedCount: number, totalCount: number, item: any) => {
            const progressValue: number = completedCount / totalCount;
            self.loadingBarSprite.fillStart = progressValue;
        }, (error: Error, sceneAsset: SceneAsset) => {
            director.loadScene('game');
        });
    }
    //#endregion
}

