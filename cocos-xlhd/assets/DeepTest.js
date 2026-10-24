window.GetAllNodeTree=function () {
    let TestTop=cc.find("Canvas");
    let NodeTree=GetChilds(TestTop);
    return NodeTree;
};

window.GetChilds=function (iObj) {
    let arr=[iObj];
    if (iObj.children.length>0) {
        for (let item in iObj.children) {
            arr=arr.concat(GetChilds(iObj.children[item]));
        }
    }
    return arr;
};

window.compareArr=function (ArrA, ArrB) {
    let ArrO=[];
    while (ArrA[0].name == "" || ArrA[0].uuid == "") {
        ArrA.shift();
    }
    while (ArrB[0].name == "" || ArrB[0].uuid == "") {
        ArrB.shift();
    }
    for (let index in ArrA) {
        if (! ArrB.includes(ArrA[index])) {
            ArrO.push(ArrA[index]);
        }
    }
    for (let index in ArrB) {
        if (! ArrA.includes(ArrB[index])) {
            ArrO.push(ArrB[index]);
        }
    }

    cc.log("", ArrO);
    return ArrO;
};

window.NodesToPath=function (iArr) {
    let arr=[];
    for (let index in iArr) {
        arr.push(NodeToPath(iArr[index]));
    }
    return arr;
};

window.NodeToPath=function (iObj, path=""){
    return iObj.parent ? NodeToPath(iObj.parent) + "/" + iObj.name : iObj.name;
};

window.testAA=null;
window.testAB=null;

window.testPPP=function () {
    if (! testAA || testAA[0].name == "" || testAA[0].uuid == "") {
        testAA=GetAllNodeTree();
    }
    testAB=GetAllNodeTree();
    return NodesToPath(compareArr(testAA, testAB));
};
