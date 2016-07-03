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

multi DB "Braeden Smith",13,10,"63 Colony Rd",13,10,"Westport, CT 06880","$"

Main PROC
 Start:
  MOV AX, MyData
  MOV DS, AX
  
  MOV AH,9            
  LEA DX,multi
  INT 21h
 
  MOV AH, 4Ch
  XOR AL, AL
  INT 21h
 Main ENDP

MyCode endS
End Start
