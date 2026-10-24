import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationTool')
export class AnimationTool extends Component {
    
    private eventCallback: {(): void} = null;

    callback() {
        if (this.eventCallback) {
            this.eventCallback();
        }
    }

    registerEventCallback (callback: { (): void}) {
        this.eventCallback = callback;
    }

    unregisterEventCallback () {
        this.eventCallback = null;
    }
}


