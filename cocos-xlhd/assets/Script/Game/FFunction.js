var G=require("Global");
var GameG=require("GameGlobal")
var bDebug=false;

var setmetatableindex_;
var setmetatableindex=setmetatableindex_;

var FFunction={
    extends : cc.Component,

    init() {
        setmetatableindex_=function (t, index) {
            if (type(t) == "userdata") {
                let peer=tolua.getpeer(t);
                if (peer != null) {
                    peer=[];
                    tolua.setpeer(t, peer);
                }
                setmetatableindex_(peer, index);
            } else {
                let mt=getmetatable(t)
                if (mt != null) {
                    mt=[];
                }
                if (mt.__index != null) {
                    mt.__index=index;
                    setmetatable(t, mt);
                } else if (mt.__index != index) {
                    setmetatableindex_(mt, index)
                }
            }
        };
    },

    handler(obj, method, args) {
        return function (args) {
            return method(obj, args);
        };
    },

    clone(object) {
        let lookup_table=[];
        let _copy=function (object) {
            if (typeof object != "table") {
                return object;
            }
            else if (lookup_table[object]) {
                return lookup_table[object];
            }
            let newObject=[];
            lookup_table[object]=newObject;
            for (let key in (object)) {
                let value=object[key];
                newObject[_copy(key)]=_copy(value);
            }
            return setmetatable(newObject, getmetatable(object));
        }
        return _copy(object);
    },


    string_utf8len(input) {
        let len=string.len(input);
        let left=len;
        let cnt=0;
        let arr=[0, 0xc0, 0xe0, 0xf0, 0xf8, 0xfc];
        while (left != 0) {
            let tmp=string.byte(input, - left);
            let i=arr.length;
            while (arr[i]) {
                if (tmp>=arr[i]) {
                    left=left - i;
                    break;
                }
                i=i - 1;
            }
            cnt=cnt + 1;
        }
        return cnt;
    },

    string_split(input, delimiter) {
        input=(input).toString();
        delimiter=(delimiter).toString();
        if (delimiter == '') {
            return false;
        }
        let pos, arr=[];

        let list=function () { return string.find(input, delimiter, pos, true); };

        for (let st in  list) {
            let sp=list[st];
            table.insert(arr, string.sub(input, pos, st - 1));
            pos=sp + 1;
        }
        table.insert(arr, string.sub(input, pos));
        return arr;
    },

    string_ltrim(input) {
        return string.gsub(input, "^[ \t\n\r]+", "");
    },

    string_rtrim(input) {
        return string.gsub(input, "[ \t\n\r]+$", "");
    },

    string_trim(input) {
        input=string.gsub(input, "^[ \t\n\r]+", "");
        return string.gsub(input, "[ \t\n\r]+$", "");
    },


    dump_value_(v) {
        if (type(v) == "string") {
            v="\"" + v + "\"";
        }
        return (v).toString();
    },

    dump(value, desciption, nesting) {
        if (bDebug != null) {
            return;
        }

        if (type(nesting) != "number") {
            nesting=3;
        }

        let lookupTable=[];
        let result=[];

        let traceback=string_split(debug.traceback("", 2), "\n");
        // print("<color=#ffff00>dump from:" .. string_trim(traceback[3]).."</color>")
        // print("<color=#00ee00ff>dump from:" .. string_trim(traceback[3]).."</color>")
        console.log("<color=EBF81BFF.length>dump from:" + string_trim(traceback[3]) + "</color>");
        let dump_=function (value, desciption, indent, nest, keylen) {
            desciption=desciption || "<var>"; //"<夏宇>"
            let spc="";
            if (type(keylen) == "number") {
                spc=string.rep(" ", keylen - string.len(dump_value_(desciption)));
            }
            if (type(value) != "table") {
                result[result.length + 1]=string.format("%s%s%s = %s", indent, dump_value_(desciption), spc, dump_value_(value));
            } else if (lookupTable[(value).toString()]) {
                result[result.length + 1]=string.format("%s%s%s = *REF*", indent, dump_value_(desciption), spc);
            } else {
                lookupTable[(value).toString()]=true;
                if (nest>nesting) {
                    result[result.length + 1]=string.format("%s%s = *MAX NESTING*", indent, dump_value_(desciption));
                } else {
                    result[result.length + 1]=string.format("%s%s = [", indent, dump_value_(desciption));
                    let indent2=indent + "    ";
                    let keys=[];
                    let keylen=0;
                    let values=[];
                    for (let k in (value)) {
                        let v=value[k];

                        keys[keys.length + 1]=k;
                        let vk=dump_value_(k);
                        let vkl=string.len(vk);
                        if (vkl>keylen) {
                            keylen=vkl;
                        }
                        values[k]=v;
                    }
                    table.sort(keys, function (a, b) {
                        if (type(a) == "number" && type(b) == "number") {
                            return a<b;
                        } else {
                            return (a).toString()<(b).toString();
                        }
                    })
                    for (let i in (keys)) {
                        let k=keys[i];
                        dump_(values[k], k, indent2, nest + 1, keylen);
                    }
                    result[result.length + 1]=string.format("%s]", indent);
                }
            }
        }

        dump_(value, desciption, "- ", 1);
        //print("============================][dump_len",#result)
        for (let i in (result)) {
            let line=result[i];
        }
        let stfile="";
        for (let i in (result)) {
            let v=result[i];
            stfile=stfile + v + "\n";
        }
        console.log(stfile);
    },

    //- 打印table 粘贴后直接能在代码中使用
    rePack(data, deep) {
        let str="";
        deep=deep || 1;
        if (type(data) == "null") {
            str="null";
        }
        else if (type(data) == "string") {
            str=data;
        }
        else if (type(data) == "boolean") {
            str=data && "true" || "false";
        }
        else if (type(data) == "number") {
            str=(data).toString();
        }
        else if (type(data) == "thread") {
            str=(data).toString();
        }
        else if (type(data) == "userdata") {
            str=(data).toString();
        }
        else if (type(data) == "function") {
            str=(data).toString();
        }
        else if (type(data) == "table") {
            let tmp="";
            let prv="";
            let bHave=false;
            for (let i=1; i<=deep; ++ i) {
                prv=prv + "\t"
            }
            for (let k in (data)) {
                let v=data[k];
                if (type(k) == "string") {
                    tmp=tmp + (bHave && ("\n" + prv) || "") + k + "=";
                }
                else {
                    tmp=tmp + (bHave && ("\n" + prv) || "") + "[" + (k).toString() + "]" + "=";
                }
                tmp=tmp + rePack(v, deep + 1) + ",";
                bHave=true;
            }
            str=str + "[" + tmp + "]";
        } else {

        }

        return str;
    },

    fpack(data) {
        if (bDebug == false) {
            return;
        }
        let traceback=string_split(debug.traceback("", 2), "\n");
        console.log("<color=EBF81BFF.length>[" + (type(data) || "") + "] from:" + string_trim(traceback[3]) + "</color>");
        console.log("<color=EBF81BFF.length>\n" + rePack(data) + "\n</color>");
    },

    //- 弹出动画
    popAnim(bShow, tsShodow, tsRoot, tm, call) {
        if (tsShodow.activeInHierarchy == bShow) {
            return;
        }
        tsShodow.active=true;
        let sbeg=cc.v3(0, 0, 1);
        let send=cc.v3(1, 1, 1);
        if (bShow == null || bShow == false) {
            sbeg=cc.v3(1, 1, 1);
            send=cc.v3(0, 0, 1);
        }
        tsRoot.scale=sbeg;

        let sqs=GameG.NewTween(tsRoot);
        sqs.to(tm || 0.3, { scale : send });

        this.argFuncAnim(sqs, function (adt) {
            adt[1].scale=adt[2];
            adt[3].active=(adt[4]);
            if (adt[5]) {
                adt[5]();
            }
        }, [null, tsRoot, send, tsShodow, bShow, call]);

        sqs.start();
    },

    //- 将格式化串转number
    numberFormat(str) {
        return tonumber((string.gsub(string.gsub(str, GameG.GetLocalizedString("亿"), "00000000"), GameG.GetLocalizedString("万"), "0000")));
        // return tonumber((string.gsub(string.gsub(str, "亿", "00000000"), "万", "0000")));
    },

    // 给dotween 回调动画
    argFuncAnim(sqs, func, data) {
        sqs.call(function () {
            func(data);
        })
    },

    // 延时执行
    delayFunc(node, call, tm, args) {
        var sqs=GameG.NewTween(node)
                     .delay(tm)
                     //.call(call(args))
                     .start();
        return sqs;
    },

    //- 边界界定
    boundNum(num, max, min) {
        return max>min && Math.max(Math.min(num, max), min) || Math.max(Math.min(num, min), max);
    },

    //- 删除gameObject
    Destroy(go) {
        go.destroy();
    },

    //- 构造vector2
    v2(x, y) {
        return cc.v2(x || 0, y || 0);
    },

    //- 构造vector3
    v3(x, y, z) {
        return cc.v3(x || 0, y || 0, z || 0);
    },

    //- 构造color
    c4(r, g, b, a) {
        return cc.Color(r || 0, g || 0, b || 0, a || 0);
    },

    //- 32位int转color
    ic4(num) {
        return c4(bit.rshift(bit.lshift(num, 0), 24) / 255, bit.rshift(bit.lshift(num, 8), 24) / 255, bit.rshift(bit.lshift(num, 16), 24) / 255, bit.rshift(bit.lshift(num, 24), 24) / 255);
    },

    ObjToRect(obj, offsetX, offsetY, subWidth, subHeight) {
        let data={};
        data.x=obj.node.x + offsetX;
        data.y=obj.node.y + offsetY;
        data.width=obj.node.width - subWidth;
        data.height=obj.node.height - subHeight;
        return data;
    },

    //- 构造color
    rect(_x, _y, _w, _h) {
        return [x=_x || 0, y=_y || 0, width=_w || 0, height=_h || 0];
    },

    //Size
    size(_width, _height) {
        return [width=_width, height=_height];
    },

    //- 在矩形内随机坐标
    randInRect(rt) {
        return v3(Math.random() * rt.width - rt.width / 2 + rt.x, Math.random() * rt.height - rt.height / 2 + rt.y, 0);
    },

    //- 移除所有子孩子
    removeChildren(prt, bClear) {
        for (let i=prt.children.length; i<=1; ++ i) {
            if (bClear != false) {
                prt.children[i - 1].destroy()
            }
            else {
                prt.destroyAllChildren();
            }
        }
    },

    //- 移除obj孩子
    removeChild(prt, obj) {
        for (let i=prt.children.length; i<=1; ++ i) {
            if (i == obj || prt.children[i - 1] == obj) {
                prt.children[i - 1].destroy();
            }
        }
    },

    //- src内的坐标转到 des中
    convertPosN2N(src, des, pos) {
        return pos;
    },

    //- 设置alpha
    setAlpha(obj, alpha) {
        obj.opacity=alpha * 255;
    },

    //- 设置alpha返回
    getAlpha(obj, alpha) {
        return alpha;
    },

    //- 按名字深度查找节点
    deepFindByName(ptrans, name) {
        let obj=null
        if (ptrans == null) {
            return;
        }

        if (ptrans.name == name) {
            return ptrans;
        }

        for (let i=1; i<=ptrans.children.length; ++ i) {
            obj=deepFindByName(ptrans.children[i - 1], name);
            if (obj != null) {
                return obj;
            }
            ;
        }
    },

    //- 释放小游戏
    unLoadLua(gameName) {
    },

    /* @func:为obj 添加事件监听
     @args:eType:（1-OnPointerClick）
     //*/
    addListener(obj, eType, func) {
        this.btnClose.node.on('click', function () {
            func();
        }, obj);
    },

    //- 数组反向
    revertTable(tb) {
        let tmp=[];
        let len=tb.length;
        for (let i=1; i<=len; ++ i) {
            tmp[len - i + 1]=tb[i];
        }
        tb=tmp;
        return tb;
    },

    //- 弹出msgBox, 全局唯一
    msgBox(content, title, atype, args) {
    },


};

module.exports=FFunction;
