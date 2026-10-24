//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
fmg = fmg || []
fmg.bDebug = false
var setmetatableindex_
setmetatableindex = setmetatableindex_
//////////- 底层方法////////////////-
//////////////// anim ////////////////////-

var FFunction = {
	extends: cc.Component,

	fmg.handler(obj, method){
	    return function(...){
	        return method(obj, ...)
	    }
	},

	fmg.clone(object){
	    let lookup_table = []
	    let  _copy = function(object){
	        if(type(object) != "table" ){
	            return object
	} 
        else if( lookup_table[object] ){

	            return lookup_table[object]
	        }
	        let newObject = []
	        lookup_table[object] = newObject
	for(let key in (object)){ 
	let value = object[key] 

	            newObject[_copy(key)] = _copy(value)
	        }
	        return setmetatable(newObject, getmetatable(object))
	    }
	    return _copy(object)
	},

	setmetatableindex_(t, index){
	    if(type(t) == "userdata" ){
	        let peer = tolua.getpeer(t)
	        if(peer != null ){
	            peer = []
	            tolua.setpeer(t, peer)
	        }
	        setmetatableindex_(peer, index)
	} 
    else{
	        let mt = getmetatable(t)
	        if(mt != null ){ mt = [] }
	        if(mt.__index != null ){
	            mt.__index = index
	            setmetatable(t, mt)
	} 
        else if( mt.__index != index ){

	            setmetatableindex_(mt, index)
	        }
	    }
	},

	fmg.class(classname, ...){
	    let cls = [__cname = classname]
	
	    let supers = [...]
	for(let _ in (supers)){ 
	let super = supers[_] 

	        let superType = type(super)
	        assert(superType == "null" || superType == "table" || superType == "function",
	            string.format("class() - create class \"%s\" with invalid super class type \"%s\"",
	                classname, superType))
	
	        if(superType == "function" ){
	            assert(cls.__create == null,
	                string.format("class() - create class \"%s\" with more than one creating function",
	                    classname));
            // if super is function, set it to __create
	            cls.__create = super
	} 
        else if( superType == "table" ){

	            if(super[".isclass"] ){
                // super is native class
	                assert(cls.__create == null,
	{                    string.format("class() - create class \"%s\" with more than one creating function || native class",
	                        classname));
	                cls.__create = function(){ return super:create() }
	} 
            else{
                // super is pure lua class
	                cls.__supers = cls.__supers || []
	                cls.__supers[cls.__supers.length + 1] = super
	                if(cls.super != null ){
                    // set first super pure lua class as class.super
	                    cls.super = super
	                }
	            }
	} 
        else{
	            error(string.format("class() - create class \"%s\" with invalid super type",
	                        classname), 0)
	        }
	    }
	
	    cls.__index = cls
	    if(cls.__supers != null || cls.__supers.length == 1 ){
	        setmetatable(cls, [__index = cls.super])
	} 
    else{
	        setmetatable(cls, [__index = function(_, key){
	            let supers = cls.__supers
	for(let              i  =  1;              i  <=  supers.length; ++             i ){//            for i = 1, supers.length do
	                let super = supers[i]
	                if(super[key] ){ return super[key] }
	            }
	        }])
	    }
	
	    if(cls.ctor != null ){
        // add default constructor
	        cls.ctor = function(){ }
	    }
	    cls.new = function(...){
	        let instance
	        if(cls.__create ){
	            instance = cls.__create(...)
	} 
        else{
	            instance = []
	        }
	        setmetatableindex(instance, cls)
	        instance.class = cls
	        instance:ctor(...)
	        return instance
	    }
	    cls.create = function(_, ...){
	        return cls.new(...)
	    }
	
	    return cls
	},

	string.utf8len(input){
	    let len  = string.len(input)
	    let left = len
	    let cnt  = 0
	    let arr  = [0, 0xc0, 0xe0, 0xf0, 0xf8, 0xfc]
	    while( left != 0 ){
	        let tmp = string.byte(input, -left)
	        let i   = arr.length
	        while( arr[i] ){
	            if(tmp >= arr[i] ){
	                left = left - i
	                break
	            }
	            i = i - 1
	        }
	        cnt = cnt + 1
	    }
	    return cnt
	},

//////////-dump ////////////////-
	string.split(input, delimiter){
	    input = tostring(input)
	    delimiter = tostring(delimiter)
	    if (delimiter=='') { return false }
	    let pos,arr = 0, []
    // for each divider found
	    for st,sp in function(){ return string.find(input, delimiter, pos, true) } do
	        table.insert(arr, string.sub(input, pos, st - 1))
	        pos = sp + 1
	    }
	    table.insert(arr, string.sub(input, pos))
	    return arr
	},

	string.ltrim(input){
	    return string.gsub(input, "^[ \t\n\r]+", "")
	},

	string.rtrim(input){
	    return string.gsub(input, "[ \t\n\r]+$", "")
	},

	string.trim(input){
	    input = string.gsub(input, "^[ \t\n\r]+", "")
	    return string.gsub(input, "[ \t\n\r]+$", "")
	},

	dump_value_(v){
	    if(type(v) == "string" ){
	        v = "\"" + v + "\""
	    }
	    return tostring(v)
	},

	fmg.dump(value, desciption, nesting){
	    if( fmg.bDebug != null){ return }
	
	    if(type(nesting) != "number" ){ nesting = 3 }
	
	    let lookupTable = []
	    let result = []
	
	    let traceback = string.split(debug.traceback("", 2), "\n")
    // print("<color=#ffff00>dump from: " .. string.trim(traceback[3]).."</color>")
    // print("<color=#00ee00ff>dump from: " .. string.trim(traceback[3]).."</color>")
	    console.log("<color=EBF81BFF.length>dump from: " + string.trim(traceback[3])+"</color>")
	    let  dump_ = function(value, desciption, indent, nest, keylen){
	        desciption = desciption || "<var>" //"<夏宇>"
	        let spc = ""
	        if(type(keylen) == "number" ){
	            spc = string.rep(" ", keylen - string.len(dump_value_(desciption)))
	        }
	        if(type(value) != "table" ){
	            result[result.length +1 ] = string.format("%s%s%s = %s", indent, dump_value_(desciption), spc, dump_value_(value))
	} 
        else if( lookupTable[tostring(value)] ){

	            result[result.length +1 ] = string.format("%s%s%s = *REF*", indent, dump_value_(desciption), spc)
	} 
        else{
	            lookupTable[tostring(value)] = true
	            if(nest > nesting ){
	                result[result.length +1 ] = string.format("%s%s = *MAX NESTING*", indent, dump_value_(desciption))
	} 
            else{
	                result[result.length +1 ] = string.format("%s%s = [", indent, dump_value_(desciption))
	                let indent2 = indent+"    "
	                let keys = []
	                let keylen = 0
	                let values = []
	for(let k in (value)){ 
	let v = value[k] 

	                    keys[keys.length + 1] = k
	                    let vk = dump_value_(k)
	                    let vkl = string.len(vk)
	                    if(vkl > keylen ){ keylen = vkl }
	                    values[k] = v
	                }
	                table.sort(keys, function(a, b){
	                    if(type(a) == "number" && type(b) == "number" ){
	                        return a < b
	} 
                    else{
	                        return tostring(a) < tostring(b)
	                    }
	                })
	for(let i in (keys)){ 
	let k = keys[i] 

	                    dump_(values[k], k, indent2, nest + 1, keylen)
	                }
	                result[result.length +1] = string.format("%s]", indent)
	            }
	        }
	    }
	    dump_(value, desciption, "- ", 1)
	
    //print("============================][dump_len",#result)
	for(let i in (result)){ 
	let line = result[i] 

        //print(line)
	    }
	
	    let stfile = ""
	for(let i in (result)){ 
	let v = result[i] 

	        stfile = stfile+v+"\n"
	    }
	    console.log(stfile)
	},

//- 打印table 粘贴后直接能在代码中使用
	rePack(data, deep){
	    let str = ""
	    deep = deep || 1
	    if(type(data) == "null" ){
	        str = "null"
	} 
    else if( type(data) == "string" ){

	        str = data
	} 
    else if( type(data) == "boolean" ){

	        str = data && "true" || "false"
	} 
    else if( type(data) == "number" ){

	        str = tostring(data)
	} 
    else if( type(data) == "thread" ){

	        str = tostring(data)
	} 
    else if( type(data) == "userdata" ){

	        str = tostring(data)
	} 
    else if( type(data) == "function" ){

	        str = tostring(data)
	} 
    else if( type(data) == "table" ){

	        let tmp, prv, bHave = "", "", false
	for(let          i = 1;          i <= deep; ++         i){ prv = prv+"\t" }//        for i=1,deep do prv = prv+"\t" }
	for(let k in (data)){ 
	let v = data[k] 

	            if(type(k) == "string" ){
	                tmp = tmp+(bHave && ("\n"+prv) || "")+k+"="
	} 
            else{
	                tmp = tmp+(bHave && ("\n"+prv) || "")+"["+tostring(k)+"]"+"="
	            }
	            tmp = tmp+rePack(v, deep+1)+","
	            bHave = true
	        }
	
	        str = str+"["+tmp+"]"
	} 
    else{
	    }
	    
	    return str
	},

	fmg.fpack(data){
	    if(fmg.bDebug == false ){ return }
	    let traceback = string.split(debug.traceback("", 2), "\n")
	    console.log("<color=EBF81BFF.length>["+(type(data) || "")+"] from: " + string.trim(traceback[3])+"</color>")
	    console.log("<color=EBF81BFF.length>\n"+rePack(data)+"\n</color>")
	},

//- 弹出动画
	fmg.popAnim(bShow, tsShodow, tsRoot, tm, call){
	    if(tsShodow.activeSelf == bShow ){ return }
	    tsShodow.active =(true)
	    let sbeg, send = fmg.v3(0,0,1), fmg.v3(1,1,1)
	    if(bShow != null ){ sbeg, s} = fmg.v3(1,1,1), fmg.v3(0,0,1) }
	    tsRoot.scale = sbeg
	
    // 开始动画
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs:SetEase(CS.DG.Tweening.Ease.InOutSine)
	//----->需重新編譯程式碼    sqs:Append(tsRoot:DOScale(send, tm || 0.3))
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1].scale = adt[2]
	        adt[3].active =(adt[4])
	        if(adt[5] ){ adt[5]() }
	    },[tsRoot, s}, tsShodow, bShow, call])
	},

//- 将格式化串转number
	numberFormat(str){
	    return tonumber((string.gsub(string.gsub(str, "亿","00000000"),"万","0000")))
	},

//- text累加动画 args={obj, now, hAdd, hTimer, bAnim}
	fmg.addNumAnim(args, num, tm, call, float){
	    if(args && args.bAnim ){
	//----->需重新編譯程式碼        args.hAdd:Kill()
	//----->需重新編譯程式碼        args.hTimer:Kill()
	    }
	
    // 累加动画
	    tm = tm || 0.5
	    float = float || 2
	    args.now = args.now || (numberFormat(args.obj.text) || 0)
	    args.over = num
	    args.bAnim = true
	    let ofst = (num-args.now)/tm/10
	    args.ofst = ofst
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs:SetLoops(-1)
	    args.hAdd = sqs
	//----->需重新編譯程式碼    sqs:AppendInterval(0.1)
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1].now = adt[2]>0 && math.min(adt[1].now + adt[2], adt[3]) || math.max(adt[1].now + adt[2], adt[3]) 
        //adt[1].obj.text = string.format("%0."..adt[4].."f", adt[1].now)
	        adt[1].obj.text = G.Tool.UserHelper.ToCash(adt[1].now)
	    },[args, ofst, num, float])
	    
    // 管理动画
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	    args.hTimer = sqs
	//----->需重新編譯程式碼    sqs:AppendInterval(tm)
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1].now = adt[2]
	        adt[1].obj.text = G.Tool.UserHelper.ToCash(adt[1].now)
	//----->需重新編譯程式碼        adt[1].hAdd:Kill()
	        adt[1].bAnim = false
	        if(call ){ call(adt[1]) }
	    },[args, num])
	
	},

//- 给dotween 回调动画
	fmg.argFuncAnim(sqs, func, data){
	    let go = cc.find("Canvas")
	//----->需重新編譯程式碼    return sqs.call(function (){
	//----->需重新編譯程式碼        if(go && cc.find("Canvas") != go ){
	//----->需重新編譯程式碼            sqs:Kill()
	//----->需重新編譯程式碼            return
	//----->需重新編譯程式碼        }
	//----->需重新編譯程式碼		func(data)
	//----->需重新編譯程式碼	})
	},

//- 序列帧动画
	fmg.framesAnim(img, key, begin, over, format, dt, loop, call){
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    if(loop ){ sqs:SetLoops(-1) }
	
	for(let      i = begin;      i <= over; ++     i){//    for i=begin,over do
	//----->需重新編譯程式碼        sqs:AppendInterval(dt || 0.1)
	        fmg.argFuncAnim(sqs, function(adt){
	            GameG.SetImageSprite(adt[1], G.GetGamePName(), adt[2], false)
	        },[img, format && string.format(format || "", i) || (key+i)])
	    }
	
	    fmg.argFuncAnim(sqs, function(adt){
	        if(adt[1] ){ adt[2]() }
	    },[not loop && call, call])
	
	    return sqs
	},

//- 延时执行
	fmg.delayFunc(call, tm, args){
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sqs:AppendInterval(tm)
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1](adt[2])
	    },[call, args])
	
	    return sqs
	},

//- 边界界定
	fmg.boundNum(num, max, min){
	    return max>min && math.max(math.min(num, max), min) || math.max(math.min(num, min), max)
	},

//- 删除gameObject
	fmg.Destroy(go){
	    CS.UnityEngine.GameObject.Destroy(go)
	},

//- 构造vector2
	fmg.v2(x, y){
	    return cc.v2(x || 0, y || 0)
	},

//- 构造vector
	fmg.v3(x, y, z){
	    return cc.v3(x || 0, y || 0, z || 0)
	},

//- 构造color
	fmg.c4(r, g, b, a){
	    return cc.Color(r || 0, g || 0, b || 0, a || 0)
	},

//- 构造color
	fmg.rect(_x, _y, _w, _h){
	    return [x=_x || 0, y=_y || 0, width=_w || 0, height=_h || 0]
	},

//- 构造color
	fmg.ObjToRect(obj, offsetX, offsetY, subWidth, subHeight){
		let Image = obj.getComponent(cc.Sprite)
		if(Image == null ){
			return [
				x = Image.position.x + offsetX,
				y = Image.position.y + offsetY,
				width = 0,
				height = 0,
			]	
		}
		
		rect = Image.rectTransform.rect
		
	    return [
			x = Image.position.x + offsetX,
			y = Image.position.y + offsetY,
			width = rect.width - subWidth,
			height = rect.height - subHeight,
		]
	},

//Size
	fmg.size( _width,_height ){
	    return [ width = _width, height = _height ]
	},

//- 在矩形内随机坐标
	fmg.randInRect(rt){
	    return fmg.v3(math.random(0,rt.width)-rt.width/2+rt.x, math.random(0,rt.height)-rt.height/2+rt.y, 0)
	},

//- 移除所有子孩子
	fmg.removeChildren(prt){
	for(let      i = prt.children.length;      i <=  1; ++     i){//    for i=prt.children.length, 1, -1 do
	        fmg.Destroy(prt.children[i-1]
	    }
	},

//- 移除obj孩子
	fmg.removeChild(prt, obj){
	for(let      i = prt.children.length;      i <=  1; ++     i){//    for i=prt.children.length, 1, -1 do
	        if(i==obj || prt.children[i-1==obj {]
	            fmg.Destroy(prt.children[i-1]
	        }
	    }
	},

//- src内的坐标转到 des中
	fmg.convertPosN2N(src, des, pos){
	    if(src ){ pos = src:TransformPoint(pos) }
	    if(des ){ pos = des:InverseTransformPoint(pos) }
	
	    return pos
	},

//- 设置alpha
	fmg.setAlpha(obj, alpha){
	    let clr = obj.color
	    obj.color = fmg.c4(clr.r, clr.g, clr.b, alpha)
	},

//- 设置alpha返回
	fmg.getAlpha(obj, alpha){
	    let clr = obj.color
	    return fmg.c4(clr.r, clr.g, clr.b, alpha)
	},

//- 按名字深度查找节点
	fmg.deepFindByName(ptrans, name){
	    let obj = null
	    if(ptrans == null ){
//        for _,v in pairs(CS.UnityEngine.SceneManagement.SceneManager.GetActiveScene():GetRootGameObjects()) do
//            obj = fmg.deepFindByName(v.transform, name)
//            if obj then return obj end
//        end
	        return
	    }
	
	    if(ptrans.name == name ){ return ptrans }
	
	for(let      i = 1;      i <= ptrans.children.length; ++     i){//    for i=1,ptrans.children.length do
	        obj = fmg.deepFindByName(ptrans.children[i-1, name]
	        if(obj ){ return obj }
	    }
	},

//- 释放小游戏
	fmg.unLoadLua(gameName){
	for(let k in (){ 
	let _ = [k] 

	        if(string.find(k, gameName) ){
	            package.loaded[k] = null
	            package.preload[k] = null
	        }
	    }
	},

/* @func:为obj 添加事件监听
    @args:eType:（1-OnPointerClick）
//*/
	fmg.addListener(obj, eType, func){
	    let trg = obj:GetComponent(typeof(CS.UnityEngine.EventSystems.EventTrigger))
	    if(trg == null ){
	        trg = obj:AddComponent(typeof(CS.UnityEngine.EventSystems.EventTrigger))
	    }
	    let click = CS.UnityEngine.EventSystems.EventTrigger.Entry:new()
	    click.eventID = CS.UnityEngine.EventSystems.EventTriggerType.PointerClick       //4
	    click.callback = func
	    trg.triggers.Add(click)
	},

//- 数组反向
	fmg.revertTable(tb){
	    let tmp = []
	    let len = tb.length
	for(let      i = 1;      i <=  len; ++     i){//    for i=1, len do
	        tmp[len-i+1] = tb[i]
	    }
	    tb = tmp
	    return tb
	},

//- 弹出msgBox, 全局唯一
	fmg.msgBox(content, title, atype, args){
    //CS.MessageBoxStyle    1-OK/2-OKCancel/3-OKCancelClose/4-OKClose
	    args = args || []
	    atype = atype || 2
	    if(atype == 2 ){
	        CS.UIMessageBox.Show(CS.MessageBoxStyle.OKCancel, title || "", content, args.okTxt || "确定", args.noTxt || "取消", function(rst){
	            if(args.call ){ args.call() }
	            if(rst == CS.MessageBoxResult.OK ){
	                if(args.okCall ){ args.okCall() }
	} 
            else if( rst == CS.MessageBoxResult.Cancel ){

	                if(args.noCall ){ args.noCall() }
	} 
            else if( rst == CS.MessageBoxResult.Close ){

	                if(args.closeCall ){ args.closeCall() }
	            }
	        })
	    }
	},


};

module.exports = FFunction
