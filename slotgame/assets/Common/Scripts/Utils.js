
var djSlotConstants = require('DJSlotConstants');


function updateSpriteFrame(sprite, texture) {
    if (!sprite || !texture) {
        return;
    }
    var frame = new cc.SpriteFrame(texture);
    sprite.spriteFrame = frame;
}

function log(log) {
  if(djSlotConstants.constants.ISSHOWLOG == true)
    {
      console.log(log);
    }
}
  
function customRichTextFont(amount){
  var digits = (""+amount).split("");
  var finalTxt = "";
  for(let i=0;i<digits.length;i++){
      var txt = "<img src= '"+digits[i]  +"'/>";
      finalTxt += txt;
  }
  return finalTxt;

  //return 
}

  module.exports = {
    updateSpriteFrame: updateSpriteFrame,
    log: log,
    customRichTextFont:customRichTextFont,
  };