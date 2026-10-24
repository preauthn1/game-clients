using UnityEngine;
using System.Collections;

namespace VMSoft.Utils
{
	/// <summary>
	/// Language data for language localization in Lang_EN and Lang_CN json.
	/// </summary>
	public class LanguageData{
		
		public LocaleCode localeCode{get; set;}
        public int localeCodeId {
            get{
                return (int)localeCode;
            }
        }

		public string ac_0001_BetPanel_round;

		public string ac_0001_Help1_BetOptions;
		public string ac_0001_Help1_BetDesc1;
		public string ac_0001_Help1_BetDesc2;
		public string ac_0001_Help2_Title;
		public string ac_0001_Help2_BetDesc1;
		public string ac_0001_Help3_SpecialBonus;
		public string ac_0001_Help3_BetDesc1;
		public string ac_0001_Help3_BetDesc2;
		public string ac_0001_Help3_BetDesc3;
		public string ac_0001_Help3_BetDesc4;

		public string ac_0001_ErrorCode_200;
		public string ac_0001_ErrorCode_201;
		public string ac_0001_ErrorCode_202;
		public string ac_0001_ErrorCode_203;
		public string ac_0001_ErrorCode_204;
		public string ac_0001_ErrorCode_205;
		public string ac_0001_ErrorCode_400;
		public string ac_0001_ErrorCode_401;
		public string ac_0001_ErrorCode_500;
		public string ac_0001_ErrorCode_501;
		public string ac_0001_ErrorCode_502;
		public string ac_0001_ErrorCode_505;
		public string ac_0001_ErrorCode_506;
		public string ac_0001_ErrorCode_507;
		public string ac_0001_ErrorCode_701;
		public string ac_0001_ErrorCode_702;
		public string ac_0001_ErrorCode_703;
		public string ac_0001_ErrorCode_704;
		public string ac_0001_ErrorCode_705;
		public string ac_0001_ErrorCode_706;
		public string ac_0001_ErrorCode_707;
		public string ac_0001_ErrorCode_708;
		public string ac_0001_ErrorCode_709;
		public string ac_0001_ErrorCode_710;
		public string ac_0001_ErrorCode_711;
		public string ac_0001_ErrorCode_712;
		public string ac_0001_ErrorCode_713;
		public string ac_0001_ErrorCode_714;
		public string ac_0001_ErrorCode_715;
		public string ac_0001_ErrorCode_716;
		public string ac_0001_ErrorCode_Default;

        public string app_allbet;
        public string app_allbet_desc;
		public string announceNewGame;
		public string appUpdating;
		public string appUpdateDownloaded;
		public string install; 
		public string gameAccount;
		public string autoSpinMax;
		public string gameWin;
		public string gameOver;
        public string lobbyComingSoon;

	    public string titleOperatorError;
		public string titlePlayerLoginError;
	    public string titleLanguage;
	    public string titleUpdateDescription;
	    public string titleMaintenance;
	    public string titleUpdate;
	    public string titleConnection;
	    public string titlePlayerId;
	    public string titlePassword;

		#region SecondaryLogin
		public string secondaryLogin;
        public string secondaryLoginInfo;
        public string secondaryLoginInstruction;

        public string secondaryLogin_live22;
        public string secondaryLoginInfo_live22;
        public string secondaryLoginInstruction_live22;

		public string secondaryLoginCreate;
		public string secondaryLoginSuccessful;
		public string secondaryLoginErrorGeneric;

        public string secondaryLoginConfirmation;
        public string secondaryLoginConfirmationDes;
        #endregion

        public string titleRememberInfo;
	    public string titleAutoLogin;
	    public string titleVerification;
	    public string titleSubmit;
	    public string titleResetInfo;
		public string titleLogin;
		public string titleClear;
	    public string titleExit;
	    public string titleTotalJackpot;
	    public string titleChangePlayer;
	    public string titleLoading;
	    public string titlePreparingEditorPick;
	    public string titleUpdateInProgress;
	    public string titleBuildingInProgress;
	    public string titleChecking;
	    public string titleConfirm;
	    public string titleCancel;
	    public string titleContinue;
	    public string titleOkay;
        public string titleSkip;

		#region Error Codes
	    public string error400_BadRequest;
	    public string error401_Unauthorized;
	    public string error500_InternalServerError;
	    public string error505_ProtocolNotSupported;
	    public string error506_clientNotSupported;
	    public string error507_slotIdNotSupported;
	    public string error701_InvalidBetLine;
	    public string error702_InvalidBetValue;
	    public string error703_InsufficientCoin;
	    public string error704_InvalidLineValue;
		public string error707_InvalidFreeSpinType;
		public string error708_MultipleRequest;
		public string errorA900_APP_UnableToLoadGame;
        public string errorA901_APP_InternetNotReachable;
		public string errorM801_Connection_Failure;
        public string error1_ServerNoResponse;
        public string error2_ServerDownForMaintenance;

        #endregion
		public string titleTapDownload;
		public string titleTapCancel;
		public string titleTapUpdate;
        public string titleBackLobby;
	    public string titleExitGame;
		public string titleLogout;
	    public string titleWWWTimeOut;
	    public string titleNoInternetAccess;
	    public string titleInvalidUsername;
	    public string titleInvalidCaptcha;
	    public string titleCongratulationFreeSpins;
	    public string titleCongratulationFreeSpinsForRoom500;
	    public string titleBonusGame;
	    public string titleCongratulationBonus;
	    public string titleCongratulationCoins;
	    public string titleCongratulationCoinsForRoom500;
	    public string titleLobby;
	    public string titleUsername;
	    public string titleBalance;
	    public string titleSettings;
	    public string titleHelp;
	    public string titleBetValue;
	    public string titleLine;
	    public string titleLineBet;
	    public string titleTotalBet;
	    public string titleWin;
	    public string titleMaxBet;
	    public string titleAutoSpin;
	    public string titleStopAuto;
	    public string titleSpin;
	    public string titleStop;
	    public string titleTotalWin;
	    public string titleStartFreeSpins;
	    public string titleFreeSpinLeft;
	    public string titleCurrency;
	    public string titleSettingsPanel;
	    public string titleStatement;
	    public string titleAbout;
	    public string titleMenuQuitGame;
		public string titleMenuLogout;
	    public string titleGameType;
	    public string titleSlot;
		public string titleArcade;
	    public string titleGameLine;
	    public string titleGameWay;
	    public string titleFreeToPlay;
	    public string titleRealPlay;
	    public string titleDescriptionDownloadMode;
	    public string titleDescriptionUpdateMode;
	    public string titleDataDownloadMode;
	    public string titleDescriptionDataDownloadMode;
		public string titleLogoutMsg;
	    public string titleStartDownload;
	    public string titleStartUpdate;
	    public string titleCurrencyNotice;
	    public string titleCurrencyContent01;
	    public string titleCurrencyContent02;
	    public string titleStatementDate;
	    public string titleStatementTotalBet;
	    public string titleStatementTotalWin;
	    public string titleStatementWinOrLose;
	    public string titleStatementTotalGames;

        public string titleStatementDeposit;
        public string titleStatementWithdraw;
        public string titleStatementCommission;
        public string titleStatementBalance;
		public string titleStatementTurnover;
		public string titleStatementValidTurnover;
		public string titleStatementSettlement;
		public string titleStatementWinOrLose2;

	    public string titleMusicSfx;
	    public string titleSoundEffect;
	    public string titleQuickSpin;
	    public string titleOn;
	    public string titleOff;
        public string titleFullScreen;
	    public string titleFreeSpins;
	    public string titleJackpotWinners;
	    public string titleGrand;
	    public string titleGrandJackpotWinners;
	    public string titleMajor;
	    public string titleMajorJackpotWinners;
	    public string titleMinor;
	    public string titleMinorJackpotWinners;
	    public string titleMini;
	    public string titleMiniJackpotWinners;
	    public string titleJackpot;
	    public string titleWild;
	    public string titleBonusSpin;
	    public string titleBonusSpinDescription;
	    public string titlePaytableWild;
	    public string titlePaytableNewWild;
	    public string titlePaytableFreeSpins;
	    public string titleBonus;
	    public string titlePaytableBonus;
	    public string titlePaytableBonusForDragon;
	    public string titlePaytableFreeSpinsForDragon;
	    public string titleStackedWild;
	    public string titlePaytableStackedWildOne;
	    public string titlePaytableStackedWildTwo;
	    public string titleMultiplier;
	    public string titleMultiplierDescription;
	    public string titleTermAndCondition;
	    public string termAndConditionTitle;
	    public string titlePaytableJackpotTitle;
	    public string titlePaytableJackpotDescription;
	    public string titleCoins;
	    public string titleDescriptionBonusOne;
	    public string titleDescriptionBonusTwo;
	    public string titleDescriptionBonusThree;
	    public string titleDescriptionBonusFour;
	    public string titleDescriptionBonusFive;
	    public string titleBonusFiveTypeOne;
	    public string titleBonusFiveTypeTwo;
	    public string titleDescriptionBonusSix;
	    public string titleDescriptionBonusSeven;
	    public string titleDescriptionBonusEight;
	    public string titleDescriptionBonus100;
	    public string titleDescriptionBonus101;
	    public string titleDescriptionBonus102;
	    public string titleDescriptionBonus103;
	    public string titleDescriptionBonus104;
	    public string titleDescriptionBonus105;
	    public string titleDescriptionBonus106;
	    public string titleStartBonus106;
	    public string titleDescriptionBonus107;
	    public string titleRedCard107;
	    public string titleBlackCard107;
	    public string titleDescriptionBonus200;
	    public string titleDescriptionBonus201;
	    public string titleDescriptionBonus202;
	    public string titleDescriptionBonus203;
		public string titleDescriptionBonus203_GameOver;
	    public string titleDescriptionBonus204;
	    public string titleDescriptionBonus205;
	    public string titleDescriptionBonus206_1;
	    public string titleDescriptionBonus206_2;
	    public string titleDescriptionBonus206_3;
	    public string titleDescriptionBonus206_4;
	    public string titleDescriptionBonus207;
		public string titleDescriptionBonus300;
	    public string titleDescriptionBonus301;
	    public string titleDescriptionBonus302;
	    public string titleScoreBoardDescription302;
	    public string titleDescriptionBonus303;
	    public string titleDescriptionBonus304;

	    public string titleTextTnC1;
	    public string titleTextTnC2;
	    public string titleTextTnC3;
	    public string titleTextTnC4;
	    public string titleTextTnC5;

	    public string titleNextBtn;
	    public string titlePreviousBtn;
	    public string titleVersionCode;

		public string titleUpdateRequired;
		public string titleAnnouncement;
		public string titlePending;

	    #region Frozen paytable
	    public string titlePaytableFrozenWild;
	    public string titleScatterForFrozen;
	    public string titlePaytableScatterForFrozen;
		public string titlePaytableScatterBonusTitleFrozen;
		public string titlePaytableScatterBonusFrozen;
		public string titlePaytableBonanzaFeatureFrozenTitle;
		public string titlePaytableBonanzaFeatureFrozenDescription;
		public string titlePaytableExtraWildTitle;
		public string titlePaytableExtraWildDescription;
		public string titlePaytableMultiplierFrozenTitle;
		public string titlePaytableMultiplierFrozenDescription;
		public string titlePaytableJackpotTitleFrozen;
	    public string titlePaytableJackpotForFrozen;
	    public string titleJackpotBonusGameTitleFrozen;
		public string titleJackpotBonusGameDescriptionFrozen;
		public string titleJackpotBonusGameDescriptionFrozen1;
	    public string titleJackpotBonusGameDescriptionFrozen2;
	    public string titleProgressiveJackpotTitleFrozen;
		public string titleProgressiveJackpotDescriptionFrozen;
		public string room400EnterFreeSpin;
		public string room400FreeSpinCountWon;
		public string room400FreeSpinCoinWon;
		public string room400JackpotInfo;
	    #endregion

	    public string titlePaytableWildRoom500;
	    public string titleZeusRoom500;
	    public string titlePaytableScatterRoom500;
	    public string titleRetriggerFreeSpinRoom500;
	    public string titlePaytableJackpotRoom500;
	    public string titleZeusRespinRoom500;
	    public string titleZeusRespinDescription1Room500;
	    public string titleZeusRespinDescription2Room500;
	    public string titleZeusRespinDescription3Room500;
	    public string titleZeusRespinDescription4Room500;

	    public string room600FreeSpinCountWon;
	    public string room600FreeSpinCoinWon;
	    public string room600YouWin;
	    public string room600ExtraFreeSpin;
	    public string room600PTWild;
	    public string room600PTExpandableWild;
	    public string room600PTExpandableWildDesc;
	    public string room600PTScatterDesc;
	    public string room600PTScatterWildDesc;
	    public string room600PTPlusScatterDesc;
	    public string room600PTJackpotDesc;
	    public string room600PTJackpotGame;
	    public string room600PTJackpotGameDesc;
	    public string room600PTMysteriousFortune;
	    public string room600PTMysteriousFortuneDesc;
	    public string way243;
		public string room700BonusTotalBet;
		public string room700BonusGamePlayDesc;
	    public string way27;
	    public string room700BonusIconDescription;
	    public string room700PTScatterDesc;
	    public string room700PTJackpotDesc;
	    public string room700PTJackpotGameDesc;
	   
        #region room 900 paytable
	    public string room900PTExpandableWildDesc;
	    public string room900PTJackpotGameDesc;
	    public string room900PTJackpotDesc;
	    public string room900BonusDesc;
	    public string room900FreeSpinsDesc;
	    public string room900BonusTotalWin;
	    public string room900BonusGame;
	    public string room900BonusGameDesc;
        #endregion

        #region room 1000 paytable
        public string room1000PTExpandableWildDesc;
        public string room1000PTJackpotGameDesc;
        public string room1000WildReelTitle;
        public string room1000WildReelDescription;
		public string room1100PTScatterDesc;
        #endregion

        #region room 1100 paytable
        public string room1100PTExpandableWildDesc;
		public string room1100PTJackpotGameDesc;
		public string room1100PTJackpotDesc;
		public string room1100FreeSpinsDesc;
        #endregion

        #region room 1200 paytable
		public string room1200BonusDesc;
        public string room1200BonusGameDesc;
        public string room1200PTJackpotGameDesc;
        public string room1200BonusSelectTitle;
        #endregion

        #region room 1300 paytable
        public string room1300ScatterDesc;
        public string room1300PTJackpotGameDesc;
        public string room1300Scatter2;
        public string room1300Scatter3;
        public string room1300Scatter4;
        public string room1300Scatter5;
        #endregion

		#region room 1400 paytable
		public string room1400ScatterDesc;
		public string room1400RetriDesc;
        #endregion

        #region room 1500 paytable
        public string room1500TitleWild;
        public string room1500PaylineTCDescription;
        public string room1500Wild2xDescription;
        public string room1500PTJackpotGameDesc;
        public string room1500Wild2xReelDesc;
        #endregion

        #region room 1700 paytable
        public string room1700WildMultiplierDesc;
        public string room1700FreeSpinDesc;
        public string room1700PTJackpotDesc;
        public string room1700PTJackpotGameDesc;
        public string room1700WildMultiplierNote;
        public string room1700WildMultiplierTitle;
        public string room1700Wild2xReelDesc;
        #endregion

		#region Toast
		public string titleToastWinLine;
		public string titleToastTotalWin;
		public string titleToastGameOver;
		public string titleToastWin;
		#endregion

		#region room 1600 Toast
		public string room1600NormToast;
		public string room1600FreeToast;
		public string room1600SpinningToast;
		#endregion

		#region room 1700 Toast
		public string room1700NormToast;
		public string room1700FreeToast;
		public string room1700SpinningToast;
		#endregion

		#region room 1800 Toast
		public string room1800NormToast;
		public string room1800FreeToast;
		public string room1800SpinningToast;
		public string room1800PTJackpotGameDesc;
		#endregion

		#region room 1900 Toast
		public string room1900NormToast;
		public string room1900FreeToast;
		public string room1900SpinningToast;
		#endregion

        //Training
        public string testPlaySoundButton;

	    #region Jaunty paytable
	    public string titleWinline;
	    public string titleWinlineDescription;
	    public string room800PTExpandableWildDesc;
	    public string room800PTScatterDesc;
	    public string room800PTJackpotDesc;
	    public string room800PTJackpotGameDesc;
	    public string bothWayTermAndCondition;
        #endregion

        #region room 1900 Paytable
        public string room1900WildMultiplierDesc;
        public string way1024;
        public string room1900PTJackpotGameDesc;
        public string room1900FreeSpinDesc;
        #endregion

        #region Room 2000 Paytable
        public string room2000DragonWildDescText;
        public string room2000JackpotGameDesc;
        #endregion

        #region room 2000 Toast
        public string room2000NormToast;
        public string room2000FreeToast;
        public string room2000SpinningToast;
        #endregion

        #region Room 2100 Paytable
        public string room2100PTJackpotGameDesc;
        public string room2100BonusGameDesc;
        public string room2100FreeSpinDesc;
        public string room2100BonusDesc;
        public string room2100RetriDesc;
        #endregion

        #region room 2100 Toast
        public string room2100NormToast;
        public string room2100FreeToast;
        public string room2100SpinningToast;
        #endregion
        #region room 2200 Toast
        public string room2200NormToast;
        public string room2200FreeToast;
        public string room2200SpinningToast;
        #endregion
        #region Room 2200 Paytable
        public string room2200FreeSpinDesc;
        public string room2200MysteryDesc;
        public string room2200PTJackpotGameDesc;
        #endregion

        #region Room 2300 Paytable
        public string room2300RetriDesc;
        public string room2300FreeSpinDesc;
        public string room2300JackpotGameDesc;
        public string room2300PTJackpotDesc;
        #endregion

        #region room 2300 Toast
        public string room2300NormToast;
        public string room2300FreeToast;
        public string room2300SpinningToast;
        #endregion

        #region 2400 Paytable
        public string room2400FreeSpinDesc;
        public string room2400PTJackpotGameDesc;
        #endregion
        #region 2400 Toast
        public string room2400NormToast;
        public string room2400FreeToast;
        public string room2400SpinningToast;
        #endregion
        #region 2500 Paytable

        public string room2500PTWildDesc1; 
	    public string room2500PTBonusGame; 
	    public string room2500PTBonusGameDesc;
	    public string room2500PTBonusDesc;
	    public string room2500PTSymbol;
	    #endregion
        #region 2500 Toast
        public string room2500NormToast;
        public string room2500FreeToast;
        public string room2500SpinningToast;
        #endregion


        #region 2600 Paytable
        public string room2600FreeSpinDesc;
        public string room2600WildReelDescription;
        public string room2600ScatterDesc;
        public string room2600PTJackpotDesc;
        public string room2600PTJackpotGameDesc;
        public string room2600PTWild;
        #endregion

        #region 2500 Toast
        public string room2600NormToast;
        public string room2600FreeToast;
        public string room2600SpinningToast;
        #endregion
        #region 2700 Toast
        public string room2700NormToast;
        public string room2700FreeToast;
        public string room2700SpinningToast;
        #endregion
        #region 2700 Paytable
        public string room2700PTExpandableWildDesc;
        public string room2700BonusDesc;
        public string room2700BonusGameDesc;
        public string room2700PTJackpotDesc;
        public string room2700PTJackpotGameDesc;
        public string room2700WinlineDescription;
        public string room2700TermsDesc;

        #endregion

		#region 2800 Paytable
		public string room2800PTWild;
		public string room2800PTWildDesc1;
		public string room2800FreeSpinDesc;
		#endregion

		#region 2800 Toast
		public string room2800NormToast;
		public string room2800FreeToast;
		public string room2800SpinningToast;
		#endregion

		#region 2900 Paytable
		public string room2900PTStickyWildDesc;
		public string room2900BonusDesc;
		public string room2900PTJackpotDesc;
		public string room2900BonusGameDesc;
		public string room2900PTJackpotGameDesc;
		#endregion

		#region 2900 Toast
		public string room2900NormToast;
		public string room2900FreeToast;
		public string room2900SpinningToast;
		#endregion

		#region 3000 Paytable
		public string room3000PTExpandableWildDesc;
		public string room3000FreeSpinDesc;
		public string room3000PTJackpotDesc;
		public string room3000PTJackpotGameDesc;
		#endregion

		#region 3000 Toast
		public string room3000NormToast;
		public string room3000FreeToast;
		public string room3000SpinningToast;
		#endregion

        #region 3100 Paytable
        public string room3100JackpotGameDesc;
        public string room3100FreespinDesc;
        public string room3100NormToast;
        public string room3100FreeToast;
        #endregion

		#region 3200 Paytable
		public string room3200FreeSpinDesc;
		public string room3200JackpotDesc;
		public string room3200JackpotGameDesc;
		public string room3200MysteryDesc;
		public string room3200BonusDesc;
		public string room3200BonusGameDesc;
		#endregion

        #region room 3200 Toast
        public string room3200NormToast;
        public string room3200FreeToast;
        public string room3200SpinningToast;
        #endregion

        #region room 3300 Toast
        public string room3300NormToast;
        public string room3300FreeToast;
        public string room3300SpinningToast;
        #endregion

        #region 3300 Paytable
        public string room3300GoldenWild;
        public string room3300JackpotGameDesc;
        public string room3300FreeSpinDesc;
        #endregion

		#region 3400 Paytable
		public string room3400FreeSpinDesc;
		public string room3400MysteryScatter;
		public string room3400JackpotGameDesc;
		#endregion
		#region room 3400 Toast
		public string room3400NormToast;
		public string room3400FreeToast;
		public string room3400SpinningToast;
		#endregion

		#region room 3500 Toast
		public string room3500NormToast;
		public string room3500FreeToast;
		public string room3500SpinningToast;
		#endregion

		#region room 3600 Toast
		public string room3600NormToast;
		public string room3600FreeToast;
		public string room3600SpinningToast;
		#endregion

		#region room3700 Paytable
		public string room3700BattleFormationDesc;
		public string room3700GroupFormationDesc;
		public string room3700StealthFormationDesc;
		public string room3700FreeSpinDesc;
		public string room3700FreeSpinBattleDesc;
		public string room3700FreeSpinSelectionDesc;
		public string room3700JackpotDesc;
		public string room3700JackpotGameDesc;
		public string room3700FSFeatureDesc_1;
		public string room3700FSFeatureDesc_2;
		public string room3700FSFeatureDesc_3;
		public string room3700FSFeatureDesc_4;
		public string room3700FSFeatureDesc_5;
		public string room3700FSFeatureDesc_6;
		#endregion

		#region room 3700 Toast
		public string room3700NormToast;
		public string room3700FreeToast;
		public string room3700SpinningToast;
		#endregion

		#region room 3800 Paytable
		public string room3800FreeSpinDesc;
		public string room3800JackpotDesc;
		public string room3800JackpotGameDesc;
		public string room3800JPGrand;
		public string room3800JPMajor;
		public string room3800JPMinor;
		public string room3800JPMini;
		#endregion

		#region room 3800 Toast
		public string room3800NormToast;
		public string room3800FreeToast;
		public string room3800SpinningToast;
		#endregion

		#region room 3900 Toast
		public string room3900NormToast;
		public string room3900FreeToast;
		public string room3900SpinningToast;
		#endregion

		#region room 4000 Toast
		public string room4000NormToast;
		public string room4000FreeToast;
		public string room4000SpinningToast;
		#endregion

		#region room 4100 Toast
		public string room4100NormToast;
		public string room4100FreeToast;
		public string room4100SpinningToast;
		#endregion

		#region room 4200 Toast
		public string room4200NormToast;
		public string room4200FreeToast;
		public string room4200SpinningToast;
		#endregion

		#region room 4300 Toast
		public string room4300NormToast;
		public string room4300FreeToast;
		public string room4300SpinningToast;
		#endregion

		#region room 4400 Toast
		public string room4400NormToast;
		public string room4400FreeToast;
		public string room4400SpinningToast;
		#endregion

		#region room 4500 Toast
		public string room4500NormToast;
		public string room4500FreeToast;
		public string room4500SpinningToast;
		#endregion

		#region room 5000 Toast
		public string room5000NormToast;
		public string room5000FreeToast;
		public string room5000SpinningToast;
		#endregion

		#region room 5100 Toast
		public string room5100NormToast;
		public string room5100FreeToast;
		public string room5100SpinningToast;
		#endregion
    }
}
