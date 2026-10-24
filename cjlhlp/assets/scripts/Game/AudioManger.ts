import { _decorator, Component, AudioSource, AudioClip } from 'cc';
import * as GameConfig from '../CocosFrameworks/Data/GameConfig';
import { GameManager } from './GameManager';
import { GameDataManager } from '../Data/GameDataManager';
const { ccclass, property } = _decorator;

export enum SoundType {
    BUTTON_CLICK = 0,
    START_BETTING = 1,
    COUNTDOWN_LAST = 2,
    PLACE_BET = 3,
    CHOOSE_CHIP = 4,
    STARTROTATE = 5,
    WIN_MONEY = 6,
    SUPER_ZERO = 7
}

export enum RotatteType {
    ROTATE = 0,
    HIT_FIRST = 1,
    HIT_SECOND = 2,
    HIT_FINISH = 3
}

export enum AudioSourceType {
    SOUND_AUDIO = 0,
    LOOP_AUDIO = 1,
    RESULT_NUMBER_AUDIO = 2,
    ROTATTE_AUDIO = 3
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
    public arrNumberAudioClip: AudioClip[] = [];
    @property(AudioClip)
    public audioBGM: AudioClip;
    @property(AudioClip)
    public arrRotatteAudio: AudioClip[] = [];

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

    updateMusicVolume() {
        const isMusicOn = GameConfig.getMusic();
        this.audioSourceBGM.volume = isMusicOn ? 0.5 : 0;
    }

    updateSoundVolume() {
        const isSoundOn = GameConfig.getSound();
        this.arrPlayAudioSource.forEach(source => {
            source.volume = isSoundOn ? 1 : 0;
        })
    }

    setMusicVolume(isOn: boolean) {
        GameConfig.setMusic(isOn);
        // console.log('setMusicVolume:', GameConfig.getMusic());
        this.updateMusicVolume();
    }

    setSoundVolume(isOn: boolean) {
        GameConfig.setSound(isOn);
        this.updateSoundVolume();
    }

    playBGMAudio() {
        this.audioSourceBGM.play();
    }

    playResultNumber(result: number) {
        if (GameManager.getInstance() ? GameManager.getInstance().isFirstLogin : false) {
            return;
        }
        if (result >= 0 && result < this.arrNumberAudioClip.length) {
            this.arrPlayAudioSource[AudioSourceType.RESULT_NUMBER_AUDIO].playOneShot(this.arrNumberAudioClip[result], 1);
        }
    }

    public playSound(type: SoundType, isLoop: boolean = false) {
        if (GameManager.getInstance() ? GameManager.getInstance().isFirstLogin : false) {
            return;
        }
        if (isLoop) {
            this.arrPlayAudioSource[AudioSourceType.LOOP_AUDIO].clip = this.arrAudioClip[type];
            this.arrPlayAudioSource[AudioSourceType.LOOP_AUDIO].play();
        } else {
            this.arrPlayAudioSource[AudioSourceType.SOUND_AUDIO].playOneShot(this.arrAudioClip[type], 1);
        }
    }

    public playRotatteSound(type: RotatteType) {
        if (GameManager.getInstance() ? GameManager.getInstance().isFirstLogin : false) {
            return;
        }
        this.arrPlayAudioSource[AudioSourceType.ROTATTE_AUDIO].stop();
        this.arrPlayAudioSource[AudioSourceType.ROTATTE_AUDIO].clip = this.arrRotatteAudio[type]
        this.arrPlayAudioSource[AudioSourceType.ROTATTE_AUDIO].play();
    }

    stopSound() {
        this.arrPlayAudioSource.forEach(audioSource => {
            audioSource.stop();
            audioSource.clip = null;
        })
    }
}


