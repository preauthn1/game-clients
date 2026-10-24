require("Module")
mmodule(...)

function Init(root)
	rootRect = root.transform:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	txtMessage = root.transform:Find("Text"):GetComponent("Text")
end

function CreateClone(content)
    local clone = CS.UnityEngine.GameObject.Instantiate(rootRect).transform
	if(clone == nil)then return nil end
	clone:SetParent(rootRect.transform.parent)
	clone.transform.position = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.gameObject:SetActive(true)
	
	local temp = {}
	temp.root = clone.transform:GetComponent("RectTransform")
	temp.imgc = clone.transform:Find("Background"):GetComponent("Image")
	temp.imgl = clone.transform:Find("Background/Left"):GetComponent("Image")
	temp.imgr = clone.transform:Find("Background/Right"):GetComponent("Image")
	temp.txt = clone.transform:Find("Text"):GetComponent("Text")
	temp.txt.text = content
	
	return temp
end

function ShowTimer(content,timer)
	timer = timer or 1
	local clone = CreateClone(content)
	local colorC = clone.imgc.color
	local colorL = clone.imgl.color
	local colorR = clone.imgr.color
	local colorT = clone.txt.color
	
	clone.imgl.color = CS.UnityEngine.Color(colorL.r,colorL.g,colorL.b,0)
	clone.imgr.color = CS.UnityEngine.Color(colorR.r,colorR.g,colorR.b,0)
	clone.txt.color = CS.UnityEngine.Color(colorT.r,colorT.g,colorT.b,0)
		
    local sequence = CS.DG.Tweening.DOTween.Sequence()
    sequence:SetEase(CS.DG.Tweening.Ease.Linear)
	
	sequence:Append(clone.root.transform:DOMove(CS.UnityEngine.Vector3(0,100,0), timer))	
	sequence:Join(clone.imgc:DOColor(CS.UnityEngine.Color(colorC.r,colorC.g,colorC.b,1), timer /3))
	sequence:Join(clone.imgl:DOColor(CS.UnityEngine.Color(colorL.r,colorL.g,colorL.b,1), timer /3))
	sequence:Join(clone.imgr:DOColor(CS.UnityEngine.Color(colorR.r,colorR.g,colorR.b,1), timer /3))
	sequence:Join(clone.txt:DOColor(CS.UnityEngine.Color(colorT.r,colorT.g,colorT.b,1), timer /3))
	
    sequence:AppendInterval(timer/3)
	
	sequence:Append(clone.imgc:DOColor(CS.UnityEngine.Color(colorC.r,colorC.g,colorC.b,0), timer /3))
	sequence:Join(clone.imgl:DOColor(CS.UnityEngine.Color(colorL.r,colorL.g,colorL.b,0), timer /3))
	sequence:Join(clone.imgr:DOColor(CS.UnityEngine.Color(colorR.r,colorR.g,colorR.b,0), timer /3))
	sequence:Join(clone.txt:DOColor(CS.UnityEngine.Color(colorT.r,colorT.g,colorT.b,0), timer /3))
	
    sequence:OnComplete( function()
        clone.root.gameObject:SetActive(false)
		CS.UnityEngine.GameObject.Destroy(clone.root.gameObject)
    end)
end

function Show(content)
	txtMessage.text = content
	rootRect.gameObject:SetActive(true)
end

function Hide()
	rootRect.gameObject:SetActive(false)
end