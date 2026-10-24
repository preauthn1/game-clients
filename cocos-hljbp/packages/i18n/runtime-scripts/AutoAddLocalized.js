cc.Class({
    extends : cc.Component,

    properties : {},
    onLoad() {
        let Scene=this.firstNode(this.node);

        let all_LL=Scene.getComponentsInChildren("LocalizedLabel");
        let len=all_LL.length, i;
        for (i=0; i<len; i ++) {
            let item=all_LL[i];
            if (item && item.dataID == "") {
                item.onLoad();
                if (item.label) {
                    item.dataID="label_text." + item.label.string;
                    item.updateLabel();
                }
            }
        }

        all_LL=Scene.getComponentsInChildren("LocalizedRichText");
        len=all_LL.length;
        for (i=0; i<len; i ++) {
            let item=all_LL[i];
            if (item && item.dataID == "") {
                item.onLoad();
                if (item.RText) {
                    item.dataID="label_text." + item.RText.string;
                    item.updateText();
                }
            }
        }

        this.node.removeComponent(this);
    },

    firstNode(obj) {
        return obj.parent ? this.firstNode(obj.parent) : obj;
    },

    // start() {},

    // update (dt) {},
    editor : {
        executeInEditMode : true,
        menu : 'i18n/SetLocalizedComponent'
    }
});
