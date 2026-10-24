let path=require('fire-path');

module.exports={
    'create' :function (event, info) {
        this.show(info)
		

        if (! info.json) {
            Editor.Dialog.messageBox({
                title :'错误',
                type :'error',
                message :'请选择script Json文件!'
            })
            return
        }
		
        this.editScript(info.json, info.path)
		
    },

    editScript(uuid, folder) {
        let self=this
        cc.loader.load({ type :'uuid', uuid :uuid }, function (err, res) {
            let info=res.json

            if (info) {
                self.loadResData(info, folder)
            }
        })
    },

	loadResData(info, folder) {
		let self = this
		this.resMap = {}

		// 從resources載入的資料
		for (let i=0; i<info.length; i ++) {
			var data = info[i].s_data
			if (data){
				for (var j=0; j<data.length; j ++) {
					var data1 = data[j]
					var dataType = data1.dataType
					if (dataType == "Array") {
						var arrDatas = data1.datas
						if (arrDatas){
							for (var k=0; k<arrDatas.length; k ++) {
								var data2 = arrDatas[k]
								var res = data2.res
								if (res){
									this.resMap[res] = data2.dataType
								}
								
								if (data2.data){
									for (let key in data2.data) {
										let v = data2.data[key]
										if (v.res){
											this.resMap[v.res] = v.dataType
										}
									}
								}
							}
						}
					}
					else{
						var res = data1.res
						if (res){
							this.resMap[res] = data1.dataType
						}
					}
				}
			}
		}
		
		let acc = 0
		for (let key in this.resMap) {
			acc++
		}
		Editor.log("資源數量", acc)
		let canvas = cc.find('Canvas')
		
		if (acc == 0){
			Editor.log("載入資源完成")
			self.bindScript(canvas, info)
			return
		}		
		
		let count = 0
		for (let key in this.resMap) {
			let val = this.resMap[key]
			let path1 = folder + "/" + key
			if (val == "sprite-frame"){
				let ext=path.extname(key)
				let filename=path.basename(key, ext)
				path1 = path1 + "/" + filename
			}

			let uuid = Editor.assetdb.remote.urlToUuid(path1)
			if (uuid == null){
				count ++
				Editor.log("no find data", key)
				if (count === acc) {
					Editor.log("載入資源完成")
					self.bindScript(canvas, info)
				}				
			}
			else{
				cc.AssetLibrary.loadAsset(uuid, function (error, asset) {					
					self.resMap[key] = asset
					//Editor.log("載入資源", key)
					count ++
					if (count === acc) {
						Editor.log("載入資源完成")
						self.bindScript(canvas, info)
					}
				
				})
			}
		}
	},

    bindScript(canvas, info) {
		// 先掛載腳本
		for (let i=0; i<info.length; i ++) {
			let data = info[i]
			let path = data.s_path
			let name = data.s_name
			//Editor.log(path, "綁定腳本", name)
			let go = cc.find(path, canvas)
			if (go == null){
				Editor.log("!!!!!!!!!!!!!!!! can not find gameobject, path", path)
				continue
			}
			
			let c = go.getComponent(name)
			if (c == null){
				c = go.addComponent(name)
			}
		}

		// 指定參數
		for (let i=0; i<info.length; i ++) {
			let data = info[i]
			
			let datas = data.s_data
			if (datas == null){
				continue
			}
	
			let go = cc.find(data.s_path, canvas)
			if (go == null){
				continue
			}
			
			let c = go.getComponent(data.s_name)
			if (c == null){
				Editor.error("c is null, Component name", data.s_name)
				continue
			}
			
			for (let j=0; j<datas.length; j ++) {
				let data1 = datas[j]
				this.setFieldData(canvas, c, data1, false)
			}
		}		
		
		Editor.log("binding and setting script finish")
	},
	
	setData(c, fieldName, fileData){
		if (c == null){
			Editor.error("c is null ", fieldName)
			return;
		}
		
		if (fieldName == null){
			Editor.error("fieldName is null ", c)
			return;
		}
		
		if (c.hasOwnProperty(fieldName) == false){
			//Editor.error("not have ", fieldName, c)
			return
		}
		
		c[fieldName] = fileData
	},
	
	setArrayData(c, fieldName, fileData){
		if (c == null){
			Editor.error("c is null ")
			return
		}
			
		if (fieldName == null){
			Editor.error("fieldName is null ", c)
			return
		}
		
		if (c.hasOwnProperty(fieldName) == false){
			//Editor.error("not have ", fieldName, c)
			return
		}
		//Editor.error(c.name, fieldName)
		
		c[fieldName][c[fieldName].length] = fileData
	},
	
	setFieldData(canvas, c, data1, isArray, fieldName, dataType){
		if (fieldName == null){
			fieldName = data1.f_name
		}
		if (dataType == null){
			dataType = data1.dataType
		}
		
		let refer = data1.refer
		if (refer != null){
			let referObj = cc.find(refer, canvas)
			if (referObj != null){
				if (data1.dataType == "MonoBehaviour"){
					if (data1.dataTypeName != null){
						let c1 = referObj.getComponent(data1.dataTypeName)
						if (c1 != null){
							if (isArray == true){
								this.setArrayData(c, fieldName, c1)
							}
							else{
								this.setData(c, fieldName, c1)
							}
						}
						else{
							Editor.log("not find ",c.name, refer, data1.dataTypeName)
						}
					}
					else{
						Editor.log("not find dataTypeName ",c.name, refer)
					}
				}
				else{
					if (isArray == true){					
						this.setArrayData(c, fieldName, referObj)
					}
					else{
						this.setData(c, fieldName, referObj)
					}
				}
			}
			else{
				Editor.log("not find refer", refer)
			}
		}
		
		if (data1.res != null){
			if (this.resMap[data1.res] != null){
				if (isArray == true){
					this.setArrayData(c, fieldName, this.resMap[data1.res])
				}
				else{
					this.setData(c, fieldName, this.resMap[data1.res])
				}
			}
			else{
				Editor.log("not find res", data1.res)
			}
		}
		
		if (dataType == "Array")
		{
			if (c[fieldName]){
				c[fieldName] = []
			}
			
			let datas = data1.datas
			for (let key in datas) {
				this.setFieldData(canvas, c, datas[key], true, fieldName, null)
			}
		}
		else if (dataType == "DateTime")
		{
			
		}
		else if (dataType == "Int64")
		{
			this.setData(c, fieldName, parseInt(data1.data))
		}
		else if (dataType == "Int32")
		{
			this.setData(c, fieldName, parseInt(data1.data))
		}
		else if (dataType == "Single")
		{
			this.setData(c, fieldName, parseFloat(data1.data))
		}
		else if (dataType == "Boolean")
		{
			if (data1.data == "true")
				this.setData(c, fieldName, true)
			else
				this.setData(c, fieldName, false)
		}
		else if (dataType == "Double")
		{
			this.setData(c, fieldName, parseFloat(data1.data))
		}
		else if (dataType == "Vector3")
		{
			this.setData(c[fieldName], "x", parseFloat(data1.data.x))
			this.setData(c[fieldName], "y", parseFloat(data1.data.y))
			this.setData(c[fieldName], "z", parseFloat(data1.data.z))
		}
		else if (dataType == "GameObject")
		{
			// refer
			// res
		}
		else if (dataType == "Transform")
		{
			// refer
		}
		else if (dataType == "Text")
		{
			// refer
		}
		else if (dataType == "Image")
		{
			// refer
		}
		else if (dataType == "CanvasGroup")
		{
			// refer
		}
		else if (dataType == "Animator")
		{
			// refer
		}
		else if (dataType == "sprite-frame")
		{
			// res
		}
		else if (dataType == "AudioClip")
		{
			// res
		}
		else if (dataType == "Slider")
		{
			// refer
		}
		else if (dataType == "Button")
		{
			// refer
		}
		else if (dataType == "String")
		{
			this.setData(c, fieldName, data1.data)
		}
		else if (dataType == "MonoBehaviour")
		{
			var dataTypeName = data1.dataTypeName
			if (dataTypeName == "Package"){
				var Package = cc.Class({
					name:'Package',
					properties:{
						code:"",
						message:"",
						otherInfo:"",
						type:0,
					}
				});				
				let p = new Package()
				this.setFieldData(canvas, p, data1.data.code, false, "code")
				this.setFieldData(canvas, p, data1.data.message, false, "message")
				this.setFieldData(canvas, p, data1.data.otherInfo, false, "otherInfo")
				this.setFieldData(canvas, p, data1.data.type, false, "type")
				c[fieldName][c[fieldName].length] = p
			}
			else if (dataTypeName == "EventTrigger"){
				// refer
			}
			else if (dataTypeName == "GunView.FishType"){
				var FishType = cc.Class({
					name:'GunViewFishType',
					properties:{
						obj:cc.Node,
						type:0,
					}
				});				
				let ft = new FishType()
				this.setFieldData(canvas, ft, data1.data.type, false, "type")
				this.setFieldData(canvas, ft, data1.data.obj, false, "obj")
				c[fieldName][c[fieldName].length] = ft
			}
			else if (dataTypeName == "ish_LightningClickView.FishType"){
				var FishType = cc.Class({
					name:'ish_LightningClickViewFishType',
					properties:{
						obj:cc.Node,
						type:0,
					}
				});
				let ft = new FishType()
				this.setFieldData(canvas, ft, data1.data.type, false, "type")
				this.setFieldData(canvas, ft, data1.data.obj, false, "obj")
				c[fieldName][c[fieldName].length] = ft
			}
			else if (dataTypeName == "GunView"){
				// refer
			}
			else if (dataTypeName == "UserInfoView"){
				// refer
			}
			else if (dataTypeName == "SpecialFishBehavior.FishType"){
				var FishType = cc.Class({
					name:'SpecialFishBehaviorFishType',
					properties:{
						prefab:cc.Prefab,
						fishType:0,
					}
				});
				let ft = new FishType()
				this.setFieldData(canvas, ft, data1.data.prefab, false, "prefab")
				this.setFieldData(canvas, ft, data1.data.fishType, false, "fishType")
				c[fieldName][c[fieldName].length] = ft
			}
		}
		else{
			Editor.log("no dataType", dataType)
		}		
	},
	
	
    'seteventcallback' :function (event, info) {
        this.show(info)
		
        if (! info.event_json) {
            Editor.Dialog.messageBox({
                title :'错误',
                type :'error',
                message :'请选择script Json文件!'
            })
            return
        }
		
        this.setCallbackEvent(info.event_json)
    },	
	
	setCallbackEvent(uuid){
		let self=this

        cc.loader.load({ type :'uuid', uuid :uuid }, function (err, res) {
            let info=res.json
            if (info) {
				for (let i=0; i<info.length; i ++) {
					var data = info[i]
					self.setCallbackEventData(data)
				}
            }
        })
	},	
	
	setCallbackEventData(data){
		let canvas = cc.find('Canvas')
		let obj = cc.find(data.Path, canvas)
		if (obj == null){
			Editor.log("cannot find data path", data.Path)
			return
		}
		
		let refer = cc.find(data.Refer, canvas)
		if (refer == null){
			Editor.log("cannot find data refer", data.Refer)
			return
		}
		
		var clickEventHandler = new cc.Component.EventHandler();
		clickEventHandler.target = refer; // 这个 node 节点是你的事件处理代码组件所属的节点
		clickEventHandler.component = data.Class;// 这个是代码文件名
		clickEventHandler.handler = data.MethodName;
		
		if (data.Type == "Button"){
			let btn = obj.getComponent(cc.Button)
			if (btn){
				btn.clickEvents[data.Index] = clickEventHandler;
			}
			else{
				Editor.log("cannot find cc.Button", data.Refer)
			}
		}
		else if (data.Type == "Slider"){
			let slider = obj.getComponent(cc.Slider)
			if (slider){
				slider.slideEvents[data.Index] = clickEventHandler;
			}
			else{
				Editor.log("cannot find cc.Slider", data.Refer)
			}			
		}
	},	

    // main.js中可以打印出完整结构
    show(any) {
        Editor.Ipc.sendToMain('script-creator:show', any)
    }
};