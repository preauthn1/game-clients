// let { ccclass, property, executeInEditMode, requireComponent, menu } = cc._decorator;

cc.Class({
    extends : cc.Component,
    
    properties : {
        colors : {
            type : cc.Color,
            
            default : [],
            
            notify(){
                this.updateColors();
            }
        }
    },
    
    ctor(){
        if(this.colors.length == 0){
            this.colors = [//
                cc.color(255, 128, 0, 255),//↙
                cc.color(255, 255, 192, 255),//↘
                cc.color(255, 255, 192, 255),//↖
                cc.color(255, 128, 0, 255)  //↗
            ];
        }
    },
    
    start(){
        
    },
    
    onEnable(){
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.updateColors, this);
    },
    
    onDisable(){
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this.updateColors, this);
        this.node["_renderFlag"] |= cc["RenderFlow"].FLAG_COLOR;
    },
    
    updateColors(){
        if(!this.node) return;
        let cmp = this.node.getComponent(cc.RenderComponent);
        if(!cmp) return;
        let _assembler = cmp["_assembler"];
        if(!(_assembler instanceof cc["Assembler2D"])) return;
        let uintVerts = _assembler._renderData.uintVDatas[0];
        if(!uintVerts) return;
        let color         = this.node.color;
        let floatsPerVert = _assembler.floatsPerVert;
        let colorOffset   = _assembler.colorOffset;
        let count         = 0;
        
        uintVerts[4]  = (this.colors[0] || color)["_val"];
        uintVerts[9]  = (this.colors[1] || color)["_val"];
        uintVerts[14] = (this.colors[2] || color)["_val"];
        uintVerts[19] = (this.colors[3] || color)["_val"];
    },
    
    // update (dt) {},   
    editor : {
        menu : "i18n:MAIN_MENU.component.renderers/文字漸變染色工具",
        
        executeInEditMode : true
    }
});
