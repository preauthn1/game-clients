'use strict';

module.exports={
    load() {
        // 当 package 被正确加载的时候执行
    },

    unload() {
        // 当 package 被正确卸载的时候执行
    },

    messages : {
        'EN-US'() {
            Editor.Scene.callSceneScript('language', 'EN-US');
        },

        'ZH-CN'() {
            Editor.Scene.callSceneScript('language', 'ZH-CN');
        },

    },

};