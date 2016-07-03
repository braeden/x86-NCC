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

; === PROCEDURES ===

Main PROC
 Start:
  MOV AX, MyData
  MOV DS, AX
  
  MOV AH,2
  MOV DL,'A'
  INT 21h
  MOV DL,13
  INT 21h
  MOV DL,10
  INT 21h
  MOV DL,'B'
  INT 21h
  
  MOV AH, 4Ch
  XOR AL, AL
  INT 21h
 Main ENDP

MyCode endS
End Start
