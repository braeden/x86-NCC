; National Computer Camps Sound Assembly Program
; Written by Rick Astley (Mike Curry) 2012
; Final Assembler Project Example

; === STACK SEGMENT ===
MyStack segment stack
	DB 64 dup('12345678')
MyStack endS

; === DATA SEGMENT ===
MyData Segment
	; --- Declare Varibles here ---
	never DB "Never $"
	gonna DB "gonna $"
	give DB "give $"
	you DB "you $"
	up DB "up, $"
	let DB "let $"
	down DB "down, $"
	run DB "run $"
	around DB "around $"
	nd DB "and $"
	desert DB "desert $"
	make DB "make $"
	cry DB "cry, $"
	say DB "say $"
	goodbye DB "goodbye, $"
	tell DB "tell $"
	a DB "a $"
	lie DB "lie $"
	hurt DB "hurt $"
	
	
MyData endS

; === CODE SEGMENT ===
MyCode segment
	Assume CS:MyCode,DS:MyData
	
	; === INCLUDE DIRECTIVES ===
	include CONIO.INC
	include TIME.INC
	include SOUND.INC
	; === PROCEDURES ===
	
	Main PROC
		Start:
			MOV AX, MyData
			MOV DS, AX
			
			; *** Inital Code Here ***
			
			MOV AH,0
			MOV AL,0 
			MOV BH,0 
			MOV BL,25
			
			
			MOV DX,207
			CALL TonePlay
			
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			
			MOV DX,233
			CALL TonePlay
			
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			
			MOV DX,277
			CALL TonePlay
			
			
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,give
				CALL PrintStr
			POP DX
			
			
			
			MOV DX,349
			CALL TonePlay
			
			PUSH DX
				LEA DX,you
				CALL PrintStr
			POP DX
			
			
			MOV BL,15
			CALL Delay
			
			
			
			MOV BL,25
			
			MOV DX,349
			CALL TonePlay
			PUSH DX
				LEA DX,up
				CALL PrintStr
			POP DX
			
			
			MOV DX,311
			CALL TonePlay
			
			CALL PrintNewLine
			
			CALL Delay
			
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			
			
			MOV DX,233
			CALL TonePlay
			
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			
			MOV DX,277
			CALL TonePlay
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,let
				CALL PrintStr
			POP DX
			
			
			MOV DX,311
			CALL TonePlay
			PUSH DX
				LEA DX,you
				CALL PrintStr
			POP DX
			
			
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,311
			CALL TonePlay
			
			PUSH DX
				LEA DX,down
				CALL PrintStr
			POP DX
			
			MOV DX,277
			CALL TonePlay
			
			
			CALL PrintNewLine
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			
			MOV DX,277
			CALL TonePlay
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,run
				CALL PrintStr
			POP DX
			
			
			MOV DX,277
			CALL TonePlay
			
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,311
			CALL TonePlay
			PUSH DX
				LEA DX,around
				CALL PrintStr
			POP DX
			
			MOV DX,261
			CALL TonePlay
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,nd
				CALL PrintStr
			POP DX
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,desert
				CALL PrintStr
			POP DX
			MOV DX,207
			CALL TonePlay
			
			MOV BL,35
			MOV DX,311
			CALL TonePlay
			PUSH DX
				LEA DX,you
				CALL PrintStr
			POP DX
			MOV DX,277
			CALL TonePlay
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			CALL PrintNewLine
			
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			MOV DX,277
			CALL TonePlay
			PUSH DX
				LEA DX,make
				CALL PrintStr
			POP DX
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,you
				CALL PrintStr
			POP DX
			MOV DX,349
			CALL TonePlay
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,349
			CALL TonePlay
			PUSH DX
				LEA DX,cry
				CALL PrintStr
			POP DX
			MOV DX,311
			CALL TonePlay
			
			CALL PrintNewLine
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			MOV DX,277
			CALL TonePlay
			PUSH DX
				LEA DX,say
				CALL PrintStr
			POP DX
			MOV DX,233
			CALL TonePlay
			MOV BL,35
			
			MOV DX,415
			CALL TonePlay
			MOV BL,25
			
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,261
			CALL TonePlay
			PUSH DX
				LEA DX,goodbye
				CALL PrintStr
			POP DX
			MOV DX,277
			CALL TonePlay
			
			CALL PrintNewLine
			MOV DX,261
			CALL TonePlay
			
			MOV DX,233
			CALL TonePlay
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,never
				CALL PrintStr
			POP DX
			
			MOV DX,233
			CALL TonePlay
			PUSH DX
				LEA DX,gonna
				CALL PrintStr
			POP DX
			
			MOV DX,277
			CALL TonePlay
			
			
			MOV DX,233
			CALL TonePlay
			
			MOV DX,277
			CALL TonePlay
			PUSH DX
				LEA DX,tell
				CALL PrintStr
			POP DX
			
			MOV BL,15
			CALL Delay
			MOV BL,25
			
			MOV DX,311
			CALL TonePlay
			PUSH DX
				LEA DX,a
				CALL PrintStr
			POP DX
			
			MOV DX,261
			CALL TonePlay
			PUSH DX
				LEA DX,lie
				CALL PrintStr
			POP DX
			
			MOV DX,233
			CALL TonePlay
			
			
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,nd
				CALL PrintStr
			POP DX
			MOV DX,207
			CALL TonePlay
			PUSH DX
				LEA DX,hurt
				CALL PrintStr
			POP DX
			MOV DX,311
			CALL TonePlay
			PUSH DX
				LEA DX,you
				CALL PrintStr
			POP DX
			MOV DX,277
			CALL TonePlay
			
			; ***Closing program and returning to DOS***
			MOV AH, 4Ch
			XOR AL, AL
			INT 21h
		Main ENDP
		
		
		
		
MyCode endS
End Start