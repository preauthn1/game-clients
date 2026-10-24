export enum GameRoomClassID {
    LoginRoomID = 1, //C2S登入消息
    LoginRoomRetID = 2, //S2C登入回傳
    UserQueueID = 3,
    GameReadyID = 4,
    RequestGameVerID = 5,
    GameVerInfoID = 6,

    // 牌桌資訊
    ROOM_TableInfoID = 1000,
    ROOM_Read_TableInfoID = 2000,

    // 玩家選桌
    ROOM_ChooseTableID = 1001
}