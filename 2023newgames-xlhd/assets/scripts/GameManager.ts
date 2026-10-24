import { _decorator, Component, Node, director, SceneAsset, Sprite } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Keep All Secens 常駐遊戲資料管理 class
 */
@ccclass('GameManager')
export class GameManager extends Component {
    private static instance: GameManager;

    public static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    @property(Sprite)
    public spriteProgressBar: Sprite;

    public isFirstLogin = true;

    start() {
        director.addPersistRootNode(this.node);
        GameManager.instance = this;
        this.loadingGame();
    }

    loadingGame () {
        var self = this;
        this.spriteProgressBar.fillRange = 1;
        director.preloadScene('game', 
        function(completedCount: number, totalCount: number, item: any) {
            // console.log('onProgress:', completedCount, totalCount, item);
            const progressValue: number = completedCount / totalCount;
            self.spriteProgressBar.fillStart = 1 - progressValue;
        }, function(error: Error, sceneAsset: SceneAsset) {
            director.loadScene('game');
        });
    }
}
