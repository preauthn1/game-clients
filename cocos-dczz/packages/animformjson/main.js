'use strict';

module.exports = {
    load(){
        // execute when package loaded
    },
    
    unload(){
        // execute when package unloaded                                             
    },
    
    // register your ipc messages here
    messages : {
        'open'(){
            Editor.Panel.open('animformjson');
        }, 'save'(event, argv){
            Editor.Scene.callSceneScript('animformjson', 'outputAnim', argv);
        }, 'show'(event, argv){
            Editor.log(argv);
        }
    },
};