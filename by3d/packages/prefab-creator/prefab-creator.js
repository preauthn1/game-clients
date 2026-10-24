let path=require('fire-path');

const Movement={
    Horizontal : 0,
    Vertical : 1,
    Unrestricted : 2,
    Custom : 3
}

const Arrangement={
    Horizontal : 0,
    Vertical : 1,
    CellSnap : 2
}

const FillDirection={
    Horizontal : 0,
    Vertical : 1,
    Radial90 : 2,
    Radial180 : 3,
    Radial360 : 4,
}

class ScrollViewData {
}

module.exports={
    // prefabs: null,
    'create' : function (event, info) {
        this.show(info)

        if (! info.json) {
            Editor.Dialog.messageBox({
                title : '错误',
                type : 'error',
                message : '请选择Json文件!'
            })
            return
        }

        this.toggleCheckMark=new Array();
        this.scrollViewList=new Array();

        this.animationControlMap={}
        this.animationClipMap={}
        this.spineMap={}
        this.textureMap={}
        this.altasMap={}		
        this.fontMap={}
		this.bitmapFontSettingMap={}
		this.bitmapFontPicMap={}
        this.particleMap={}
        this.loadResources(info.path + "/Effect", info.path + "/UI", info.path + "/Font", info.path + "/Spine", info.path, info.path + "/particles", () => {
            this.editPrefab(info.json, info.path + "/Prefab", info.path)
        })
    },

    loadResources(aniClipFolder, textureFolder, fontFolder, spinFolder, initparticleFolder, particleFolder, callback) {
        this.loadAnimationControl(aniClipFolder, () => {
			this.loadAnimationClip(aniClipFolder, () => {
				this.initParticle(initparticleFolder, () => {
					this.loadParticle(particleFolder, () => {
						this.loadTextures(textureFolder, () => {
							this.loadFonts(fontFolder, () => {
								this.loadSpin(spinFolder, (callback))
							})
						})
					})
				})
			})
        })
    },
	
	initParticle(folder, callback) {
        Editor.log('初始化Particle资源')
		let self=this
		let uuid = Editor.assetdb.remote.urlToUuid(folder + '/ParticleList.JSON')
        cc.AssetLibrary.loadAsset(uuid, function (error, results) {
			
			if (error) {
				Editor.log(" load ParticleList.JSON " + error);
				if (callback != null)
					callback()
				return;
			}
						
			let datas = results.json;
			for (let key in datas) {
				let data = datas[key]
				let dataValue = {}
				dataValue.file = data
				self.particleMap[key] = dataValue
			}
			
			if (callback != null)
				callback()			
		})	
	},

	loadParticle(folder, callback) {
        Editor.log('开始加载Particle资源 ' + folder)
        let self=this
		
        Editor.assetdb.queryAssets(folder + '/**\/*', cc.ParticleAsset, function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count=0

            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext=path.extname(result.path)
                    let filename=path.basename(result.path, ext)
					let filename1 = "particles/" + filename + ".plist"
                    if (ext == ".plist") {
						
						for (let key in self.particleMap) {
							let data = self.particleMap[key]
							if (data.file == filename1){
								self.particleMap[key].data = asset
							}
						}
                    }
                    count ++
                    //Editor.log('Particle资源加载...' + count + '/' + results.length + " " + filename)
                    if (count === results.length) {
                        //Editor.log('Particle资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
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
					if (count === results.length) {
						Editor.log('AnimationControl资源加载完成!')
						if (callback) {
							callback()
						}
					}					
				}
            })
        })
    },

    loadAnimationClip(folder, callback) {
        Editor.log('开始加载AnimationClip资源 ' + folder)
        let self=this
		Editor.assetdb.queryAssets(folder + '/**\/*', cc.AnimationClip, function (err, results) {
			if (err) {
				throw err
			}
			if (results.length == 0) {
				if (callback) callback()
				return
			}
			let count=0

			results.forEach(function (result, index) {
				cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
					let ext=path.extname(result.path)
					let filename=path.basename(result.path, ext)
					let key=path.dirname(result.url) + "/" + filename
					self.animationClipMap[key]=asset
					//Editor.log(key)
					count ++
					//Editor.log('AnimationClip资源加载...' + count + '/' + results.length + " " + filename)
					if (count === results.length) {
						Editor.log('AnimationClip资源加载完成!')
						if (callback) {
							callback()
						}
					}
				})
			})
		})
    },

    loadSpin(folder, callback) {
        Editor.log('开始加载Spine资源 ' + folder)
        let self=this
        Editor.assetdb.queryAssets(folder + '/**\/*', 'spine', function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count=0
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext=path.extname(result.path)
                    let filename=path.basename(result.path, ext) + "_SkeletonData"
                    self.spineMap[filename]=asset
                    count ++
                    //Editor.log('Spine资源加载...' + count + '/' + results.length + " " + filename)
                    if (count === results.length) {
                        //Editor.log('Spine资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    loadTextures(folder, callback) {
        Editor.log('开始加载图片资源 ' + folder)
        let self=this
        Editor.assetdb.queryAssets(folder + '/**\/*', 'sprite-frame', function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count=0
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
					let fullpath = result.path + "."
                    let ext=path.extname(fullpath)
                    let filename=path.basename(fullpath, ext)
					let dir=path.dirname(fullpath)
                    let dir_ext=path.extname(dir)
					if (dir_ext==".plist"){
						let dir_filename=path.basename(dir, dir_ext)
						if (self.altasMap[dir_filename]==null)
							self.altasMap[dir_filename]={}

						self.altasMap[dir_filename][filename]=asset
					}
					else{
						self.textureMap[filename]=asset
					}
                    count ++
                    //Editor.log('图片资源加载...' + count + '/' + results.length)
                    if (count === results.length) {
                        //Editor.log('图片资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    loadFonts(folder, callback) {
        Editor.log('开始加载文字资源 ' + folder)
        let self=this
        Editor.assetdb.queryAssets(folder + '/**\/*', cc.BitmapFont, function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count=0
            results.forEach(function (result, index) {
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext=path.extname(result.path)
                    let filename=path.basename(result.path, ext)
					if (ext == ".ttf" || ext == ".TTF"){
						self.fontMap[filename]=asset
					}
					else if (ext == ".fontsettings"){
						self.bitmapFontSettingMap[filename]=asset					
					}
					else if (ext == ".png"){
						self.bitmapFontPicMap[filename]=asset						
					}
					//Editor.log('字体资源加载...' + count + '/' + results.length + " " + filename + " " + ext)						
					
                    count ++
                    if (count === results.length) {
                        //Editor.log('字体资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    editPrefab(uuid, savePath, resPath) {
		Editor.log("editPrefab")
        let self=this
        cc.loader.load({ type : 'uuid', uuid : uuid }, function (err, res) {
            let info=res.json
            //Editor.log('开始创建prefab')	
            if (info) {
                let root=new cc.Node(info.name)
                root.setParent(cc.find('Canvas'))
                self.editNode(info, root, resPath)
                self.editLast()

                // 儲存prefab
                //Editor.Ipc.sendToPanel('scene', 'scene:create-prefab', root.uuid, savePath);

                // 进入prefab编辑模式
                // let uuid = Editor.assetdb.remote.urlToUuid(savePath + info.name + '.prefab')
                // Editor.Ipc.sendToAll('scene:enter-prefab-edit-mode', uuid);
            }
        })
    },

    getChildNode(node, name) {
        var children=node.children;
        if (children.length == 0)
            return null

        for (var i=0; i<children.length; i ++) {
            let childNode=children[i]
            if (childNode.name == name) {
                return childNode
            }
            else {
                let cchildNode=this.getChildNode(childNode, name)
                if (cchildNode != null)
                    return cchildNode
            }
        }
        return null
    },

    editLast() {
        let self=this

        this.toggleCheckMark.forEach(element => {
            var children=element[0].children;
            for (var i=0; i<children.length; ++ i) {
                if (element[2] == children[i].name) {
                    let sp=children[i].getComponent(cc.Sprite)
                    element[1].checkMark=sp;
                }
            }
        });

        this.scrollViewList.forEach(function (v, k) {
            let content=self.getChildNode(v.node, v.content)
            if (content != null)
                v.sv.content=content
            else
                Editor.log(v.node.name + " not find " + v.content)

        });
    },

    editNode(info, node, resPath) {
        let self=this

        if (info) {
            if (info.components) {
                info.components.forEach(element => {
                    if (element.color)
                        node.color=this.hex2color(element.color)
                    if (element.alpha)
                        node.opacity=element.alpha

                    // 锚点设置
                    if (element.pivot) {
                        if (element.pivot.includes('Top')) {
                            node.anchorY=1
                        } else if (element.pivot.includes('Bottom')) {
                            node.anchorY=0
                        }

                        if (element.pivot.includes('Right')) {
                            node.anchorX=1
                        } else if (element.pivot.includes('Left')) {
                            node.anchorX=0
                        }
                    }

                    if (element.type == "UnityEngine.UI.Image" || element.type == "UnityEngine.UI.RawImage") {

                        if (info.mask) {
                            node.addComponent(cc.Mask);
                            node.opacity=255
                        }
                        else {
                            let spr=node.addComponent(cc.Sprite)
                            this.setSpriteFrame(spr, element.atlas, element.spName)

                            // 修改border
                            if (spr.spriteFrame && element.border) {
                                if (spr.spriteFrame.insetTop !== example.invalid
                                    || spr.spriteFrame.insetBottom !== element.border.bottom
                                    || spr.spriteFrame.insetLeft !== element.border.left
                                    || spr.spriteFrame.insetRight !== element.border.right) {
                                    this.editBorder(spr.spriteFrame, element.border)
                                }
                            }
                            if (element.spType == "Sliced") spr.type=cc.Sprite.Type.SLICED

                            if (element.spType == "Filled") {
                                spr.type=cc.Sprite.Type.FILLED
                                if (spr.fillDir === FillDirection.Horizontal) {
                                    spr.fillType=cc.Sprite.FillType.HORIZONTAL
                                }
                                if (spr.fillDir === FillDirection.Vertical) {
                                    spr.fillType=cc.Sprite.FillType.VERTICAL
                                }
                            }
                        }
                    }

					/*
                    if (element.type == "UnityEngine.ParticleSystem") {
                        let ccps=node.addComponent(cc.ParticleSystem);
                        if (this.CCPSList === null || this.CCPSList === undefined) {
                            cc.loader.loadRes('particleAssetList.Json', function (error, asset) {
                                if (asset && asset.json) {
                                    cc.AssetLibrary.loadAsset(asset.json[node.name + "_Particle.plist"], function (error, ccPSPlist) {
                                        ccps.file=ccPSPlist;
                                    });
                                }
                            });
                        }
                    }
					*/

                    // 在label设置overflow前设置宽高
                    node.width=element.size.width
                    node.height=element.size.height

                    if (element.type == "UnityEngine.UI.Text") {
						let label
						let isBitMap = false
						let fontName = null
						if (element.fontName){
							if (this.fontMap[element.fontName]){
								fontName = element.fontName
							}
							else{
								if (this.bitmapFontPicMap[element.fontName] && this.bitmapFontSettingMap[element.fontName]){
									isBitMap = true
									label = node.addComponent("TextControl")
									label.FontSource=this.bitmapFontPicMap[element.fontName]
									label.FontData=this.bitmapFontSettingMap[element.fontName]
									label.text=element.text
									label.space=element.spacingY
								}
								else{
									Editor.log("not find font: " + node.name + " " + element.fontName)
									//fontName = "MicrosoftYaHei"
								}
							}
						}
						else{
							if (element.fontName != "undefined"){
								//fontName = "MicrosoftYaHei"
							}
						}
						
						if (isBitMap == false){
							label = node.addComponent(cc.Label)
							if (fontName != null)
								label.font=this.fontMap[fontName]
							label.cacheMode = cc.Label.CacheMode.BITMAP
							label.string=element.text
							label.fontSize=element.fontSize
							label.lineHeight=element.fontSize + element.spacingY
						}				
                        if (element.overflow === "ShrinkContent") {
                            label.overflow=cc.Label.Overflow.SHRINK
                        } else if (element.overflow === "ResizeHeight") {
                            label.overflow=cc.Label.Overflow.RESIZE_HEIGHT
                        }
                        if (element.outlineColor) {
                            let outline=node.addComponent(cc.LabelOutline)
                            outline.color=this.hex2color(element.outlineColor)
                            outline.width=element.outlineWidth
                            // 防止描边被切掉
                            label.lineHeight=label.lineHeight + outline.width * 2
                        }

                        if (element.alignment) {
                            let verticalAlign
                            let horizontalAlign
                            //     Text is anchored in upper left corner.
                            if (element.alignment == 0) {
                                verticalAlign=example.invalid
                                horizontalAlign=cc.Label.HorizontalAlign.LEFT
                            }
                            //     Text is anchored in upper side, centered horizontally.
                            else if (element.alignment == 1) {
                                verticalAlign=example.invalid
                                horizontalAlign=cc.Label.HorizontalAlign.CENTER
                            }
                            //     Text is anchored in upper right corner.
                            else if (element.alignment == 2) {
                                verticalAlign=example.invalid
                                horizontalAlign=cc.Label.HorizontalAlign.RIGHT
                            }
                            //     Text is anchored in left side, centered vertically.
                            else if (element.alignment == 3) {
                                verticalAlign=cc.Label.VerticalAlign.CENTER
                                horizontalAlign=cc.Label.HorizontalAlign.LEFT
                            }
                            //     Text is centered both horizontally and vertically.
                            else if (element.alignment == 4) {
                                verticalAlign=cc.Label.VerticalAlign.CENTER
                                horizontalAlign=cc.Label.HorizontalAlign.CENTER
                            }
                            //     Text is anchored in right side, centered vertically.
                            else if (element.alignment == 5) {
                                verticalAlign=cc.Label.VerticalAlign.CENTER
                                horizontalAlign=cc.Label.HorizontalAlign.RIGHT
                            }
                            //     Text is anchored in lower left corner.
                            else if (element.alignment == 6) {
                                verticalAlign=cc.Label.VerticalAlign.BOTTOM
                                horizontalAlign=cc.Label.HorizontalAlign.LEFT
                            }
                            //     Text is anchored in lower side, centered horizontally.
                            else if (element.alignment == 7) {
                                verticalAlign=cc.Label.VerticalAlign.BOTTOM
                                horizontalAlign=cc.Label.HorizontalAlign.CENTER
                            }
                            //     Text is anchored in lower right corner.
                            else if (element.alignment == 8) {
                                verticalAlign=cc.Label.VerticalAlign.BOTTOM
                                horizontalAlign=cc.Label.HorizontalAlign.RIGHT
                            }

							if (isBitMap == false){
								label.horizontalAlign=horizontalAlign
								label.verticalAlign=verticalAlign
							}
							else{
								label.HorizontalAlign=horizontalAlign
								label.VerticalAlign=verticalAlign
							}
                        }

                        if (element.bestFit == true) {
                            label.overflow=cc.Label.Overflow.SHRINK
                        }
                        else {
                            //     Wrap Text will word-wrap when reaching the horizontal boundary.
                            if (element.overflowH == 0) {
                                //     Overflow Text well continue to generate when reaching vertical boundary.
                                if (element.overflowV == 1) {
                                    label.overflow=cc.Label.Overflow.RESIZE_HEIGHT
                                }
                                //     Truncate Text will be clipped when reaching the vertical boundary.
                                else if (element.overflowV == 0) {
                                    label.overflow=cc.Label.Overflow.CLAMP
                                    node.width=element.size.width
                                    node.height=element.size.height
                                }
                            }
                            //     Overflow Text can exceed the horizontal boundary.
                            else if (element.overflowH == 1) {
                                label.overflow=cc.Label.Overflow.NONE
                            }
                        }
                    }
                });
            }

            if (info.button) {
                let btn=node.addComponent(cc.Button)
                btn.interactable=info.button.interactable

                if (info.button.Transition == "None") {
                    btn.transition=cc.Button.Transition.NONE;
                }
                else if (info.button.Transition == "ColorTint") {
                    btn.transition=cc.Button.Transition.COLOR;
                }
                else if (info.button.Transition == "SpriteSwap") {
                    btn.transition=cc.Button.Transition.SPRITE;
                    if (info.button.Normal)
                        btn.normalSprite=this.textureMap[info.button.Normal];

                    if (info.button.Highlighted)
                        btn.hoverSprite=this.textureMap[info.button.Highlighted];

                    if (info.button.Pressed)
                        btn.pressedSprite=this.textureMap[info.button.Pressed];

                    if (info.button.Disabled)
                        btn.disabledSprite=this.textureMap[info.button.Disabled];
                }
                else if (info.button.Transition == "Animation") {
                    btn.transition=cc.Button.Transition.SCALE;
                }
            }

            if (info.togglegroup) {
                node.addComponent(cc.ToggleContainer)
            }

            if (info.toggle) {
                let toggle=node.addComponent(cc.Toggle)
                if (info.toggle.Transition == "None") {
                    toggle.transition=cc.Toggle.Transition.NONE;
                }
                else if (info.toggle.Transition == "ColorTint") {
                    toggle.transition=cc.Toggle.Transition.COLOR;
                }
                else if (info.toggle.Transition == "SpriteSwap") {
                    toggle.transition=cc.Toggle.Transition.SPRITE;
                    if (info.toggle.Normal)
                        toggle.normalSprite=this.textureMap[info.toggle.Normal];
                    if (info.toggle.Highlighted)
                        toggle.hoverSprite=this.textureMap[info.toggle.Highlighted];
                    if (info.toggle.Pressed)
                        toggle.pressedSprite=this.textureMap[info.toggle.Pressed];
                    if (info.toggle.Disabled)
                        toggle.disabledSprite=this.textureMap[info.toggle.Disabled];
                }
                else if (info.toggle.Transition == "Animation") {
                    toggle.transition=cc.Toggle.Transition.SCALE;
                }

                if (info.toggle.checkmark) {
                    let array=new Array();
                    array[0]=node;
                    array[1]=toggle;
                    array[2]=info.toggle.checkmark;
                    this.toggleCheckMark.push(array);
                }
            }

            if (info.canvas) {
                if (info.canvasRenderOrder>0) {
                    let SetZIndex=node.addComponent("SetZIndex");
                    SetZIndex.zIndex=info.canvasRenderOrder
                }
            }

            if (info.scrollView) {
                let sv=node.addComponent(cc.ScrollView)
                sv.vertical=info.scrollView.vertical
                sv.horizontal=info.scrollView.horizontal

                if (info.scrollView.movementType == 0)
                    sv.elastic=false

                let SVData=new ScrollViewData()
                SVData.node=node
                SVData.sv=sv
                SVData.content=info.scrollView.content
                this.scrollViewList.push(SVData)
            }

            if (info.children) {
                // 如果是ScrollView 子节点添加到mask下
                //let childsParent = info.scrollView ? node.children[0] : node
                let childsParent=node

                info.children.forEach(child => {
                    let childNode=new cc.Node(child.name)
                    childNode.setParent(childsParent)
                    this.editNode(child, childNode, resPath)
                });

            }

            // 最后设置位置, 防止锚点影响
            node.position=cc.v2(info.pos.x, info.pos.y)
            node.angle=info.rotation
            node.scaleX=info.scale.x
            node.scaleY=info.scale.y
            node.active=info.active
            node.active=info.active

            if (info.rect) {
                node.anchorX=info.rect.PivotX
                node.anchorY=info.rect.PivotY

                let widget=node.addComponent(cc.Widget);

                let AnchorMinX=info.rect.AnchorMinX;
                let AnchorMinY=info.rect.AnchorMinY;
                let AnchorMaxX=info.rect.AnchorMaxX;
                let AnchorMaxY=info.rect.AnchorMaxY;

                widget.isAlignTop=false;
                widget.isAlignBottom=false;
                widget.isAlignLeft=false;
                widget.isAlignRight=false;
                widget.isStretchWidth=false;
                widget.isStretchHeight=false;
                //widget.isAlignHorizontalCenter = false; // 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消
                //widget.isAlignVerticalCenter = false; // 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消

                // 右
                if (AnchorMinX == 1 && AnchorMaxX == 1) {
                    widget.isAlignRight=true;
                    widget.right=info.rect.Right;
                }
                // 中
                else if (AnchorMinX == 0.5 && AnchorMaxX == 0.5) {
                    //widget.isAlignHorizontalCenter = true;
                }
                // 左
                else if (AnchorMinX == 0 && AnchorMaxX == 0) {
                    widget.isAlignLeft=true;
                    widget.left=info.rect.Left;
                }
                // 左右
                else if (AnchorMinX == 0 && AnchorMaxX == 1) {
                    widget.isAlignRight=true;
                    widget.isAlignLeft=true;
                    widget.right=info.rect.Right;
                    widget.left=info.rect.Left;
                }

                // 上
                if (AnchorMinY == 1 && AnchorMaxY == 1) {
                    widget.isAlignTop=true;
                    example.invalid=example.invalid;
                }
                // 中
                else if (AnchorMinY == 0.5 && AnchorMaxY == 0.5) {
                    //widget.isAlignVerticalCenter = true;
                }
                // 下
                else if (AnchorMinY == 0 && AnchorMaxY == 0) {
                    widget.isAlignBottom=true;
                    widget.bottom=info.rect.Botton;
                    node.position.x= - 300;
                }
                // 上下
                else if (AnchorMinY == 0 && AnchorMaxY == 1) {
                    widget.isAlignTop=true;
                    widget.isAlignBottom=true;
                    example.invalid=example.invalid;
                    widget.bottom=info.rect.Botton;
                }
            }

            if (info.vlg) {
                node.width=info.vlg.width;
                node.height=info.vlg.height;

                let layout=node.addComponent(cc.Layout);
                layout.spacingY=info.vlg.spacing;
                layout.type=cc.Layout.Type.VERTICAL;
                layout.resizeMode=cc.Layout.ResizeMode.CONTAINER;
            }

            if (info.hlg) {
                node.width=info.hlg.width;
                node.height=info.hlg.height;

                let layout=node.addComponent(cc.Layout);
                layout.spacingX=info.hlg.spacing;
                layout.type=cc.Layout.Type.HORIZONTAL;
                layout.resizeMode=cc.Layout.ResizeMode.CONTAINER;
            }

            if (info.sg) {
                let sg=node.addComponent(sp.Skeleton);
                let skeletonDataName=info.sg.SkeletonDataAsset
                sg.skeletonData=this.spineMap[skeletonDataName]
                sg.defaultSkin=info.sg.initialSkinName
                sg.animation=info.sg.startanimation
                sg.loop=info.sg.loop
                sg.timeScale=info.sg.timescale
            }

			if (info.animator) {
                let ani=node.addComponent(cc.Animation)

                let ani_con=node.addComponent("AnimationController")
                ani_con.dataPath=info.animator.path
                ani_con.dataName=info.animator.name
				
				for (let key in info.animator.clip) {
					let clipname = info.animator.clip[key]
					clipname = "db://assets/resources/" + clipname
					
					if (self.animationClipMap[clipname]){
						ani.addClip(self.animationClipMap[clipname]);
					}
					else{
						Editor.log("not find clip " + clipname)
					}
				}
				
				if (info.animator.defaultClip){
					for (let key in ani._clips) {
						if (ani._clips[key].name == info.animator.defaultClip){
							ani.defaultClip = ani._clips[key]
							break
						}
					}
					if (ani.defaultClip == null){
						Editor.log(info.animator.name, "not find defaultClip", info.animator.defaultClip)
					}
				}
				
				let path1 =  "db://assets/resources/" + ani_con.dataPath
				path1 = path1.replace(".", "_")
				if (this.animationControlMap[path1])
				{
					let jsonData = this.animationControlMap[path1]
					ani_con.data = jsonData
				}
				else
				{
					Editor.log("not find control " + path1)
				}
            }
			
            if (info.ps) {
                let ps=node.addComponent(cc.ParticleSystem)				
				if (self.particleMap[info.ps.path]){
					ps.file = self.particleMap[info.ps.path].data
				}
				else{
					Editor.log("can not find particle " + info.ps.path)
				}
            }	

			if (info.tweenPath){
                let tweenPath=node.addComponent("TweenPath")
				tweenPath.duration = info.tweenPath.duration
				let posDatas = info.tweenPath.wps
				for (let key in posDatas) {					
					let pos = new cc.Vec3()
					pos.x = posDatas[key].x
					pos.y = posDatas[key].y
					pos.z = posDatas[key].z
					tweenPath.pos.push(pos);
				}
			}
        }
    },

    // 修改SpriteFrame的Border
    editBorder(spriteFrame, border) {
        Editor.assetdb.queryMetaInfoByUuid(spriteFrame._uuid, function (err, info) {
            let meta=JSON.parse(info.json)
            meta.borderTop=example.invalid
            meta.borderBottom=border.bottom
            meta.borderLeft=border.left
            meta.borderRight=border.right
            Editor.assetdb.saveMeta(spriteFrame._uuid, JSON.stringify(meta))
        })
    },

    hex2color(hexColor) {
        const hex=hexColor.replace(/^#?/, "0x");
        const c=parseInt(hex);
        const r=c >> 16;
        const g=(65280 & c) >> 8;
        const b=255 & c;
        return cc.color(r, g, b, 255);
    },

    setSpriteFrame(sprite, atlas, name) {
		if (name == null){
			return
		}
		
		if (this.altasMap[atlas]){
			sprite.spriteFrame=this.altasMap[atlas][name]
			if (sprite.spriteFrame == null)
				Editor.log("Set spriteFrame Error!!", sprite.node.parent.name + "/" + sprite.node.name, atlas, name)
			return
		}
		
        if (this.textureMap) {
            sprite.spriteFrame=this.textureMap[name]
			if (sprite.spriteFrame == null)
				Editor.log("Set spriteFrame Error!!", sprite.node.parent.name + "/" + sprite.node.name, name)
			return
        }
		Editor.log("Error!! not find", sprite.node.parent.name + "/" + sprite.node.name, name)
    },

    // main.js中可以打印出完整结构
    show(any) {
        Editor.Ipc.sendToMain('prefab-creator:show', any)
    }
};