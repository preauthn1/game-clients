var PrefabManager = cc.Class({
    extends: cc.Component,

    properties: {
		prefabs:{
			default:[],
			type:cc.Prefab,
        },
    },

    LoadGameObject (name) {
        for (var i in prefabs){
            var p = prefabs[i]
            if (p.name == name){
                return p
            }
        }
        return null
    },    
});

module.exports = PrefabManager
