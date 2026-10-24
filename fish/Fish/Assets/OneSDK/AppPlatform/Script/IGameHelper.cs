using System;

namespace OneSDK.StarterPack
{
	public interface IGameHelper
	{
        /// <summary>
        /// The Entry Point for us to continue
        /// </summary>
        /// <param name="gameId">Game identifier.</param>
        /// <param name="game">Game.</param>
        void Init(string gameId, IGame game);

		#region Lobby
		/// <summary>
		/// Requests the game ticket.
		/// </summary>
		void RequestGameTicket(); 

		/// <summary>
		/// Get the environment code for the game.
		/// E.g the current build environment.
		/// current known value:
		/// DEV - 0 |  UAT - 1 | PROD - 2
		/// </summary>
		/// <returns>The code.</returns>
		int EnvironmentCode();

        /// <summary>
        /// Backs to lobby.
        /// This call the IGame:OnCleanup
        /// </summary>
        void BackToLobby();

        /// <summary>
        /// Return the GameId that was provided by Lobby. 
        /// Do verify if this GameID is the intended GameID from requirement gathering phase.
        /// </summary>
        /// <returns>The game identifier from lobby.</returns>
        string GetGameIdFromLobby();

        #endregion

      
        //Player Pref API to get the value 
        /// <summary>
        /// For the Music / SFX Volume, the value is 0-1
        /// </summary>
        /// <returns>The music volume.</returns>
        #region Properties
        float GetMusicVolume();
        float GetSfxVolume();
        void SetMusicVolume(float musicValue);
        void SetSfxVolume(float sfxValue);
        bool IsFullScreen();
		#endregion


		#region Locale
        /// <summary>
        /// Changes the language.
        /// 0 - EN, English
        /// 1 - CH, Chinese
        /// </summary>
        /// <param name="languageCode">Language code.</param>
        void ChangeLanguage(int languageCode);

        /// <summary>
        /// Gets the language code.
        /// 0 - EN
        /// 1 - CH
        /// </summary>
        /// <returns>The language code.</returns>
        int GetLanguageCode(); 

        #endregion

        #region Game-Related Inquiry
        string GetGameServiceUrl();
        #endregion

		#region Other

		/// <summary>
		/// Reports the error to the SDK / GameHelper.
		/// it will determine the action to be taken. 
		/// Load the default error page, or sign out the player, return to the main screen
		/// </summary>
		/// <param name="code"> Error Code from the Server</param>
		/// <param name="message">Message on this error</param>
		/// <param name="gameId">the GameId that was reporting this error </param>
		void ReportError(int code, string message, string gameId);

        /// <summary>
        /// Reloads the current scene.
        /// </summary>
        void ReloadScene();
		#endregion
    }
}

