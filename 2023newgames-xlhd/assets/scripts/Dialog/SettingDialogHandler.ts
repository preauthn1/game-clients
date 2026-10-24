import { _decorator, Component, Node, Toggle, ToggleComponent, Label } from 'cc';
import { BaseDialogHandler } from './BaseDialogHandler';
import * as GameConfig from '../Common/GameConfig';
import { AudioManger } from '../AudioManger';
import GameDataManager from '../GameDataManager';
const { ccclass, property } = _decorator;

/**
 * 遊戲設定 Popup Dialog
 */
@ccclass('SettingDialogHandler')
export class SettingDialogHandler extends BaseDialogHandler {
    @property(Toggle)
    public toggleMusicOn: Toggle;
    @property(Toggle)
    public toggleMusicOff: Toggle;
    @property(Toggle)
    public toggleSoundOn: Toggle;
    @property(Toggle)
    public toggleSoundOff: Toggle
    @property(Label)
    public lblGameVersion: Label;

    init() {
        super.init();
        this.toggleMusicOn.node.on('toggle', this.onMusicOnVolumeChanged, this);
        this.toggleSoundOn.node.on('toggle', this.onSoundOnVolumeChanged, this);
        this.toggleMusicOff.node.on('toggle', this.onMusicOffVolumeChanged, this);
        this.toggleSoundOff.node.on('toggle', this.onSoundOffVolumeChanged, this);
        this.lblGameVersion.string = GameDataManager.getInstance().gameVersion;
        this.updateMusicVolumeStatus();
        this.updateSoundVolumeStatus();
    }

    private updateMusicVolumeStatus() {
        const isOn = GameConfig.getMusic();
        this.toggleMusicOn.setIsCheckedWithoutNotify(isOn);
        this.toggleMusicOff.setIsCheckedWithoutNotify(!isOn);
    }

    private updateSoundVolumeStatus () {
        const isOn = GameConfig.getSound();
        this.toggleSoundOn.setIsCheckedWithoutNotify(isOn);
        this.toggleSoundOff.setIsCheckedWithoutNotify(!isOn);
    }


    private onMusicOnVolumeChanged (toggle: ToggleComponent) {
        AudioManger.getInstance().setMusicVolume(toggle.isChecked);
        this.updateMusicVolumeStatus();
    }

    private onSoundOnVolumeChanged (toggle: ToggleComponent) {
        AudioManger.getInstance().setSoundVolume(toggle.isChecked);
        this.updateSoundVolumeStatus();
    }

    private onMusicOffVolumeChanged (toggle: ToggleComponent) {
        AudioManger.getInstance().setMusicVolume(!toggle.isChecked);
        this.updateMusicVolumeStatus();
    }

    private onSoundOffVolumeChanged (toggle: ToggleComponent) {
        AudioManger.getInstance().setSoundVolume(!toggle.isChecked);
        this.updateSoundVolumeStatus();
    }
}


