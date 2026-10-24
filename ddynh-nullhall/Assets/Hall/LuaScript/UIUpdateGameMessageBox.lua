local G = require "Global"

local btn_Cancel = this.transform:Find("UIBody/Buttons/_Cancel"):GetComponent("Button")
local btn_OK = this.transform:Find("UIBody/Buttons/_OK"):GetComponent("Button")
local txt_Content = this.transform:Find("UIBody/_ContentArea/_Content"):GetComponent("Text")

local groupName = "UIUpdateGameMessageBox";

function Start()

end
