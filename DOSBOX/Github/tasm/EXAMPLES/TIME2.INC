;
; TIME2.INC
;
; Author:
;  David Foster
; 
; Description:
;  Contains functions for accessing the system time
;  and delaying for intervals of time.
; 
; Requires:
;  none
; 
; Flags:
;  UNTESTED, INCOMPLETE
;

; ########################################################
; # Waits until the beginning of the next clock tick.
; ########################################################
ClockSync PROC
  PUSH AX
  PUSH ES
   XOR AX,AX                   ; AX=0 (fast)
   MOV ES,AX                   ; ES=0
   
   ; Wait until clock is at beginning of next tick
   MOV AX,WORD PTR ES:[046Ch]  ; read low word of system clock
  ClockSync_WaitForTick:
   CMP AX,WORD PTR ES:[046Ch]
   JE ClockSync_WaitForTick
   
  POP ES
  POP AX
  RET
ClockSync ENDP

; ############################################################################
; # Waits for CX clock ticks.
; # 
; # It is recommended that you call ClockSync before invoking this function.
; # 
; # Input:
; #  CX: number of ticks to delay (each tick is about 1/5 of a second)
; ############################################################################
ClockDelay PROC
  CMP CX,0
  JE ClockDelay_Done
  
  PUSH AX
  PUSH CX
  PUSH ES
   XOR AX,AX                   ; AX=0 (fast)
   MOV ES,AX                   ; ES=0
   
   ; Delay for specified number of ticks
  ClockDelay_WaitForInterval:
   MOV AX,WORD PTR ES:[046Ch]  ; read low word of system clock
  ClockDelay_WaitForTick:
   CMP AX,WORD PTR ES:[046Ch]
   JE ClockDelay_WaitForTick
   LOOP ClockDelay_WaitForInterval
  
  POP ES
  POP CX
  POP AX
 ClockDelay_Done:
  RET
ClockDelay ENDP
