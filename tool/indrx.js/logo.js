window.initLogo = function (isRotate, picUrl, callback) {
	let showLogo = false
	
	let urlData = window.location.search.substring(1);
	if (urlData == null || urlData == ""){
		console.log("data error")
	}
	else{
		if (window.location.href.indexOf("hall") != -1){
			urlData = urlData.split('&nsukey=')[0]
			urlData = "?" + urlData

			let getQueryString = function(url, name){
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = url.substring(1).match(reg);
				if(r!=null){
					return  decodeURI(r[2]);
				}
				else{
					return null;
				}
			}

			let styleMode = getQueryString(urlData, "styleMode")
			if (styleMode != null){
				if (styleMode == 1){
					showLogo = true
				}
			}
		}
		else{
			let datas = JSON.parse(window.atob(urlData))
			if (datas.data.styleMode != null){
				if (datas.data.styleMode == 1){
					showLogo = true
				}
			}
		}
	}
	
	showLogo = true
	var splash = document.getElementById('splash');
	if (showLogo == true){
		var lastDir = ""
		if (document.referrer.indexOf("hall") != -1)
			lastDir = "hall"

		var splash=document.getElementById('splash');
		if (lastDir == "hall"){
			splash.style.backgroundImage="url('../../Logo.png')"
			callback()
		}
		else{
			splash.style.backgroundSize="60%"
			if (window.logoPic){
				splash.style.backgroundImage=window.logoPic
				
				setTimeout(function () {
					splash.style.backgroundSize="107%"					
					splash.style.backgroundImage="url('../../Logo.png')"

					callback();
				}, 1000)
			}
			else{
				callback();
				/*
				var script = document.createElement("script");
				script.type = 'text/javascript';			
				script.src = "../../js/logoPic.js";
				script.onload = function () {
					splash.style.backgroundImage=window.logoPic
				}
				document.body.appendChild(script);

				setTimeout(function () {
					callback();
				}, 1200)
				*/
			}
		}
	}
	else{
		if (isRotate == true){
			if (screen.width<screen.height) {
				let sizeBet=screen.height / screen.width;
				splash.style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;  background-size: 100%; background-color: #000000; background-position: center center; background-repeat: no-repeat; transform: rotate(90deg) scale(" + sizeBet + ");";
			} else {
				splash.style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;  background-size: 100%; background-color: #000000; background-position: center center; background-repeat: no-repeat;";
			}
		}
		splash.style.backgroundImage = picUrl
		
		var loading=document.getElementById('loading');
		if (loading){
			loading.style.display='block';
		}
		
		callback()
	}
}