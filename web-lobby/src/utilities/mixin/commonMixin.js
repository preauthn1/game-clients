import {
    getDeviceWidth,
    getDeviceHeight,
    instanceHeaders,
    getApiUrl
} from "./commonMethods";


const key_effect_sound = 'effectSoundSetting';
const key_bgm_sound = 'bgmSetting';
var bgm_default_volume = 0.6;

let commonMixin = {
   
    methods: {

        isDomainNotIDR() {
          // (註: isNotIDR 這個邏輯有好幾個地方。請注意一併調整)
          let isNotIDR = location.href.includes("kz344") || location.href.includes("localhost:8080") || location.href.includes("dqjt5498") || 
                         location.href.includes("w7e4r1t0") || location.href.includes("xcvb9630");
          return isNotIDR;
        },

        setBGMDefaultVolumeGlobalSetting(volume)
        {
           bgm_default_volume = volume;
        },

        getLanguageByQueryString() {
            const lang = this.$route.query.lang;

            if (!lang) {
                return '';
            }

            if (lang == null) {
                return '';
            }

            return lang;
        },


        setLanguageByQueryString() {
            const lang = this.getLanguageByQueryString();
            if (lang == null || lang == '') return;
            this.setLanguage(lang);
        },

        setLanguage(lang) {

          //----新增新的語系需要修改以下地方----
          // 下方的 if else
          // i18nPlugin.js
          // SetLanguage.vue
          // HeaderLang.vue
          // 新增國旗圖片

            if (lang !== 'zh-cn'  && 
                lang !== 'zh-tw' && 
                lang !== 'id-id' &&  //如果要開啟這些語系。請確保語系檔$t 有對應的文字
                lang !== 'ms-my' &&  
                lang !== 'th-th' && 
                lang !== 'vi-vn' && 
                lang !== 'en-us'
            ) {
                console.log('未定義的語系，若有新增語系請修改mixin的防呆code. (' + lang + ')');
                lang = 'en-us';
            }

            localStorage.setItem("LOCALE", lang);
            this.$store.commit("user/setLang", lang);
            this.$i18n.locale = lang;
        },

       
        getCurrentLanguage()
        {
            return localStorage.getItem("LOCALE");
        },

        getToken: [REDACTED] {
            return this.$store.getters["user/token"];
        },

        notEmptyNullText: function(text) {

            if (text === typeof(undefined))
                return false;

            if (text == null)
                return false;

            if (text == '')
                return false;

            if (text.length <= 0)
                return false;

            return true;
        },


        instanceRequestHeaders() {
            const token = [REDACTED]"user/token"];
            return instanceHeaders(token);
        },

        getDeviceWidth() {
            return getDeviceWidth();
        },

        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        numberWithCommasPlace2(x) {
          return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        toAmountDisplay(num) {
            var result = [],
              counter = 0;
            num = (num || 0).toString().split("");
            for (var i = num.length - 1; i >= 0; i--) {
              counter++;
              result.unshift(num[i]);
              if (!(counter % 3) && i != 0) {
                result.unshift(",");
              }
            }
            return result.join("");
        },


        stripTags(str) {
          return str.replace(/<[^>]+>/g, " ");
        },

        getDeviceHeight() {
            return getDeviceHeight();
        },

        isUnderIframe()
        {
            try {
                return window.self !== example.invalid;
            } catch (e) {
                return true;
            }
        },        

        isUnderSelfIframe() {
            try {
              let iframe = window.parent.document.getElementById("target-game-iframe");
              return this.isUnderIframe() && iframe.id == "target-game-iframe";
            } catch (e) {
              console.log("fail");
            }
            return false;
        },


        getClientTimezone() {
                        try {
              var myTimezone = (new Date().getTimezoneOffset() / 60) * -1;
              return myTimezone;
            } catch (e) {
              console.log(e);
            }
      
            return 0;
        },

      
        dateToYYYYMMDDHHMMss(date_IOS_8601) {
            var date = new Date(date_IOS_8601);
            try
            {
                return (
                    date.getFullYear() + "-" +
                    ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
                    ("0" + date.getDate()).slice(-2) + " " +
                    ("0" + date.getHours()).slice(-2) + ":" +
                    ("0" + date.getMinutes()).slice(-2) + ":" +
                    ("0" + date.getSeconds()).slice(-2)
                );
            }
            catch (e) 
            {
              console.log(e);
            }
            return '';           
        },      

        setGlobalErrorPopupShow(isShowPopup)
        {
            this.$store.commit("user/setisShowGlobalError", isShowPopup);

            const vm = this;

            //用很鳥的方式 弄出微動畫彈出效果
            setTimeout(() => {
              vm.addOrRemoveClassForAnimate(isShowPopup);
            }, 200);

        },


        addOrRemoveClassForAnimate(isShowPopup)
        {
          //用很鳥的方式 弄出微動畫彈出效果
          try{
            var elements = document.querySelectorAll('.error-modal-animate');

            elements.forEach(function(element) {   

              if(isShowPopup) {
                element.classList.add('my-animate-show');
              }
              else {
                element.classList.remove('my-animate-show');
              }
            });
          }
          catch(e) {
            console.log(e);
          }
        },

        setErrorExtraInfo(debugInfoText , errorDisplayType = 0)
        {          
          this.$store.commit("user/setErrorExtraInfo", 
          {
            errorDisplayType: errorDisplayType,
            extraDebugInfoText: debugInfoText,
          });
        },

        alertExceptionMessage(exception)
        {
          const vm = this;
          const myMsg = exception.message.toString();
          const isFailedFetchError = (myMsg.includes("Failed") && myMsg.includes("fetch")) || 
             (myMsg.includes("Load") && myMsg.includes("failed")) || 
             (myMsg.includes('NetworkError') && myMsg.includes("attempting"));             

          if(!isFailedFetchError) {
             vm.setErrorExtraInfo(myMsg , 1);
             vm.setGlobalErrorPopupShow(true);
             return;
          }

          const targetUrl = "https://example.invalid/ipgeo?apiKey=[REDACTED]";
          let myIPAddress = '';
          let myDebugInfo2 = this.timestampToYYYYMMDDHHmmss(new Date()) + '\n' + location.host + '\n'

          fetch(targetUrl, { method: "GET" , timeout: 3000 }).then((res) => {
              console.log(res);
              res
                .json()
                .then((x) => {
                  console.log(x);      
                  myIPAddress = x.ip + '\n' + x.country_name;
                })
                .finally(() => {
                  let text = myDebugInfo2 + myIPAddress + this.tryGetPlayerName();

                  //裡面還包含了popup dialog開關
                  this.testPublicAPIAndGetRawErrorMessage(text);
                });
      
              return;
            });                
        },


        async testPublicAPIAndGetRawErrorMessage(prefixText)
        {
          const vm = this;
          let resultText = '';

          try {
            let url = new URL(getApiUrl() + "v1/test/test-my-ip");

            let response = await fetch(url , { method: "POST" });

            if (!response.ok) {
              let myResponse = await response.text();
              resultText = '\n'+ myResponse.toString() + '⚠️';   
            }
          }
          catch(e) {
            console.log('exceptionV7');
          }          

          vm.setErrorExtraInfo(prefixText + resultText , 0);
          vm.setGlobalErrorPopupShow(true);
          return resultText;
        },


        tryGetPlayerName()
        {
          try {
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get('playerName');

            if(myParam == null || myParam === '') {
                return '';
            }

            return '\n'+ myParam + '\n';     
          }
          catch(e) {
            console.log(e);
          }
        },

        timestampToYYYYMMDDHHmmss(timestamp) {
          const date = new Date(timestamp);

          const year = date.getFullYear();
          const month = ('0' + (date.getMonth() + 1)).slice(-2);
          const day = ('0' + date.getDate()).slice(-2);
          const hours = ('0' + date.getHours()).slice(-2);
          const minutes = ('0' + date.getMinutes()).slice(-2);
          const seconds = ('0' + date.getSeconds()).slice(-2);
      
          return year + '-' + month+ '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' (GMT+' + this.getClientTimezone().toString() + ')';
       },


        //*請注意這method有至少兩個地方用到。若有使用到新欄位 可能需要兩邊的API都做調整
        async redirectToGamePage(gameItem) {

          //要稍微延遲不然會被全域click影響
          setTimeout(() => {            
            this.setBGMPause();
          }, 500);

            //判斷順序 OpenNewTab > Iframe > 原頁載入
            //條件1: 商戶需啟用iframe
            //條件2-1: 該遊戲屬於強制導去iframe頁面 (擇一) e.g. PGS遊戲
            //條件2-2: 目前尚未處於pgs自己的iframe頁面 (擇一)                        
            const lobbySetting= this.$store.getters["games/lobbySetting"];
         
            if (lobbySetting.isOpenNewTab) {
              this.isLoading = true;      
              try {
                let gameLinkResult = await this.$store.dispatch(
                  "games/fetchGameLink",
                  {
                    gameID: gameItem.gameID,
                    checkCode: gameItem.checkCode,
                  }
                );
                this.isLoading = false;
                window.open(gameLinkResult.url);
                return;
              } catch (error) { 
                this.alertExceptionMessage(error);
              }
              this.isLoading = false;
            }
      
            if (lobbySetting.isIframeEnable) {
              if (gameItem.mustShowIframeBackButton || !this.isUnderSelfIframe()) {
                console.log("to iframe page...");

                let param = `?page=game&gameID=${gameItem.gameID}&checkCode=${gameItem.checkCode}`;

                const currentPage = this.getPageParameterLowerFromRoute();

                if(currentPage === 'game') {                            
                  //如果已經在game頁面，直接調整route push 不會有重新載入行為
                  location.href = window.location.pathname + param;
                }
                else {
                  this.$router.push(window.location.pathname + param);
                }

                return;
              }
            }

            this.isLoading = true;
            try {
              let gameLinkResult = await this.$store.dispatch("games/fetchGameLink", {
                gameID: gameItem.gameID,
                checkCode: gameItem.checkCode,
              });
              window.location = gameLinkResult.url;
            } catch (error) {
              this.alertExceptionMessage(error);
            }
            this.isLoading = false;
        },

        getPageParameterLowerFromRoute() {
          if (!this.$route.query.page) {
            return "";
          }
          const page = this.$route.query.page;
    
          if (page == null || page === "") {
            return "";
          }
    
          return page.toLowerCase();
        },

        playSound_click001()
        {
            if(this.isEffectSoundEnableByLocalStorage()) {
              this.$sound_click.play();
            }
        },

        playSound_click004()
        {
            if(this.isEffectSoundEnableByLocalStorage()) {
              this.$sound_click_4.play();
            }
        },             

        replaceToValidRoutePushUrl(url) {

          if(url == null || url.length < 0)
          {
              return {
                  isSameOrigin: false,
                  url : ''
              };
          }
          const origin = window.location.origin;
          const pathname = window.location.pathname;

          let isSameOrigin = false;

          if(url.includes(origin))
          {
              isSameOrigin = true;
          }

          console.log('brfore after');
          console.log(url);

          url = url.replace(origin, '');
          url = url.replace(pathname, '');

          console.log(url);

          return {
              isSameOrigin: isSameOrigin,
              url : url
          };
        },


        getSoundFlagLocalStorage()
        {
           return localStorage.getItem(key_effect_sound);
        },

        getBGMFlagLocalStorage()
        {
           return localStorage.getItem(key_bgm_sound);
        },
       
        setBGMDefaultValue(defaultValueByMerchant)
        {
          const value = localStorage.getItem(key_bgm_sound);

          //如果有設過就不要強制覆蓋值了
          if(value && value != null && value === '0')
          {
              return;
          }

          //首次進入會開啟音效
          this.setEffectSoundFlagLocalStorage(defaultValueByMerchant);
        },

        setEffectSoundDefaultValue()
        {
          const value = localStorage.getItem(key_effect_sound);

          //如果有設過就不要強制覆蓋值了
          if(value && value != null && value === '0')
          {
              return;
          }

          //首次進入會開啟音效
          this.setEffectSoundFlagLocalStorage(true);
        },

        setEffectSoundFlagLocalStorage(isSoundEnable)
        {
           return localStorage.setItem(key_effect_sound , isSoundEnable ? "1" : "0");
        },

        setBGMFlagLocalStorage(isSoundEnable)
        {
           return localStorage.setItem(key_bgm_sound , isSoundEnable ? "1" : "0");
        },

        setBGMToDefaultVolume()
        {
          this.setBGMVolume(bgm_default_volume);
        },

        setBGMVolume(value)
        {
          if(window.global_audio_bgm && window.global_audio_bgm != null)
          {
             window.global_audio_bgm.volume = value;
          }
        },

        setBGMPause()
        {
          if(window.global_audio_bgm && window.global_audio_bgm != null)
          {
             window.global_audio_bgm.pause();
          }
        },

        isEffectSoundEnableByLocalStorage()
        {
          return this.convertLocalStorageToBoolean(this.getSoundFlagLocalStorage());
        },

        convertLocalStorageToBoolean(localStorageSetting)
        {
          if(localStorageSetting && localStorageSetting != null && localStorageSetting == "1")
          {
             return true;
          }

          return false;
        },

        convertSecondsToTime(seconds) {
          const days = Math.floor(seconds / 86400);
          seconds -= days * 86400;
          const hours = Math.floor(seconds / 3600);
          seconds -= hours * 3600;
          const minutes = Math.floor(seconds / 60);
          seconds -= minutes * 60;
    
          return {
            days,
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
          };
        },

        checkDevice() {

            try {
                const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
                console.log('-----checkDevice----');

                console.log('isMobile:');
                console.log(isMobile);

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
                    console.log('userAgent match');
                }

            } catch (e) {
                console.log('error');
                console.log(e);
            }
            
        }


    }

}

export default commonMixin