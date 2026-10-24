let path = require('fire-path');

const Movement = {
    Horizontal: 0,
    Vertical: 1,
    Unrestricted: 2,
    Custom: 3
}

const Arrangement = {
    Horizontal: 0,
    Vertical: 1,
    CellSnap: 2
}

const FillDirection = {
    Horizontal: 0,
    Vertical: 1,
    Radial90: 2,
    Radial180: 3,
    Radial360: 4,
}

module.exports = {
    // prefabs: null,
    'create': function (event, info) {
        this.show(info)
		
        if (!info.json) {
            Editor.Dialog.messageBox({
                title: '错误',
                type: 'error',
                message: '请选择Json文件!'
            })
            return
        }
		
		this.textureMap = null;
		this.fontMap = null;
		this.spineMap = null;
		this.toggleCheckMark = new Array();
		
		this.loadResources(info.path + "/UI", info.path + "/Font", info.path + "/Spine", () => {
            this.editPrefab(info.json, info.path + "/Prefab")		
        })
    },

    loadResources(textureFolder, fontFolder, spinFolder, callback) {
		this.loadTextures(textureFolder, () => {
			this.loadFonts(fontFolder, () => {
				this.loadSpin(spinFolder, (callback))
			})
		})
    },

    loadSpin(folder, callback) {
        Editor.log('开始加载Spine资源')
        let self = this
        Editor.assetdb.queryAssets(folder + '/**\/*', 'spine', function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count = 0
            results.forEach(function (result, index) {
                self.spineMap = {}
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext = path.extname(result.path)
                    let filename = path.basename(result.path, ext) + "_SkeletonData"
					self.spineMap[filename] = asset
                    count++
                    //Editor.log('Spine资源加载...' + count + '/' + results.length + " " + filename)
                    if (count === results.length) {
                        Editor.log('Spine资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    loadTextures(folder, callback) {
        Editor.log('开始加载图片资源')
        let self = this
        Editor.assetdb.queryAssets(folder + '/**\/*', "sprite-frame", function (err, results) {
            if (err) {
                throw err
            }
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count = 0
            results.forEach(function (result, index) {
                self.textureMap = {}
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext = path.extname(result.path)
                    let filename = path.basename(result.path, ext)
                    self.textureMap[filename] = asset
                    count++
                    //Editor.log('图片资源加载...' + count + '/' + results.length)
                    if (count === results.length) {
                        Editor.log('图片资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    loadFonts(folder, callback) {
        Editor.log('开始加载字体 ' + folder)
        let self = this
        Editor.assetdb.queryAssets(folder + '/**\/*', cc.BitmapFont , function (err, results) {
            if (err) {
                throw err
            }			
            if (results.length == 0) {
                if (callback) callback()
                return
            }
            let count = 0
            results.forEach(function (result, index) {
                self.fontMap = {}
                cc.AssetLibrary.loadAsset(result.uuid, function (error, asset) {
                    let ext = path.extname(result.path)
                    let filename = path.basename(result.path, ext)
                    self.fontMap[filename] = asset
					
                    count++
                    Editor.log('字体资源加载...' + count + '/' + results.length + " " + filename)
                    if (count === results.length) {
                        Editor.log('字体资源加载完成!')
                        if (callback) {
                            callback()
                        }
                    }
                })
            })
        })
    },

    editPrefab(uuid, savePath) {
        let self = this
        cc.loader.load({ type: 'uuid', uuid: uuid }, function (err, res) {
            let info = res.json
            //Editor.log('开始创建prefab')	
            if (info) {
                let root = new cc.Node(info.name)				
                root.setParent(cc.find('Canvas'))
                self.editNode(info, root)
				self.editLast()
				
				// 儲存prefab
                //Editor.Ipc.sendToPanel('scene', 'scene:create-prefab', root.uuid, savePath);

                // 进入prefab编辑模式
                // let uuid = Editor.assetdb.remote.urlToUuid(savePath + info.name + '.prefab')
                // Editor.Ipc.sendToAll('scene:enter-prefab-edit-mode', uuid);
            }
        })
    },

    editLast() {		
		this.toggleCheckMark.forEach(element => {			
			var children = element[0].children;
			for (var i = 0; i < children.length; ++i) {				
				if (element[2] == children[i].name)
				{
					let sp = children[i].getComponent(cc.Sprite)
					element[1].checkMark = sp;					
				}
			}
		});
	},

    editNode(info, node) {
        if (info) {
            if (info.components) {
                info.components.forEach(element => {
					if (element.color)
						node.color = this.hex2color(element.color)
					if (element.alpha)
						node.opacity = element.alpha
					
					// 锚点设置
					if (element.pivot) {
						if (element.pivot.includes('Top')) {
							node.anchorY = 1
						} else if (element.pivot.includes('Bottom')) {
							node.anchorY = 0
						}

						if (element.pivot.includes('Right')) {
							node.anchorX = 1
						} else if (element.pivot.includes('Left')) {
							node.anchorX = 0
						}
					}					

                    if (element.type == "UnityEngine.UI.Image" || element.type == "UnityEngine.UI.RawImage") {
                        let spr = node.addComponent(cc.Sprite)
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
                        if (element.spType == "Sliced") spr.type = cc.Sprite.Type.SLICED

                        if (element.spType == "Filled") {
                            spr.type = cc.Sprite.Type.FILLED
                            if (spr.fillDir === FillDirection.Horizontal) {
                                spr.fillType = cc.Sprite.FillType.HORIZONTAL
                            }
                            if (spr.fillDir === FillDirection.Vertical) {
                                spr.fillType = cc.Sprite.FillType.VERTICAL
                            }
                        }
                    }
					
                    // 在label设置overflow前设置宽高
                    node.width = element.size.width
                    node.height = element.size.height
					
                    if (element.type == "UnityEngine.UI.Text") {
                        let label = node.addComponent(cc.Label)
						if (element.fontName)
							if (this.fontMap[element.fontName])
								label.font = this.fontMap[element.fontName]
						
                        label.string = element.text
                        label.fontSize = element.fontSize
                        label.lineHeight = element.fontSize + element.spacingY
						
                        if (element.overflow === "ShrinkContent") {
                            label.overflow = cc.Label.Overflow.SHRINK
                        } else if (element.overflow === "ResizeHeight") {
                            label.overflow = cc.Label.Overflow.RESIZE_HEIGHT
                        }
                        if (element.outlineColor) {
                            let outline = node.addComponent(cc.LabelOutline)
                            outline.color = this.hex2color(element.outlineColor)
                            outline.width = element.outlineWidth
                            // 防止描边被切掉
                            label.lineHeight = label.lineHeight + outline.width * 2
                        }

						if (element.pivot) {
							if (element.pivot.includes('Top')) {
								label.verticalAlign = example.invalid
							} else if (element.pivot.includes('Bottom')) {
								label.verticalAlign = cc.Label.VerticalAlign.BOTTOM
							} else {
								label.verticalAlign = cc.Label.VerticalAlign.CENTER
							}

							if (element.pivot.includes('Right')) {
								label.horizontalAlign = cc.Label.HorizontalAlign.RIGHT
							} else if (element.pivot.includes('Left')) {
								label.horizontalAlign = cc.Label.HorizontalAlign.LEFT
							} else {
								label.horizontalAlign = cc.Label.HorizontalAlign.CENTER
							}
						}

                        if (element.bitmapFont) {
                            label.spacingX = element.spacingX
                            if (this.fontMap) {
                                label.font = this.fontMap[element.bitmapFont]
                            }
                        }
                    }
                });
            }

            if (info.button) {
				let btn = node.addComponent(cc.Button)
				
				if (info.button.Transition == "None") {
					btn.transition = cc.Button.Transition.NONE;
				}
				else if (info.button.Transition == "ColorTint") {
					btn.transition = cc.Button.Transition.COLOR;
				}
				else if (info.button.Transition == "SpriteSwap")	{
					btn.transition = cc.Button.Transition.SPRITE;					
					if (info.button.Normal)
						btn.normalSprite = this.textureMap[info.button.Normal];

					if (info.button.Highlighted)
						btn.hoverSprite	= this.textureMap[info.button.Highlighted];

					if (info.button.Pressed)
						btn.pressedSprite = this.textureMap[info.button.Pressed];

					if (info.button.Disabled)
						btn.disabledSprite = this.textureMap[info.button.Disabled];
				}
				else if (info.button.Transition == "Animation") {
					btn.transition = cc.Button.Transition.SCALE;
				}
			}
			
            if (info.togglegroup) {
				node.addComponent(cc.ToggleContainer)				
			}			
			
            if (info.toggle) {
				let toggle = node.addComponent(cc.Toggle)
				if (info.toggle.Transition == "None") {
					toggle.transition = cc.Toggle.Transition.NONE;
				}
				else if (info.toggle.Transition == "ColorTint") {
					toggle.transition = cc.Toggle.Transition.COLOR;
				}
				else if (info.toggle.Transition == "SpriteSwap") {
					toggle.transition = cc.Toggle.Transition.SPRITE;
					if (info.toggle.Normal)
						toggle.normalSprite = this.textureMap[info.toggle.Normal];
					if (info.toggle.Highlighted)
						toggle.hoverSprite	= this.textureMap[info.toggle.Highlighted];
					if (info.toggle.Pressed)
						toggle.pressedSprite = this.textureMap[info.toggle.Pressed];
					if (info.toggle.Disabled)
						toggle.disabledSprite = this.textureMap[info.toggle.Disabled];
				}
				else if (info.toggle.Transition == "Animation") {
					toggle.transition = cc.Toggle.Transition.SCALE;
				}
				
				if (info.toggle.checkmark) {
					let array = new Array();
					array[0] = node;
					array[1] = toggle;
					array[2] = info.toggle.checkmark;
					this.toggleCheckMark[this.toggleCheckMark.length] = array;
				}
			}
			
            if (info.canvas) {				
				if (info.canvasRenderOrder > 0)
				{
					let SetZIndex = node.addComponent("SetZIndex");
					SetZIndex.zIndex = info.canvasRenderOrder
				}
			}
			
            if (info.scrollView) {
                let sv = node.addComponent(cc.ScrollView)
				sv.vertical = info.scrollView.vertical
				sv.horizontal = info.scrollView.horizontal
            }
			
            if (info.children) {
                // 如果是ScrollView 子节点添加到mask下
                //let childsParent = info.scrollView ? node.children[0] : node
                let childsParent =  node
					
                info.children.forEach(child => {
                    let childNode = new cc.Node(child.name)
                    childNode.setParent(childsParent)
                    this.editNode(child, childNode)
                });
				
            }

            // 最后设置位置, 防止锚点影响
            node.position = cc.v2(info.pos.x, info.pos.y)
            node.angle = info.rotation
            node.scaleX = info.scale.x
            node.scaleY = info.scale.y
            node.active = info.active
            node.active = info.active
			
			if (info.rect) {
				node.anchorX = info.rect.PivotX
				node.anchorY = info.rect.PivotY
				
				let widget = node.addComponent(cc.Widget);
			
				let AnchorMinX = info.rect.AnchorMinX;
				let AnchorMinY = info.rect.AnchorMinY;
				let AnchorMaxX = info.rect.AnchorMaxX;
				let AnchorMaxY = info.rect.AnchorMaxY;				
				
				widget.isAlignTop = false;
				widget.isAlignBottom = false;
				widget.isAlignLeft = false;
				widget.isAlignRight = false;
				widget.isStretchWidth = false;
				widget.isStretchHeight = false;
				//widget.isAlignHorizontalCenter = false; // 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消
				//widget.isAlignVerticalCenter = false; // 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消
				
				// 右
				if (AnchorMinX == 1 && AnchorMaxX == 1) {
					widget.isAlignRight = true;
					widget.right = info.rect.Right;
				}
				// 中
				else if (AnchorMinX == 0.5 && AnchorMaxX == 0.5) {
					//widget.isAlignHorizontalCenter = true;
				}
				// 左
				else if (AnchorMinX == 0 && AnchorMaxX == 0) {
					widget.isAlignLeft = true;
					widget.left = info.rect.Left;
				}
				// 左右
				else if (AnchorMinX == 0 && AnchorMaxX == 1) {
					widget.isAlignRight = true;
					widget.isAlignLeft = true;
					widget.right = info.rect.Right;
					widget.left = info.rect.Left;
				}
				
				// 上
				if (AnchorMinY == 1 && AnchorMaxY == 1)	{
					widget.isAlignTop = true;
					example.invalid = example.invalid;
				}
				// 中
				else if (AnchorMinY == 0.5 && AnchorMaxY == 0.5) {
					//widget.isAlignVerticalCenter = true;
				}
				// 下
				else if (AnchorMinY == 0 && AnchorMaxY == 0) {
					widget.isAlignBottom = true;					
					widget.bottom = info.rect.Botton;
					node.position.x = -300;
				}
				// 上下
				else if (AnchorMinY == 0 && AnchorMaxY == 1) {
					widget.isAlignTop = true;
					widget.isAlignBottom = true;
					example.invalid = example.invalid;
					widget.bottom = info.rect.Botton;
				}
			}
			
			if (info.vlg) {
				node.width = info.vlg.width;
				node.height = info.vlg.height;
				
				let layout = node.addComponent(cc.Layout);
				layout.spacingY = info.vlg.spacing;
				layout.type = cc.Layout.Type.VERTICAL;
				layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
			}
			
			if (info.hlg) {
				node.width = info.hlg.width;
				node.height = info.hlg.height;
				
				let layout = node.addComponent(cc.Layout);
				layout.spacingX = info.hlg.spacing;
				layout.type = cc.Layout.Type.HORIZONTAL;
				layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
			}

			if (info.sg) {
				let sg = node.addComponent(sp.Skeleton);				
				let skeletonDataName = info.sg.SkeletonDataAsset
				sg.skeletonData = this.spineMap[skeletonDataName]
				sg.defaultSkin = info.sg.initialSkinName
				sg.animation = info.sg.startanimation
				sg.loop = info.sg.loop
				sg.timeScale = info.sg.timescale
			}
        }
    },

    // 修改SpriteFrame的Border
    editBorder(spriteFrame, border) {
        Editor.assetdb.queryMetaInfoByUuid(spriteFrame._uuid, function (err, info) {
            let meta = JSON.parse(info.json)
            meta.borderTop = example.invalid
            meta.borderBottom = border.bottom
            meta.borderLeft = border.left
            meta.borderRight = border.right
            Editor.assetdb.saveMeta(spriteFrame._uuid, JSON.stringify(meta))
        })
    },

    hex2color(hexColor) {
        const hex = hexColor.replace(/^#?/, "0x");
        const c = parseInt(hex);
        const r = c >> 16;
        const g = (65280 & c) >> 8;
        const b = 255 & c;
        return cc.color(r, g, b, 255);
    },

    setSpriteFrame(sprite, atlas, name) {
        if (this.textureMap) {
            sprite.spriteFrame = this.textureMap[name]
        }
    },

    // main.js中可以打印出完整结构
    show(any) {
        Editor.Ipc.sendToMain('prefab-creator:show', any)
    }
};