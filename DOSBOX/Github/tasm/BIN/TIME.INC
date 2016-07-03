;
; TIME.INC
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

; #############################################################################
; # Gets the current system-time, which corresponds 
; # to the time since the computer was turned on.
; #
; # Output:
; #  {CH,CL,DH,DL} = current time in {hours,minutes,seconds,centiseconds}
; #############################################################################
GetSystemTime PROC
  PUSH AX
   MOV AH,2Ch
   INT 21h
  POP AX
  RET
GetSystemTime ENDP

; #############################################################################
; # Adds the specified time values together.
; # 
; # Input:
; #  {AH,AL,BH,BL} = time #1 in {hours,minutes,seconds,centiseconds}
; #  {CH,CL,DH,DL} = time #2 in {hours,minutes,seconds,centiseconds}
; #
; # Output:
; #  {AH,AL,BH,BL} = time #1 + time #2 in {hours,minutes,seconds,centiseconds}
; #############################################################################
AddTimes PROC
  ; Add time #1 and #2
  ADD AH,CH
  ADD AL,CL
  ADD BH,DH
  ADD BL,DL

  ; Adjust result to produce a legal time
 AdjustCentiseconds:
  CMP BL,100   ; centiseconds must be < 100
  JB AdjustSeconds
  SUB BL,100
  INC BH
 AdjustSeconds:
  CMP BH,60    ; seconds must be < 60
  JB AdjustMinutes
  SUB BH,60
  INC AL
 AdjustMinutes:
  CMP AL,60
  JB AdjustHours
  SUB AL,60
  INC AH
 AdjustHours:
  CMP AH,24
  JB DoneAdjustingTime
  SUB AH,24
 DoneAdjustingTime:
  RET
AddTimes ENDP

; #############################################################################
; # Compares the specified time values.
; # 
; # Input:
; #  {AH,AL,BH,BL} = time #1 in {hours,minutes,seconds,centiseconds}
; #  {CH,CL,DH,DL} = time #2 in {hours,minutes,seconds,centiseconds}
; #
; # Output:
; #  CF,OF,SF,ZF,AF,PF = result of comparing time #1 to time #2
; #############################################################################
CmpTimes PROC
  CMP AX,CX                    ; compare hours and minutes
  JNE DoneCmpTimes
  CMP BX,DX                    ; compare seconds and centiseconds
 DoneCmpTimes:
  RET
CmpTimes ENDP

; #############################################################################
; # Waits for the specified amount of time.
; # 
; # Input:
; #  {AH,AL,BH,BL} = time-to-wait in {hours,minutes,seconds,centiseconds}
; #############################################################################
Delay PROC
  ; Save affected registers
  PUSH AX
  PUSH BX
  PUSH CX
  PUSH DX

  ; Read current system time
  CALL GetSystemTime
  ; {CH,CL,DH,DL} = current time in {hours,minutes,seconds,centiseconds}

  ; Add time-to-wait to current system time
  ; to determine time-to-stop-waiting
  CALL AddTimes
  ; {AH,AL,BH,BL} = time-to-stop waiting in {hours,minutes,seconds,centiseconds}

  ; Wait until current time matches/exceeds time-to-stop-waiting
 WaitUntilTimeToStop:
  CALL GetSystemTime
  ; {CH,CL,DH,DL} = current time in {hours,minutes,seconds,centiseconds}
  CALL CmpTimes                ; compare time-to-stop-waiting with current time
  JA WaitUntilTimeToStop       ; loop until current time equals/exceeds time-to-stop-waiting

  ; Restore registers
  POP DX
  POP CX
  POP BX
  POP AX
  RET
Delay ENDP

; #############################################################################
; # Waits for AX centiseconds.
; # 
; # Input:
; #  AX: number of centiseconds to wait (0-65535)
; #############################################################################
DelayFor100ths PROC
  ; Save affected registers
  PUSH AX
  PUSH BX

  ; Determine number of minutes (BH) to wait
  MOV BH,0
 DF100_GetMinutes:
  CMP AX,6000
  JB DF100_GetSeconds
 DF100_MinuteOrGreater:
  SUB AX,6000
  INC BH
  JMP DF100_GetMinutes

  ; Determine number of seconds (AL) & centiseconds (AH) to wait
 DF100_GetSeconds:
  MOV BL,100
  DIV BL

  ; Wait for specified time
  XCHG AL,BH  ; {AL,BH} = {minutes, seconds}
  MOV BL,AH    ; BL = centiseconds
  MOV AH,0     ; AH = hours
  CALL Delay

  ; Restore registers and return
  POP BX
  POP AX
  RET
DelayFor100ths ENDP

; #############################################################################
; # Waits for AX seconds.
; # 
; # Input:
; #  AX: number of seconds to wait (0-3599)
; #############################################################################
DelayForSecs PROC
  ; Save affected registers
  PUSH AX
  PUSH BX

  ; Determine number of minutes (AL) and seconds (AH) to wait
  MOV BL,60
  DIV BL

  ; AL = minutes
  MOV BL,0     ; BL = centiseconds
  MOV BH,AH    ; BH = seconds
  MOV AH,0     ; AH = hours
  CALL Delay

  ; Restore registers and return
  POP BX
  POP AX
  RET
DelayForSecs ENDP
