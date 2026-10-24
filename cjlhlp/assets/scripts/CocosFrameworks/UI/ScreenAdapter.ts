import { _decorator, Canvas, Component, Node, ResolutionPolicy, view, Widget, screen, Vec2, sys, Enum } from 'cc';
import { OrientationHintHandler } from '../../Game/OrientationHintHandler';
import { getBrowserType } from '../Data/GameConfig';
const { ccclass, property } = _decorator;

export enum OrientationType {
    PortraitMode,
    LandscapeMode
}

@ccclass('ScreenAdapter')
export class ScreenAdapter extends Component {

    private onOrientationChangeCallback: { (mode: OrientationType): void } = null;
    private orientationMode: OrientationType = OrientationType.PortraitMode;

    public get OrientationMode(): OrientationType {
        return this.orientationMode
    }

    private isFirstCheckMode = false;
    private standardScreen = new Vec2(2532, 1170);
    private standardRatio = 1.5;
    private browserType;
    private resolutionPolicy: number = ResolutionPolicy.FIXED_WIDTH;
    private browserSize = new Vec2(2532, 1170);

    public set OrientationMode(mode: OrientationType) {
        this.orientationMode = mode;
        // console.log('OrientationMode:', OrientationType[mode]);
        OrientationHintHandler.getInstance()?.showOrientationHint(this.orientationMode === OrientationType.PortraitMode);
        if (this.onOrientationChangeCallback) {
            this.onOrientationChangeCallback(this.orientationMode);
        }
    }

    @property(Widget)
    public canvasWidget: Widget;


    protected getOrientation(): string {
        switch(window.orientation) {
            case 0:
                return "portrait";
            case 180:
                return "portrait";
            case 90:
                return "landscape";
            case -90:
                return "landscape";
            default:
                return "landscape";
        }
    }

    protected onLoad(): void {
        let self = this;
        // this.onLockScreenRotate();
        // this.standardRatio = this.standardScreen.x / this.standardScreen.y;
        if (sys.isMobile && !sys.isNative) {
            window.addEventListener("orientationchange", function() {
                self.setRotationBlock();
            })
            this.setRotationBlock();
        }
        this.setDefaultResolutionPolicy();
        
    }

    protected setRotationBlock(): void {
        this.setDefaultResolutionPolicy();
        if (this.getOrientation() == "landscape") {
            view.setDesignResolutionSize(this.standardScreen.x, this.standardScreen.y, this.resolutionPolicy)
            this.OrientationMode = OrientationType.LandscapeMode;
        } else {
            view.setDesignResolutionSize(this.standardScreen.y, this.standardScreen.x, this.resolutionPolicy)
            this.OrientationMode = OrientationType.PortraitMode;
        }
    }

    private setDefaultResolutionPolicy() {
        if (this.browserType == 'safari') {
            let radio = 2;
            if (view.getFrameSize().width > view.getFrameSize().height) {
                radio = view.getFrameSize().width / view.getFrameSize().height;
            } else {
                radio = view.getFrameSize().height / view.getFrameSize().width;
            }
            this.resolutionPolicy = radio > 1.5 ? ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.FIXED_WIDTH;
        } else {
            let screenRadio = screen.windowSize.width > screen.windowSize.height ? screen.windowSize.width / screen.windowSize.height : screen.windowSize.height / screen.windowSize.width;
            
            if (screenRadio < this.standardRatio) {
                this.resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;
            } else {
                this.resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;
            }
        }
    }
}


