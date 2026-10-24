var utils      = {
    node : {
        /**
         * 将parentNode设置为childNode的父节点
         * @param {cc.Node} parentNode
         * @param {cc.Node} childNode
         */
        setParent(parentNode, childNode){
            if(parentNode == null){
                cc.error("parentNode is null")
                return;
            }
            
            if(childNode == null){
                cc.error("childNode is null")
                return;
            }
            
            if(childNode._parent == null){
                //cc.error("childNode.parent is null")
                childNode.parent = parentNode;
                return
            }
            
            if(parentNode === childNode) return;
            
            if(parentNode === childNode.parent) return;
            
            // keep world transform not changed
            let worldPos      = utils.node.getWorldPosition(childNode);
            let worldRotation = utils.node.getWorldRotation(childNode);
            let lossyScale    = utils.node.getWorldScale(childNode);
            
            childNode.parent = parentNode;
            
            // restore world transform
            utils.node.setWorldPosition(childNode, worldPos);
            utils.node.setWorldRotation(childNode, worldRotation);
            
            let parentWorldScale = utils.node.getWorldScale(parentNode);
            lossyScale.x /= parentWorldScale.x;
            lossyScale.y /= parentWorldScale.y;
            childNode.scale      = lossyScale;
        },
        
        /**
         * 获得node的世界坐标
         * @param {cc.Node} node
         * @returns {cc.Vec2}
         */
        getWorldPosition(node){
            return node.parent.convertToWorldSpaceAR(node.position);
        },
        
        /**
         * 将node设置到世界坐标worldPos处
         * @param {cc.Node} node
         * @param {cc.Vec2} worldPos
         */
        setWorldPosition(node, worldPos){
            var parent = node.parent;
            if(parent){
                node.position = parent.convertToNodeSpaceAR(worldPos);
            }else{
                node.position = worldPos;
            }
            return node.position;
        },
        
        /**
         * 获得node在世界坐标系下的旋转
         * @param {cc.Node} node
         * @return {float}
         */
        getWorldRotation(node){
            return utils.node.getNodeToWorldRotation(node.parent, node.angle);
        },
        
        /**
         * 将node设置为世界坐标系下旋转worldRotation的姿态
         * @param {cc.Node} node
         * @param {cc.Vec2} worldRotation
         */
        setWorldRotation(node, worldRotation){
            node.angle = utils.node.getWorldToNodeRotation(node.parent, worldRotation);
            return node.angle;
        },
        
        /**
         * 获得node在世界坐标下的缩放
         * @param {cc.Node} node
         * @returns {cc.Vec2}
         */
        getWorldScale(node){
            return utils.node.getNodeToWorldScale(node.parent, node.scaleX, node.scaleY);
        },
        
        /**
         * 将node设置为在世界坐标下缩放worldScale的形态
         * @param {cc.Node} node
         * @param {*} worldScale
         */
        setWorldScale(node, worldScale){
            var s      = utils.node.getWorldToNodeScale(node.parent, worldScale.x, worldScale.y);
            node.scale = s;
            return node.scale;
        },
        
        /**
         * 获得node本地坐标系下的点在世界坐标系下的位置
         * @param {cc.Node} node
         * @param {cc.Vec2} positionInNode
         */
        getNodeToWorldPosition(node, positionInNode){
            if(node === null) return positionInNode;
            return node.convertToWorldSpaceAR(positionInNode);
        },
        
        /**
         * 获得世界坐标系下的点在node本地坐标下的位置
         * @param {cc.Node} node
         * @param {cc.Vec2} positionInWorld
         */
        getWorldToNodePosition(node, positionInWorld){
            if(node === null) return positionInWorld;
            return node.convertToNodeSpaceAR(positionInWorld);
        },
        
        /**
         * 获得node本地坐标下的缩放在世界坐标下的缩放量
         * @param {cc.Node} node
         * @param {float} scaleXInNode
         * @param {float} scaleYInNode
         */
        getNodeToWorldScale(node, scaleXInNode, scaleYInNode){
            var scaleX = scaleXInNode;
            var scaleY = scaleYInNode;
            var parent = node;
            while(parent){
                scaleX *= parent.scaleX;
                scaleY *= parent.scaleY;
                parent = parent.parent;
            }
            return new cc.Vec2(scaleX, scaleY);
        },
        
        /**
         * 获得node在世界坐标下的缩放量小於0的次數
         * @param {cc.Node} node
         * @returns {cc.Vec2}
         */
        getWorldScaleCount(node){
            return utils.node.getNodeToWorldScaleCount(node.parent, node.scaleX, node.scaleY);
        },
        
        /**
         * 获得node本地坐标下的缩放在世界坐标下的缩放量小於0的次數
         * @param {cc.Node} node
         * @param {float} scaleXInNode
         * @param {float} scaleYInNode
         */
        getNodeToWorldScaleCount(node, scaleXInNode, scaleYInNode){
            var countX = 0
            var countY = 0
            if(scaleXInNode < 0){
                countX += 1;
            }
            
            if(scaleYInNode < 0){
                countY += 1;
            }
            
            var parent = node;
            while(parent){
                if(parent.scaleX < 0){
                    countX += 1;
                }
                
                if(parent.scaleY < 0){
                    countY += 1;
                }
                parent = parent.parent;
            }
            return new cc.Vec2(countX, countY);
        },
        
        /**
         * 获得世界缩放在node本地坐标下的缩放量
         * @param {cc.Node} node
         * @param {float} scaleXInWorld
         * @param {float} scaleYInWorld
         */
        getWorldToNodeScale(node, scaleXInWorld, scaleYInWorld){
            var scale = utils.node.getWorldScale(node);
            return new cc.Vec2(scaleXInWorld / scale.x, scaleYInWorld / scale.y);
        },
        
        /**
         * 获得node本地坐标下的旋转在世界坐标下的旋转量
         * @param {cc.Node} node
         * @param {float} rotationInNode
         */
        getNodeToWorldRotation(node, rotationInNode){
            var rot    = rotationInNode;
            var parent = node;
            while(parent){
                rot += parent.angle;
                parent = parent.parent;
            }
            return rot;
        },
        
        /**
         * 获得世界坐标下的旋转在node本地坐标下的旋转量
         * @param {cc.Node} node
         * @param {float} rotationInWorld
         */
        getWorldToNodeRotation(node, rotationInWorld){
            var rotation = rotationInWorld;
            var parent   = node;
            while(parent){
                rotation -= parent.angle;
                parent = parent.parent;
            }
            return rotation;
        },
    },
};
module.exports = utils;