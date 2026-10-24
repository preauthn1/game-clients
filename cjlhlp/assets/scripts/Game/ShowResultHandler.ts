import { _decorator, Button, Component, Node, tween, UIOpacity } from 'cc';
import { BaseGameHandler } from './BaseGameHandler';
const { ccclass, property } = _decorator;

export enum OtherResultType {
    FIRST_12 = 0,
    SECOND_12 = 1,
    THIRD_12 = 2,
    SMALL = 3,
    BIG = 4,
    EVEN = 5,
    ODD = 6,
    RED = 7,
    BLACK = 8,
    FIRST_2_TO_1 = 9,
    THIRD_2_TO_1 = 10,
    SECOND_2_TO_1 = 11

}

class OpacityAlpha {
    value: number = 0
}

@ccclass('ShowResultHandler')
export class ShowResultHandler extends BaseGameHandler {
    @property(UIOpacity)
    public arrNumberUIOpacity: UIOpacity[] = [];
    @property(UIOpacity)
    public arrOtherUIOpacity: UIOpacity[] = [];

    public showResult(result: number) {
        this.showResultAnimation(this.arrNumberUIOpacity[result]);
        if (result > 0) {
            this.showTwoToOne(result);
            this.Splite12(result);
            this.showEvenOdd(result);
            this.showSmallBig(result);
            this.showRedBlack(result);
        }
    }

    private showTwoToOne(result: number) {
        const index = (result % 3) + 9;
        this.showResultAnimation(this.arrOtherUIOpacity[index]);
    }

    private Splite12(result: number) {
        const index = parseInt((result / 12).toString());
        this.showResultAnimation(this.arrOtherUIOpacity[index]);
    }

    private showEvenOdd(result: number) {
        const index = (result % 2) + 5;
        this.showResultAnimation(this.arrOtherUIOpacity[index]);
    }

    private showSmallBig(result: number) {
        const index = parseInt((result / 19).toString()) + 3;
        this.showResultAnimation(this.arrOtherUIOpacity[index]);
    }

    private showRedBlack(result: number) {
        let index = 7;
        switch (result) {
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:
            case 11:
            case 13:
            case 15:
            case 17:
            case 20:
            case 22:
            case 24:
            case 26:
            case 28:
            case 29:
            case 31:
            case 33:
            case 35:
                index = 8
                break;
        }
        this.showResultAnimation(this.arrOtherUIOpacity[index]);
    }

    private showResultAnimation(opacity: UIOpacity) {
        let opacityAlpha = new OpacityAlpha();
        opacityAlpha.value = 0;
        opacity.opacity = 0;
        opacity.node.active = true;
        tween().target(opacityAlpha)
            .delay(2)
            .by(0.3, { value: 255 }, {
                onUpdate(target: OpacityAlpha) {
                    opacity.opacity = target.value
                },
            })
            .delay(0.2)
            .by(0.3, { value: -255 }, {
                onUpdate(target: OpacityAlpha) {
                    opacity.opacity = target.value
                },
            })
            .delay(0.2)
            .by(0.3, { value: 255 }, {
                onUpdate(target: OpacityAlpha) {
                    opacity.opacity = target.value
                },
            })
            .delay(2)
            .call(() => {
                opacity.node.active = false;
            })
            .start();
    }
}


