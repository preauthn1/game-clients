if (window.navigator.platform === "iPhone" && cc.sys.osMainVersion>13) {
    cc.MeshBuffer.prototype.checkAndSwitchBuffer=function (vertexCount) {
        if (this.vertexOffset + vertexCount>65535) {
            this.uploadData();
            this._batcher._flush();
        }
    };
    cc.MeshBuffer.prototype.forwardIndiceStartToOffset=function () {
        this.uploadData();
        this.switchBuffer();
    };
}



