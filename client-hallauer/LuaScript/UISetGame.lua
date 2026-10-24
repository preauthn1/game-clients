local uiset = require "GameUI/UISet"
function Start()
    uiset.Init(this)
end

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UISetGame", false);
end
