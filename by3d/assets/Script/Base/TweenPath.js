import * as THREE from 'src/three.module.js';

cc.Class({
    extends: cc.Component,

    properties: {
        duration: {
            default: 0,
            type: cc.Float,
        },

        pos: {
            default: [],
            type: cc.Vec3,
        },     
    },    

    start () {
        var controlPoints = []

        for (let key in this.pos){
            let data = this.pos[key]
            let v3 = new THREE.Vector3(data.x, data.y, data.z)
            controlPoints.push(v3)
        }

        if (controlPoints.length > 0){
            var curve = new THREE.CatmullRomCurve3( controlPoints);
            var geometry = new THREE.Geometry();
            geometry.vertices = curve.getPoints(100);
        }

    },
});
