import { _decorator, Component, AudioSource, AudioClip, } from 'cc';
const { ccclass, property, executionOrder } = _decorator;

/**
 * 音訊類型
 */
enum AudioType {
    /** 音樂 */
    Music,
    /** 音效 */
    Sound,
}

/**
 * 音訊播放資訊
 */
class PlayAudioInfo {
    public audioType: AudioType;
    public index: number;
    public loop: boolean;
    public playOnAwake: boolean;
    public volume: number;
}

/**
 * 音訊管理器
 * @copyright Maycharm
 * @version 1.0.0
 * @author Jason.Chuang
 */
@ccclass('AudioManger')
@executionOrder(-100)
export class AudioManger extends Component {
    
    ////////////////////////////////////////////////////////////////////////////////
    //#region Static functions
    ////////////////////////////////////////////////////////////////////////////////

    private static _sharedInstance: AudioManger;

    /**
     * 取得共享實體
     * @returns AudioManger
     */
    public static sharedInstance() {
        if (!AudioManger._sharedInstance) {
            AudioManger._sharedInstance = new AudioManger();
        }
        return AudioManger._sharedInstance;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Variables
    ////////////////////////////////////////////////////////////////////////////////

    private _musicAudioSources: AudioSource[] = [];

    private _soundAudioSources: AudioSource[] = [];

    private _musicVolume: number = 1;

    private _soundVolume: number = 1;

    private _audioSourcePlayInfo: Map<AudioSource, PlayAudioInfo> = new Map<AudioSource, PlayAudioInfo>();

    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Properties
    ////////////////////////////////////////////////////////////////////////////////

    /** 音樂檔案 */
    @property({ type: [AudioClip], displayName: "音樂檔案" })
    private musicClips: AudioClip[] = [];

    /** 音效檔案 */
    @property({ type: [AudioClip], displayName: "音效檔案" })
    private soundClips: AudioClip[] = [];

    /** 音樂音量 */
    @property({ type: Number, displayName: "音樂音量", min: 0, max: 1, step: 0.01 })
    public set musicVolume(volume: number) {
        this._musicVolume = volume;
        if (this._musicAudioSources != null && this._musicAudioSources.length > 0) {
            this._musicAudioSources.forEach((audioSource) => {
                let audioPlayInfo = this._audioSourcePlayInfo.get(audioSource);
                audioSource.volume = audioPlayInfo.volume * volume;
            });
        }
    }
    
    /** 音樂音量 */
    public get musicVolume() { return this._musicVolume; }

    /** 音效音量 */
    @property({ type: Number, displayName: "音效音量", min: 0, max: 1, step: 0.01 })
    public set soundVolume(volume: number) {
        this._soundVolume = volume;
        if (this._soundAudioSources != null && this._soundAudioSources.length > 0) {
            this._soundAudioSources.forEach((audioSource) => {
                let audioPlayInfo = this._audioSourcePlayInfo.get(audioSource);
                audioSource.volume = audioPlayInfo.volume * volume;
            });
        }
    }

    /** 音效音量 */
    public get soundVolume() { return this._soundVolume; }

    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Overrides
    ////////////////////////////////////////////////////////////////////////////////
    onLoad() {
        AudioManger._sharedInstance = this;
    }
    //#endregion

    ////////////////////////////////////////////////////////////////////////////////
    //#region Public function
    ////////////////////////////////////////////////////////////////////////////////

    /**
     * 播放音樂
     * @param indexOfMusicClip 音樂檔案索引值
     * @param loop 是否循環
     * @param playOnAwake 是否自動播放在喚醒時
     * @param volume 音量(range:0 - 1)
     */
    public playMusic(indexOfMusicClip: number, loop: boolean, playOnAwake: boolean, volume: number) {
        if (indexOfMusicClip < 0 || indexOfMusicClip >= (this.musicClips == null ? 0 : this.musicClips.length)) return;
    
        let playAudioInfo = new PlayAudioInfo();
        playAudioInfo.audioType = AudioType.Music;
        playAudioInfo.index = indexOfMusicClip;
        playAudioInfo.loop = loop;
        playAudioInfo.playOnAwake = playOnAwake;
        playAudioInfo.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;

        let musicAudioClip = this.musicClips[indexOfMusicClip];

        // 尋找可用的AudioSource
        var availableAudioSource: AudioSource = null;

        let indexOfExistsAudioSource = this._musicAudioSources.findIndex(audioSource => audioSource.clip == musicAudioClip);
        if (indexOfExistsAudioSource == -1) {
            for (var i = 0; i < this._musicAudioSources.length; ++i) {
                if (this._musicAudioSources[i].clip == null) {
                    availableAudioSource = this._musicAudioSources[i];
                    break;
                } else if (!this._musicAudioSources[i].playing) {
                    availableAudioSource = this._musicAudioSources[i];
                    break;
                }
            }
        } else {
            availableAudioSource = this._musicAudioSources[indexOfExistsAudioSource];
        }
        
        // 找不到可用的AudioSource，動態創建
        if (availableAudioSource == null) {
            let audioSource = this.node.addComponent(AudioSource);
            audioSource.enabled = true;
            this._musicAudioSources.push(audioSource);
            availableAudioSource = audioSource;
        }

        this._audioSourcePlayInfo.set(availableAudioSource, playAudioInfo);

        availableAudioSource.clip = musicAudioClip;
        availableAudioSource.loop = playAudioInfo.loop;
        availableAudioSource.playOnAwake = playAudioInfo.playOnAwake;
        availableAudioSource.volume = playAudioInfo.volume * this.soundVolume;
        availableAudioSource.play();
    }

    /**
     * 播放外部音樂檔案
     * @param audioClip 
     */
    public playMusicClip(audioClip: AudioClip) {
        let playAudioInfo = new PlayAudioInfo();
        playAudioInfo.audioType = AudioType.Music;
        playAudioInfo.index = -1;
        playAudioInfo.loop = false;
        playAudioInfo.playOnAwake = false;
        playAudioInfo.volume = 1;

        let musicAudioClip = audioClip;

        // 尋找可用的AudioSource
        var availableAudioSource: AudioSource = null;
        for (var i = 0; i < this._musicAudioSources.length; ++i) {
            if (this._musicAudioSources[i].clip == null) {
                availableAudioSource = this._musicAudioSources[i];
                break;
            } else if (!this._musicAudioSources[i].playing) {
                availableAudioSource = this._musicAudioSources[i];
                break;
            }
        }

        if (availableAudioSource == null) {
            let audioSource = this.node.addComponent(AudioSource);
            audioSource.enabled = true;
            this._musicAudioSources.push(audioSource);
            availableAudioSource = audioSource;
        }

        this._audioSourcePlayInfo.set(availableAudioSource, playAudioInfo);

        availableAudioSource.clip = musicAudioClip;
        availableAudioSource.loop = playAudioInfo.loop;
        availableAudioSource.playOnAwake = playAudioInfo.playOnAwake;
        availableAudioSource.volume = playAudioInfo.volume * this.musicVolume;
        if (!availableAudioSource.playing) {
            availableAudioSource.play();
        }
    }

    /**
     * 停止播放音樂
     * @param indexOfMusicClip 音樂檔案索引值
     */
    public stopMusic(indexOfMusicClip: number) {
        if (indexOfMusicClip < 0 || indexOfMusicClip >= (this.musicClips == null ? 0 : this.musicClips.length)) return;
        
        for (var i = 0; i < this._musicAudioSources.length; ++i) {
            if (this._musicAudioSources[i].clip == null) continue;
            if (this._musicAudioSources[i].clip === this.musicClips[indexOfMusicClip]) {
                this._musicAudioSources[i].stop();
                this._musicAudioSources[i].clip = null;
                break;
            }
        }
    }

    /**
     * 停止播放所有音樂
     */
    public stopAllMusic() {
        if (this._musicAudioSources == null) return;

        this._musicAudioSources.forEach((audioSource) => {
            audioSource.stop();
            audioSource.clip = null;
        });
    }

    /**
     * 播放音效
     * @param indexOfSoundClip 音效檔案索引值
     * @param loop 是否循環
     * @param playOnAwake 是否自動播放在喚醒時
     * @param volume 音量(range:0 - 1)
     */
    public playSound(indexOfSoundClip: number, loop: boolean, playOnAwake: boolean, volume: number) {
        if (indexOfSoundClip < 0 || indexOfSoundClip >= (this.soundClips == null ? 0 : this.soundClips.length)) return;
    
        let playAudioInfo = new PlayAudioInfo();
        playAudioInfo.audioType = AudioType.Sound;
        playAudioInfo.index = indexOfSoundClip;
        playAudioInfo.loop = loop;
        playAudioInfo.playOnAwake = playOnAwake;
        playAudioInfo.volume = volume < 0 ? 0 : volume > 1 ? 1 : volume;

        let soundAudioClip = this.soundClips[indexOfSoundClip];

        // 尋找可用的AudioSource
        var availableAudioSource: AudioSource = null;
        for (var i = 0; i < this._soundAudioSources.length; ++i) {
            if (this._soundAudioSources[i].clip == null) {
                availableAudioSource = this._soundAudioSources[i];
                break;
            } else if (!this._soundAudioSources[i].playing) {
                availableAudioSource = this._soundAudioSources[i];
                break;
            }
        }

        if (availableAudioSource == null) {
            let audioSource = this.node.addComponent(AudioSource);
            audioSource.enabled = true;
            this._soundAudioSources.push(audioSource);
            availableAudioSource = audioSource;
        }

        this._audioSourcePlayInfo.set(availableAudioSource, playAudioInfo);

        availableAudioSource.clip = soundAudioClip;
        availableAudioSource.loop = playAudioInfo.loop;
        availableAudioSource.playOnAwake = playAudioInfo.playOnAwake;
        availableAudioSource.volume = playAudioInfo.volume * this.soundVolume;
        availableAudioSource.play();
    }

    /**
     * 播放外部音效檔案
     * @param audioClip 
     */
    public playSoundClip(audioClip: AudioClip) {
        let playAudioInfo = new PlayAudioInfo();
        playAudioInfo.audioType = AudioType.Sound;
        playAudioInfo.index = -1;
        playAudioInfo.loop = false;
        playAudioInfo.playOnAwake = false;
        playAudioInfo.volume = 1;

        let soundAudioClip = audioClip;

        // 尋找可用的AudioSource
        var availableAudioSource: AudioSource = null;
        for (var i = 0; i < this._soundAudioSources.length; ++i) {
            if (this._soundAudioSources[i].clip == null) {
                availableAudioSource = this._soundAudioSources[i];
                break;
            } else if (!this._soundAudioSources[i].playing) {
                availableAudioSource = this._soundAudioSources[i];
                break;
            }
        }

        if (availableAudioSource == null) {
            let audioSource = this.node.addComponent(AudioSource);
            audioSource.enabled = true;
            this._soundAudioSources.push(audioSource);
            availableAudioSource = audioSource;
        }

        this._audioSourcePlayInfo.set(availableAudioSource, playAudioInfo);

        availableAudioSource.clip = soundAudioClip;
        availableAudioSource.loop = playAudioInfo.loop;
        availableAudioSource.playOnAwake = playAudioInfo.playOnAwake;
        availableAudioSource.volume = playAudioInfo.volume * this.soundVolume;
        if (!availableAudioSource.playing) {
            availableAudioSource.play();
        }
    }

    /**
     * 停止播放音效
     * @param indexOfSoundClip 音效檔案索引值
     */
    public stopSound(indexOfSoundClip: number) {
        if (indexOfSoundClip < 0 || indexOfSoundClip >= (this.soundClips == null ? 0 : this.soundClips.length)) return;
        
        for (var i = 0; i < this._soundAudioSources.length; ++i) {
            if (this._soundAudioSources[i].clip == null) continue;
            if (this._soundAudioSources[i].clip === this.soundClips[indexOfSoundClip]) {
                this._soundAudioSources[i].stop();
                this._soundAudioSources[i].clip = null;
                break;
            }
        }
    }

    /**
     * 停止播放所有音效
     */
    public stopAllSound() {
        if (this._soundAudioSources == null || this._soundAudioSources.length == 0) return;

        this._soundAudioSources.forEach((audioSource) => {
            audioSource.stop();
            audioSource.clip = null;
        });
    }
    //#endregion


    ////////////////////////////////////////////////////////////////////////////////
    //#region Private functions
    ////////////////////////////////////////////////////////////////////////////////

    //#endregion
}


