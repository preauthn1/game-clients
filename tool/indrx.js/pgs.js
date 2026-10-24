//const isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);
//const isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && /14.0 Safari || iPhone OS 14/.test(window.navigator.userAgent);
const isIOSDevice = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser;
if (isIOSDevice == true){
	cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
		if (this.vertexOffset + vertexCount > 65535) {
			this.uploadData();
			this._batcher._flush();
		}
	};     
	cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
		this.uploadData();
		this.switchBuffer();
	}
}
//alert(cc.sys.osMainVersion)
//console.error(cc.sys)