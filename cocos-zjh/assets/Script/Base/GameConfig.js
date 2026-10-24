var GameConfig = {
    
    getLanguage : function()
    {
        return cc.sys.language;
    },

    getOS : function()
    {
        return cc.sys.os;
    },

    getBrowserType : function()
    {
        return cc.sys.browserType;
    },

    getPlatform : function()
    {
        return cc.sys.platform;
    },

    isBrowser : function()
    {
        return cc.sys.isBrowser;
    },

    isMobile : function()
    {
        return cc.sys.isMobile;
    },

    getGameSiteID : function()
    {
        return 70;
    },

    getGamePlatformID : function() 
    {
        return 100;
    },

    getHallVersion : function()
    {
        return "1.0.0";
    },

    getHDType: function()
    {
        return 1;
    },
    
    setItem : function(key, value)
    {
        cc.sys.localStorage.setItem(key, value);
    },

    getItem : function(key)
    {
        var value = cc.sys.localStorage.getItem(key);
        return value;
    },    

    createUUID: function()
    {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    getHDCode : function()
    {
        var HDCode = this.getItem('HDCode');
        if (HDCode == null)
        {
            HDCode = this.createUUID()
            this.setItem('HDCode', HDCode);
        }
        return HDCode;
    },

    getCer : function()
    {
        var Cer = this.getItem('Cer');
        return Cer;
    },
    saveCer : function(Cer)
    {
        this.setItem('Cer', Cer);
    },

    getConnectIP : function()
    {
        var ConnectIP = this.getItem('ConnectIP');    
        return ConnectIP;
    },
    saveConnectIP : function(ConnectIP)
    {
        this.setItem('ConnectIP', ConnectIP);
    },

    getUserID : function()
    {
        var userID = this.getItem('UserID');
        return userID;
    },
    saveUserID : function(UserID)
    {
        this.setItem('UserID', UserID);
    },    

    getLang : function()
    {
        var Lang = this.getItem('Lang');
        if (Lang == null)
        {
            Lang = 1
            this.saveLang(Lang)
        }
        return Lang;
    },
    saveLang : function(Lang)
    {
        this.setItem('Lang', Lang);
    },

    getReferrer : function()
    {
        var Referrer = this.getItem('Referrer');
        if (Referrer == null)
        {
            Referrer = "0"
            this.saveLang("0")
        }
        return Referrer;
    },
    saveReferrer : function(Referrer)
    {
        this.setItem('Referrer', Referrer);
    },    
};

module.exports = GameConfig;