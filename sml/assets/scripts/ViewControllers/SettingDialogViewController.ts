import { _decorator, Button, Label, Toggle, Node, } from 'cc';
import { AudioManger } from '../../framework/common/AudioManager';
import { VoidCallback } from '../../framework/common/Types';
import * as GameConfig from '../Common/GameConfig';
import { BaseViewController } from './BaseViewController';
import { VERSION_CODE } from './GameViewController';
const { ccclass, property } = _decorator;

/**
 * 系統設置對話框佈局介面控制器
 */
@ccclass('SettingDialogViewController')
export class SettingDialogViewController extends BaseViewController {

    @property(Node)
    public viewNode: Node;

    @property(Button)
    public closeButton: Button;

    @property(Label)
    public dialogTitleLabel: Label;

    @property(Label)
    public musicOptionTitleLabel: Label;

    @property(Toggle)
    public musicOnToggle: Toggle;

    @property(Toggle)
    public musicOffToggle: Toggle;

    @property(Label)
    public soundOptionTitleLabel: Label;

    @property(Toggle)
    public soundOnToggle: Toggle;

    @property(Toggle)
    public soundOffToggle: Toggle;

    @property(Label)
    public versionLabel: Label;

    private closedCallback: VoidCallback;

    ////////////////////////////////////////////////////////////////////////////////
    //#region Overrides
    ////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        super.onLoad();
        
        this.musicOnToggle.isChecked = GameConfig.getMusic();
        this.musicOffToggle.isChecked = !GameConfig.getMusic();

        this.soundOnToggle.isChecked = GameConfig.getSound();
        this.soundOffToggle.isChecked = !GameConfig.getSound();

        this.closeButton.node.on(Button.EventType.CLICK, this.onCloseButtonClick, this);
        this.soundOffToggle.node.on(Toggle.EventType.TOGGLE, this.onSoundOffClick, this);
        this.soundOnToggle.node.on(Toggle.EventType.TOGGLE, this.onSoundOnClick, this);
        this.musicOffToggle.node.on(Toggle.EventType.TOGGLE, this.onMusicOffClick, this);
        this.musicOnToggle.node.on(Toggle.EventType.TOGGLE, this.onMusicOnClick, this);
    }

    start() {
        super.start();

        this.versionLabel.string = VERSION_CODE;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Public functions
    ////////////////////////////////////////////////////////////////////////////////
    public open(closedCallback: VoidCallback) {
        this.viewNode.active = true;

        this.closedCallback = closedCallback;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Events
    ////////////////////////////////////////////////////////////////////////////////
    private onCloseButtonClick() {
        AudioManger.sharedInstance().playSound(0, false, false, 1);
        this.viewNode.active = false;
        if (this.closedCallback != null) {
            this.closedCallback();
        }
    }

    private onSoundOffClick(toggle: Toggle) {
        if (toggle.isChecked) {
            GameConfig.setSound(false);
            AudioManger.sharedInstance().soundVolume = 0;
        }
    }

    private onSoundOnClick(toggle: Toggle) {
        if (toggle.isChecked) {
            GameConfig.setSound(true);
            AudioManger.sharedInstance().soundVolume = 1;
        }
    }

    private onMusicOffClick(toggle: Toggle) {
        if (toggle.isChecked) {
            GameConfig.setMusic(false);
            AudioManger.sharedInstance().musicVolume = 0;
        }
    }

    private onMusicOnClick(toggle: Toggle) {
        if (toggle.isChecked) {
            GameConfig.setMusic(true);
            AudioManger.sharedInstance().musicVolume = 1;
        }
    }
    //#endregion
}

