(function(){
    window.gameIP = "example.invalid"
    window.gamePort = "-1"
    window.isWebSite = "1"
    window.typeLineBets = [1,2,5,10,20]
    window.isHttps = "1"
	window.isAES = "1"
    window.slotObj = {}
    
    if (window.location.search) {
        let param = window.location.search.substring(1)
        obj = JSON.parse(atob(param))
        console.log(obj)
        if (!window.slotObj) {
            window.slotObj = {}
        }
        window.slotObj.token = [REDACTED]
    }
	if (window.location.href.indexOf("https://") != -1)
	{
		window.isHttps = "1"
	}
	else
	{
		window.isHttps = "2"
	}
	
	window.actionDisconnect = function(){
		window.close()
	}	
})()
