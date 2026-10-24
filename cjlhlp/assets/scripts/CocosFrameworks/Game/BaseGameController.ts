import { _decorator, Component, Node } from 'cc';
import * as GameConfig from '../Data/GameConfig'
import NetworkManager from '../Network/NetworkManager';
import { UserData } from '../../../../extensions/i18n/@types/editor/user/index';
const { ccclass, property } = _decorator;

const TEST_MODE = false;

export enum ParseUrlStatus {
    START,
    ERROR,
    PLAYERID,
    ACCESS_TOKDN,
    CONNECTION_DATA,
    LANGUAGE,
    CONNECT,
    FINISH
}

@ccclass('BaseGameController')
export class BaseGameController extends Component {

    start() {

    }

    update(deltaTime: number) {

    }

    protected init() {
        this.parseUrl();
    }

    protected onParseUrlStatusChange(status: ParseUrlStatus, data: any) {

    }

    protected onConnected(userData: any) {

    }

    protected onConnectFail(userData: any) {

    }

    protected onConnectClose(UserData: any) {

    }

    protected closeConnect() {
        NetworkManager.getInstance().closeConnect();
    }

    private parseUrl() {
        var self = this;
        this.onParseUrlStatusChange(ParseUrlStatus.START, GameConfig.getMessageLocation('connectServer', 'Connect Server'));
        let urlData = '';
        if (TEST_MODE) {
            urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIzNDc3LCJwbGF5ZXJOYW1lIjoiZGVtby0xNzAxNzU4NzI0MjY0IiwibGFuZyI6InpoLWNuIiwic2VydmVySUQiOjIyMzMwMDQxMCwiZ2FtZUlEIjoyMjMzLCJnYW1lQ29kZSI6ImNqbGhscCIsInN0eWxlTW9kZSI6MSwic2VydmVyQ29ubmVjdGlvbiI6InRmc2VydmVyLmRldi5kZDk5LnNpdGUvd3MvMjIzMzAwNDEwIiwiYWNjZXNzX1Rva2VuIjoiZXlKaGJHY2lPaUpCUlZNaUxDSjBlWEFpT2lKS1YxUWlmUT09LmV5Sk1iMmRwYmxWelpYSkpSQ0k2TVRBeU16UTNOeXdpVEc5bmFXNU9ZVzFsSWpvaVpHVnRieTB4TnpBeE56VTROekkwTWpZMElpd2lUV1Z5WTJoaGJuUkpSQ0k2TVRjMU1ERXpMQ0pUY0dWamFXWnBZMGRoYldWSlJDSTZNakl6TXl3aVRHRnVaeUk2SW5wb0xXTnVJaXdpVkc5clpXNUZlSEJwY21Wa1ZHbHRaU0k2TVRjd01qWXlOVFEwTWl3aVVtNWtTVVFpT2lJNE5tUXhZemt4TWkxaE1qUXdMVFE0WWpVdFlXRmpaUzFoTW1Kak5HVTNNekZqWm1JaUxDSlRaWE56YVc5dVZHOXJaVzVTWVhjaU9tNTFiR3dzSWxObGMzTnBiMjVVYjJ0bGJsQkhVeUk2SWpGbVltUTRaV0l5TFdOaFpEUXROR0ZrTkMwNU5qazNMVGhrWVRJMFlXRXdNekprTWlJc0lsTnBaMjVMWlhraU9pSTJPVEl5WTJRME1qYzVPV0ZqWkRBNFpUYzJOVFl5WXpaaU5HWTROelUwTnlJc0lsUnZhMlZ1Vm1WeWMybHZiaUk2TVRBd01Td2lTbmQwVkc5clpXNVVlWEJsSWpveGZRPT0uT2IzZkZTb055SDFOUFhXRllET09VZStiVERGSVoxZEMzZlBFWGVsUnQ5QStUL3MxKzdzaXU4UzBvT2lyOE5aakFwclpZMEpzeU00aUN4TWdINEQ0SHExa1E2cHdGQ1l0cUluQ1ZEeTNoOGdnWW8zYXR6L0hwbTR3dmVtdzNZTkZpNklveDUrYTgwWnJXTEliUUJWbS9JNGxqRmxpTmtPdXNDSk9qUjBkRmZydVlCTHl3cmtKZGovS3JXWFQvTzY1OWpCS1pNQkNOaDE5OXo2M1E5MWFhN1V0RzhhNnJsdWVhYWtZWGVaZDF1eGpxQ3JUL1kzbUtGQWhkaXdyeTRyckF6Y0RJUFZRblFxcWcxOXFLRG1hbTJ2TU5FRS9DK3FRMHVSODh3akdUS1RUdTdVdjhaRVc2R2s5dm5XNmZXRWhxaUhLUnhUZHF6NFQrRWk3NGlUU1VtdXovZFdkeXpxNzF2UjBMOThxTmVYZHgxUUhaa0c4WmNwUWtZeTlOdkNRbDlNV2l0QTZmSkFBR0s4bWZEakxsenVzMTFReHk0a0pqcUVMMVQ4VkV5Z3E3T0JJRGtpOG5yc09IVHBYNDZ3UzZ0ME93K3JnNTdNSm5lVytHTWVsclppSUwxWUx1VlRpdC9lTG9TL0RlS2Y1dFlDRVo0R3Bkb2NoMFFUZXNsYTgyQS9WSER5T01tREZBWlRIeFIwRS9WSnZ3UjRZOEYvK1hIRVoxTm9BS1BYczJyanRiTmJKWTlyMFU1V1QzMlNGNDBCMDhaZGE0QmFCMXg0VGszRVpoc0JMMXc1Y0I2TE1BMmVRZ0JQalFnSGVER2k3VEFIaFBxN2NPOW9hNlRMQm1ZcG5RSTZlRlI2dGJNZnlaSGZTMDVPYk94SFZrdlpDZUZMb2tUdHg3cTQ9IiwibG9nIjowLCJ0aGlyZFBhcnR5SW5mbyI6eyJnYW1lVmVuZG9ySUQiOjAsIm1ENVRleHQiOm51bGx9fX0=';
            // urlData = 'eyJkYXRhIjp7InBsYXllcklEIjoxMDIwMjg2LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjc5MzYzODU0Njg4IiwibGFuZyI6ImVuLXVzIiwic2VydmVySUQiOjIyMzAwMDQxMCwiZ2FtZUlEIjoyMjMwLCJnYW1lQ29kZSI6InhsaGQiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzIyMzAwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXlNREk0Tml3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qYzVNell6T0RVME5qZzRJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKVGNHVmphV1pwWTBkaGJXVkpSQ0k2TWpJek1Dd2lUR0Z1WnlJNkltVnVMWFZ6SWl3aVZHOXJaVzVGZUhCcGNtVmtWR2x0WlNJNk1UWTRNREl6TURJek1Td2lVbTVrU1VRaU9pSXpOek5oTkdSbU5pMHdNamRrTFRSaE1HTXRPV00xTWkwNU9XRTJORGRpTjJObU1UUWlMQ0pUWlhOemFXOXVWRzlyWlc1U1lYY2lPbTUxYkd3c0lsTmxjM05wYjI1VWIydGxibEJIVXlJNklqY3dZelZsWldaaExUUmlaakV0TkRabE5TMDVOR0kzTFdaalpHRTJORFptTVRZM1lpSXNJbE5wWjI1TFpYa2lPaUprT0dabU5UaGxZelJsTmpVek1HRXdNMlJrTjJabVlUVTJOV016WW1WbU9TSXNJbFJ2YTJWdVZtVnljMmx2YmlJNk1UQXdNU3dpU25kMFZHOXJaVzVVZVhCbElqb3hmUT09Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmpseE5lZnJtMTZIWHZaM0VSSFA4eFZHZ1lqU2ZXS0NwT2VJVGx3VEFHV1k4SGZLT3d5OGZEQktMc0pzNFRFYmtzZmsyZHpYYlQ4a2hyTjN6SGxONGRTWTRsakZsaU5rT3VzQ0pPalIwZEZmcnVZQkx5d3JrSmRqL0tyV1hUL082NTlqQktaTUJDTmgxOTl6NjNROTFhYThURUlPemozOE9nMjRSbk5qR2QvNjU5UlpESEh2aTJ0VFFHdWFzME5LLzlBemNESVBWUW5RcXFnMTlxS0RtYW00VXlUQzJiOXMrMmpoU2J2c05Qak1vRXZFNTk4RmxieVZFZUkxVExRMlh6ZnRxeWdKcno0NzRmWmY1cWcxOXcxaC96dGVQTnZ4STNrNE9uc2FpVEViRTAwc0RyQWpZc0ZGTkcwdWwvb3Q1dmw5TVdpdEE2ZkpBQUdLOG1mRGpMbHp1czExUXh5NGtKanFFTDFUOFZFeWdxN09CSURraThucnNPSFRwWDQ2d1NicnhvbTRIdmJReklzSDdmVWN4NUVrNm03SGllUURoZWJYYnRET2FkelNUWXRzelRLcXU4cEdnOU9ER00ycTBmNEpWbnlhREZmK2lJcUVJeWpYRlFQeUVNRjBjM1BTa1V5aXdyQUFHNjFtYmFJOHBWUWRJaGhhcStNT2hiS2hFVzJVSEpoZHYxbEVGL01HVVVnN0pvVmRmbi9NWEdUR1kwWFhoaWozTzI4RnplREdpN1RBSGhQcTdjTzlvYTZUTEJtWXBuUUk2ZUZSNnRiTWZ5WkhmUzA1T2JPeEhWa3ZaQ2VGTG9rVHR4N3E0PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19';
        } else {
            var urlPath = window.document.location.pathname;
            var pathItem = urlPath.split('/');
            if (pathItem.length > 2) {
                var lang = pathItem[pathItem.length - 2];
                this.onParseUrlStatusChange(ParseUrlStatus.LANGUAGE, lang.toLowerCase())
            }

            urlData = window.location.search.substring(1);
            if (urlData === null || urlData === '') {
                this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
                return;
            }

            urlData = urlData.split('&nsukey=')[0];
        }

        let parseData = null;
        try {
            parseData = JSON.parse(window.atob(urlData));
        } catch (error) {
            console.log(error);
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;
        }

        if (parseData === null) {
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;
        }
        const loginData = parseData.data;

        if (loginData.playerID === null || loginData.playerID === '') {
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('PlayerDataError', 'Player Data Error'))
            return;
        }

        if (loginData.access_Token === null || loginData.access_Token === '') {
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('PlayerCertificationError', 'Player Certification Error'))
            return;
        }

        if (loginData.serverConnection === null || loginData.serverConnection === '') {
            this.onParseUrlStatusChange(ParseUrlStatus.ERROR, GameConfig.getMessageLocation('GameDataError', 'Game data error!'));
            return;
        }

        if (loginData.referrer) {
            //TODO
        }

        if (loginData.log) {
            console.log('loginData.log:', loginData.log);
        }

        if (loginData.lang) {
            GameConfig.setLanguage(loginData.lang);
            this.onParseUrlStatusChange(ParseUrlStatus.LANGUAGE, loginData.lang)
        }
        GameConfig.setUserId(loginData.playerID.toString(), loginData.playerID);
        GameConfig.setCert(loginData.playerID.toString(), loginData.access_Token);

        if (window.location.href.indexOf('https://') != -1) {
            GameConfig.setConnectIp('wss://' + loginData.serverConnection);
        } else {
            GameConfig.setConnectIp('ws://' + loginData.serverConnection);
        }

        let userData = {
            Cer: loginData.access_Token,
            HDCode: GameConfig.getHDCode(),
            HDType: 1,
            UserID: loginData.playerID
        }
        this.startConnect(userData);
    }

    private startConnect(userData: any) {
        let self = this;
        const url = GameConfig.getConnectIp();
        NetworkManager.getInstance().beginConnect(url, function () {
            self.onConnected(userData);
        }, function () {
            self.onConnectFail(userData);
        }, function() {
            self.onConnectClose(userData);
        });
    }
}


