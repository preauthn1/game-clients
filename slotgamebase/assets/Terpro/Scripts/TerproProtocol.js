var config = require('MyBaseConfig');

cc.Class({

    extends:cc.Component,

    // 取得元件
    GetComponent(nodeName, componentName)
    {
        let node = cc.find("Canvas/" + nodeName)
        if(node != null)
        {
            let component = node.getComponent(componentName)
            if(component != null)
            {
                return component
            }
        }
        return null
    },

    // 初始化
    init(mySlotDataManager) 
    {
        // console.log("TerproProtocol:", mySlotDataManager)

        this.mySlotDataManager = mySlotDataManager

        // Controller
        this.controller = this.GetComponent("GameController", config.SCRIPT.GAMECONTROLLER)
        // PanelMainView
        this.panelMainView = this.controller.panelMainView
        // JP
        this.jackpotContent = this.GetComponent("JackpotPanelContent", "MyTerproJackpotInfoView")
    },

    // 接收封包
    onReceive(jsonResult)
    {
        // console.log("onReceive:", jsonResult)

        let actionId = jsonResult.actionId;

        switch (actionId)
        {
            // 登入資訊
            case "20001":
                {
                    // 下注金額表
                    if(jsonResult.eventData[0] != null)
                    {
                        let typeLineBets = jsonResult.eventData[0]
                        this.panelMainView.typeLineBets = typeLineBets
                        this.panelMainView.updateLineBet()
                        window.typeLineBets = null
                        window.totalBetMax = typeLineBets[typeLineBets.length - 1] * config.PAYLINEARR.length
                    }
                    // JP資訊
                    if(jsonResult.eventData[1] == null)
                    {
                        // 沒有JP
                        this.jackpotContent.node.active = false
                    }
                    else
                    {
                        // 有JP
                        let jpInfo = jsonResult.eventData[1]
                        this.jackpotContent.set(jpInfo)
                        this.jackpotContent.node.active = true
                    }
                }
                break

            // 更新JP
            case "22004":
                {
                    if(this.jackpotContent != null)
                    {
                        let data = JSON.stringify(jsonResult.eventData)
                        this.jackpotContent.show(data, -1)
                    }
                }
                break
        }
    }
});
