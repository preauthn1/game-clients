

:: For /L 變數 in (起始值,更新值,結束值) DO(事件)
:: 變數命名規則 %%英文單字

For /L %%a in (1,1,13) DO (
  ren sprite_card_%%a_0.png sprite_poker_%%a_3.png
  ren sprite_card_%%a_1.png sprite_poker_%%a_2.png
  ren sprite_card_%%a_2.png sprite_poker_%%a_1.png
  ren sprite_card_%%a_3.png sprite_poker_%%a_0.png
)

For /L %%a in (1,1,13) DO (
  ren sprite_poker_%%a_3.png sprite_card_%%a_3.png
  ren sprite_poker_%%a_2.png sprite_card_%%a_2.png
  ren sprite_poker_%%a_1.png sprite_card_%%a_1.png
  ren sprite_poker_%%a_0.png sprite_card_%%a_0.png
)

pause