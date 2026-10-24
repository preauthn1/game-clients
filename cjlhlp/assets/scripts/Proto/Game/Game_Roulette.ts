export const enum Roulette_GameMessageClassID {
    RouletteSettingID = 10001,               // 設置相關 S2C  Roulette_Setting
    RouletteStepID = 10002,                  // 階段ID S2C   Roulette_StepInfo
    RouletteRoundID = 10003,                 // 本局局數 S2C  Roulette_RoundInfo
    RouletteBoardCastBetID = 10004,          // 廣播下注 S2C  Roulette_BoardCastBet
    RouletteGameResultID = 10005,            // 遊戲結果 S2C  Roulette_GameResult
    RouletteGameResultWinID = 10006,         // 遊戲結果贏錢 S2C Roulette_GameResultWin
    RouletteRecordsID = 10007,               // 歷史開獎結果 S2C Roulette_GameRecords
    RouletteRichestListID = 10008,           // 富豪榜列表 S2C Roulette_RichestList
    RouletteLuckyStarListID = 10009,         // 幸運星列表 S2C Roulette_LuckyStarList

    RouletteBetID = 10010,                   // 下注ID C2S    Roulette_BetRequest
    RouletteBetRetID = 10020,                // 下注結果 S2C  Roulette_BetResponse
    RouletteBetClearID = 10011,              // 玩家清除已下的注 C2S Roulette_BetRequest
    RouletteBetClearRetID = 10021,           // 玩家清除已下的注 S2C Roulette_BetResponse

    RouletteBetAreaInfoID = 10100,           // 當前下注區域金額 S2C Roulette_BetAreaInfo
}