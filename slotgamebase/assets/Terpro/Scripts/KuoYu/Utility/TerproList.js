cc.Class({

    extends:cc.Component,

    // 初始化
    init(reelMax, rowMax)
    {
        this.reelMax = reelMax
        this.rowMax = rowMax
        this.list = []
        for(let i=0;i<reelMax;i++)
        {
            for(let j=0;j<rowMax;j++)
            {
                let index = i * rowMax + j
                this.list[index] = []
            }
        }
    },

    // 取得數量
    getCount()
    {
        return this.list.length
    },

    // 取得表單
    getList()
    {
        return this.list
    },

    // 取得資料
    get(reel, row)
    {
        let i = parseInt(reel) * this.rowMax + parseInt(row)
        return this.list[i]
    },

    // 設定資料
    set(reel, row, data)
    {
        let i = parseInt(reel) * this.rowMax + parseInt(row)
        this.list[i] = data
    },

    // 清除
    clear()
    {
        this.init(this.reelMax, this.rowMax)
    }
});
