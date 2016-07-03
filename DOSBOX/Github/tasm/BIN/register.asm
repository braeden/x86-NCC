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
  
MyData endS

; === CODE SEGMENT ===
MyCode segment; Sets up the segment names for
  Assume CS:MyCode,DS:MyData ;   the code and data segments.

; === INCLUDE DIRECTIVES ===

include CONIO.INC

; === PROCEDURES ===

Main PROC
 Start:
  MOV AX, MyData
  MOV DS, AX
  
  ;MOV DX,0
  MOV DX,1024
  ;MOV DL,27
  CALL PrintDecWord
  
  MOV AH, 4Ch
  XOR AL, AL
  INT 21h
 Main ENDP

MyCode endS
End Start
