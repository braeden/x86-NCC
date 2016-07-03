; ASM -- National Computer Camps 2013
; Sample Code for instruction written by Michael Curry in 2012

; Setup Notepad++: Press Language > A > Assembly
; Enable Auto Complete: Press Settings > Preferances > Backup/Auto-Completion > Check the auto completion boxes

; === STACK SEGMENT ===
MyStack segment stack
  DB 64 dup('12345678')			; This segment will essentially allocate 8 bits (one byte) of memory
MyStack endS					; onto the stack. This should be the same for every assembler program.

; === DATA SEGMENT ===
MyData segment
  ; --- Declare your variables here ---
  helloMsg DB "Test123$"			; This is the format for declaring a variable, the $ indicates a string.
MyData endS								; Format: varName DB "Value" |OR| varName DB "StringValue$"

; === CODE SEGMENT ===
MyCode segment                                  ; Sets up the segment names for
 Assume CS:MyCode,DS:MyData                     ;   the code and data segments.
 
 ; === INCLUDE DIRECTIVES ===
 
 ; === PROCEDURES ===
Main PROC      	; Main procedure
  Start:	  	; This is how you define function names- "FunctionName:", important for later programs
  
   MOV AX, MyData                               ; Setup data segment, first move vars into a register (AX)
   MOV DS, AX                                   ; then move the register value into DS. Mucho Importante!
  
   ; --- Insert your program's initial code here ---
   
   ; Print "Hello World" to the screen
   MOV AH,9                                     ; DOS-Service Code 9 : Print string DX. Always load svc. codes into AH
   LEA DX,helloMsg                              ; DX -> helloMsg : DX becomes a pointer to var helloMsg
   INT 21h                                      ; Invokes the DOS service : Carries out the DOS Svc. Code in AH 
   
   ;TIP: You can find the DOS service codes here: http://spike.scu.edu.au/~barry/interrupts.html
   
   ; ---Stick all this footer code in all of your Assembler programs---
   
   ;This section of code closes the program and returns to DOS.
   MOV AH, 4Ch		; DOS Service Code 4C: Exit Program (Any service code with a letter must end with "h" for hex value)
   XOR AL, AL		; Using XOR with the same register clears the value, a more efficent version of "MOV AL, 0"
   INT 21h			; Call the DOS service and return to the DOS prompt
   
	; The following code is essential, it will prevent memory leaks and completely close and terminate your program
 Main ENDP
 
MyCode endS			
End Start