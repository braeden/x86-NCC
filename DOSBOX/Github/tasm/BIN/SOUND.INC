;
; SOUND.INC
;
; Author:
;  David Foster
; 
; Description:
;  Contains functions for playing sounds
;  through the PC speaker (not the sound card).
; 
; Requires:
;  none
;

; ##########################################################
; # Plays a tone with specified frequency (in hertz) and
; # duration (in system time).
; #
; # Input:
; #  {AH,AL,BH,BL}: duration in {hours,minutes,seconds,centiseconds}
; #  DX: frequency in hertz (Hz)
; # 
; # Changes:
; #  none
; ##########################################################
TonePlay PROC
  PUSH BX
   MOV BX,DX
   CALL ToneFreq
  POP BX
  CALL ToneOn
  CALL Delay         ; Delay for duration of tone
  CALL ToneOff
  RET
TonePlay ENDP

; ##########################################################
; # Plays a tone with specified frequency (in hertz) and
; # duration (in clock ticks).
; #
; # Input:
; #  BX: frequency in Hz
; #  DX: timer ticks (each tick is about 1/5 second)
; # 
; # Changes:
; #  none
; ##########################################################
TonePlay_CT PROC
  PUSH AX
  PUSH DX
  PUSH ES
  
  ; Don't play tone if (freq > 5000Hz)
  CMP BX,5000
  JA TP_CT_Done

  ; Wait until the beginning of the next tick
  XOR AX,AX                   ; AX=0 (fast)
  MOV ES,AX                   ; ES=0
  MOV AX,WORD PTR ES:[046Ch]  ; read low word of system clock
 TP_CT_DelayUntilChange1:
  CMP AX,WORD PTR ES:[046Ch]
  JE TP_CT_DelayUntilChange1

  ; Prepare to access registers of port 42h
  MOV AL,00B6h                ; magic value
  OUT 43h,AL

  ; Calculate divisor for the frequency
  PUSH DX
   MOV DX,0012h
   MOV AX,2870h               ; (NOTE: other sources think DX:AX should be 00120000h)
   DIV BX                     ; AX: divisor for frequency
  POP DX

  ; Set the speaker frequency (with the divisor)
  OUT 42h,AL                  ; write LSB of divisor
  MOV AL,AH
  OUT 42h,AL                  ; write MSB of divisor

  ; Turn speaker on
  IN AL,61h
  OR AL,00000011b
  OUT 61h,AL                  ; set bits 0 and 1 of port 61h

  ; Delay for the specified number of ticks
  XOR AX,AX                   ; AX=0 (fast)
  MOV ES,AX                   ; ES=0
 TP_CT_DelayForTicks:
  MOV AX,WORD PTR ES:[046Ch]  ; read low word of system clock
 TP_CT_DelayUntilChange2:
  CMP AX,WORD PTR ES:[046Ch]
  JE TP_CT_DelayUntilChange2
  DEC DX
  CMP DX,0
  JNZ TP_CT_DelayForTicks

  ; Turn speaker off
  IN AL,61h
  AND AL,11111100b
  OUT 61h,AL                  ; clear bits 0 and 1 of port 61h

 TP_CT_Done:
  POP ES
  POP DX
  POP AX
  RET
TonePlay_CT ENDP

; ##########################################################
; # Sets the frequency of the tone played by the PC Speaker.
; # 
; # Input:
; #  BX: frequency in Hz (0-5000)
; # 
; # Changes:
; #  none
; ##########################################################
ToneFreq PROC
  ; Save affected registers
  PUSH AX
  PUSH DX

  ; Prepare to access registers of port 42h
  MOV AL,00B6h                ; magic value
  OUT 43h,AL

  ; Calculate divisor for the frequency
  MOV DX,0012h
  MOV AX,2870h                ; (NOTE: other sources think DX:AX should be 00120000h)
  DIV BX                      ; AX: divisor for frequency

  ; Set the speaker frequency (with the divisor)
  OUT 42h,AL                  ; write LSB of divisor
  MOV AL,AH
  OUT 42h,AL                  ; write MSB of divisor

  ; Restore registers
  POP DX
  POP AX
  RET
ToneFreq ENDP

; ##########################################################
; # Turns on the PC Speaker.
; # The speaker will start playing a tone at the current frequency.
; # 
; # Changes:
; #  none
; ##########################################################
ToneOn PROC
  ; Save affected registers
  PUSH AX

  ; Turn speaker on
  IN AL,61h
  OR AL,00000011b
  OUT 61h,AL                  ; set bits 0 and 1 of port 61h

  ; Restore registers
  POP AX
  RET
ToneOn ENDP

; ##########################################################
; # Turns off the PC Speaker.
; # The speaker will stops playing all tones.
; # 
; # Changes:
; #  none
; ##########################################################
ToneOff PROC
  ; Save affected registers
  PUSH AX

  ; Turn speaker off
  IN AL,61h
  AND AL,11111100b
  OUT 61h,AL                  ; clear bits 0 and 1 of port 61h

  ; Restore registers
  POP AX
  RET
ToneOff ENDP
