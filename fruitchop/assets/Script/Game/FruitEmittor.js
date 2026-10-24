var GameG = require("GameGlobal");

cc.Class({
    extends : cc.Component,

    properties : {
        emittor   : {
            default : [],
            type    : cc.Node,
            tooltip : "發射器，在場景中預先放置的發射器位置，水果將會從這些座標產生，對應EmitterID"
        },
        target    : {
            default : null,
            type    : cc.Node,
            tooltip : "驗證用，依照計算給予一個期望發射出來的水果會打到的目標，這邊會顯示期望目標，留空不運作"
        },
        angleNode : {
            default : null,
            type    : cc.Node,
            tooltip : "驗證用，依照計算給予一個期望發射出來的水果會打到的目標，這邊會顯示水果從哪邊發射到目標位置，留空不運作"
        },
        sortKey   : {
            default : "OrderID",
            tooltip : "這個參數用來排序發射用的資料，用以方便企劃後期調整順序用(企劃要求)"
        },
        runGame   : {
            //遊戲運作旗標，運作中才發射水果，遊戲結束(=false)則停止發射以及後續的動作
            default : false,
            visible() {
                return false;
            }
        }
    },

    // start() {
    //     // >>>>假資料
    //     let data={
    //         Patterns : [
    //             { PatternID : 0, StageGroupID : 0, IsLoop : 1 },
    //             { PatternID : 1, StageGroupID : 1, IsLoop : 0 }
    //         ],
    //         //GroupDelayTime單位千分之一秒，依照順序(sortKey)輪流，依照GroupDelayTime
    //         StageGroups : [
    //             { StageGroupID : 0, EmitterGroupID : 0, OrderID : 1, GroupDelayTime : 2000 },
    //             { StageGroupID : 0, EmitterGroupID : 1, OrderID : 0, GroupDelayTime : 2000 },
    //
    //             { StageGroupID : 1, EmitterGroupID : 2, OrderID : 2, GroupDelayTime : 2000 },
    //             { StageGroupID : 1, EmitterGroupID : 3, OrderID : 3, GroupDelayTime : 3000 }
    //         ],
    //         //同一個EmitterGroupID同時開始計算，依照 IntervalMin 和 IntervalMax 隨機時間，誰最短誰先發。
    //         FruitEmitters : [
    //             { EmitterGroupID : 0, EmitterID : 7, AngleMin : 110, AngleMax : 80, ForceMin : 2, ForceMax : 1.2, IntervalMin : 2, IntervalMax : 4, FruitID : 7 },
    //             { EmitterGroupID : 0, EmitterID : 6, AngleMin : 110, AngleMax : 80, ForceMin : 1.2, ForceMax : 1, IntervalMin : 2, IntervalMax : 4, FruitID : 6 },
    //             { EmitterGroupID : 0, EmitterID : 5, AngleMin : 110, AngleMax : 80, ForceMin : 2.5, ForceMax : 1.2, IntervalMin : 2, IntervalMax : 4, FruitID : 5 },
    //             { EmitterGroupID : 0, EmitterID : 4, AngleMin : 110, AngleMax : 80, ForceMin : 2, ForceMax : 1.5, IntervalMin : 2, IntervalMax : 4, FruitID : 4 },
    //             { EmitterGroupID : 0, EmitterID : 11, AngleMin : 110, AngleMax : 80, ForceMin : 1.4, ForceMax : 1.2, IntervalMin : 2, IntervalMax : 4, FruitID : 3 },
    //             { EmitterGroupID : 0, EmitterID : 8, AngleMin : 110, AngleMax : 80, ForceMin : 1.4, ForceMax : 1.7, IntervalMin : 2, IntervalMax : 4, FruitID : 2 },
    //             { EmitterGroupID : 0, EmitterID : 9, AngleMin : 110, AngleMax : 80, ForceMin : 1.7, ForceMax : 1.2, IntervalMin : 2, IntervalMax : 4, FruitID : 1 },
    //             { EmitterGroupID : 0, EmitterID : 10, AngleMin : 110, AngleMax : 80, ForceMin : 1.4, ForceMax : 1.2, IntervalMin : 3, IntervalMax : 10, FruitID : 100 },
    //            
    //             { EmitterGroupID : 1, EmitterID : 1, AngleMin : 60, AngleMax : 70, ForceMin : 1.4, ForceMax : 1.4, IntervalMin : 0.5, IntervalMax : 2, FruitID : 3 },
    //             { EmitterGroupID : 1, EmitterID : 2, AngleMin : 60, AngleMax : 80, ForceMin : 1.4, ForceMax : 1.4, IntervalMin : 1, IntervalMax : 2, FruitID : 2 },
    //            
    //             { EmitterGroupID : 2, EmitterID : 7, AngleMin : 70, AngleMax : 110, ForceMin : 2, ForceMax : 2.6, IntervalMin : 1, IntervalMax : 2, FruitID : 4 },
    //             { EmitterGroupID : 2, EmitterID : 6, AngleMin : 70, AngleMax : 120, ForceMin : 2, ForceMax : 2.4, IntervalMin : 1, IntervalMax : 2, FruitID : 1 },
    //             { EmitterGroupID : 2, EmitterID : 5, AngleMin : 70, AngleMax : 120, ForceMin : 2.6, ForceMax : 3.4, IntervalMin : 1, IntervalMax : 2, FruitID : 5 },
    //             { EmitterGroupID : 2, EmitterID : 14, AngleMin : 100, AngleMax : 150, ForceMin : 1.4, ForceMax : 1.2, IntervalMin : 1, IntervalMax : 3, FruitID : 3 },
    //           
    //             { EmitterGroupID : 3, EmitterID : 15, AngleMin : 120, AngleMax : 130, ForceMin : 1.4, ForceMax : 1.6, IntervalMin : 1, IntervalMax : 2, FruitID : 2 }
    //         ],
    //         //水果的資料
    //         FruitAttributes : [
    //             { ID : 1, FruitName : "apple", FruitWeight : 1.5 },       //apple蘋果
    //             { ID : 2, FruitName : "banana", FruitWeight : 1.5 },    //banana香蕉
    //             { ID : 3, FruitName : "mango", FruitWeight : 1.5 },       //mango芒果
    //             { ID : 4, FruitName : "orange", FruitWeight : 1.75 },   //orange橘子
    //             { ID : 5, FruitName : "pineapple", FruitWeight : 2 },   //pineapple鳳梨
    //             { ID : 6, FruitName : "strawberry", FruitWeight : 1 },  //strawberry草莓
    //             { ID : 7, FruitName : "watermelon", FruitWeight : 2 },  //watermelon西瓜
    //             { ID : 100, FruitName : "boom", FruitWeight : 1 }       //boom 炸彈
    //         ]
    //     };
    //     //<<<<假資料
    //     // this.setData(data);
    // },

    /**
     * 接收來自伺服器的水果發射排程資料表
     * @param data
     */
    setData(data) {
        console.warn("**************** FruitEmittor", data);
        let i, l = data["Patterns"].length;
        for (i = 0; i < l; i++) {
            //先給一個預設格式，當伺服器使用簡化資料，沒給值時，依照這個參數給值
            let orgDataType     = {
                PatternID    : 0,
                StageGroupID : 0,
                IsLoop       : false
            };
            data["Patterns"][i] = Object.assign(orgDataType, data["Patterns"][i]);
        }
        l = data["StageGroups"].length;
        for (i = 0; i < l; i++) {
            //先給一個預設格式，當伺服器使用簡化資料，沒給值時，依照這個參數給值
            let orgDataType        = {
                StageGroupID   : 0,
                EmitterGroupID : 0,
                OrderID        : 0,
                GroupDelayTime : 0
            };
            data["StageGroups"][i] = Object.assign(orgDataType, data["StageGroups"][i]);
        }
        l = data["FruitEmitters"].length;
        for (i = 0; i < l; i++) {
            //先給一個預設格式，當伺服器使用簡化資料，沒給值時，依照這個參數給值
            let orgDataType          = {
                EmitterGroupID : 0,
                EmitterID      : 0,
                AngleMin       : 0,
                AngleMax       : 0,
                ForceMin       : 0,
                ForceMax       : 0,
                IntervalMin    : 0,
                IntervalMax    : 0,
                FruitID        : 0
            };
            data["FruitEmitters"][i] = Object.assign(orgDataType, data["FruitEmitters"][i]);
        }
        l = data["FruitAttributes"].length;
        for (i = 0; i < l; i++) {
            //先給一個預設格式，當伺服器使用簡化資料，沒給值時，依照這個參數給值
            let orgDataType            = {
                ID          : 0,
                FruitName   : "apple",
                FruitWeight : 0
            };
            data["FruitAttributes"][i] = Object.assign(orgDataType, data["FruitAttributes"][i]);
        }
        
        this.usePattern = 0;

        let FruitAttribute=this.setGridToArray(data,"FruitAttributes", "ID");
        let FruitEmitter=this.setGridToArray(data,"FruitEmitters", "EmitterGroupID");
        FruitEmitter=this.toTree(FruitEmitter, FruitAttribute, "FruitID", 0);                    
        let StageGroup=this.setGridToArray(data,"StageGroups", "StageGroupID");
        StageGroup=this.toTree(StageGroup, FruitEmitter, "EmitterGroupID", 1);
        let Pattern=this.setGridToArray(data,"Patterns", "PatternID",true);
        Pattern = Pattern[this.usePattern];
        Pattern=this.toTree(Pattern, StageGroup, "StageGroupID", 0);
        this.PatternData=Pattern;
        console.warn("**************** PatternData", Pattern);
    },

    //物件的深度複製，避免複製的資料互相影響
    deepClone(data) {
        return JSON.parse(JSON.stringify(data));
    },

    /**
     * 將大資料表格的key值弄成陣列索引值，之後取用就不需要重新搜尋，須注意的該key對應的欄位必須跟企劃確定為唯一值
     * 在最後，資料將會加入兩個額外變數，用來記錄自己的表格名稱和唯一索引的key
     * @param {Object} bigData 伺服器給的大資料表 
     * @param {string} name 取用表格的key值
     * @param {string} key 對應的key
     * @param {boolean} usePush 非必要值，因Pattern變成只會有一筆資料，不跟隨key改動索引，但仍需深度複製表格、加入name和mainkey，資料為Pattern時填true即可
     * @return 以Array為基礎的Object, 額外包含name(對應表格名稱)和mainkey(對應唯一索引值的key)
     */
    setGridToArray(bigData, name, key, usePush = false) {
        let data = bigData[name];
        let Len=data.length;
        let i;
        let data2=this.deepClone(data);//深度複製，先轉成純字串json資料，再轉回來，避免淺複製的參照效果(避免[A資料]變動後[複製A資料]跟著變動的狀況)
        let newData=[];     
        for (i=0; i<Len; i ++) {
            if (!newData[data2[i][key]]) {
                newData[data2[i][key]]=[];
            }
            newData[data[i][key]].push(data2[i]);
        }
        //這邊專給Pattern用的特殊結構(設計變更產生的例外)
        if(usePush===true){
            let tempLog=[];
            Len = newData.length;
            for (i=0; i<Len; i ++) {
                if(newData[i])tempLog.push(newData[i]);
            }
            newData = tempLog;
        }
        
        newData.name = name;
        newData.mainkey = key;
        return newData;
    },

    /**
     * 將兩筆資料依照唯一索引值連接成樹狀資料
     * @param {Object} data 樹狀的親族資料
     * @param {Object} data2 樹狀的子裔資料
     * @param {string} key 對應索引的key值
     * @param {int} type 對應索引的key值
     * @return 以data為主，結構改變為樹狀資料，依照data中參照的索引將data2的資料塞進data中
     */
    toTree(data, data2, key, type) {
        let i, j, k=0, len=data.length, ren, tmp;
        let newData=[];
        for (i=0; i<len; i ++) {
            if(data[i]===undefined)continue;
            if (data[i].constructor === [].constructor) {
                data[i]=this.toTree(data[i], data2, key, type);//遞迴
            }
            else {
                //檢查對應索引的資料
                if(data2 === null || data2[data[i][key]] === undefined){
                    cc.error("在資料表",data2.name,"中找不到\""+key+"\"(對應\""+data2.mainkey+"\")=",data[i][key],"的資料，請確認是否在資料庫中輸入對應資料");
                    continue;
                }
                if (type === 0) {
                    let ren=data2[data[i][key]].length;
                    if (ren>0) {
                        //將資料複製之後，原本的資料刪除，因為親族資料可能重複參考子裔資料，因此在這邊複製子裔資料，並在之後將多餘的資料刪除
                        for (j=0; j<ren; j ++) {
                            let tmp=this.deepClone(data[i]);
                            tmp=Object.assign(tmp, data2[data[i][key]][j]);
                            newData.push(tmp);
                        }
                        data[i]=Object.assign({ delete : true }, data[i]);//標記將被刪除的資料
                    }
                }
                else {
                    //將子裔資料依照key名稱塞到親族資料中，例如"FruitID"對應的FruitAttribute資料，塞到FruitEmitter的"Fruit"中
                    let newKey=key.replace("ID", "");
                    data[i][newKey]=data2[data[i][key]];
                }
            }
        }
        if (type === 0) {
            //本來不同表的資料過繼用
            data=data.concat(newData);
            len=data.length;
            for (i=len - 1; i>=0; i --) {
                //將前面被標記的資料移除
                if (data[i] !== undefined && data[i].delete === true) { 
                    data.splice(0, 1);
                }
            }
        }


        //this.sortKey 目前為OrderID，企劃要求發射順序將依照OrderID排列，這邊則做成變數，避免之後需要再改動key string
        //如果需要排序才做
        let sortFlag = false;
        len          = data.length;
        for (i = len - 1; i >= 0; i--) {
            if (data[i] && data[i][this.sortKey]) {
                sortFlag = true;
            }
        }
        if(sortFlag){
            let self=this;
            data=data.sort(function (a, b) {
                return a[self.sortKey] === b[self.sortKey] ? 0 : a[self.sortKey]<b[self.sortKey] ? - 1 : 1;
            });
        }
        return data;
    },

    /**
     * 任務開始，排程運作的部分
     * @param {FruitManager} manager 發射器主要流程的部分
     * @param {int} index 目前資料中運作中的索引
     */
    StartPattern(manager, index) {
        cc.log("StartPattern", manager, index);
        if (this.PatternData == null){
            console.error("FruitEmittor not set data")
            return
        }
        this.runGame=true;
        this.FruitManager=manager;
        let Pattern=this.PatternData;
        this.setThreads(Pattern, index);
    },

    /**
     * 水果發射排程
     * @param {Object} Pattern 將資料結構整個重新處理完成後的排程資料表,傳進來的只有單一的Pattern，以及依照this.sortKey排序後的陣列
     * @param {int} index 使用的表格資料索引
     */
    setThreads(Pattern, index = 0) {
        let self=this;
        let d=Pattern[index];
        let tout;
        let Groups=d["EmitterGroup"];
        if (window.AZTest === true) {
            cc.log("|=============================||=============================|");
            cc.log("Pattern", Pattern);
        }
        let i, len=Groups.length;
        let finelTime = 0;
        for (i=0; i<len; i ++) {
            let Group=Groups[i];
            let min=Group["IntervalMin"];
            let max=Group["IntervalMax"];
            // tout = min + Math.random() * (max - min);
            tout=GameG.MathRandomBySeed(min, max);
            finelTime = finelTime > tout ? finelTime : tout;
            setTimeout(function () {
                if (cc.isValid(self) && self.runGame === true) {
                    //發布發射任務
                    self.SetPower(
                        Group["FruitName"],
                        Group["EmitterID"],
                        Group["ForceMin"],
                        Group["ForceMax"],
                        Group["FruitWeight"],
                        Group["AngleMin"],
                        Group["AngleMax"]
                    );
                }
            }, tout * 1000);
        }

        finelTime *= 1000;
        index ++;
        if (index<Pattern.length) {
            //這筆資料還沒跑完，準備下一組發射資料
            d=Pattern[index];
            tout=d["GroupDelayTime"] + finelTime;
            setTimeout(function () {
                // 利用cc.isValid(self)來檢查場景運作狀況，場景切換後不繼續運作setTimeout
                // 並利用this.runGame來停止後續的發射任務
                if (cc.isValid(self) && self.runGame === true) {
                    self.setThreads(Pattern, index);
                }
            }, tout);
        }else if (d["IsLoop"] === 1) {
            //這筆資料跑完了，但是loop=1，這筆資料將會重複運作
            index=0;
            d=Pattern[index];
            tout=d["GroupDelayTime"] + finelTime;
            setTimeout(function () {
                // 利用cc.isValid(self)來檢查場景運作狀況，場景切換後不繼續運作setTimeout
                // 並利用this.runGame來停止後續的發射任務
                if (cc.isValid(self) && self.runGame === true) {
                    self.setThreads(Pattern, index);
                }
            }, tout);
        }
        else{
            //這個Pattern的資料發完了
        }
    },

    /**
     * 發布發射任務用，這邊會取之前FruitManager來產生將發射的水果，這種處理方式是為了雙方都控制該物件，這邊先給力，FruitManager產生跟刪除。
     * 其中參數將由整理完的資料來handle
     * @param {int} FruitName 水果名字，用來產生對應水果
     * @param {int} EmitterID 水果發射器ID
     * @param {float} ForceMin 隨機給力最小值
     * @param {float} ForceMax 隨機給力最大值
     * @param {float} FruitWeight 水果重量
     * @param {float} AngleMin 隨機角度最小值
     * @param {float} AngleMax 隨機角度最大值
    */
    SetPower(FruitName=0, EmitterID=0, ForceMin=1, ForceMax=1, FruitWeight=1, AngleMin=30, AngleMax=30) {
        if(window.AZTest === true) {
            cc.log("|=============================|");
            cc.log("FruitName", FruitName);
            cc.log("EmitterID", EmitterID);
            cc.log("ForceMin", ForceMin);
            cc.log("ForceMax", ForceMax);
            cc.log("FruitWeight", FruitWeight);
            cc.log("AngleMin", AngleMin);
            cc.log("AngleMax", AngleMax);
        }
        EmitterID--;//資料由1~18 陣列由0~17
        let fruitObj=this.FruitManager.emitsByName(FruitName);
        if (window.AZTest === true && fruitObj == null){
            cc.log("找不到要發射的水果",FruitName);
            return;
        }
        if (window.AZTest === true && !this.emittor[EmitterID]){
            cc.log("找不到對應的發射器",this.emittor,EmitterID);
            return;
        }
        
        this.gravity=cc.director.getPhysicsManager().gravity;//取得重力元件
        let angle=GameG.MathRandomBySeed(AngleMin, AngleMax);//經過隨機計算後獲得的角度值
        let power=GameG.MathRandomBySeed(ForceMin, ForceMax);//經過隨機計算後獲得的力量值

        //設置水果的初始位置
        fruitObj.x=this.emittor[EmitterID].x;
        fruitObj.y=this.emittor[EmitterID].y;
        let RigidBody=fruitObj.getComponent(cc.RigidBody) || fruitObj.addComponent(cc.RigidBody);//抓取目標物件上的物理套件、如果沒有就給它一個
        RigidBody.gravityScale=FruitWeight;//重量設置
        let radian=(angle * Math.PI) / 180;
        //因為實際上在填入力量時只有一行"linearVelocity=xxxx" 因此，給予的力量只有一瞬間(名副其實的"發射")，因此需要計算抵銷重量的力量，以達成發射角度的目標
        let x=500 * Math.cos(radian) * power - (this.gravity.x * 0.5);
        let y=500 * Math.sin(radian) * power - (this.gravity.y * 0.5);
        if (this.target) {
            //換算回目標發射的座標，暫時用不上，除非需要測試驗證
            this.target.x=fruitObj.x + 500 * Math.cos(radian);
            this.target.y=fruitObj.y + 500 * Math.sin(radian);
        }
        if (this.angleNode) {
            //換算回目標發射的角度，暫時用不上，除非需要測試驗證
            this.angleNode.angle=angle;
        }
        RigidBody.linearVelocity=cc.v2(x, y);
    },
    
    stop() {
        this.runGame=false;
    },
});
//測試用參數展示
window.AZD=function () {
    return window.AZTest= !window.AZTest;                                                               
};
window.AZTest=false;
//by AZLDC 20201218