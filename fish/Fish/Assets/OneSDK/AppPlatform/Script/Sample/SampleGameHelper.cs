using UnityEngine;

namespace OneSDK.StarterPack
{
    /// <summary>
    /// Sample game helper.
    /// Strip down version of the DataManagerGameHelper
    /// </summary>
    public class SampleGameHelper : AGameHelper
    {
        //private string testTicket = "";
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
    }
}
