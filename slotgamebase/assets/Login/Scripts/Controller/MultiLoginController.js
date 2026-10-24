

var constants = require('DJSlotConstants');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        mainView: cc.Node,
        isSimulation: true,
    },


    onLoad: function () {
        this.mainView = this.mainView.getComponent('LoginMainView');
        if(this.isSimulation == true)
        {
            this.mainView.onCheckVersionComplete("1.0.1");
        }
        else
        {
            this.verify();
        }
    },

    verify: function () {
        var xhr = cc.loader.getXMLHttpRequest();
        var rawData = "Test";
        xhr.open("POST", constants.URL.VERIFYGLOBALURL);
        xhr.setRequestHeader("Content-Type", "Application/json");
        xhr.send(rawData);
        utils.log(rawData);
        xhr.target = this;

        xhr.onreadystatechange = function () {
            utils.log(xhr.readyState + "   " + xhr.status);
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText;

                xhr.target.onCheckVersionComplete(response);
            }
            else {
                if (xhr.status < 200 && xhr.status > 207) {
                    this.mainView.showPopUpError(constants.constants.ERR_GENERIC_TITLE, constants.constants.ERR_CONNECTION_UNSTABLE, true);
                    //xhr.target.getComponent("LoginMainView").showError(5);
                }
            }
        }
    },

    onCheckVersionComplete: function (response) {
        var jsonResult = JSON.parse(response);
        utils.log("onCheckVersionComplete::" + jsonResult);
        if (jsonResult[0] == 0) {
            var newVersion = jsonResult[1];
            
            //test
            //constants.URL.LOGIN_URL =  "http://0.0.0.0:9090/func/jsx/multi_mobile_authentication?";
            constants.URL.LOGIN_URL =  jsonResult[2];
            //test
            this.mainView.onCheckVersionComplete(newVersion);
            //constants.URL.LOGIN_URL =  jsonResult[2];
            //utils.log("LOGIN_URL::" +  constants.URL.LOGIN_URL);

            
                    /*
            if (jsonResult[3] != null)
                {
                    var linkArr = JSON.parse(jsonResult[3]);
                    utils.log("linkArr::" +  linkArr);
                    for (var i = 0; i < linkArr.Count; i++)
                    {
						var tempLink = linkArr[i];
		 				tempLink = tempLink.replaceAll("\"","");
                        path[i] = tempLink;
                    }
                }
                
                    */
        }
        else if (jsonResult[0] == 1)
            {
                utils.log("maintain::" +  dataArr[1] + "::" + dataArr[2]);
                this.mainView.showMaintainView(dataArr[1], dataArr[2]);
            }
            this.mainView.showMaintainView("0000", "0200");
        /*
        if (jsonResult[0] == 0)
        {
            var newVersion = jsonResult[1];
            var path = ["","","",""];
            this.versionTxt.string = "version " +  jsonResult[1];
            Global.loginUrl = jsonResult[2];
        
            if (jsonResult[3] != null)
            {
                var linkArr = JSON.parse(jsonResult[3]);
                for (var i = 0; i < linkArr.Count; i++)
                {
                    var tempLink = linkArr[i];
                     tempLink = tempLink.replaceAll("\"","");
                    path[i] = tempLink;
                }
            }
        
            if (this.defaultVersion != newVersion)
            {
                this.updateView.getComponent("LoginUpdateView").show(path);
            }
        }
        else if (dataArr[0] == 1)
        {
            this.maintainView.getComponent("LoginMaintainView").show(dataArr[1], dataArr[2]);
        }
        */
    },

    onLogin2:function(username,password,nickname)
    { 	
        // constants.URL.login = "extp001";
        // constants.URL.password = [REDACTED]";
        // constants.URL.nickName = "";
        constants.URL.login = "ind1";
        constants.URL.password = [REDACTED]";
        constants.URL.nickName = "-1";
        this.mainView.goLobby();
	},

    onLogin:function(username,password,nickname)
    {  
        utils.log("onLogin");
       //var url = Global.loginUrl;
       var url = constants.URL.LOGIN_URL;
       constants.PLAYERPREFSKEYS.USERNAME = username;
       constants.PLAYERPREFSKEYS.PASSWORD = [REDACTED];
       url = url +
       "username=" + username+ constants.URL.suffix
       + "&password=" + password;
       /*
       url = url +
             "username=" + username+ Global.suffix
             + "&password=" + password;
	   */
       var xhr = cc.loader.getXMLHttpRequest();
       var rawData = "";
	   
       if (nickname != null)
       {
           rawData = nickname;
           url = url + "&nickname=1";
       }
	   
       xhr.open("POST", url); 
       xhr.setRequestHeader( "Content-Type", "Application/json");
       xhr.send(rawData);
	   
       xhr.target = this.mainView;
	   
       xhr.onreadystatechange = function ()
       {
           if ( xhr.readyState == 4 && ( xhr.status >= 200 && xhr.status <= 207 ) )
           {
               var httpStatus = xhr.statusText;
               var response = xhr.responseText;
               utils.log("gameController::onLogin::" + response);
		 		if (response == "\"-1\"")
               {
		 	   	   	xhr.target.getComponent("LoginMainView").invalidLogin();
               }
		 		else if (response == "\"-2\"")
               {
                       xhr.target.getComponent("LoginMainView").onRequestNickname();
               }
               else if (response == "\"-3\"")
               {
                       xhr.target.getComponent("LoginMainView").invalidNickname();
               }
               else if (response == "\"-4\"")
               {
		 	   	   	xhr.target.getComponent("LoginMainView").showPopUpError("", constants.constants.ERR_ACCOUNT_SUSPENDED, false);
               }
               else if (response == "\"-5\"")
               {
		    			xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has no permission to login. Please contact your operator", false);
               }
               else if (response == "\"-6\"")
               {
		    			xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
               }
               else
               {
                   var jsonResult = JSON.parse(response);
	   
                   var responseString = jsonResult[0];
                   if (responseString == "\"-1\"")
                   {
  		 	   	   		xhr.target.getComponent("LoginMainView").invalidLogin();
                   }
                   else if (responseString == "\"-2\"")
                   {
                       xhr.target.getComponent("LoginMainView").onRequestNickname();
                   }
                   else if (responseString == "\"-3\"")
                   {
		    			xhr.target.getComponent("LoginMainView").showPopUpError("", "Display name unavailable, please choose another name.", false);
                   }
                   else if (responseString == "\"-4\"")
                   {
       	   	   			xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has been suspended. Please contact your operator", false);
                   }
                   else if (responseString == "\"-5\"")
                   {
		    			xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has no permission to login. Please contact your operator", false);
                   }
                   else if (responseString == "\"-6\"")
                   {
    	    	   		xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
                   }
                   else
                   {
                        constants.URL.LOBBY_TOKEN = [REDACTED];
		 				xhr.target.getComponent("LoginMainView").goLobby();
                   }
		 		}
           }
		   else
		   {
				if( xhr.status < 200 && xhr.status > 207 )
				{
					xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
				}
		   }
       }	
	},
});
