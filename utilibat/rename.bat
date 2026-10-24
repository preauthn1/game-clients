:: For /L 變數 in (起始值,更新值,結束值) DO(事件)
:: 變數命名規則 %%英文單字

For /L %%a in (2,1,13) DO (
  ren t%%a.png sprite_poker_3_%%a.png

  )
 ren t1.png sprite_poker_3_14.png
rem For /L %%a in (1,1,13) DO (
rem   ren sprite_poker_%%a_3.png sprite_card_%%a_3.png
rem   ren sprite_poker_%%a_2.png sprite_card_%%a_2.png
rem   ren sprite_poker_%%a_1.png sprite_card_%%a_1.png
rem   ren sprite_poker_%%a_0.png sprite_card_%%a_0.png
rem )

pause