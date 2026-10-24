import { _decorator, Component, Label, ToggleComponent } from 'cc';
import GameDataManager from '../Data/GameDataManager';
import { AudioManger } from '../Game/AudioManger';
import { BaseDialogHandler } from './BaseDialogHandler';
import * as GameConfig from '../Common/GameConfig'
const { ccclass, property } = _decorator;

/**
 * 遊戲設定 Popup Dialog
 */
@ccclass('SettingDialogHandler')
export class SettingDialogHandler extends BaseDialogHandler {
    @property(ToggleComponent)
    public toggleMusicOn: ToggleComponent;
    @property(ToggleComponent)
    public toggleMusicOff: ToggleComponent;
    @property(ToggleComponent)
    public toggleSoundOn: ToggleComponent;
    @property(ToggleComponent)
    public toggleSoundOff: ToggleComponent
    @property(Label)
    public lblGameVersion: Label;
    
    start() {
        this.init()
    }

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


