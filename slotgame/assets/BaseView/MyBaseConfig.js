var _module = module.exports = {};

_module.SpinDataModel = function(jsonResult){
    var gameSetting = jsonResult[0];
    var gameReel = jsonResult[1];
    var winLineData = jsonResult[2];
    var gameAction = jsonResult[3][0];

    var _winLines = [];
    var _winCounts = [];
    var _winSymbols = [];
    var _winNumbers = [];
    var _winWays = [];

    for(let i=0;i<winLineData.length;i++){
      _winLines.push(winLineData[i][0]);
      _winCounts.push(winLineData[i][2]);
      _winSymbols.push(winLineData[i][1]);
      _winNumbers.push(winLineData[i][3]);
      _winWays.push(winLineData[i][4]);
    }

    var _jackpotData = -1;
    if(gameReel.length >=3 && gameReel[2]!=null){
      _jackpotData = gameReel[2];
    }
    
    var data = {
      freeSpinNum: gameSetting[3],
      freeSpinMultiplier:gameSetting[2],
      lineNum:gameSetting[4],
      betValue:gameSetting[5],
      // preWinAmount:gameSetting[7],
      totalGameWin:gameSetting[7],
      curTotalWin:gameSetting[6],
      retriggerNum:gameSetting[9],
      gameMultiplier:gameSetting[10],
      gameType:gameSetting[0],

      fullReelData:gameReel[0],
      reelPosData:gameReel[1],
      
      winLines:_winLines,
      winCounts: _winCounts,
      winSymbols:_winSymbols,
      winNumbers:_winNumbers,
      winWays:_winWays,

      jackpotData:_jackpotData,
      gameActionData:gameAction,
    };

    return data;
};
_module.StartDataModel = function(jsonResult){
  var gameDetail = jsonResult[2];
  var gameSetting;
  var playerDetail = jsonResult[1];
  // var winLineData = jsonResult[2];
  // var gameAction = jsonResult[3][0];
  var reelDetail;
  var _roundId = 0;

  var _fsNum = 0;
  var _linenum = 0;
  var _fsMulti = 0;
  var _totalGameWin = 0;
  var _curTotalWin = 0;
  var _retrigger = 0;
  var _betValue = 0;
  var _restoreData ;
  var _restoreData1 = 0;
  var _restoreDataFSArr = null;
  var _restoreDataBonus;
  var _restoreBonusRemaining;
  var _gameAction = -1;
  
  var _fullReelData = [];
  var _reelPosData = [];
  var winLineData = [];
  var _isSpecialEvent = false;
  var _eventType = 0;
  // console.log(jsonResult[2]);
  if(jsonResult[2]!=-1){
    _roundId = gameDetail[0][0];
    // console.log("Round Id : " +_roundId);
    if(_roundId == 1){
      reelDetail = gameDetail;
      gameSetting = reelDetail[0];

      _betValue = gameSetting[5];
      _fsNum = gameSetting[3];
      _linenum = gameSetting[4];
      _fsMulti = gameSetting[2];
      _totalGameWin = gameSetting[7];
      _curTotalWin = gameSetting[6];
      _retrigger = gameSetting[9];

      _restoreData = gameSetting[10];
      _restoreData1 = _restoreData[0];
    }
    else if(_roundId == 2){
      reelDetail = gameDetail[2];
      gameSetting = reelDetail[0];
      _gameAction = gameDetail[0][1];
      _betValue = gameSetting[5];
      _linenum = gameSetting[4];

      if(gameSetting[10].length>0){
        _restoreData = gameSetting[10][0];
        _restoreData1 = _restoreData[0];
      }
      if(_gameAction > -1){
        _restoreDataFSArr = gameDetail[1];
      }
      _isSpecialEvent = true;
      _eventType = 0;
      // console.log(_gameAction +" / "+_eventType);
      // console.log(_isSpecialEvent);
    }
    else if(_roundId == 4){
      reelDetail = gameDetail[2];
      gameSetting = reelDetail[0];
      _betValue = gameSetting[5];
      _linenum = gameSetting[4];
      
      if(gameDetail[0][1] !=-1){
        _restoreBonusRemaining = gameDetail[1][1];
        _restoreDataBonus = gameDetail[1][2];
      }
      _isSpecialEvent = true;
      _eventType = 4;
    }

    _fullReelData = reelDetail[1][0];
    _reelPosData = reelDetail[1][1];
    winLineData = reelDetail[2];
  }
  else{
    _roundId = -1;
  }
  var _winLines = [];
  var _winCounts = [];
  var _winSymbols = [];
  var _winNumbers = [];
  var _winWays = [];

  if(_roundId != -1){
    for(let i=0;i<winLineData.length;i++){
      _winLines.push(winLineData[i][0]);
      _winCounts.push(winLineData[i][2]);
      _winSymbols.push(winLineData[i][1]);
      _winNumbers.push(winLineData[i][3]);
      _winWays.push(winLineData[i][4]);
    }
  }
  var data = {
    playerName:playerDetail[0],
    playerCredit:playerDetail[1],

    freeSpinNum: _fsNum,
    freeSpinMultiplier:_fsMulti,
    // preWinAmount:gameSetting[7],
    totalGameWin:_totalGameWin,
    betValue:_betValue,
    lineNum:_linenum,
    curTotalWin:_curTotalWin,
    retriggerNum:_retrigger,
    //gameType:_gameAction,

    fullReelData:_fullReelData,
    reelPosData:_reelPosData,
    
    winLines:_winLines,
    winCounts: _winCounts,
    winSymbols:_winSymbols,
    winNumbers:_winNumbers,
    winWays:_winWays,

    isSpecialEvent:_isSpecialEvent,
    eventType:_eventType,

    gameActionData:_gameAction,
    roundId:_roundId,

    restoreData1:_restoreData1,
    restoreDataFSArr:_restoreDataFSArr,
    
    restoreDataBonus:_restoreDataBonus,
    restoreBonusRemaining:_restoreBonusRemaining,
  };

  return data;
};
_module.JackpotDataModel = function(jsonResult){

};
_module.ChangeModeDataModel = function(jsonResult){

};
_module.BonusDataModel = function(jsonResult){

};

_module.isLocal = false;
_module.log = function(print){
  if(this.isLocal)
  console.log(print);
};
_module.EVENT = {
    ENABLEWINLINE:"EnableWinLineEvent",
    ENABLEWINFRAME:"EnableWinFrameEvent",
    ENABLESCATTERFRAME:"EnableScatterFrameEvent",
    UPDATEJACKPOTAMT:"UpdateJackpotAmount",
    SPINNING:"SpinningReel",
    STOPSPINNING:"StopSpinningReel",
    STOPALLSPINNING:"StopAllSpinningReel",
},

_module.PREFAB = {
  ISMUTE:"GameSoundSetting",
  SFX_VOLUME:"GameSoundSfxVolume",
  BGM_VOLUME:"GameSoundBGMVolume",
};
_module.SCRIPT = {
  DATAMANAGER:"MySlotDataManager",
  REELMANAGER:"MyBaseReelManagerView",
  REEL:"MyBaseReelView",
  LINEMANAGER:"MyWinLineView",
  PANELMANAGER:"MyBasePanelView",
  SYMBOLVIEW:"MyBaseSymbolView",
  REGISTEREVENT:"MyRegisterEventView",
  GAMECONTROLLER:"MyBaseController",
  POPUPMANAGER:"MyBasePopUpView",
  ERRORVIEW:"MyBaseErrorView",
  BIGWINVIEW:"BigWinEffect",
  WINEFFECT:"WinEffect",
  FREESPIN:"MyBaseFreeSpinView",
  AUDIOMANAGER:"MyAudioManagerView",
  JACKPOTVIEW:"MyJackpotView",
  FREESPINGAMEVIEW:"MyBasePreFreeSpinView",
  BONUSGAMEVIEW:"MyBaseBonusView",
};

_module.SYMBOLCODE = {
  SYMBOL_WILD: "w1",
  SYMBOL_FREESPINSCATTER:"c1",
  SYMBOL_JACKPOT:"j1",
};

_module.SLOTDETAILS = {
  MAX_PAYLINE: 25,
};

_module.REELDETAILS = {
  REELPOS:[0,0,0],
  REELDELAY:0.2,
  //For Cap the max win amount display
  MAXWINAMT:3,
};

_module.REELSTOPDETAILS = {
  SYMBOL : ["c1","j1","b1"],
  PATTERN : [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]],
  SOUNDSTOPINDEX : [0,0,0],
  COUNT : [0,0,0],
};
_module.REELCLIMAX = {
  SYMBOL : ["c1"],
  PATTERN : [[true,true,true,true,true]],
  MINCOUNT:[3],
  SOUNDSTOPINDEX : [0],
  COUNT : [0],
}

_module.PAYLINEARR = [
  [2, 2, 2, 2, 2],//1
  [3, 3, 3, 3, 3],//2
  [1, 1, 1, 1, 1],//3
  [3, 2, 1, 2, 3],//4
  [1, 2, 3, 2, 1],//5
  [2, 3, 3, 3, 2],//6
  [2, 1, 1, 1, 2],//7
  [3, 3, 2, 1, 1],//8
  [1, 1, 2, 3, 3],//9
  [2, 3, 2, 1, 2],//10
  [2, 1, 2, 3, 2],//11
  [3, 2, 2, 2, 3],//12
  [1, 2, 2, 2, 1],//13
  [3, 2, 3, 2, 3],//14
  [1, 2, 1, 2, 1],//15
  [2, 2, 3, 2, 2],//16
  [2, 2, 1, 2, 2],//17
  [3, 3, 1, 3, 3],//18
  [1, 1, 3, 1, 1],//19
  [3, 1, 1, 1, 3],//20
  [1, 3, 3, 3, 1],//21
  [2, 1, 3, 1, 2],//22
  [2, 3, 1, 3, 2],//23
  [3, 1, 3, 1, 3],//24
  [1, 3, 1, 3, 1],//25
];

_module.SymbolAnimationSound = {
  "s1":"0",
  "s2":"1",
  "j1":"2",
  "w1":"3",
  "c1":"4",
  "s3":"5",
  "s4":"5",
  "s5":"5",
  "s6":"5",
  "s7":"5",
  "s8":"5",
};
_module.SymbolAnimation = {
  "s1":"DiamondS1",
  "s2":"DiamondS2",
  "s3":"DiamondS3",
  "s4":"DiamondS4",
  "s5":"DiamondS5",
  "s6":"DiamondS6",
  "s7":"DiamondS7",
  "s8":"DiamondS8",
  "j1":"DiamondJ1",
  "w1":"DiamondW1",
  "c1":"DiamondC1",
};

_module.BlurSymbolAnimation = {
  "s1":"DiamondS1",
  "s2":"DiamondS2",
  "s3":"DiamondS3",
  "s4":"DiamondS4",
  "s5":"DiamondS5",
  "s6":"DiamondS6",
  "s7":"DiamondS7",
  "s8":"DiamondS8",
  "j1":"DiamondJ1",
  "w1":"DiamondW1",
  "c1":"DiamondC1",
};

_module.SPECIALSYMBOLANIM = {
  "c1": "c1",
  "j1":"j1",
  "b1":"b1",
};

_module.GAMETYPE = {
  "2":"PantherMoon",
  "7":"SilentSamurai",
  "5":"HighwayKing",
  "10":"ZaoCaiJinBao",
  "8":"SafariHeat",
  "13":"CherryLove",
  "16":"DolphinReef",
  "14":"BonusBear",
  "15":"FeiCuiGongZhu",
  "20":"BlazingHeat",
  "11":"DeepBlue",
};

