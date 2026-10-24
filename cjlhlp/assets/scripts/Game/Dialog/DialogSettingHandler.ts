import { _decorator, Component, Label, Node, Toggle, ToggleContainer } from 'cc';
import { BaseDialogHandler } from '../../CocosFrameworks/UI/BaseDialogHandler';
import { GameDataManager } from '../../Data/GameDataManager';
import * as GameConfig from '../../CocosFrameworks/Data/GameConfig'
import { AudioManger } from '../AudioManger';
const { ccclass, property } = _decorator;

export enum SwitchStatus {
    OFF = 0,
    ON = 1
}

@ccclass('DialogSettingHandler')
export class DialogSettingHandler extends BaseDialogHandler {

    @property(Label)
    public lblVersion: Label;
    @property(Toggle)
    public toggleMusicOn: Toggle;
    @property(Toggle)
    public toggleMusicOff: Toggle;
    @property(Toggle)
    public toggleSoundOn: Toggle;
    @property(Toggle)
    public toggleSoundOff: Toggle;

    public init(): void {
        super.init();
        this.lblVersion.string = GameDataManager.getInstance().gameVersion;
        this.initToggle();
        this.updateMusicVolume();
        this.updateSoundVolume();
    }

    private initToggle() {
        let self = this;
        this.toggleMusicOn.node.on(Toggle.EventType.TOGGLE, function (event: Toggle) {
            // console.log('MusicOn', event.isChecked);
            self.onMusicOnVolumeChengedEvent(event.isChecked);
        })

        this.toggleSoundOn.node.on(Toggle.EventType.TOGGLE, function (event: Toggle) {
            // console.log('SoundOn:', event.isChecked);
            self.onSoundOnVolumeChangedEvent(event.isChecked);
        })
    }

    private updateMusicVolume() {
        const isOn = GameConfig.getMusic();
        this.toggleMusicOn.setIsCheckedWithoutNotify(isOn);
        this.toggleMusicOff.setIsCheckedWithoutNotify(!isOn);
    }

    private updateSoundVolume() {
        const isOn = GameConfig.getSound();
        this.toggleSoundOn.setIsCheckedWithoutNotify(isOn);
        this.toggleSoundOff.setIsCheckedWithoutNotify(!isOn);
    }

    private onMusicOnVolumeChengedEvent(isOn: boolean) {
        AudioManger.getInstance().setMusicVolume(isOn);
        this.updateMusicVolume();
    }

    private onSoundOnVolumeChangedEvent(isOn: boolean) {
        AudioManger.getInstance().setSoundVolume(isOn)
        this.updateSoundVolume();
    }
}


