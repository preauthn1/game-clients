function createList(reelMax, rowMax)
{
    let TerproList = require('TerproList')
    let list = new TerproList()
    list.init(reelMax, rowMax)
    return list
}

module.exports = 
{
    createList: createList,
};