const cp = require('child_process');

// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
	// css style for panel
	style:`
    @import url('app://bower_components/fontawesome/css/font-awesome.min.css');
    h2 { color:#f90; }
  `,

	// html template for panel
	template:`
	<title>腳本掛載工具</title>
    <hr />
	
    <h3>资源目录</h3>
	<div style="display:flex;">
    <ui-input class="flex-1" placeholder="路径..." readonly v-value="path"></ui-input>
	<ui-button @confirm="onFolderClicked">路径</ui-button>
	</div>

	<br/>
	
    <h3>导入Json</h3>
	<div style="display:flex;">
		<ui-asset style="flex:1;" v-value="json" type="json"></ui-asset>   
	</div>
	
	<br/>
	
	<div style="display:flex;">
		<ui-button @confirm="onCreateClicked">生成</ui-button>
	</div>	

	<br/>
	<br/>

	<br/>
	
    <h3>导入事件Json</h3>
	<div style="display:flex;">
		<ui-asset style="flex:1;" v-value="event_json" type="json"></ui-asset>   
	</div>	
	
	<br/>
	
	<div style="display:flex;">
		<ui-button @confirm="onSetEventCallback">設定事件</ui-button>
	</div>	

  `,

	// method executed when template and styles are successfully loaded and initialized
	ready() {
		new window.Vue({
			el:this.shadowRoot,
			data:{
				json:"",
				path:"",
				event_json:"",
			},
			created:function () {
				this.path = "db://assets"
			},
			methods:{
				onCreateClicked(event) {
					Editor.Scene.callSceneScript('script-creator', 'create', {
						json:this.json,
						path:this.path,
					});
				},
				
				onSetEventCallback(event) {
					Editor.log("************** onSetCallbackEvent")
					Editor.Scene.callSceneScript('script-creator', 'seteventcallback', {
						event_json:this.event_json,
					});
				},				

				onFolderClicked(event) {
					let path = this._openSelectSaveFolder(this.path)
					if (path) {
						this.path = path;
					}
				},

				_openSelectSaveFolder(defaultUrl) {
					let path = null

					let defaultPath = Editor.assetdb.remote.urlToFspath(defaultUrl)

					let selectPath = Editor.Dialog.openFile({
						defaultPath:defaultPath,
						properties:['openDirectory'],
						title:'请选择保存路径'
					})

					if (selectPath !== -1) {
						selectPath = String(selectPath)
						if (!selectPath.includes(Editor.Project.path + '\\assets')) {
							Editor.Dialog.messageBox({
								title:'提示',
								type:'warning',
								message:'请选择游戏工程assets文件夹下的目录!'
							})
						}
						else {
							path = Editor.assetdb.remote.fspathToUrl(selectPath)
						}
					}
					return path
				},
			}
		})
	},

	// register your ipc messages here
	messages:{
		'script-creator:hello'(event) {
			// this.$node.innerText = 'Hello!';
			// Editor.log(this.$node.name)
		}
	}
});