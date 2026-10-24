"use strict";

module.exports={
    load() {
        // 当 package 被正确加载的时候执行
    },

    unload() {
        // 当 package 被正确卸载的时候执行
    },

    messages : {
        "fixblend"() {
            Editor.Scene.callSceneScript("setblenders", "fixblend");
        },
        "fixblend2"() {
            Editor.Scene.callSceneScript("setblenders", "fixblend2");
        },
        "blendTest"() {
            Editor.Scene.callSceneScript("setblenders", "blendTest");
        },
    },
};