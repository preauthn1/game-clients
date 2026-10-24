require("Module")
mmodule(...)

local G = require "Global"
-- �Ƿ���IOS��ֵ
function IsIOSRecharge()
    return false
end

-- �Ƿ���ʾ����֧��
function IsShowOnlinePay()
    return G.User.payinfo.UIFlagPay
end

-- �Ƿ���ʾ����֧��
function IsShowAgentPay()
	if G.User.payinfo.UIFlagAgent == false then
		return false
	end
	
	local user = G.User.GetCurrentUser()
	local userdata = user.UserData	
	local result = G.User.CheckOpenData(G.User.andor.VIPAgentAndOr, userdata.ShowVIPAgent, userdata.PlaytimeVIPAgent, userdata.ShowVIPAgentBindPhone)
	return result
end

-- �Ƿ���ʾ��������
function IsShowAgentApply()
    return G.User.payinfo.UIFlagApplyAgent
end

function IsShow888()
	local config = G.User.GetCurrentUser().UserData.PaymentInfoList
	local pi=1 
  
    --�ثe�u�s�W�E�d
    local rconfig = { }
     
    
        
        for _, v in ipairs(config) do
        if(tostring(v.TypeID)=="15") then
            local arr = G.Tool.StringHelper.Split(v.AmountSort, ",");
            rconfig[(pi)]={};
            rconfig[(pi)][1]= arr[1];
            rconfig[(pi)][2]= arr[#arr];
            rconfig[(pi)][3]={};
            rconfig[(pi)][3]= arr
            rconfig[(pi)][4]= 1;
            rconfig[(pi)][5]= "102";
           pi=pi+1
        end
    end
		return #rconfig>0
	
end

function IsShowCF()
	local config = G.User.GetCurrentUser().UserData.PaymentInfoList
	local pi=1 
    --�ثe�u�s�W�E�d
    local rconfig = { }
        for _, v in ipairs(config) do
        if(tostring(v.TypeID)=="16") then
            local arr = G.Tool.StringHelper.Split(v.AmountSort, ",");
            rconfig[(pi)]={};
            rconfig[(pi)][1]= arr[1];
            
           pi=pi+1
        end
    end
		return #rconfig>0
	
end

function IsShowBaoHe()
	local config = G.User.GetCurrentUser().UserData.PaymentInfoList
	local pi=1 
    --�ثe�u�s�W�E�d
    local rconfig = { }
        for _, v in ipairs(config) do
        if(tostring(v.TypeID)=="17") then
            local arr = G.Tool.StringHelper.Split(v.AmountSort, ",");
            rconfig[(pi)]={};
            rconfig[(pi)][1]= arr[1];
            
           pi=pi+1
        end
    end
		return #rconfig>0
	
end

function IsShowDongGuaZF()
	local config = G.User.GetCurrentUser().UserData.PaymentInfoList
	local pi=1 
    --�ثe�u�s�W�E�d
    local rconfig = { }
        for _, v in ipairs(config) do
        if(tostring(v.TypeID)=="18") then
            local arr = G.Tool.StringHelper.Split(v.AmountSort, ",");
            rconfig[(pi)]={};
            rconfig[(pi)][1]= arr[1];
            
           pi=pi+1
        end
    end
		return #rconfig>0
	
end

function IsShowDongGuaWechat()
	local config = G.User.GetCurrentUser().UserData.PaymentInfoList
	local pi=1 
    --�ثe�u�s�W�E�d
    local rconfig = { }
        for _, v in ipairs(config) do
        if(tostring(v.TypeID)=="19") then
            local arr = G.Tool.StringHelper.Split(v.AmountSort, ",");
            rconfig[(pi)]={};
            rconfig[(pi)][1]= arr[1];
            
           pi=pi+1
        end
    end
		return #rconfig>0
	
end

-- �Ƿ���ʾ��ģʽ1
function IsShowClub2AgentMode1()
    return G.User.payinfo.UIClub2AgentMode1
end

-- �Ƿ���ʾ��ģʽ1
function IsShowClub2AgentMode1()
    return G.User.payinfo.UIClub2AgentMode1
end

-- �Ƿ���ʾ��ģʽ3
function IsShowClub2AgentMode2()
    return G.User.payinfo.UIClub2AgentMode2
end

-- �Ƿ���ʾ��ģʽ3
function IsShowClub2AgentMode3()
    return G.User.payinfo.UIClub2AgentMode3
end

-- �Ƿ���ʾ��ģʽ4
function IsShowClub2AgentMode4()
    return G.User.payinfo.UIClub2AgentMode4
end

-- �Ƿ���ʾ��ģʽ5
function IsShowClub2AgentMode5()
    return G.User.payinfo.UIClub2AgentMode5
end