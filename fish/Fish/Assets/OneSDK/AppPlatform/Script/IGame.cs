using System;
namespace OneSDK.StarterPack
{
    public interface IGame
    {
       /// <summary>
		/// Returning status code for the Ticket Request. 200-ok
       /// </summary>
       /// <param name="code">Code.</param>
       /// <param name="ticket">Ticket.</param>
		/// <param name="musicVolume">Music volume music &amp; sfx volume based on the value of 0-1.0.</param>
       /// <param name="sfxVolume">Sfx volume.</param>
	   /// <param name="languageCode">Language code. 0- EN, 1- CN </param>
       /// <param name="environment">Environment 0 - DEV, 1 - UAT, 2 - PROD </param>
		void OnInitialize(int code, string ticket, float musicVolume, float sfxVolume, int languageCode, int environment);

        /// <summary>
        /// Returning the status code for the Ticket request. 200-ok
        /// the callback method if request a new ticket from IGameHelper.
        /// </summary>
        /// <param name="code">Code.</param>
        /// <param name="ticket">Ticket.</param>
		void OnNewTicketArrived(int code, string ticket);

		/// <summary>
		/// when call to return to Lobby, this will be invoked, make sure to clean up your objects, free up coroutines/tween
		/// </summary>
		void OnCleanup();

        /// <summary>
        /// When there is an error making the connection, this method will be invoked
        /// </summary>
        /// <param name="code">Code.</param>
        /// <param name="message">Message.</param>
        void OnError(int code, string message);


		#region Component

		/// <summary>
		/// "Loading" - Notify the Game is some processing time required, for this action
		/// the isRunning flag determine if this process is completed.
		/// 
		/// message - information about this request, if available.
		/// 
		/// estimateTime is the wait time that was return it can be -1 indeterminate, or 
		/// with a value to indicate how long it may take.
		/// 
		/// when start:
        /// 	isRunning: true, message: Running Request,  estimateWait: 1.0f
		/// 
		/// </summary>
        /// <param name="isRunning">If set to <c>true</c> is done.</param>
		/// <param name="message">Message.</param>
		/// <param name="estimateWait">Estimate wait.</param>
		//void OnProcessing(bool isRunning, string message = "", float estimateWait = -1);

		#endregion
    }
}
