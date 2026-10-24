import { _decorator, Component, director, Node, ProgressBar, SceneAsset, Sprite } from 'cc';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    private static instance: GameManager;

    public static getInstance(): GameManager {
        return GameManager.instance;
    }

    @property(ProgressBar)
    public progressBar: ProgressBar;

    public isFirstLogin = true;

    start() {
        GameManager.instance = this;
        director.addPersistRootNode(this.node);
        this.parseUrilLanguage();
        this.loadingGame();
    }

    parseUrilLanguage() {
        var urlPath = window.document.location.pathname;
        var pathItem = urlPath.split('/');
        if (pathItem.length > 2) {
            var lang = pathItem[pathItem.length - 2];
            this.seti18nLanguage(lang.toLowerCase())
        } else {
            this.seti18nLanguage();
        }
    }

    loadingGame() {
        let self = this;
        this.progressBar.progress = 0;
        director.preloadScene('game',
            function (completedCount: number, totalCount: number, item: any) {
                const progressValue: number = completedCount / totalCount;
                self.progressBar.progress = progressValue;
            }, function (error: Error, sceneAsset: SceneAsset) {
                director.loadScene('game');
            });
    }

    public seti18nLanguage(lang: string = 'en-us') {
        switch (lang) {
            case 'en-us':
                i18n.init('enUS');
                break;
            case 'zh-cn':
                i18n.init('zhCN');
                break;
            case 'zh-tw':
                i18n.init('zhTW');
                break;
            default:
                i18n.init('enUS');
                break;
        }
        i18n.updateSceneRenderers();
    }
}


