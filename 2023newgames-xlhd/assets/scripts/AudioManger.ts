import { _decorator, Component, Node, AudioSource, Button, AudioClip } from 'cc';
import { SoundType } from './Data/ICallback';
import * as GameConfig from './Common/GameConfig';
const { ccclass, property } = _decorator;

/**
 * 音效管理工具
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
        this.audioSourceBGM.volume = isMusicOn ? 1 : 0;
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

    playSound(type: SoundType) {
        this.arrPlayAudioSource[0].playOneShot(this.arrAudioClip[type], 1);
    }

}


