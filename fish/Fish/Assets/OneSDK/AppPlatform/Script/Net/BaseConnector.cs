#pragma warning disable 414

using UnityEngine;
using UnityEngine.Networking;
using System;
using System.Collections;
using System.Text;
using System.Security.Cryptography;
using System.Collections.Generic;

namespace example.invalid
{
    /// <summary>
    /// BaseConnector, to form the other connector
    /// </summary>
    public abstract class BaseConnector
    {
        //Field Variables
        protected string connectorId; //FullName includes namespace + classname to identify the connector
        protected string headerType;
        protected IRequester requester;

        string responseInJsonNode;
        string parametersObject;
        RequestMethod type; //the connection type;
        ConnectionType connectionType;

        public delegate void ConnectionManagerOnComplete();
        ConnectionManagerOnComplete onComplete;
        System.Diagnostics.Stopwatch sWatch = new System.Diagnostics.Stopwatch();

        protected static string lobbyServiceHost;
        protected static string mobileServiceHost;
        protected static string gameServiceHost;
        static bool showConnectionLog = true;


        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="T:example.invalid.BaseConnector"/> allow
        /// connection log.
        /// </summary>
        /// <value><c>true</c> if allow connection log; otherwise, <c>false</c>.</value>
        public static bool AllowConnectionLog{
            set{
                showConnectionLog = value;
            }
        }

		//originally default is true. it can be turned off via coding.
		bool _isLogEnabled = true; //for this instance only (for the global connector)
		/// <summary>
		/// Determines whether this instance is log enabled. 
		/// </summary>
		/// <returns><c>true</c> if this instance is log enabled; otherwise, <c>false</c>.</returns>
		public bool IsLogEnabled{
			get{
#if UNITY_EDITOR
				return true && _isLogEnabled; //always true for UNITY_EDITOR.
#else
				return showConnectionLog && _isLogEnabled;
#endif
			}
			set{
				_isLogEnabled = value;
			}
		}

        public string lobbyServiceUrl{
            get{
                return lobbyServiceHost;
            }
            set{
                lobbyServiceHost = value ;      
            }
        }

        public string mobileServiceUrl{
            get{
                return mobileServiceHost;
            }
            set{
                mobileServiceHost = value ;      
            }
        }

        /// <summary>
        /// Gets or sets the game service URL.
        /// </summary>
        /// <value>The game service URL.</value>
        public static string GameServiceUrl{
            set{
                gameServiceHost= value;
            }
        }

        const float CONNECTION_TIMEOUT = 30f;

        #region Test
        public bool testingMode = false;
        public float testWithSillyWaitTime = 0;
        public bool testWithNegativeResult = false; //defaul is false
        #endregion


        #region Error
        enum Error
        {
            NetworkTimeout = 1,
            NoInternet = 2,
            ServerNotResponding = 3,
        }
        #endregion

        #region Public API
        protected BaseConnector(IRequester requester = null)
        {
            connectorId = GetType().FullName;
            connectionType = ConnectionType.JSON;
            type = RequestMethod.POST;
            if (requester != null)
                this.requester = requester;
        }

        public BaseConnector SetConnectionType(ConnectionType connectionType)
        {
            this.connectionType = connectionType;
            return this;
        }

        public static void SetLobbyServiceHost(string url){
            lobbyServiceHost = url;
        }

        protected virtual void ConnectIntercept()
        {
            //for writing custom code.. /logging event, if needed.
        }


        /** for connecting to the server */
        #region Connect
        public IEnumerator Connect()
        {
            type = GetRequestMethod(); //get the request method from the derived class
            string url = GetUrl();
            url = AppendHttpProtocol(url);

            //Dictionary<string, string> headers = new Dictionary<string, string>();
            parametersObject = InitParameters();

            //Color: office green
            string requestMessage = string.Format(
				"<color=#007AA5><b>[{0}][{1}]</b>[Request] {2}</color>\n{3}",
                GetType().Name,
				type.ToString(),
				url,
				parametersObject
            );

			if(IsLogEnabled)
            	Debug.Log(requestMessage);

            ConnectIntercept(); // by default does nothing
                                //HTTPRequest www; //bestHttpPro

            UnityEngine.Networking.UnityWebRequest www;

            int attempt = 0;
            int max_attempt = 5;
            float retryDelay = 3f;

            while (Application.internetReachability == NetworkReachability.NotReachable && attempt < max_attempt)
            {
                attempt++;
                string message = string.Format("Network not reachable, attempted {0}/{1}, retry in {2}", attempt, max_attempt, retryDelay);
                Debug.LogWarning(message);
                yield return new WaitForSecondsRealtime(retryDelay);
            }

            //Return a failure message
            if (Application.internetReachability == NetworkReachability.NotReachable && attempt >= max_attempt)
            {
                OnFailed(-1, Error.NoInternet.ToString(), connectorId);
                yield return null; //end of this request.
            }
            else
            {
                //Run the Connection as usual

                string contentTypeValue = "";
                if (type == RequestMethod.GET)
                {
                    //www = new WWW (url);

                    //www = new HTTPRequest(new Uri(url), OnRequestFinished); //this is for BestHttpPro
                    www = UnityEngine.Networking.UnityWebRequest.Get(url);
                    www.downloadHandler = new UnityEngine.Networking.DownloadHandlerBuffer();
                    //www.DisableCache = true; /this is besthttp method..

                    sWatch.Reset();
                    sWatch.Start(); //start a new sWatch timer to capture

                    StartTimeOutCheck(www);
                    if (testingMode)
                    {
                        yield return new WaitForSecondsRealtime(testWithSillyWaitTime);
                    }
                    yield return www.Send();
                    OnRequestFinishedForUnityWebRequest(www);
                }
                else if (type == RequestMethod.POST)
                {

                    //www = new WWW (url, postData, headers);
                    //www = new HTTPRequest(new Uri(url), HTTPMethods.Post, OnRequestFinished);
                    //www.DisableCache = true;

                    //List<IMultipartFormSection> formData = new List<IMultipartFormSection>();
                    //formData.Add(new MultipartFormFileSection(Encoding.UTF8.GetBytes(parametersObject)));

                    if (connectionType == ConnectionType.JSON)
                        contentTypeValue = "application/json; charset=UTF-8";
                    else
                        contentTypeValue = "text/plain";

                    //formData.Add(new MultipartFormFileSection("content-type", contentTypeValue));

                    www = new UnityEngine.Networking.UnityWebRequest(url);

                    UnityEngine.Networking.UploadHandlerRaw uH = new UnityEngine.Networking.UploadHandlerRaw(Encoding.UTF8.GetBytes(parametersObject));
                    www.method = UnityEngine.Networking.UnityWebRequest.kHttpVerbPOST;

                    //Using a Low -level API (LLAPI) from the Unity Documentation, to cater for our needs
                    www.downloadHandler = new UnityEngine.Networking.DownloadHandlerBuffer();
                    www.uploadHandler = uH;
                    www.SetRequestHeader("Content-Type", contentTypeValue);
                    sWatch.Reset();
                    sWatch.Start(); //start a new sWatch timer to capture

                    StartTimeOutCheck(www);
                    if (testingMode)
                    {
                        yield return new WaitForSecondsRealtime(testWithSillyWaitTime);
                    }
                    yield return www.Send();
                    OnRequestFinishedForUnityWebRequest(www);
                }
            }
        }
        #endregion

        LTDescr timeOutTween;

        //Response Code is forever -1 by default.
        void StartTimeOutCheck(UnityWebRequest unityRequestWWW)
        {
            timeOutTween = LeanTween.delayedCall(CONNECTION_TIMEOUT, () =>
            {
                Debug.Log("Reach connection timeout, checking to abort" +
                          " hasError: " + unityRequestWWW.isNetworkError +
                          " code: " + unityRequestWWW.responseCode);

                if (unityRequestWWW.isDone == false)
                {
                    unityRequestWWW.Abort();
                    Debug.Log("Connection aborted, connection failed as timeout");
                }

                Debug.Log("Networking Error: Connection Timeout..");
                OnFailed(-1, Error.NetworkTimeout.ToString(), connectorId);
            });
        }

        void OnRequestFinishedForUnityWebRequest(UnityWebRequest unityRequestWWW)
        {

            if (timeOutTween != null)
            {
                LeanTween.cancel(timeOutTween.id);
                //Debug.Log("ConnectionManager: Stopped the timeout checker");

            }


            //Debug.Log("Yield from Request, is request done:" + unityRequestWWW.isDone);
            sWatch.Stop();

            bool isError = unityRequestWWW.isNetworkError;
            long code = unityRequestWWW.responseCode;

            //Only to Perform negative testing.
            if (testingMode && testWithNegativeResult)
            {
                isError = true;
                code = -9999;
            }

            //if it has error
            if (isError || code != 200)
            {
                //Debug.Log("http responseCode:" + unityRequestWWW.responseCode);
                //Debug.Log("message:" + unityRequestWWW.downloadHandler.text);

                string errorMessage = unityRequestWWW.error;
                if (string.IsNullOrEmpty(errorMessage) && null != unityRequestWWW.downloadHandler.text)
                {
                    ////we attempt to parse the html to find out what's wrong..
                    //try
                    //{
                    //    var xmlDoc = new XmlDocument();
                    //    xmlDoc.LoadXml(unityRequestWWW.downloadHandler.text);

                    //    string output = XMLJsonUtility.XmlToJSON(xmlDoc);
                    //    JSONNode jsonString = JSONNode.Parse(output);
                    //    errorMessage = jsonString["html"]["head"]["title"]; //attempt to read the HTML title for any clue..
                    //}
                    //catch (Exception e)
                    //{
                    //    Debug.Log("Reason of failure: " + e.Message);
                    //    errorMessage = "server error unable to respond correctly to the client";
                    //    Debug.LogWarning("Actual Error:" + e.Message);
                    //}

                    errorMessage = "server error unable to respond correctly to the client";
                }

                int responseCode = ((unityRequestWWW != null) ? (int)code : -1);
                string errorResponse = string.Format(
					"<color=red><b>[{0}]</b>[{1}ms][Response]{2}</color>\n{3}",
                        GetType().Name,
                        sWatch.ElapsedMilliseconds,
                        responseCode,
                        errorMessage
                    );

                Debug.Log(errorResponse);
                string errorMsg = string.Empty;

                if (responseCode == -1)
                    errorMsg = Error.ServerNotResponding.ToString();
                else
                    errorMsg = "( " + responseCode + " ) " + errorMessage;

                Debug.Log("<color=orange>Error: </color>" + errorMsg);
                OnFailed(responseCode, errorMsg, connectorId);

            }
            else
            {
                // Show results as text
                //Debug.Log(unityRequestWWW.downloadHandler.text);
                // Or retrieve results as binary data
                //byte[] results = unityRequestWWW.downloadHandler.data;
                //Debug.Log(unityRequestWWW.downloadHandler.data.ToString());

                string responseResult = unityRequestWWW.downloadHandler.text;
                //medium spring bud - colour! 
                string message = string.Format(
					"<color=#008B8B><b>[{0}]</b>[{1}ms][Response]</color>\n{2}",
                    GetType().Name,
                    sWatch.ElapsedMilliseconds,
					responseResult
                );

				if(IsLogEnabled)
                	Debug.Log(message);
				
                OnSuccess(responseResult);
            }
        }

        #region BestHTTP methods
        //void OnRequestFinishedForBestHttpPro(HTTPRequest request, HTTPResponse response)
        //{
        //	if(response != null && !string.IsNullOrEmpty(response.DataAsText) && response.StatusCode == 200) {
        //		string responseResult = response.DataAsText;
        //		Debug.Log("<color=green>Response: ["+ GetType().Name + "] </color>" + responseResult);
        //		OnSuccess(responseResult);
        //	} else {


        //              int responseCode = ((response != null) ? response.StatusCode : -1);
        //		string errorResponse = string.Format(
        //			"<color=red>Response {0}: [ {1} ] </color>::{2}",
        //                      responseCode,
        //				GetType().Name,
        //				response
        //			);

        //		Debug.Log(errorResponse);
        //		string errorMsg = string.Empty;

        //              if (responseCode == -1)
        //                  errorMsg = LanguageManager.CurrentLocaleData().error1_ServerNoResponse;
        //              else if (request.Exception != null) {
        //			errorMsg = request.Exception.Message;
        //		} else
        //			errorMsg = "( " + responseCode + " ) " + response.Message;

        //		Debug.Log("<color=orange>Error: </color>" + errorMsg);
        //		requester.OnRequestFailed(responseCode, errorMsg, connectorId);
        //	}
        //}
        #endregion

        ////this is for Old WWW ways..
        //void OnRequestFinished(WWW wwwInput){

        //	if( www == null || www.Equals(null)) {
        //		Debug.Log("www has been disposed.. thus ended this");
        //		yield return null; //ends.. that's all
        //	} else if(!String.IsNullOrEmpty(wwwInput.error)) {
        //		Debug.Log("<color=orange>Error: </color>" + wwwInput.error);
        //		if(requester != null) {
        //			requester.OnRequestFailed(-1, "[ConnectionManager] " + wwwInput.error, connectorId);
        //		}
        //	} else {
        //		string responseResult = www.Response.DataAsText;
        //		Debug.Log("<color=green>Response: </color>" + responseResult);
        //		processSuccessfulResponse(responseResult);
        //	}
        //}


        #region OnSuccess | OnFailed
        /** Process the valid response from server */
        protected virtual void OnSuccess(string response)
        {
            if (requester != null && !requester.Equals(null))
            {
                requester.OnRequestSuccess(response, connectorId);
            }
            else
            {
                Debug.Log("<color=lime> requester may have become null.. after changing scene..</color>");
            }
        }

        /** Process the valid response from server */
        protected virtual void OnFailed(int errorCode, string errorMessage, string connectorId)
        {
            if (requester != null && !requester.Equals(null))
            {
                requester.OnRequestFailed(errorCode, errorMessage, connectorId);
            }
            else
            {
                Debug.Log("<color=lime> requester may have become null.. or not set</color>");
            }
        }
        #endregion


        ///** get the json node .. for easier data access */
        //public JSONNode GetJsonNodeFromXml(string response)
        //{
        //    if (response != null)
        //    {
        //        var xmlDoc = new XmlDocument();
        //        xmlDoc.LoadXml(response);
        //        //Debug.Log ("XML response is: " + xmlDoc.OuterXml);
        //        string json = XMLJsonUtility.XmlToJSON(xmlDoc);
        //        //Debug.Log ("json : " + json);
        //        JSONNode n = JSON.Parse(json);
        //        return n;

        //    }
        //    else {
        //        Debug.LogWarning("Connector may not have triggered the 'Connect' function to get data from the server ");
        //        return null;
        //    }
        //}


        /** Callback to  the class who implements the IRequester methods */
        public BaseConnector SetRequester(IRequester requester)
        {
            this.requester = requester;
            return this;
        }


        public enum RequestMethod
        {
            POST,
            GET
        };

        public enum ConnectionType
        {
            XML, JSON
        }


        #region Encryption/Hash
        /// <summary>
        /// MD5Sum Calculation Tools, mainly for sending data in connection layer
        /// </summary>
        /// <returns>The sum.</returns>
        /// <param name="strToEncrypt">String to encrypt.</param>
        protected string MD5Sum(string strToEncrypt)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(strToEncrypt);

            // Encrypt bytes
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            byte[] hashBytes = md5.ComputeHash(bytes);

            // Convert the encrypted bytes back to a string (base 16)
            string hashString = "";

            for (int i = 0; i < hashBytes.Length; i++)
                hashString += Convert.ToString(hashBytes[i], 16).PadLeft(2, '0');

            return hashString.PadLeft(32, '0');
        }
        #endregion

        #endregion

        #region Abstracts
        /** give the current serviceUrl that's in use, and to be further combine with the connector specified path */
        public abstract string GetUrl();
        public abstract RequestMethod GetRequestMethod();
        public abstract string InitParameters();
        #endregion


        #region Static Methods

        public static string AppendHttpProtocol(string url)
        {
            if (!url.StartsWith("http", StringComparison.Ordinal))
            {
                url = "http://" + url;
                Debug.Log("<color=lime>HTTP protocol appended</color>");
            }
            return url;
        }
        #endregion


        //static bool IsInternetAvailable()
        //{
        //	bool isNetworkOn = false;
        //	//Check internet connection mode
        //	if(Application.internetReachability == NetworkReachability.ReachableViaCarrierDataNetwork) {
        //		DataManager.Instance.inDataMode = true;
        //		isNetworkOn = true;
        //	} else if(Application.internetReachability == NetworkReachability.ReachableViaLocalAreaNetwork) {
        //		DataManager.Instance.inWifiMode = true;
        //		isNetworkOn = true;
        //	} else {
        //		ErrorMessageManager.Instance.ShowFixErrorMessage(LanguageManager.CurrentLocaleData().titleNoInternetAccess);
        //		isNetworkOn = false;

        //	}
        //	return isNetworkOn;
        //}

    }//End of ConnectionManager Class


    public static class ConnectionManagerExtension
    {
        public static string GetId(this BaseConnector targetClass)
        {
            return targetClass.GetType().FullName;
        }
    }


    public interface IRequester
    {
        /** when the connection successfully returns a response */
        void OnRequestSuccess(string response, string connectorId);

        /** when there is an error, and returns an unexpected response */
        void OnRequestFailed(int code, string message, string connectorId);

    }

}//connection manager
