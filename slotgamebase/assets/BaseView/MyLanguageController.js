window.globalEvent = new cc.EventTarget();
cc.Class({
    extends: cc.Component,

    properties: {
        languageString:[cc.String],
        languageSprite:[cc.Sprite],
        languageFont:[cc.Font],
        currentLanguage:-1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        //window.globalEvent.on("ChangeLanguage",this.changeLanguage,this);

        if(window.langaugeCode == null || window.langaugeCode == ""){
            window.langaugeCode = 0;
        }
        this.currentLanguage = window.langaugeCode;
        this.updateLanguage();
    },
    onEnable(){
        window.globalEvent.on("ChangeLanguage",this.changeLanguage,this);
        if(window.langaugeCode == null || window.langaugeCode == ""){
            window.langaugeCode = 0;
        }
        this.currentLanguage = window.langaugeCode;
        this.updateLanguage();
    },
    onDisable: function () {
        window.globalEvent.off("ChangeLanguage",this.changeLanguage,this);
    },
    requestChangeLanguage(){
        window.globalEvent.emit("ChangeLanguage");
    },
    changeLanguage(){
        window.langaugeCode += 1;
        if(window.langaugeType != null && window.langaugeType != ""){
            if(window.langaugeCode >= window.langaugeType.length){
                window.langaugeCode = 0;
            }
        }
        this.updateLanguage();
    },
    updateLanguage(){
        if(this.languageString.length > 0 && window.langaugeCode >= 0){
            if(this.currentLanguage!= window.langaugeCode){
                this.currentLanguage = window.langaugeCode;
                if(this.currentLanguage < this.languageString.length){
                    this.node.getComponent(cc.Label).string = this.languageString[this.currentLanguage];
                }
            }
        }
        
        if(this.languageSprite.length > 0){
            if(this.currentLanguage!= window.langaugeCode){
                this.currentLanguage = window.langaugeCode;
                if(this.currentLanguage < this.languageSprite.length){
                    this.node.getComponent(cc.Sprite).spriteFrame = this.languageSprite[this.currentLanguage];
                }
            }
        }
    },
    // update (dt) {
    // },
});
