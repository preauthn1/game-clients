const cp = require('child_process');
// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
    // css style for panel
    style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

    // html template for panel
    template: `                         
    <hr />
    <ui-input style="width: 200px;" type="path" id="Jpath"></ui-input>   
    <ui-button id="AniJsonPath">動畫檔位置</ui-button> 
    <hr />
    <ui-input style="width: 200px;" type="path" id="Tpath"></ui-input>  
    <ui-button id="AniTexturePath">圖片檔位置</ui-button>    
    <hr />
    <ui-button id="save">導入動畫</ui-button>  
  `,

    // element and variable binding
    $: {
        save: '#save',
        Jpath: '#Jpath',
        Tpath: '#Tpath',
        AniJsonPath: '#AniJsonPath',
        AniTexturePath: '#AniTexturePath'
    },

    ready() {
        var self = this;
        this.$Jpath.value = "db://assets/resources";
        this.$Tpath.value = "db://assets/resources";
        this.$AniJsonPath.addEventListener('confirm', function () {
            let path = self._openSelectSaveFolder(self.$Jpath.value);
            if (path) {
                self.$Jpath.value = path;
            }
        });
        this.$AniTexturePath.addEventListener('confirm', function () {
            let path = self._openSelectSaveFolder(self.$Tpath.value);
            if (path) {
                self.$Tpath.value = path;
            }
        });
        this.$save.addEventListener('confirm', function () {
            Editor.Scene.callSceneScript('animformjson', 'outputAnim', self.$Jpath.value, self.$Tpath.value);
        });
    },

    _openSelectSaveFolder(defaultUrl) {
        let path = null

        let defaultPath = Editor.assetdb.remote.urlToFspath(defaultUrl)

        let selectPath = Editor.Dialog.openFile({
            defaultPath: defaultPath,
            properties: ['openDirectory'],
            title: '請選擇路徑'
        })

        if (selectPath !== -1) {
            selectPath = String(selectPath)
            if (!selectPath.includes(Editor.Project.path + '\\assets')) {
                Editor.Dialog.messageBox({
                    title: '提示',
                    type: 'warning',
                    message: '請選擇專案檔中assets目錄下的路徑!'
                })
            }
            else {
                path = Editor.assetdb.remote.fspathToUrl(selectPath)
            }
        }
        return path
    },

    // register your ipc messages here
    messages: {
        'animformjson:hello'(event) {
            // this.$node.innerText = 'Hello!';
            // Editor.log(this.$node.name)
        }
    },
});