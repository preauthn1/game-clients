var _module = module.exports = {};

_module.ChangeParent = function (node, newParent) {
    if(node.parent == newParent) return;
    var getWorldRotation = function (node) {
        var currNode = node;
        var resultRot = currNode.rotation;
        do {
            currNode = currNode.parent;
            resultRot += currNode.rotation;
        } while(currNode.parent != null);
        resultRot = resultRot % 360;
        return resultRot;
    };

    var oldWorRot = getWorldRotation(node);
    var newParentWorRot = getWorldRotation(newParent);
    var newLocRot = oldWorRot - newParentWorRot;

    var oldWorPos = node.convertToWorldSpaceAR(cc.p(0,0));
    var newLocPos = newParent.convertToNodeSpaceAR(oldWorPos);

    node.parent = newParent;
    node.position = newLocPos;
    node.rotation = newLocRot;
}