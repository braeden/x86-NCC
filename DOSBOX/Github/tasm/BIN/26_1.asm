   ;
   ; ASM -- National Computer Camps
   ;

; === STACK SEGMENT ===
MyStack segment stack
  DB 64 dup('12345678')
MyStack endS

; === DATA SEGMENT ===
MyData segment
  ; --- Declare your variables here ---
 i DB "000"
 x DB "000"
MyData endS

; === CODE SEGMENT ===
MyCode segment; Sets up the segment names for
  Assume CS:MyCode,DS:MyData ;   the code and data segments.

; === INCLUDE DIRECTIVES ==
include CONIO.INC
; === PROCEDURES ===


Main PROC
 Start:
  MOV AX, MyData
  MOV DS, AX
 
  CALL InputDecWord
  MOV BX,AX
  CALL InputDecByte
  MOV DL,AL

  MOV AH,0
  MOV AL,13h
  INT 10h 

  PUSH DS
   MOV AX,0A000h
   MOV DS,AX
   MOV DI,BX;; column
   MOV CX,200 ;;# of pixels written

  MOV BL,0
  ;MOV DL,0
  l:
   ;INC DL
   MOV BYTE PTR [DI],DL
   ADD DI,320
   LOOP l
  POP DS

  CALL Pause

  MOV AH,0
  MOV AL,03h
  INT 10h



 exit:
  MOV AH, 4Ch
  XOR AL, AL
  INT 21h
 Main ENDP
MyCode endS
End Start
