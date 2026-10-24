import { _decorator, UITransform, Label, CCInteger } from 'cc';
import { BaseViewController } from './BaseViewController';
const { ccclass, property } = _decorator;

/**
 * 長條圖佈局介面控制器
 */
@ccclass('ChartBarViewController')
export class ChartBarViewController extends BaseViewController {

    @property(Label)
    public titleLabel: Label;

    @property(UITransform)
    public valueTransform: UITransform;
    
    @property(CCInteger)
    public max: number = 0;

    public set barValue(value: number) { 
        this.value = value;
        this.valueTransform.setContentSize(this.valueTransform.contentSize.width, (value / this.max) * 410.0);
    }

    public get barValue() { return this.value; }

    private value: number = 0;

}

