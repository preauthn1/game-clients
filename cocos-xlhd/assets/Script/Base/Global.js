var FormatDecimalNum = [null, 10, 100, 1000, 10000]
var Global = {

    Bytes2int:function(b)
    {
        var a = [];
        a.length = 4;
        var i = a.length - 1, j = b.length - 1;
        for (; i >= 0; i--, j--)
        {//从b的尾部(即int值的低位)开始copy数据
            if (j >= 0)
                a[i] = b[j];
            else
                a[i] = 0;//如果b.length不足4,则将高位补0
        }
        var v0 = (a[0] & 0xff) << 24;//&0xff将byte值无差异转成int,避免Java自动类型提升后,会保留高位的符号位
        var v1 = (a[1] & 0xff) << 16;
        var v2 = (a[2] & 0xff) << 8;
        var v3 = (a[3] & 0xff);
        return v0 + v1 + v2 + v3;
    },

    int2Bytes:function(one)
    {
        var re = [];
        re[0] = (one >>> 24);//取最高8位放到0下标
        re[1] = (one >>> 16);//取次高8为放到1下标
        re[2] = (one >>> 8); //取次低8位放到2下标
        re[3] = (one); //取最低8位放到3下标
        return re;
    },

    // 在IOS手机失效
    ShowFullScreen:function() {
        cc.screen.requestFullScreen()        
    },

    ExitFullScreen:function() {
        cc.screen.exitFullScreen()        
    },

    getRandom:function(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }, 

	/* 取到小數點後幾位
    * 参数说明：
    * s：要格式化的数字
    * n：保留几位小数
    * */
	FormatDecimal:function(s, n = 2){
		let value = s * 0.01
		if(FormatDecimalNum[n] != null){
			value =  parseInt(value *  FormatDecimalNum[n])
			value = value/ FormatDecimalNum[n]
		}
		value = (value).toFixed(n).toString()
		return value
    },
    
    CloseBrowser:function(){
        console.log("navigator.userAgent", navigator.userAgent)
        console.log("cc.sys.os", cc.sys.browserType)

        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                window.opener = null;
                window.close();
            } else {
                window.open('', '_top');
                example.invalid.close();
            }
        }
        else if (navigator.userAgent.indexOf("Firefox") > 0) {
            window.location.href = 'about:blank ';
        } else {
            window.opener = null;
            window.open('', '_self', '');
            window.close();
        }
    },    

    GetGamePName(){
        return ""
    },

    CaseWhen(condition, trueVal, falseVal){
        if (condition == true) {
            return trueVal;
        }
        else{
            return falseVal;
        }
    },
};

module.exports = Global;
