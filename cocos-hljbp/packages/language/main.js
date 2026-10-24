'use strict';

module.exports={
    load() {
        // 当 package 被正确加载的时候执行
    },

    unload() {
        // 当 package 被正确卸载的时候执行
    },

    messages : {
        'en-us'() {
            Editor.Scene.callSceneScript('language', 'en-us');
        },

        'zh-cn'() {
            Editor.Scene.callSceneScript('language', 'zh-cn');
        },

        'resize'() {
            Editor.Scene.callSceneScript('language', 'resize');
        },

    },

};