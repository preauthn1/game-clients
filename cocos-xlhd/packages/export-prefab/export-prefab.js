let path=require('fire-path');

module.exports={
    // prefabs:null,
    'create' :function (event, info) {
        this.show(info)

        if (! info.node) {
            Editor.Dialog.messageBox({
                title :'错误',
                type :'error',
                message :'请选择输出物件!'
            })
            return
        }
		Editor.log("info", info)
		this.exportObj(info.node, info.path)
    },

	exportObj(uuid, path) {
		var canvas = cc.find('Canvas');
		var node = canvas.getChildByUuid(uuid)
		if (node == null){
			Editor.log("not find node")
			return
		}
		else{
			/*
			var children = node.children;
			for (var i = 0; i < children.length; ++i) {			
				Editor.Ipc.sendToPanel('scene', 'scene:create-prefab', children[i].uuid, path);
			}
			*/
			this.addAnimationData(node)			
		}
	},
	
	getPath(node){
		let path = node.name
		while (node.parent != null){
			node = node.parent
			path = node.name + "/" + path
		}
		return path
	},
	
	showLog(txt, node){
		Editor.log(txt, this.getPath(node))
	},
		
	checkData(node){
		if (node.name == "Body"){
			if (node.getComponent(cc.Sprite) == null){
				this.showLog("!!!!!!!!!!!!!! 缺少 cc.Sprite", node)
			}
			if (node.getComponent(cc.Animation) == null){
				this.showLog("!!!!!!!!!!!!!! 缺少 cc.Animation", node)
			}
			if (node.getComponent("AnimationController") == null){
				this.showLog("!!!!!!!!!!!!!! 缺少 AnimationController", node)
			}
			
			if (node.getComponent("FishBehavior") != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 FishBehavior", node)
			}
			if (node.getComponent(cc.BoxCollider) != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 cc.BoxCollider", node)
			}
			if (node.getComponent(cc.CircleCollider) != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 cc.CircleCollider", node)
			}
			if (node.getComponent(cc.PolygonCollider) != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 cc.PolygonCollider", node)
			}
		}
		
		if (node.getComponent("FishBehavior") != null){
			if (node.getComponent(cc.Sprite) != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 cc.Sprite", node)
			}
			if (node.getComponent(cc.Animation) != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 cc.Animation", node)
			}
			if (node.getComponent("AnimationController") != null){
				this.showLog("!!!!!!!!!!!!!! 需移除 AnimationController", node)
			}
			
			let hasCollider = false
			if (node.getComponent(cc.BoxCollider) != null){
				hasCollider = true
			}
			if (node.getComponent(cc.CircleCollider) != null){
				hasCollider = true
			}
			if (node.getComponent(cc.PolygonCollider) != null){
				hasCollider = true
			}

			if (hasCollider == false){
				this.showLog("!!!!!!!!!!!!!! 缺少碰撞", node)
			}
		}
		
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.checkData(children[i])
		}		
	},

	changeShadowGroup(node){

		let returnData=node.name.indexOf("Shadow");
		if(returnData != -1){
			if (node.getComponent(cc.Animation) != null){
				node.group = "Shadow"
			}
		}
	
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.changeShadowGroup(children[i])
		}
	},

	changeGroup(node){
		if (node.getComponent("FishBehavior") != null){			
			let hasCollider = false
			if (node.getComponent(cc.BoxCollider) != null){
				hasCollider = true
			}
			if (node.getComponent(cc.CircleCollider) != null){
				hasCollider = true
			}
			if (node.getComponent(cc.PolygonCollider) != null){
				hasCollider = true
			}

			if (hasCollider == false){
				this.showLog("!!!!!!!!!!!!!! 缺少碰撞", node)
			}
			else{
				node.group = "Fish"
			}
		}
		
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.changeGroup(children[i])
		}				
	},
	
	changePhysicsColliderToCollider(node){
		/*
		if (node.getComponent("FishBehavior") != null ||
			node.getComponent("SpecialFishUnitBehavior") != null ||
			node.getComponent("NetBehavior") != null ||
			node.getComponent("Fish_DrillBulletBehavior") != null ||
			node.getComponent("Fish_DrillNetBehavior") != null ||
			node.getComponent("Fish_BulletBehavior") != null)
			*/
		{
			let PhysicsBoxCollider = node.getComponent(cc.PhysicsBoxCollider)
			if (PhysicsBoxCollider != null){
				Editor.log(" ************* PhysicsBoxCollider ")

				let BoxCollider = node.getComponent(cc.BoxCollider)
				if (BoxCollider == null)
					BoxCollider = node.addComponent(cc.BoxCollider)
				
				BoxCollider.tag = PhysicsBoxCollider.tag
				BoxCollider.offset = cc.v2(PhysicsBoxCollider.offset.x, PhysicsBoxCollider.offset.y)
				BoxCollider.size.width = PhysicsBoxCollider.size.width
				BoxCollider.size.height = PhysicsBoxCollider.size.height			
				
				node.removeComponent(cc.PhysicsBoxCollider)
			}
			
			let PhysicsCircleCollider = node.getComponent(cc.PhysicsCircleCollider)
			if (PhysicsCircleCollider != null){
				Editor.log(" ************* PhysicsCircleCollider ")
				
				let CircleCollider = node.getComponent(cc.CircleCollider)
				if (CircleCollider == null)
					CircleCollider = node.addComponent(cc.CircleCollider)

				CircleCollider.tag = PhysicsCircleCollider.tag
				CircleCollider.offset = cc.v2(PhysicsCircleCollider.offset.x, PhysicsCircleCollider.offset.y)
				CircleCollider.radius = PhysicsCircleCollider.radius
				
				node.removeComponent(cc.PhysicsCircleCollider)
			}
			
			let PhysicsPolygonCollider = node.getComponent(cc.PhysicsPolygonCollider)
			if (PhysicsPolygonCollider != null){
				Editor.log(" ************* PhysicsPolygonCollider ")
				
				let PolygonCollider = node.getComponent(cc.PolygonCollider)
				if (PolygonCollider == null)
					PolygonCollider = node.addComponent(cc.PolygonCollider)

				PolygonCollider.tag = PhysicsPolygonCollider.tag 
				PolygonCollider.offset = cc.v2(PhysicsPolygonCollider.offset.x, PhysicsPolygonCollider.offset.y)
			
				for (var i=0; i<PhysicsPolygonCollider.points.length; i ++) {
					let data = PhysicsPolygonCollider.points[i]
					let v = cc.v2(data.x, data.y)
					PolygonCollider.points[i] = v
				}
				
				node.removeComponent(cc.PhysicsPolygonCollider)
			}
			
			let RigidBody = node.getComponent(cc.RigidBody)
			if (RigidBody != null){
				node.removeComponent(cc.RigidBody)			
			}
		}
		
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.changePhysicsColliderToCollider(children[i])
		}				
	},		
	
	changeColliderToPhysicsCollider(node){
		/*
		if (node.getComponent("FishBehavior") != null ||
			node.getComponent("SpecialFishUnitBehavior") != null ||
			node.getComponent("NetBehavior") != null ||
			node.getComponent("Fish_DrillBulletBehavior") != null ||
			node.getComponent("Fish_DrillNetBehavior") != null ||
			node.getComponent("Fish_BulletBehavior") != null)
			*/
		{
			let hasCollider = false
			let BoxCollider = node.getComponent(cc.BoxCollider)
			if (BoxCollider != null){
				hasCollider = true
				Editor.log(" ************* BoxCollider ")

				let PhysicsBoxCollider = node.getComponent(cc.PhysicsBoxCollider)
				if (PhysicsBoxCollider == null)
					PhysicsBoxCollider = node.addComponent(cc.PhysicsBoxCollider)
				
				PhysicsBoxCollider.tag = BoxCollider.tag
				PhysicsBoxCollider.offset = cc.v2(BoxCollider.offset.x, BoxCollider.offset.y)
				PhysicsBoxCollider.size.width = BoxCollider.size.width
				PhysicsBoxCollider.size.height = BoxCollider.size.height			
				
				node.removeComponent(cc.BoxCollider)
			}
			
			let CircleCollider = node.getComponent(cc.CircleCollider)
			if (CircleCollider != null){
				hasCollider = true
				Editor.log(" ************* CircleCollider ")
				
				let PhysicsCircleCollider = node.getComponent(cc.PhysicsCircleCollider)
				if (PhysicsCircleCollider == null)
					PhysicsCircleCollider = node.addComponent(cc.PhysicsCircleCollider)

				PhysicsCircleCollider.tag = CircleCollider.tag
				PhysicsCircleCollider.offset = cc.v2(CircleCollider.offset.x, CircleCollider.offset.y)
				PhysicsCircleCollider.radius = CircleCollider.radius
				
				node.removeComponent(cc.CircleCollider)
			}
			
			let PolygonCollider = node.getComponent(cc.PolygonCollider)
			if (PolygonCollider != null){
				hasCollider = true
				Editor.log(" ************* PolygonCollider ")
				
				let PhysicsPolygonCollider = node.getComponent(cc.PhysicsPolygonCollider)
				if (PhysicsPolygonCollider == null)
					PhysicsPolygonCollider = node.addComponent(cc.PhysicsPolygonCollider)

				PhysicsPolygonCollider.tag = PolygonCollider.tag 
				PhysicsPolygonCollider.offset = cc.v2(PolygonCollider.offset.x, PolygonCollider.offset.y)
			
				for (var i=0; i<PolygonCollider.points.length; i ++) {
					let data = PolygonCollider.points[i]
					let v = cc.v2(data.x, data.y)
					PhysicsPolygonCollider.points[i] = v
				}
				
				node.removeComponent(cc.PolygonCollider)
			}

			if (hasCollider == true){
				let RigidBody = node.getComponent(cc.RigidBody)
				if (RigidBody == null)
					RigidBody = node.addComponent(cc.RigidBody)
				
				RigidBody.type = cc.RigidBodyType.Static
				RigidBody.allowSleep = false
			}			
		}
		
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.changeColliderToPhysicsCollider(children[i])
		}				
	},	
	
	removeSetZIndex(node){

		let SetZIndex = node.getComponent("SetZIndex")
		if (SetZIndex != null)
		{
			Editor.log("remover SetZIndex")
			node.removeComponent("SetZIndex")
		}
			
		
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.removeSetZIndex(children[i])
		}				
	},	
	
	
	loadAnimationControl(folder, callback) {
        Editor.log('开始加载AnimationControl资源 ' + folder)
        let self=this
        Editor.assetdb.queryAssets(folder + '/**\/*', cc.JsonAsset, function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count=0

            results.forEach(function (result, index) {
				if (result.path.indexOf("_controller") != -1)
				{				
					cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
						let ext=path.extname(result.path)
						let filename=path.basename(result.path, ext)
						if (ext == ".json") {
							let key=path.dirname(result.url) + "/" + filename
							self.animationControlMap[key]=asset
						}
						count ++
						//Editor.log('AnimationControl资源加载...' + count + '/' + results.length + " " + filename)
						if (count === results.length) {
							Editor.log('AnimationControl资源加载完成!')
							if (callback) {
								callback()
							}
						}
					})
				}
				else
				{
					count ++
					//Editor.log('AnimationControl资源加载...' + count + '/' + results.length)
				}
            })
        })
    },	
	
	addAnimationData(node)
	{
		let self = this
		this.animationControlMap = {}
		let folder = "db://assets/Animation"
		this.loadAnimationControl(folder, function(){
			self.setAnimationData(node)
		})		
	},
	
	setAnimationData(node){
		let AnimationController = node.getComponent("AnimationController")
		if (AnimationController != null)
		{
			let path1 = "db://assets/" + AnimationController.dataPath + "/" + AnimationController.dataName
			path1 = path1.replace(".", "_")
			if (this.animationControlMap[path1])
			{
				let jsonData = this.animationControlMap[path1]
				AnimationController.data = jsonData
			}
			else
			{
				Editor.log("not find control " + path1)
			}
		}

		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			this.setAnimationData(children[i])
		}
	},
	
	

    // main.js中可以打印出完整结构
    show(any) {
        Editor.Ipc.sendToMain('prefab-creator:show', any)
    }
};