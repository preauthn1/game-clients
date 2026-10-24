
import myConfig from "../../static/common/util.json";

export function getDeviceWidth() {
    try {
        return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    } catch (e) {
        return 0;
    }
}

export function getDeviceHeight() {
    try {
        return (window.innerHeight > 0) ? window.innerHeight : screen.height;
    } catch (e) {
        return 0;
    }
}

export function add_GA_ViewEvent(event_name , obj) {
    try {
        gtag('event', event_name, obj);
        //ga('send', 'event', myPageName, 'view');
    } catch (e) {
        console.log('------GA error------');
        console.log(e);
    }
}

export function getApiUrl()
{
    try{
        // 根據當前網址 決定要用哪一組API網址 (部分區域可能會拆開)
        // back1是假的。back2才是真的有用處的網址
        const preDefineUrls = myConfig.back2;
        
        const currentUrlHost = window.location.hostname.toLowerCase();

        if(currentUrlHost.includes('preTest.') || currentUrlHost.includes('qa.'))
        {
            return parseBase64UrlValue(process.env.VUE_APP_API_URL_PRE);
        }
        else if(currentUrlHost.includes('vip.') )
        {
            return parseBase64UrlValue(process.env.VUE_APP_API_URL2);
        }
        else if(preDefineUrls && preDefineUrls != null && preDefineUrls.length > 0)
        {
            const myParseUrls = [];

            for(const url of preDefineUrls) {
                if(url == null || url == '') {
                    continue;
                }
                myParseUrls.push(parseBase64UrlValue(url).toLowerCase());
            }

            for(const url of myParseUrls) {
                //總之就是若當前域名符合定義好的幾組。會改用二號API網址
                if(url === currentUrlHost)
                {
                    console.log('match bacUrl1');
                    return parseBase64UrlValue(process.env.VUE_APP_API_URL2);
                }                
            }
        }
    }
    catch(e)
    {
        console.log('error-exception');
        console.log(e);
    }

    const isUseV4Token = [REDACTED]"last_token_v") == 'v4';      
    const isUseV5Token = [REDACTED]"last_token_v") == 'v5';    

    //V4版本域名 (特殊切換使用)
    if(isUseV4Token) {  
       return parseBase64UrlValue(process.env.VUE_APP_API_URL_V4);
    }

    if(isUseV5Token) {  
        return parseBase64UrlValue(process.env.VUE_APP_API_URL_V5);
     }

    //預設API域名
    return parseBase64UrlValue(process.env.VUE_APP_API_URL);
}


//特定服務會用穩定域名 (無封鎖地區/存取限制較鬆)
export function getStableApiUrl()
{
    return parseBase64UrlValue(process.env.VUE_APP_API_STABLE);
}

export function getBWGApiUrl()
{
    return parseBase64UrlValue(process.env.VUE_APP_API_BWG);
}

export function parseBase64UrlValue(urlValue) {    
    //如果沒有http關鍵字 就視為base64
    if (urlValue.includes("http")) {
        return urlValue;
    } else {
        return atob(urlValue);
    }
}


export function instanceHeaders(token) {

    const lang = localStorage.getItem("LOCALE");
    const headers = {
        "content-type": "application/json",
        "X-target-device-width" : getDeviceWidth(),
        "X-target-device-height" : getDeviceHeight(),
        "X-target-lobby-url" : window.location,
        "access_token": token,
        "locale": lang && lang != null && lang !== '' ? lang : ""
    };

    return headers;
}

export function setDocumentTitle(title) {
    try
    {
        window.setDocumentTitle(title);
        window.parent.setDocumentTitle(title);
    }
    catch(ex)
    {
        console.log(ex);
    }
}


export function getGlobalSettings() {

    const settings = {
        "encrypt_salt_key": "z85pc7w42a6dc",
    };

    return settings;
}