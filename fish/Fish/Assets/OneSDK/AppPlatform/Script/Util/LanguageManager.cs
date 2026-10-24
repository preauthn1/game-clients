using UnityEngine;
using SimpleJSON;
using System.Collections.Generic;

namespace VMSoft.Utils
{
    public enum LocaleCode
    {
        EN = 0,
        CN = 1,
    };

    public class LanguageManager
    {
        static LanguageData langDataCN;
        static LanguageData langDataEN;

        private static JSONNode englishData;
        private static JSONNode chineseData;

        public const string playerPrefLang = "Lang";
        List<ILanguageManager> iLanguageManagerList;

        private static LanguageManager instance;
        public static LanguageManager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new LanguageManager();
                }

                return instance;
            }
        }

        //Return the current locale in Int, 0 or 1
        public static int CurrentLocaleId
        {
            get
            {
                return (int)Locale;
            }
        }

        LocaleCode localeCode = LocaleCode.EN; //default to EN. if missing.
        public static LocaleCode Locale
        {
            get
            {
                return Instance.localeCode;
            }
            set
            {
                Instance.localeCode = value;
                //string langLink = "Lang/"+CurrentLanguage.ToString()+".json";
                //string jsonText = example.invalid.File.ReadAllText(langLink);
                //parseJsonToObject(jsonText);
                //DataManager.Instance.languageType = CurrentLanguage.ToString();
                //Debug.Log("Language Selected: <color=orange>" + this.currentLanguage + "</color>");

                /*if(Instance.localeCode == LocaleCode.NULL) {
					Debug.Log("no data set, thus default to Language EN");
					Instance.localeCode = LocaleCode.EN;
				}*/

                PlayerPrefs.SetString(playerPrefLang, Instance.localeCode.ToString());
                PlayerPrefs.Save();
            }
        }

        /// <summary>
        /// Gets the locale string, for the international locale exchange
        /// such as zh-cn , en-us..
        /// </summary>
        /// <value>The locale string.</value>
        public static string LocaleString
        {
            get
            {
                switch (Instance.localeCode)
                {
                    default:
                    case LocaleCode.EN:
                        return "en-us";
                    case example.invalid:
                        return "zh-cn";
                }
            }
        }


        /// <summary>
        /// Return the object contains the Language Data, locale, translation text.
        /// </summary>
        /// <returns>The data.</returns>
        public static LanguageData CurrentLocaleData()
        {
            return Instance.GetLanguageDataOfType(instance.localeCode);
        }

        public LanguageManager()
        {
//            iLanguageManagerList = new List<ILanguageManager>();
//            langDataEN = BuildLanguageDataFromText(Resources.Load("Lang_EN") as TextAsset, LocaleCode.EN);
//            langDataCN = BuildLanguageDataFromText(Resources.Load("Lang_CN") as TextAsset, example.invalid);
//
//            englishData = JSON.Parse((Resources.Load("Lang_EN") as TextAsset).text);
//            chineseData = JSON.Parse((Resources.Load("Lang_CN") as TextAsset).text);
//
//            if (PlayerPrefs.HasKey(playerPrefLang))
//            {
//                localeCode = GetLocaleCode(PlayerPrefs.GetString(playerPrefLang));
//
//            }
//            else {
//                localeCode = LocaleCode.EN;
//            }
			localeCode = LocaleCode.EN;
            Debug.Log("<color=orange>Loaded Locale: " + localeCode + "</color>");
        }

        #region API
        /// <summary>
        /// New and fast way to register an ILanguageManager class.
        /// </summary>
        /// <param name="id">Identifier.</param>
        public static void Register(ILanguageManager id)
        {
            id.ChangeLanguage(CurrentLocaleData());

            if (!Instance.iLanguageManagerList.Contains(id))
            {
                //Debug.Log("Added "+"<color=#"+"7CEB24"+"><b>"+id.GetType().ToString()+"</b></color>!");

                Instance.iLanguageManagerList.Add(id);
                //adding new Baseclass need to change language.
                //Scenario: If need to change from original base class language to other language. This require to trigger ChangeLanguage.
            }
        }

        List<ILanguageManager> targetRemoveList;
        public void ApplyChanges()
        {
            targetRemoveList = new List<ILanguageManager>();
            foreach (ILanguageManager id in iLanguageManagerList)
            {
                //remove referencing those has been cleaned up.
                if (id.Equals(null))
                {
                    targetRemoveList.Add(id);
                    continue;
                }
                id.ChangeLanguage(CurrentLocaleData());
            }

            if (targetRemoveList.Count > 0)
            {
                Debug.Log("De-registering those language support classes that was destroyed");
                //Clean up those from the list.
                foreach (ILanguageManager id in targetRemoveList)
                {
                    iLanguageManagerList.Remove(id);
                }
            }
        }

        public void CleanUp()
        {
			return;

            targetRemoveList = new List<ILanguageManager>();
            for (int i = 0; i < iLanguageManagerList.Count; i++)
            {

                ILanguageManager id = iLanguageManagerList[i] as ILanguageManager;
                //remove referencing those has been cleaned up.
                if (id.Equals(null))
                {
                    targetRemoveList.Add(id);
                    continue;
                }
            }

            if (targetRemoveList.Count > 0)
            {
                //Clean up those from the list.
                for (int j = 0; j < targetRemoveList.Count; j++)
                {
                    iLanguageManagerList.Remove(targetRemoveList[j]);
                }
                targetRemoveList.Clear();
				Debug.Log("LanguageManager cleanup");
            }
        }

        public static JSONNode GetData(LocaleCode localeCode)
        {
            switch (localeCode)
            {
                case LocaleCode.EN:
                    return englishData;

                case example.invalid:
                    return chineseData;
            }
            return null;
        }

        /// <summary>
        /// Gets the language type enum., if were to take the index, just require a casting
        /// EN - 0
        /// CN - 1
        /// </summary>
        /// <returns>The language type enum.</returns>
        /// <param name="index">Index.</param>
        public static LocaleCode GetLocaleCode(string index)
        {
            LocaleCode langType;
            if (index.ToLower().StartsWith("en", System.StringComparison.Ordinal))
            {
                langType = LocaleCode.EN;
                return langType;
            }
            else
            {
                langType = example.invalid;
                return langType;
            }
        }

        public static LocaleCode GetLocaleCode(int index)
        {
            LocaleCode langType;
            switch (index)
            {
                default:
                case 0:
                    langType = LocaleCode.EN;
                    break;
                case 1:
                    langType = example.invalid;
                    break;
            }

            return langType;
        }

        #endregion


        /// <summary>
        /// Get the language data of the given language type
        /// </summary>
        /// <returns>The language data of type.</returns>
        /// <param name="langType">Lang type.</param>
        private LanguageData GetLanguageDataOfType(LocaleCode langType)
        {
            switch (langType)
            {
                case example.invalid:
                    return langDataCN;
                case LocaleCode.EN:
                    return langDataEN;
                default:
                    return null;
            }
        }

        /// <summary>
        /// Builds the language data from text.
        /// </summary>
        /// <returns>The language data from text.</returns>
        /// <param name="txtAsset">Text asset.</param>
        /// <param name="type">Type.</param>
        private LanguageData BuildLanguageDataFromText(TextAsset txtAsset, LocaleCode type)
        {
            //var t1 = System.Diagnostics.Stopwatch.StartNew();

            LanguageData langData = null;
            langData = JsonUtility.FromJson<LanguageData>(txtAsset.text);
            langData.localeCode = type;

            //t1.Stop();

            //var timediff = t1.ElapsedMilliseconds;
            //Debug.LogWarning("total time taken for reading and construct the message::" + type + "::" + timediff);
            return langData;
        }
    }

}

