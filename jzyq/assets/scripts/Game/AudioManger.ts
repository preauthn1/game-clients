import { _decorator, Component, AudioSource, AudioClip } from 'cc';
import * as GameConfig from '../Common/GameConfig';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

export enum SoundType {
    BUTTON_CLICK = 0,
    START_BETTING = 1,
    COUNTDOWN_LAST = 2,
    PLACE_BET = 3,
    CHOOSE_CHIP = 4,
}

/**
 * 遊戲音效管理工具
 */
@ccclass('AudioManger')
export class AudioManger extends Component {
    @property(AudioSource)
    public audioSourceBGM: AudioSource;
    @property(AudioSource)
    public arrPlayAudioSource: AudioSource[] = [];
    @property(AudioClip)
    public arrAudioClip: AudioClip[] = [];
    @property(AudioClip)
    public audioBGM: AudioClip;

    private static instance: AudioManger;

    public static getInstance() {
        if (!AudioManger.instance) {
            AudioManger.instance = new AudioManger();
        }
        return AudioManger.instance;
    }


    start() {
        AudioManger.instance = this;
        this.updateMusicVolume();
        this.updateSoundVolume();
    }

    updateMusicVolume () {
        const isMusicOn = GameConfig.getMusic();
        this.audioSourceBGM.volume = isMusicOn ? 0.5 : 0;
    }

    updateSoundVolume () {
        const isSoundOn = GameConfig.getSound();
        this.arrPlayAudioSource.forEach(source => {
            source.volume = isSoundOn ? 1 : 0;
        })
    }

    setMusicVolume (isOn: boolean) {
        GameConfig.setMusic(isOn);
        // console.log('setMusicVolume:', GameConfig.getMusic());
        this.updateMusicVolume();
    }

    setSoundVolume (isOn: boolean) {
        GameConfig.setSound(isOn);
        this.updateSoundVolume();
    }

    playBGMAudio() {
        this.audioSourceBGM.play();
    }

    playSound(type: SoundType, isLoop: boolean = false) {
        if (GameManager.getInstance().isFirstLogin) {
            return;
        }
        if (isLoop) {
            this.arrPlayAudioSource[1].clip = this.arrAudioClip[type];
            this.arrPlayAudioSource[1].play();
        } else {    
            this.arrPlayAudioSource[0].playOneShot(this.arrAudioClip[type], 1);
        }
    }

    stopSound() {
        this.arrPlayAudioSource.forEach(audioSource => {
            audioSource.stop();
            audioSource.clip = null;
        })
    }
}


