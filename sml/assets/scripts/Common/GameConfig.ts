/**
 * 遊戲基本設置
 */

import * as cc from 'cc';
import * as i18n from 'db://i18n/LanguageData';
export enum GameSceneType { GameScene = 'Game', LoadingScene = 'Loading'};
enum LanguageType {
    EN = 'EN-US',
    CN = 'ZH-CN',
    TW = 'ZH-TW'
}

const HOST = 'host'; 
const USER_ID = 'userId';
const CERT = 'cer';
const HDCODE = 'HDCode';
const HDTYPE = 'HDType';
const DEFAULT_HDTYPE: number = 1;
const MUSIC_ON = 'MusicOn';
const SOUND_ON = 'SoundOn';

export function getLanguage() {
    return cc.sys.language;
}

export function setLanguage(lang: string) {
    let language = 'enUS';
    switch (lang) {
        case LanguageType.EN:
            language = 'enUS';
            break;
        case example.invalid:
            language = 'zhCN';
            break;
        case example.invalid:
            language = 'zhTW';
            break;
    }
    i18n.init(language);
    i18n.updateSceneRenderers();
}

export function getOS() {
    return cc.sys.os;
}

export function getBrowserType() {
    return cc.sys.browserType;
}

export function isBrowser() {
    return cc.sys.isBrowser;
}

export function getHost(): string {
    return getItem(HOST);
}

export function setHost(connnectIp: string) {
    setItem(HOST, connnectIp);
}

export function getUserId() : number {
    return parseInt(getItem(USER_ID) ?? '-1');
}

export function setUserId(userId: number) {
    setItem(USER_ID, userId.toString());
}

export function getCert(): string {
    return getItem(CERT);
}

export function setCert(cert: string) {
    setItem(CERT, cert);
}

export function getHDCode(): string {
    let HDCode = getItem(HDCODE)
    if (HDCode === null) {
        HDCode = createUUID();
        setItem(HDCODE, HDCode);
    }
    return HDCode;
}

export function getHDType(): number {
    return DEFAULT_HDTYPE;
}

export function setHDType(type: number) {
    setItem(HDTYPE, type.toString())
}

function getItem(key: string): string {
    return cc.sys.localStorage.getItem(key)
}

function setItem(key: string, data: string) {
    cc.sys.localStorage.setItem(key, data);
}

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function getMusic(): boolean {
    return getItem(MUSIC_ON) === null ? true : getItem(MUSIC_ON) === '1';
}

export function setMusic(isOn: boolean) {
    setItem(MUSIC_ON, isOn ? '1' : '0');
}

export function getSound() : boolean {
    return getItem(SOUND_ON) === null ? true : getItem(SOUND_ON) === '1';
}

export function setSound(isOn: boolean) {
    setItem(SOUND_ON, isOn ? '1' : '0');
}

export function i18nValue(key: string): string | null {
    return i18n.t(key);
}

export function getMessageLocation(message: string) {
    const searchKey = 'labeltext.' + message;
    return i18n.t(searchKey) ?? message;
}
