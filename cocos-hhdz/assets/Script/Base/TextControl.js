//使用方法：
//使用方法有設定幾種都可使用。
//方法1：
//從編輯器介面上設定text，進入遊戲後即可顯示。
//方法2：
//從程式碼中設定text，也就是把要顯示的字串塞到這text即可。
//方法3：
//直接交給按鈕之類的系統事件來控管，例如按鈕事件，
//選擇了包含這個元件的Node後，右邊選擇這個元件，以及其下的fromeEven，
//然後在CustomEventData中，把要顯示的字串填入即可，按鈕按下這邊就會顯示對應字串。
//
//目前只有從置中位置向右延伸，需要可以另外換算。


var EnTextType;
EnTextType=cc.Enum({
    PictureText : 0,
    RichText : 1,
});

cc.Class({
    extends : cc.Component,
    properties : {
        TextType : {
            default : EnTextType.PictureText,
            type : EnTextType,
            notify() {
                this.showString();
                this.wasSet=false;

                switch (this.TextType) {
                    case EnTextType.PictureText:
                        if (this.target != null)
                            this.node.removeComponent(cc.RichText);
                        break;
                    case EnTextType.RichText:
                        if (this.ArtStringParent != null)
                            this.ArtStringParent.removeAllChildren();
                        break;
                }
            },
        },

        ArtStringParent : {
            type : cc.Node,
            default : null,
            //visible: true,
        },
        FontSource : {
            type : cc.Texture2D,
            default : null,
            visible() {
                return (this.TextType === EnTextType.PictureText);
            },
            notify() {
                this.checkType();
                this.showString();
                this.wasSet=false;
            },
        },
        FontData : {
            type : cc.Asset,
            default : null,
            visible() {
                return (this.TextType === EnTextType.PictureText);
            },
            notify() {
                this.checkType();
                this.showString();
                this.wasSet=false;
            },
        },
        FromFont : {
            default : "",
            visible() {
                return (this.FontData != null && this.TextType === EnTextType.PictureText);
            },
        },
        space : {
            default : 5,
            visible() {
                return (this.TextType === EnTextType.PictureText);
            },
            notify() {
                this.showString();
                this.wasSet=false;
            },
        },
        text : {
            default : "",
            multiline : false,
            visible() {
                return (this.TextType === EnTextType.PictureText);
            },
            notify() {
                this.showString();
                this.wasSet=false;
                if (this.TextType === EnTextType.PictureText)
                    this.rText=this.text;
            },
        },
        rText : {
            default : "",
            multiline : true,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
                this.wasSet=false;

                if (this.TextType === EnTextType.RichText)
                    this.text=this.rText;
            },
        },
        HorizontalAlign : {
            type : cc.Label.HorizontalAlign,
            default : cc.Label.HorizontalAlign.CENTER,
            visible() {
                return (this.TextType === EnTextType.PictureText);
            },
            notify() {
                this.showString();
            },
        },
        VerticalAlign : {
            type : cc.Label.VerticalAlign,
            default : cc.Label.VerticalAlign.CENTER,
            notify() {
                this.showString();
            },
        },
        picToString : [],
        wordRects : [],
        picTemp : [],
        offset : [],
        italic : {
            type : cc.Boolean,
            default : false,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        },
        bold : {
            type : cc.Boolean,
            default : false,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        },
        underline : {
            type : cc.Boolean,
            default : false,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        },
        OutlineSet : {
            type : cc.Boolean,
            default : false,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        },
        OutlineColor : {
            type : cc.color,
            default : cc.color(0, 0, 255, 255),
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        },
        OutlineWidth : {
            type : cc.Integer,
            default : 2,
            visible() {
                return (this.TextType === EnTextType.RichText);
            },
            notify() {
                this.showString();
            }
        }
    },
    wasSet : false,  //切圖片在場景載入後不會被啟動 直到需要時才啟動 並且在這個場景中 這個元件的切圖紙會被啟動一次 之後持續引用     
    totalWidth : 0,
    fixAlignment : 0,
    subY : 0,

    start() {
        this.wasSet=false;
        this.ArtStringParent=this.node;
        this.target=this.node.getComponent(cc.RichText);
        if (this.target) {
            this.rText=this.target.string;
            this.TextType=EnTextType.RichText;
        }
        this.showString();
    },

    checkType : function () {
        if (this.FontData && this.FontData._native !== ".fontsettings") {
            cc.error("this is read  \".fontsettings\" to picture font!!");
            this.FontData=null;
        }
    },

    buildSmallPic : function () {
        if (! this.FontSource || ! this.FontData)
            return null;
        //if (this.ArtStringParent == null)
        this.ArtStringParent=this.node;

        if (! this.wasSet) {
            this.wasSet=true;
            //解析.fontsettings檔--------------------------------------------------------------
            let SW=this.FontSource.width;
            let SH=this.FontSource.height;
            if (this.node.height>SH) {
                this.subY=(SH - this.node.height) * 0.5;
            }
            else {
                this.node.height=SH;
                this.subY=0;
            }

            this.node.height=this.node.height<SH ? SH : this.node.height;

            let lines=this.FontData._nativeAsset.split('\n');
            this.picToString=[];
            this.wordRects=[];
            this.picTemp=[];
            this.offset=[];
            this.FromFont="";

            let DSA=[];
            let len=(lines.indexOf(lines.filter(function (value) {
                return value.includes("serializedVersion: 2")
            })[0]));
            for (let i=0; i<len; i ++) {
                lines.shift();
            }
            len=lines.length;
            for (let i=0; i<len; i ++) {
                if (lines[i].includes("- serializedVersion: 2")) {
                    if (i>0) {
                        let fcc=String.fromCharCode(parseFloat(DSA[0]));
                        this.FromFont+=fcc;
                        this.picToString.push(fcc);
                        this.wordRects.push(new cc.rect(
                            Math.round(parseFloat(DSA[2]) * SW),
                            SH + parseFloat(DSA[10]) - Math.round(parseFloat(DSA[3]) * SH),
                            Math.round(parseFloat(DSA[9])),
                            Math.round(parseFloat(DSA[10] * - 1))
                        ));
                    }
                    DSA=[];
                }
                else {
                    if (! lines[i].includes("serializedVersion")) {
                        while (lines[i].includes(" ")) {
                            lines[i]=lines[i].replace(" ", "");
                            lines[i]=lines[i].replace("index:", "");
                            lines[i]=lines[i].replace("x:", "");
                            lines[i]=lines[i].replace("y:", "");
                            lines[i]=lines[i].replace("width:", "");
                            lines[i]=lines[i].replace("height:", "");
                            lines[i]=lines[i].replace("advance:", "");
                            lines[i]=lines[i].replace("flipped:", "");
                        }
                        DSA.push(lines[i]);
                    }
                }
            }
            let fcc=String.fromCharCode(parseFloat(DSA[0]));
            this.FromFont+=fcc;
            this.picToString.push(fcc);
            this.wordRects.push(new cc.rect(
                Math.round(parseFloat(DSA[2]) * SW),
                SH + parseFloat(DSA[10]) - Math.round(parseFloat(DSA[3]) * SH),
                Math.round(parseFloat(DSA[9])),
                Math.round(parseFloat(DSA[10]) * - 1)
            ));

            //創造切割出來給文字用的小圖---------------------------------------------------
            len=this.picToString.length;
            for (let i=0; i<len; i ++) {
                let rect=new cc.rect(this.wordRects[i]);
                this.picTemp.push(new cc.SpriteFrame(this.FontSource, rect));
            }
        }
        this.showString();
    },

    fromeEven : function (eve, str) {
        this.text=str;
    },

    showString : function () {
        if (this.TextType === EnTextType.RichText) {
            this.target=this.node.getComponent(cc.RichText) || this.node.addComponent(cc.RichText);

            this.target.string=
                (this.italic ? "<i>" : "") +
                (this.bold ? "<b>" : "") +
                (this.underline ? "<u>" : "") +
                (this.OutlineSet ? "<outline color=" + this.OutlineColor.toHEX("#rrggbb") + " width=" + this.OutlineWidth + ">" : "") +
                this.text +
                (this.OutlineSet ? "</outline>" : "") +
                (this.underline ? "</u>" : "") +
                (this.bold ? "</b>" : "") +
                (this.italic ? "</i>" : "");
            this.target.horizontalAlign=this.HorizontalAlign;

            switch (this.VerticalAlign) {
                case example.invalid:
                    this.node.y=(this.target.lineHeight - this.target.fontSize) * 0.63;
                    break;
                case cc.Label.VerticalAlign.CENTER:
                    this.node.y=0;
                    break;
                case cc.Label.VerticalAlign.BOTTOM:
                    this.node.y=- (this.target.lineHeight - this.target.fontSize) * 0.63;
                    break;
            }

            return null;
        }

        if (! this.FontSource || ! this.FontData)
            return null;

        if (! this.wasSet) {
            this.buildSmallPic();
            return null;
        }


        let SH=this.FontSource.height;
        if (this.node.height>SH) {
            this.subY=(SH - this.node.height) * 0.5;
        }
        else {
            this.node.height=SH;
            this.subY=0;
        }

        let str=this.text;
        let sa=str === "" ? [""] : str.split("");
        let len=str.length;
        let rl=0;
        for (let i=0; i<len; i ++) {
            if (! this.FromFont.includes(sa[i])) {
                str=str.replace(sa[i], "");
            }
        }
        sa=str === "" ? [""] : str.split("");
        len=str.length;

        let l=this.ArtStringParent.childrenCount;
        if (len<l) {
            for (let i=0; i<l; i ++) {
                this.ArtStringParent.children[i].active=false;
            }
        }

        let indexPos=0;
        let sp=0;
        this.totalWidth=0;
        this.fixAlignment=0;
        for (let i=0; i<len; i ++) {
            let index=this.picToString.indexOf(sa[i]);
            while (this.ArtStringParent.childrenCount<=i)
                this.ArtStringParent.addChild(new cc.Node('Text ' + i.toString()));
            let obj=this.ArtStringParent.children[i];
            if (index>=0) {
                this.ArtStringParent.children[i].active=true;
                let sp=this.ArtStringParent.children[i].getComponent("cc.Sprite") || this.ArtStringParent.children[i].addComponent("cc.Sprite");
                sp.spriteFrame=this.picTemp[index];
            } else {
                this.ArtStringParent.children[i].active=false;
            }


            sp=i>0 ? (obj.width + sp) * 0.5 : 0;
            indexPos+=sp + (i>0 ? this.space : 0);
            obj.x=indexPos;
            sp=obj.width;
            this.totalWidth+=obj.width + (i>0 ? this.space : 0);
            this.fixAlignment=obj.x;

            switch (this.VerticalAlign) {
                case example.invalid:
                    obj.y= - this.subY;
                    break;
                case cc.Label.VerticalAlign.CENTER:
                    obj.y=0;
                    break;
                case cc.Label.VerticalAlign.BOTTOM:
                    obj.y=this.subY;
                    break;
            }
        }

        //Alignment                                                         
        if (this.ArtStringParent.childrenCount > 0){
            switch (this.HorizontalAlign) {
                default:
                    this.node.anchorX=this.ArtStringParent.children[0].width * 0.5 / this.totalWidth;
                    break;
                case cc.Label.HorizontalAlign.CENTER:
                    this.fixAlignment=len>0 ? (this.totalWidth - this.ArtStringParent.children[0].width) * 0.5 : 0;
                    this.node.anchorX=0.5;
                    for (let i=0; i<len; i ++) {
                        this.ArtStringParent.children[i].x-=this.fixAlignment;
                    }
                    break;
                case cc.Label.HorizontalAlign.RIGHT:
                    this.node.anchorX=1 - this.ArtStringParent.children[len - 1].width * 0.5 / this.totalWidth;
                    for (let i=0; i<len; i ++) {
                        this.ArtStringParent.children[i].x-=this.fixAlignment;
                    }
                    break;
            }
        }
        this.node.width=this.totalWidth;
    },

    onDestroy : function () {
        this.picToString=[];
        this.wordRects=[];
        this.picTemp=[];
        this.offset=[];
    },


    editor : {
        executeInEditMode : false
    }
});
