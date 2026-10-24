const i18n=require('LanguageData');

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context=this, args=arguments;
        var later=function () {
            timeout=null;
            if (!immediate) func.apply(context, args);
        };
        var callNow=immediate && !timeout;
        clearTimeout(timeout);
        timeout=setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

cc.Class({
    extends : cc.Component,

    editor : {
        executeInEditMode : true,
        menu : 'i18n/LocalizedRichText'
    },

    properties : {
        dataID : {
            get() {
                return this._dataID;
            },
            set(val) {
                if (this._dataID !== val) {
                    this._dataID=val;
                    if (CC_EDITOR) {
                        this._debouncedupdateText();
                    } else {
                        this.updateText();
                    }
                }
            }
        },
        _dataID : ''
    },

    onLoad() {
        if (CC_EDITOR) {
            this._debouncedupdateText=debounce(this.updateText, 200);
        }
        if (!i18n.inst) {
            i18n.init();
        }
        this.dtc=0;

        this.fetchRender();
    },

    fetchRender() {
        let RText=this.getComponent(cc.RichText);
        if (RText) {
            this.RText=RText;
            this.updateText();
            return true;
        } else {
            return false;
        }
    },

    updateText() {
        if (!this.RText) {
            if (CC_EDITOR) {
                this._debouncedupdateText=debounce(this.updateText, 200);
            }
            if (!i18n.inst) {
                i18n.init();
            }
            let pass=this.fetchRender();
            if (!pass)
                cc.error('Failed to update localized RichText, RichText component is invalid!');
            return;
        }
        let localizedString=i18n.t(this.dataID);
        if (localizedString) {
            this.RText.string=i18n.t(this.dataID);
            this.needReupdateText=false;
        } else {
            // cc.error('Failed to update localized RText, localizedString undefined!');
            this.needReupdateText=true;
        }
    },

    update(dt) {
        this.dtc+=dt;
        if (this.needReupdateText && this.dtc>1) {
            this.dtc-=1;
            this.updateText();
        }
    },
});