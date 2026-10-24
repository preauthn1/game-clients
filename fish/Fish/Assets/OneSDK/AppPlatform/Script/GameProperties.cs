using UnityEngine;
using GameServer = VMSoft.SlotMachine.OneSGameServer.GameServer;
using System.Collections.Generic;
using OneSDK.StarterPack;

/**
 * Set of Codes to control the Game Properties
 */

namespace VMSoft.SlotMachine
{
    public class GameProperties : AGameHelper
    {
        //-----Game Details-----------------------------------------------------
        [Header("DEV GameProperties Info")]
        [Tooltip("Optional Field, kinda nostalgic for these info below")]
        public string gameName = "optional";
        public GameServer server;
        public string slotId = "0";

        ConnectionBook connectionBook = new ConnectionBook();

        int opId = 0;

        //this read by splitting the server url.
        [Header("Simulator Options")]
        [Tooltip("Override server url to localhost simulator")]
        public bool connectLocalhost = false;
        //the default player id, in memorize of a developer that was once working here, who told a lot inspiring stories :D


        //---------- Codes ---------------------------------------------------
        protected override void Awake()
        {
            ProcessGameEnvironmentData();
            base.Awake();
#if UNITY_WEBGL
            //Application.ExternalCall("processUser");
#endif
        }

        /** Get the Protocol Version based on the selected GameServer enum */
        public string getProtocolVersion()
        {
            return connectionBook.protocolVersion[server];
        }

 
        void ProcessGameEnvironmentData()
        {
            gameId = slotId;
            try
            {
                string[] values;
                switch (environment)
                {
                    default: //TargetEnvironment.Simulator: & Others, to "Simulator"
                        if (connectLocalhost)
                        {
                            values = connectionBook.simulatorUrl[server].Split('|');
                            opId = int.Parse(values[0]);
                            gameServiceURL = values[1].Replace(ConnectionBook.SIMULATOR_HOST, ConnectionBook.LOCAL_HOST);
                        }
                        else {
                            values = connectionBook.simulatorUrl[server].Split('|');
                            opId = int.Parse(values[0]);
                            gameServiceURL = values[1];
                        }
                        break;
                    case Configuration.Environment.UNASSIGNED:
                        //do nothing.
                        break;
                    case Configuration.Environment.PROD:
                        //nothing to be done, when going for production environment testing
                        break;
                    case Configuration.Environment.UAT:
                        // we don't need this UAT anymore, we simulate the real UAT login environment.       
                    //    values = connectionBook.uatServerURL[server].Split('|');
                    //    opId = int.Parse(values[0]);
                    //    gameServiceURL = values[1];
                        break;

                    case Configuration.Environment.DEV:
                        values = connectionBook.devServerURL[server].Split('|');
                        opId = int.Parse(values[0]);
                        gameServiceURL = values[1];
                        break;
                }
            }
            catch (KeyNotFoundException e)
            {
                Debug.LogError("We couldn't find the url entry for key:<color=red>[ " + server + " ]</color>, " +
                               "probably was forgotten to add here in DEV/UAT/Simulator URL section.." +
                               e.StackTrace);
                gameServiceURL = "";
            }
        }

        #region WebGL Data Parsing Component

#if UNITY_WEBGL
        private void OnJSResult(string result)
        {
            //playerLoginId = result;
            //string[] delimiters = new string[] { "&", "=" };
            //string[] items = result.Split(delimiters, StringSplitOptions.None);
            //playerLoginId = items[1];
            //Debug.Log("What is item[1]? " + playerLoginId);
            //Debug.Log("What is item[3]? " + items[3]);
            //LanguageManager.Locale = LanguageManager.GetLocaleCode(items[3]);
            //LanguageManager.Instance.ApplyChanges();
        }
#endif
        #endregion

        public int OpId()
        {
            return opId;
        }

        public string SlotId()
        {
            return slotId;
        }


        public static GameProperties FindOrCreateIt()
        {
            GameProperties gameProp = FindObjectOfType<GameProperties>();
            if (gameProp == null)
            {
                GameObject gameObject = new GameObject();
                gameObject.AddComponent<GameProperties>();
                gameObject.name = " >> GameProperties (clone)";
                gameProp = gameObject.GetComponent<GameProperties>();
            }
            return gameProp;
        }

        public void InitSettingWith(string protocolVersion)
        {
            server = connectionBook.GetGameServer(protocolVersion);
            ProcessGameEnvironmentData();
        }

        #region AGameHelper
        int languageCode = 0;
        float systemMusicValue = 0f;
        float systemSfxVolume = 0f;

        public override void ChangeLanguage(int languageCode)
        {
            this.languageCode = languageCode;

            string message = messageHeader + "language change updated to " + languageCode;
            Debug.Log(message);
        }

        public override float GetMusicVolume()
        {
            return systemMusicValue;
        }

        public override float GetSfxVolume()
        {
            return systemSfxVolume;
        }

        public override bool IsFullScreen()
        {
            return false;
        }

        public override int GetLanguageCode()
        {
            return languageCode;
        }

        public override void SetMusicVolume(float musicValue)
        {
            this.systemMusicValue = musicValue;
        }

        public override void SetSfxVolume(float sfxValue)
        {
            this.systemSfxVolume = sfxValue;
        }

        public override string GetGameIdFromLobby()
        {
            return gameId;
        }
        #endregion 
    }//end of GameProperties

    /// <summary>
    /// Keep the connection info for the 1s In house game.
    /// </summary>
    public class ConnectionBook
    {      
        public Dictionary<GameServer, string> protocolVersion = new Dictionary<GameServer, string>() {
            { GameServer.Banana,     "1.0.0" },
            { GameServer.Coconut,    "2.0.0" },
            { GameServer.Dragon,     "3.0.0" },
            { GameServer.Egghead,    "4.0.0" },
            { GameServer.Frozen,     "5.0.0" },
            { GameServer.Godzilla,   "6.0.0" },
            { GameServer.Huat,       "7.0.0" },
            { GameServer.Intrepid,   "8.0.0" },
            { GameServer.Jaunty,     "9.0.0" },
            { GameServer.Kiwi,      "10.0.0" },
            { GameServer.Lemon,     "11.0.0" },
            { GameServer.Macho,     "12.0.0" },
            { GameServer.Nami,      "14.0.0" },
            { GameServer.Ocean,     "13.0.0" },
            { GameServer.P015,      "15.0.0" },
            { GameServer.P016,      "16.0.0" },
            { GameServer.P017,      "17.0.0" },
            { GameServer.P018,      "18.0.0" },
            { GameServer.P019,      "19.0.0" },
            { GameServer.P020,      "20.0.0" },
            { GameServer.P021,      "21.0.0" },
            { GameServer.P022,      "22.0.0" },
            { GameServer.P023,      "23.0.0" },
            { GameServer.P024,      "24.0.0" },
            { GameServer.P025,      "25.0.0" },
            { GameServer.P026,      "26.0.0" },
            { GameServer.P027,      "27.0.0" },
            { GameServer.P028,      "28.0.0" },
            { GameServer.P029,      "29.0.0" },
            { GameServer.P030,      "30.0.0" },
            { GameServer.P031,      "31.0.0" },
            { GameServer.P032,      "32.0.0" },
            { GameServer.P033,      "33.0.0" },
            { GameServer.P034,      "34.0.0" },
            { GameServer.P035,      "35.0.0" },
            { GameServer.P036,      "36.0.0" },
            { GameServer.P037,      "37.0.0" },
            { GameServer.P038,      "38.0.0" },
            { GameServer.P039,      "39.0.0" },
            { GameServer.P040,      "40.0.0" },
            { GameServer.P041,      "41.0.0" },
            { GameServer.P042,      "42.0.0" },
            { GameServer.P043,      "43.0.0" },
            { GameServer.P044,      "44.0.0" },
            { GameServer.P045,      "45.0.0" },
            { GameServer.P046,      "46.0.0" },
			{ GameServer.P047,      "47.0.0" },
			{ GameServer.P048,      "48.0.0" },
			{ GameServer.P049,      "49.0.0" },
			{ GameServer.P050,      "50.0.0" },
			{ GameServer.P051,      "51.0.0" },
			{ GameServer.P052,      "52.0.0" },
			{ GameServer.P053,      "53.0.0" }
        };

        /// <summary> ========== DEV SERVER ========== </summary>
        public Dictionary<GameServer, string> devServerURL = new Dictionary<GameServer, string>() {
            { GameServer.Banana,      "29|http://0.0.0.0:12998/" + "SlotServerV1/SlotService.svc/" }, //OpId 29
            { GameServer.Coconut,     "29|http://0.0.0.0:13008/" + "SlotServerV2/SlotService.svc/" }, //OpId 29
            { GameServer.Dragon,      "29|http://0.0.0.0:13018/" + "SlotServerV3/SlotService.svc/" }, //OpId 29
            { GameServer.Egghead,     "29|http://0.0.0.0:13028/" + "SlotServerV4/SlotService.svc/" }, //OpId 29
            { GameServer.Frozen,      "29|http://0.0.0.0:13038/" + "SlotServerV5/SlotService.svc/" }, //OpId 29
            { GameServer.Godzilla,    "29|http://0.0.0.0:13048/" + "SlotServerV6/SlotService.svc/" }, //OpId 29
            { GameServer.Huat,        "30|http://0.0.0.0:13058/" + "SlotServerV7/SlotService.svc/" }, // OpId for testing : 30
            { GameServer.Intrepid,     "1|http://0.0.0.0:13068/" + "SlotServerV8/api/" }, // OpId for testing : 1
            { GameServer.Jaunty,       "1|http://0.0.0.0:13078/" + "SlotServerV9/api/" }, // OpId for testing : 1
            { GameServer.Kiwi,         "1|http://0.0.0.0:13088/" + "SlotServerV10/SlotService.svc/" },
            { GameServer.Lemon,        "2|http://0.0.0.0:13098/" + "SlotServerV11/api/" },
            { GameServer.Macho,        "2|http://0.0.0.0:13108/" + "SlotServerV12/SlotService.svc/" },//OpId for testing : 2
            { GameServer.Nami,         "3|http://0.0.0.0:13128/" + "SlotServerV14/api/" },
            { GameServer.Ocean,        "3|http://0.0.0.0:13118/" + "SlotServerV13/SlotService.svc/" },
            { GameServer.P016,        "4|http://0.0.0.0:13148/" + "SlotServerV16/api/" },
            { GameServer.P015,        "4|http://0.0.0.0:13138/" + "SlotServerV15/SlotService.svc/" },
            { GameServer.P017,        "5|http://0.0.0.0:13158/" + "SlotServerV17/SlotService.svc/" },
            { GameServer.P018,        "1|http://0.0.0.0:13168/" + "SlotServerV18/SlotService.svc/" },
            { GameServer.P019,        "6|http://0.0.0.0:13178/" + "SlotServerV19/SlotService.svc/" },
            { GameServer.P020,        "2|http://0.0.0.0:13188/" + "SlotServerV20/SlotService.svc/" },
            { GameServer.P021,        "7|http://0.0.0.0:13198/" + "SlotServerV21/SlotService.svc/" },
            { GameServer.P022,        "8|http://0.0.0.0:13208/" + "SlotServerV22/SlotService.svc/" },
            { GameServer.P023,        "34|http://0.0.0.0:13218/" + "SlotServerV23/SlotService.svc/" },
            { GameServer.P024,        "1|http://0.0.0.0:13228/" + "SlotServerV24/SlotService.svc/" },
            { GameServer.P025,        "2|http://0.0.0.0:13238/" + "SlotServerV25/SlotService.svc/" },
            { GameServer.P026,        "1|http://0.0.0.0:13248/" + "SlotServerV26/SlotService.svc/" },
            { GameServer.P027,        "3|http://0.0.0.0:13258/" + "SlotServerV27/SlotService.svc/" },
            { GameServer.P028,        "4|http://0.0.0.0:13268/" + "SlotServerV28/SlotService.svc/" },
            { GameServer.P029,        "3|http://0.0.0.0:13278/" + "SlotServerV29/SlotService.svc/" },
            { GameServer.P030,        "35|http://0.0.0.0:13288/" + "SlotServerV30/SlotService.svc/" },
            { GameServer.P031,        "5|http://0.0.0.0:13298/" + "SlotServerV31/SlotService.svc/" },
            { GameServer.P032,        "5|http://0.0.0.0:13308/" + "SlotServerV32/SlotService.svc/" },
            { GameServer.P033,        "36|http://0.0.0.0:13318/" + "SlotServerV33/SlotService.svc/" },
            { GameServer.P034,        "7|http://0.0.0.0:13328/" + "SlotServerV34/SlotService.svc/" },
            { GameServer.P035,        "37|http://0.0.0.0:13338/" + "SlotServerV35/SlotService.svc/" },
            { GameServer.P036,        "8|http://0.0.0.0:13348/" + "SlotServerV36/SlotService.svc/" },
            { GameServer.P037,        "9|http://0.0.0.0:13358/" + "SlotServerV37/SlotService.svc/" },
            { GameServer.P038,        "1|http://0.0.0.0:13368/" + "SlotServerV38/SlotService.svc/" },
            { GameServer.P039,        "1|http://0.0.0.0:13378/" + "SlotServerV39/SlotService.svc/" },
            { GameServer.P040,        "1|http://0.0.0.0:13388/" + "SlotServerV40/SlotService.svc/" },
            { GameServer.P041,        "1|http://0.0.0.0:13398/" + "SlotServerV41/SlotService.svc/" },
            { GameServer.P042,        "1|http://0.0.0.0:13408/" + "SlotServerV42/SlotService.svc/" },
            { GameServer.P043,        "1|http://0.0.0.0:13418/" + "SlotServerV43/SlotService.svc/" },
            { GameServer.P044,        "1|http://0.0.0.0:13428/" + "SlotServerV44/SlotService.svc/" },
            { GameServer.P045,        "1|http://0.0.0.0:13438/" + "SlotServerV45/SlotService.svc/" },
            { GameServer.P046,        "1|http://0.0.0.0:13448/" + "SlotServerV46/SlotService.svc/" },
			{ GameServer.P047,        "1|http://0.0.0.0:13458/" + "SlotServerV47/SlotService.svc/" },
			{ GameServer.P048,        "1|http://0.0.0.0:13468/" + "SlotServerV48/SlotService.svc/" },
			{ GameServer.P049,        "1|http://0.0.0.0:13478/" + "SlotServerV49/SlotService.svc/" },
			{ GameServer.P050,        "1|http://0.0.0.0:13488/" + "SlotServerV50/SlotService.svc/" },
			{ GameServer.P051,        "1|http://0.0.0.0:13498/" + "SlotServerV51/SlotService.svc/" },
			{ GameServer.P052,        "1|http://0.0.0.0:13508/" + "SlotServerV52/SlotService.svc/" },
			{ GameServer.P053,        "1|http://0.0.0.0:13518/" + "SlotServerV53/SlotService.svc/" }
        };

        /// <summary> ========== SIMULATOR SERVER ===(doesn't care the OpId)======= </summary>
        public const string LOCAL_HOST = "http://localhost:16888";
        public const string SIMULATOR_HOST = "http://0.0.0.0:16888";
        //"http://example.invalid:16888";
        public Dictionary<GameServer, string> simulatorUrl = new Dictionary<GameServer, string>() {
            { GameServer.Godzilla,    "0|" + SIMULATOR_HOST + "/p006/"   },
            { GameServer.Huat,        "0|" + SIMULATOR_HOST + "/p007/"   },
            { GameServer.Intrepid,    "0|" + SIMULATOR_HOST + "/p008/"   },
            { GameServer.Jaunty,      "0|" + SIMULATOR_HOST + "/p009/"   },
            { GameServer.Kiwi,        "0|" + SIMULATOR_HOST + "/p010/"   },
            { GameServer.Lemon,       "0|" + SIMULATOR_HOST + "/p011/"   },
            { GameServer.Macho,       "0|" + SIMULATOR_HOST + "/p012/"   },
            { GameServer.Nami,        "0|" + SIMULATOR_HOST + "/p013/"   },
            { GameServer.Ocean,       "0|" + SIMULATOR_HOST + "/p014/"   },
            { GameServer.P015,        "0|" + SIMULATOR_HOST + "/p015/"   },
            { GameServer.P016,        "0|" + SIMULATOR_HOST + "/p016/"   },
            { GameServer.P017,        "0|" + SIMULATOR_HOST + "/p017/"   },
            { GameServer.P018,        "0|" + SIMULATOR_HOST + "/p018/"   },
            { GameServer.P019,        "0|" + SIMULATOR_HOST + "/p019/"   },
            { GameServer.P020,        "0|" + SIMULATOR_HOST + "/p020/"   },
            { GameServer.P021,        "0|" + SIMULATOR_HOST + "/p021/"   },
            { GameServer.P022,        "0|" + SIMULATOR_HOST + "/p022/"   },
            { GameServer.P023,        "0|" + SIMULATOR_HOST + "/p023/"   },
            { GameServer.P024,        "0|" + SIMULATOR_HOST + "/p024/"   },
            { GameServer.P025,        "0|" + SIMULATOR_HOST + "/p025/"   },
            { GameServer.P026,        "0|" + SIMULATOR_HOST + "/p026/"   },
            { GameServer.P027,        "0|" + SIMULATOR_HOST + "/p027/"   },
            { GameServer.P028,        "0|" + SIMULATOR_HOST + "/p028/"   },
            { GameServer.P029,        "0|" + SIMULATOR_HOST + "/p029/"   },
            { GameServer.P030,        "0|" + SIMULATOR_HOST + "/p030/"   },
            { GameServer.P031,        "0|" + SIMULATOR_HOST + "/p031/"   },
            { GameServer.P035,        "0|" + SIMULATOR_HOST + "/p035/"   },
            { GameServer.P038,        "0|" + SIMULATOR_HOST + "/p038/"   },
            { GameServer.P040,        "0|" + SIMULATOR_HOST + "/p040/"   },
        };

        public GameServer GetGameServer(string pvString)
        {
            var keys = protocolVersion.Keys;
            foreach (var key in keys)
            {
                if (protocolVersion[key] == pvString)
                    return key;
            }

            Debug.LogError("Couldn't Find the matching game server for protocolVersion:" + pvString);
            return GameServer.Banana; //empty one.
        }
    }

}
//end of VMSoft.Games.Utility

