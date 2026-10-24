/**
 * 視訊控制器
 */

import { _decorator, Component, VideoPlayer, AudioClip, AudioSource, Button, EventHandler } from 'cc';
import { VoidCallback } from '../framework/common/Types';
import { AudioManger } from '../framework/common/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('VideoPlaySoundData')
export class VideoPlaySoundData {
    @property({ type: Number, serializable: true })
    public delayTime: number = 0;
    @property({ type: Number, serializable: true })
    public playSoundIndex: number = 0;
}

@ccclass('VideoSoundEventData')
export class VideoSoundEventData {
    @property(VideoPlaySoundData)
    public arrPlaySoundData: VideoPlaySoundData[] = [];
}

@ccclass('VideoController')
export class VideoController extends Component {

    private static instance: VideoController;

    public static getInstance() {
        if (!VideoController.instance) {
            VideoController.instance = new VideoController();
        }
        return VideoController.instance;
    }
    @property(Button)
    public button: Button;
    @property(VideoPlayer)
    public baseVideoPlayer: VideoPlayer;
    @property(VideoPlayer)
    public videoPlayer: VideoPlayer[] = [];
    
    @property(AudioSource)
    public audioSoundSource: AudioSource;

    @property(VideoSoundEventData)
    public arrVideoSoundEventData: VideoSoundEventData[] = [];
    @property(AudioClip)
    public arrAudioClip: AudioClip[] = [];

    private onFinishCallback: {(result: string):void};
    private completedCallback: VoidCallback;
    private gameResult: string = '';

    private isPlayBaseVideo: boolean = true;
    private playIndex = 0;
    private currentplayEventData: VideoSoundEventData;
    private playEventIndex = -1;

    onLoad() {
        this.videoPlayer.forEach(element => {
            var eventHandler = new EventHandler();
            eventHandler.target = this.node;
            eventHandler.component = "VideoController";
            eventHandler.handler = "onVideoEventType";
            element.videoPlayerEvent.push(eventHandler);
        });
    }

    start() {
        VideoController.instance = this;
        this.playBaseVideoClip();
    }
    
    update(deltaTime: number) {
        if (!this.isPlayBaseVideo) { 
            if (this.playIndex !== -1) {
                const nowPlaySoundData: VideoPlaySoundData = this.currentplayEventData.arrPlaySoundData[this.playEventIndex];
                if (nowPlaySoundData && this.videoPlayer[this.playIndex].currentTime > nowPlaySoundData.delayTime) {
                    AudioManger.sharedInstance().playSoundClip(this.arrAudioClip[nowPlaySoundData.playSoundIndex]);
                    // this.audioSoundSource.playOneShot(this.arrAudioClip[nowPlaySoundData.playSoundIndex]);
                    this.playEventIndex++;
                    if (this.playEventIndex >= this.currentplayEventData.arrPlaySoundData.length) {
                        this.playEventIndex = -1;
                    }
                }
            }
        }
    }

    private setVideoElementZIndex(stayOnBottom: boolean) {
        let elements: HTMLCollectionOf<Element> = document.getElementsByClassName('cocosVideo')
        for (let idx = 0; idx < elements.length; idx++) {
            let video: HTMLElement = elements[idx] as HTMLElement;
            video.style.zIndex = stayOnBottom ? '-32768' : '0';
        }
    }

    public onVideoEventType(target, type, customEventData) {
        // console.log('onVideoEventType:', type);
        switch (type) {
            case VideoPlayer.EventType.READY_TO_PLAY:
            case VideoPlayer.EventType.META_LOADED:
                if (this.isPlayBaseVideo) {
                    this.baseVideoPlayer.play();
                } else {
                    this.videoPlayer[this.playIndex].play();
                }
                break;
            case VideoPlayer.EventType.COMPLETED:
                if (!this.isPlayBaseVideo) {
                    this.playBaseVideoClip();
                    if (this.onFinishCallback) {
                        this.onFinishCallback(this.gameResult);
                    }
                    if (this.completedCallback) {
                        this.completedCallback();
                    }
                }
                break;
        }
    }

    public play(index: number, completedCallback: VoidCallback) {
        this.playIndex = index;
        this.completedCallback = completedCallback;
        this.setToPlay();
    }

    private setToPlay() {
        this.playEventIndex = 0;
        this.currentplayEventData = this.arrVideoSoundEventData[this.playIndex];
        this.isPlayBaseVideo = false;
        this.baseVideoPlayer.node.active = false;
        this.videoPlayer[this.playIndex].node.active = true;
        this.setVideoElementZIndex(false);
        this.videoPlayer[this.playIndex].play();
    }

    public showResult(result: string, callback: {(gameResult: string): void}) {
        // 0: Goal Inside(Miss_In)
        // 1: Lost Outside(Miss_Out)
        // 2: Lost Inside(Normal_In)
        // 3: Goal Outside(Normal_Out)
        // 4: Goal Inside(Smash_In)
        // 5: Lost Outside(Smash_Out)
        this.onFinishCallback = callback;
        this.gameResult = result;
        const isGoal = result.includes('Goal');
        const isInside = result.includes('Inside');
        this.playIndex = Math.trunc(this.getPlayIndex(isGoal, isInside));
        this.setToPlay();
    }

    playBaseVideoClip() {
        this.isPlayBaseVideo = true;
        this.videoPlayer[this.playIndex].currentTime = 0;
        this.videoPlayer[this.playIndex].node.active = false;
        this.baseVideoPlayer.node.active = true;
        this.setVideoElementZIndex(true);
        this.baseVideoPlayer.play();
    }

    private getPlayIndex(isGoal: boolean, isInside: boolean): number {
        let index = -1;
        if (isGoal) {
            if (isInside) {
                index = (Math.random() * 100) > 50 ? 0 : 4;
            } else {
                index = 3;
            }
        } else {
            if (isInside) {
                index = 2
            } else {
                index = (Math.random() * 100) > 50 ? 1 : 5;
            }
        }
        return index;
    }
}


