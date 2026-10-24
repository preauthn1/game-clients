import { _decorator, Component, Node, tween, Vec3, UIOpacity } from 'cc';
import * as i18n from 'db://i18n/LanguageData';
import GameDataManager from '../GameDataManager';
const { ccclass, property } = _decorator;

/**
 * Bead Road Template for Prefab
 */
@ccclass('BeadTemplate')
export class BeadTemplate extends Component {
    @property(Node)
    public arrNodeBeadIcon: Node[] = [];
    @property(UIOpacity)
    public uiOpacity: UIOpacity;
    public index: number = 0;

    setBeadType (isShow: boolean, type: number, isNew: boolean = false) {
        var self = this;
        this.uiOpacity.opacity = 0;
        this.arrNodeBeadIcon.forEach((icon, index) => {
            icon.active = isShow && type === index;
        })
        if (type === -1) {
            return;
        }
        // i18n.updateSceneRenderers();
        if (isNew) {
            tween().target(this.node)
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.uiOpacity.opacity = ratio * 255;
                }
            })
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.uiOpacity.opacity = (1 - ratio) * 255;
                }
            })
            .by(0.5, { position: Vec3.ZERO}, {
                onUpdate: (target: Vec3, ratio: number) => {
                    self.uiOpacity.opacity = ratio * 255;
                }
            })
            .start();
        } else {
            this.uiOpacity.opacity = 255;
        }
    }
}


