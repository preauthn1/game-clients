import { _decorator } from 'cc';
import BaseGameDataManager, { GameDataType } from '../CocosFrameworks/Data/BaseGameDataManager';
import { reciverData } from './ICallback';
import { MessageBClassID } from '../Proto/BClass';
import { GameMessageClassID } from '../Proto/Game';
import { Roulette_GameMessageClassID } from '../Proto/Game/Game_Roulette';
import { Roulette_Bet, Roulette_BetAreaInfo, Roulette_BetRequest, Roulette_BetResponse, Roulette_BoardCastBet, Roulette_GameRecords, Roulette_GameResult, Roulette_GameResultWin, Roulette_ResultCode, Roulette_Setting, Roulette_Step, Roulette_StepInfo, Roulette_UserInfo } from '../Proto/Game/GameMsg_Roulette';
import NetworkManager from '../CocosFrameworks/Network/NetworkManager';
import { UserStateChange } from '../Proto/Msg/gameMsg';
const { ccclass, property } = _decorator;

@ccclass('GameDataManager')
export class GameDataManager extends BaseGameDataManager {

    private static instance: GameDataManager;

    public static getInstance(): GameDataManager {
        if (!GameDataManager.instance) {
            GameDataManager.instance = new GameDataManager();
        }
        return GameDataManager.instance;
    }

    start() {

    }

    private updateStageUserMoney(betInfo: Roulette_BetResponse) {
        if (betInfo.Code === Roulette_ResultCode.Roulette_ResultCodeSuccess) {
            this.UserData.CashAmount = Object.assign({}, betInfo.Money);
            this.dataChangeCallback(GameDataType.UserData, this.UserData);
        }
    }

    protected syncProtoData(data: reciverData): void {
        // console.log('syncProtoData:', JSON.stringify(data));
        if (data.mainId === MessageBClassID.Game) {
            switch (data.subId) {
                case GameMessageClassID.UserStateChangeID:
                    if (data.data.User.UserID === this.UserData.UserID) {
                        // console.log('UserStateChangeID:', this.UserData.UserID, data.data)
                        this.updateUserStateData(data.data as UserStateChange);
                    }
                    break;
                case Roulette_GameMessageClassID.RouletteSettingID:
                    // console.log('RouletteSettingID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_Setting>(GameDataType.SettingData, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteStepID:
                    // console.log('RouletteStepID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_Step>(GameDataType.GameState, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteRoundID:
                    // console.log('RouletteRoundID:', JSON.stringify(data.data));
                    break;
                case Roulette_GameMessageClassID.RouletteBoardCastBetID:
                    // console.log('RouletteBoardCastBetID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_BoardCastBet>(GameDataType.BetData, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteGameResultID:
                    // console.log('RouletteGameResultID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_GameResult>(GameDataType.GameResult, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteGameResultWinID:
                    // console.log('RouletteGameResultWinID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_GameResultWin>(GameDataType.ResultWinData, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteRecordsID:
                    // console.log('RouletteRecordsID:', JSON.stringify(data.data));
                    this.dataChangeCallback<Roulette_GameRecords>(GameDataType.HistoryData, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteRichestListID:
                    // console.log('RouletteRichestListID:', JSON.stringify(data.data));
                    break;
                case Roulette_GameMessageClassID.RouletteLuckyStarListID:
                    // console.log('RouletteLuckyStarListID:', JSON.stringify(data.data));
                    break;
                case Roulette_GameMessageClassID.RouletteBetRetID:
                    this.updateStageUserMoney(data.data);
                    this.dataChangeCallback<Roulette_BetResponse>(GameDataType.BetRetData, data.data);
                    break;
                case Roulette_GameMessageClassID.RouletteBetClearID:
                    // console.log('RouletteBetClearID:', JSON.stringify(data.data));
                    break;
                case Roulette_GameMessageClassID.RouletteBetAreaInfoID:
                    this.dataChangeCallback<Roulette_BetAreaInfo>(GameDataType.BetAreaInfo, data.data);
                    break;
            }
        }
    }

    public sendBetCoin(bet: Roulette_Bet) {
        const sendMsg: Roulette_BetRequest = {
            Bet: bet
        }
        NetworkManager.getInstance().sendMsgData(MessageBClassID.Game, Roulette_GameMessageClassID.RouletteBetID, sendMsg);
    }
}


