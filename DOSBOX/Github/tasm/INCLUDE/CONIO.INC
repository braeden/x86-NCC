;
; CONIO.INC
; 
; Author:
;  David Foster
;
; Description:
;  Contains functions for performing
;  console input and output
; 
; Requires:
;  none
;

CIO_inputBuffer:
 CIO_inputBuffer_len DB 255             ; 254 chars + CR
 CIO_inputBuffer_recall DB ?
 CIO_inputBuffer_chars DB 255 dup('INPUTBUF')
 
CIO_numericBuffer:
 CIO_numericBuffer_len DB 7             ; ('-' + 5 digits) + CR
 CIO_numericBuffer_recall DB ?
 CIO_numericBuffer_chars DB 7 dup('NUM')

CIO_badUnsignedByteMsg DB "Expected integer in range [0,255]. Reinput: ","$"
CIO_badSignedByteMsg DB "Expected integer in range [-128,127]. Reinput: ","$"
CIO_badUnsignedWordMsg DB "Expected integer in range [0,65535]. Reinput: ","$"
CIO_badSignedWordMsg DB "Expected integer in range [-32768,32767]. Reinput: ","$"

; ########################################################
; # Prints a character at the cursor's position (and
; # moves the cursor right).
; # 
; # Input:
; #  DL: ASCII value of character to print
; #
; # Changes:
; #  none
; ########################################################
PrintChar PROC
  PUSH AX
   MOV AH,2                     ; print char and move cursor right
   INT 21h                      ; call DOS
  POP AX
  RET
PrintChar ENDP

; ##########################################################
; # Prints a '$'-terminated string
; #
; # Input:
; #  DS:DX -> string to print
; #
; # Changes:
; #  none
; #
; # Example:
; #  LEA DX,msg
; #  CALL PrintStr
; ##########################################################
PrintStr PROC
  PUSH AX
   MOV AH,9                     ; print string
   INT 21h                      ; call DOS
  POP AX
  RET
PrintStr ENDP

; ########################################################
; # Prints a newline at the cursor's position.
; #
; # Input:
; #  none
; # 
; # Changes:
; #  none
; ########################################################
PrintNewline PROC
  PUSH AX
  PUSH DX
   MOV AH,2
   MOV DL,13
   INT 21h                      ; print carriage return
    
   MOV DL,10
   INT 21h                      ; print line feed
  POP DX
  POP AX
  RET
PrintNewline ENDP

; ##################################################################
; # Inputs a character and echos it to the screen.
; # 
; # If the ASCII code returned is 0, then a key with an extended
; # character code was pressed.
; # 
; # Input:
; #  none
; #
; # Changes:
; #  AL: the ASCII code of the pressed key,
; #      or 0 if an extended code
; #  AH: the extended code of the pressed key,
; #      or undefined if an ASCII code
; ##################################################################
InputChar PROC
  PUSH AX
   MOV AH,1                      ; input key, with echo
   INT 21h                       ; call DOS
   CMP AL,0
   JNE InputChar_ASCII
  InputChar_Extended:
   PUSH BX
    MOV BL,AL                    ; save ASCII code
    INT 21h                      ; get extended code
    MOV AH,AL
    MOV AL,BL
   POP BX
  InputChar_ASCII:
   POP AX
  RET
InputChar ENDP

; ##################################################################
; # Inputs a '$'-terminated string.
; # 
; # Input:
; #  AH: size of input buffer, in bytes (including '$')
; #  DS:DX -> input buffer 
; # 
; # Changes:
; #  AL: num chars actually read (excluding '$')
; ##################################################################
InputStr PROC
  PUSH AX
  PUSH BX
  PUSH BP
  MOV BP,DS                    ; save old data segment in BP

  ; Initialize internal input buffer
  MOV CS:CIO_inputBuffer_len,AH
  MOV CS:CIO_inputBuffer_recall,0

  ; Read keyboard input into the internal buffer
  PUSH DX
  MOV AX,CS
  MOV DS,AX
   MOV AH,0Ah                   ; input string
   MOV DX,OFFSET CS:CIO_inputBuffer
   INT 21h                      ; call DOS

   ; Print line-feed to move cursor down
   ; (the user already typed a carriage-return)
   MOV AH,2
   MOV DL,10
   INT 21h
  POP DX

  ; Copy characters from internal buffer into user buffer
  PUSH CX
  PUSH SI
  PUSH DI
   MOV AX,CS                    ; save old code segment in AX

   MOV SI,OFFSET CS:CIO_inputBuffer_chars       ; AX:SI: source buffer
   MOV DI,DX                                    ; BP:DI: destination buffer

   ; CX: num of chars actually read (and num to copy)
   MOV CL,CS:CIO_inputBuffer_recall
   MOV CH,0
   
   CMP CX,0
   JE InputStr_CopyBuffer_Done
  InputStr_CopyBuffer:
   MOV DS,AX
   MOV BL,[SI]                  ; BL = CS:[SI]
   INC SI                       ; SI++
   
   MOV DS,BP
   MOV [DI],BL                  ; DS:[DI] = BL
   INC DI                       ; DI++
   
   LOOP InputStr_CopyBuffer
  InputStr_CopyBuffer_Done:

   ; Append terminating '$' to user buffer
   MOV DS,BP
   MOV BYTE PTR [DI],'$'        ; DS:[DI] = '$'

  POP DI
  POP SI
  POP CX
  POP BP
  POP BX
  POP AX
  
  ; AL: number of chars actually read
  MOV AL,CS:CIO_inputBuffer_recall
  
  RET
InputStr ENDP

; ##################################################################
; # Waits until a character is pressed and returns the
; # value of the key that was pressed. Nothing is printed.
; # (UNTESTED)
; # 
; # Input:
; #  none
; #
; # Changes:
; #  AL: the ASCII code of the pressed key,
; #      or 0 if an extended code
; #  AH: the extended code of the pressed key,
; #      or undefined if an ASCII code
; #  CF: clear if ASCII code, set if extended code
; ##################################################################
GetKey PROC
  MOV AH,8                      ; input key, no echo
  INT 21h                       ; call DOS
  CMP AL,0
  JE GetKey_Extended
 GetKey_ASCII:
  CLC
  RET
 GetKey_Extended:
  ; AH=8
  INT 21h                      ; get extended code
  MOV AH,AL
  MOV AL,0
  STC
  RET
GetKey ENDP

; ##################################################################
; # Waits until a key is pressed.
; # Does NOT display a "Press any key to continue" prompt.
; # 
; # Input:
; #  none
; # 
; # Changes:
; #  CF
; ##################################################################
Pause PROC
  PUSH AX
   CALL GetKey
  POP AX
  RET
Pause ENDP

; ########################################################
; # Prints a decimal digit.
; #
; # Input:
; #  DL=digit (0-9)
; #
; # Changes:
; #  DL
; ########################################################
PrintDecDigit PROC
  ADD DL,'0'
  CALL PrintChar
  RET
PrintDecDigit ENDP

; ########################################################
; # Prints an unsigned byte in decimal.
; # 
; # Input:
; #  DL: byte
; # 
; # Changes:
; #  none
; ########################################################
PrintUnsignedDecByte PROC
  PUSH AX
  PUSH BX
  PUSH DX
  
  MOV AL,DL
 
  CMP AL,100
  JAE PUDB_Digits_3
  CMP AL,10
  JAE PUDB_Digits_2
  CMP AL,0
  JAE PUDB_Digits_1
 PUDB_Digits_0:
  MOV DL,'0'
  CALL PrintChar
  JMP PUDB_Done
 PUDB_Digits_3:
  MOV AH,0
  MOV BL,100
  DIV BL              ; AL: num DIV 100, AH: num MOD 100
  MOV DL,AL
  ADD DL,'0'
  ;PUSH AX
   CALL PrintChar
  ;POP AX
  MOV AL,AH
 PUDB_Digits_2:
  MOV AH,0
  MOV BL,10
  DIV BL              ; AL: num DIV 10, AH: num MOD 10
  MOV DL,AL
  ADD DL,'0'
  ;PUSH AX
   CALL PrintChar
  ;POP AX
  MOV AL,AH
 PUDB_Digits_1:
  MOV DL,AL
  ADD DL,'0'
  CALL PrintChar      ; changes: AX
 PUDB_Done:
  POP DX
  POP BX
  POP AX
  RET
PrintUnsignedDecByte ENDP

; ########################################################
; # Prints an unsigned word in decimal.
; # 
; # Input:
; #  DL=byte
; # 
; # Changes:
; #  none
; ########################################################
PrintUnsignedDecWord PROC
  PUSH AX
  PUSH CX
  PUSH DX
  
  MOV AX,DX
  
  CMP AX,10000
  JAE PUDW_Digits_5
  CMP AX,1000
  JAE PUDW_Digits_4
  CMP AX,100
  JAE PUDW_Digits_3
  CMP AX,10
  JAE PUDW_Digits_2
  CMP AX,0
  JNE PUDW_Digits_1
 PUDW_Digits_0:
  MOV DL,'0'
  CALL PrintChar
  JMP PUDW_Done
 PUDW_Digits_5:
  MOV DX,0
  MOV CX,10000
  DIV CX              ; AX: num DIV 10000, DX: num MOD 10000
  PUSH DX
   MOV DL,AL
   ADD DL,'0'
   CALL PrintChar     ; changes: AX
  POP AX
 PUDW_Digits_4:
  MOV DX,0
  MOV CX,1000
  DIV CX              ; AX: num DIV 1000, DX: num MOD 1000
  PUSH DX
   MOV DL,AL
   ADD DL,'0'
   CALL PrintChar     ; changes: AX
  POP AX
 PUDW_Digits_3:
  MOV DX,0
  MOV CX,100
  DIV CX              ; AX: num DIV 100, DX: num MOD 100
  PUSH DX
   MOV DL,AL
   ADD DL,'0'
   CALL PrintChar     ; changes: AX
  POP AX
 PUDW_Digits_2:
  MOV DX,0
  MOV CX,10
  DIV CX              ; AX: num DIV 10, DX: num MOD 10
  PUSH DX
   MOV DL,AL
   ADD DL,'0'
   CALL PrintChar     ; changes: AX
  POP AX
 PUDW_Digits_1:
  MOV DL,AL
  ADD DL,'0'
  CALL PrintChar
 PUDW_Done:
  POP DX
  POP CX
  POP AX
  RET
PrintUnsignedDecWord ENDP

; ########################################################
; # Prints a signed byte in decimal.
; # 
; # Input:
; #  DL: byte
; # 
; # Changes:
; #  none
; ########################################################
PrintDecByte:
PrintSignedDecByte PROC
  CMP DL,0
  JL PSDB_Neg
 PSDB_Pos:
  CALL PrintUnsignedDecByte
  RET
 PSDB_Neg:
  ;PUSH AX
  PUSH DX
   MOV DL,'-'
   CALL PrintChar
  POP DX
  ;POP AX
  
  PUSH DX
   NEG DL
   CALL PrintUnsignedDecByte
  POP DX
  
  RET
PrintSignedDecByte ENDP

; ########################################################
; # Prints a signed word in decimal.
; # 
; # Input:
; #  DX: word
; # 
; # Changes:
; #  none
; ########################################################
PrintDecWord:
PrintSignedDecWord PROC
  CMP DX,0
  JL PSDW_Neg
 PSDW_Pos:
  CALL PrintUnsignedDecWord
  RET
 PSDW_Neg:
  PUSH AX
  PUSH DX
   MOV DL,'-'
   CALL PrintChar
  POP DX
  POP AX
  
  PUSH DX
   NEG DX
   CALL PrintUnsignedDecWord
  POP DX
  
  RET
PrintSignedDecWord ENDP

; ########################################################
; # Prints a hexadecimal digit (unsigned nibble).
; #
; # Input:
; #  DL: digit (0-15)
; #
; # Changes:
; #  DL
; ########################################################
PrintHexNibble:
PrintHexDigit PROC
  CMP DL,10
  JB PHD_From0To9
 PHD_FromAToF:
  ADD DL,'A'-10
  CALL PrintChar
  RET
 PHD_From0To9:
  JMP PrintDecDigit
PrintHexDigit ENDP

; ########################################################
; # Prints a byte in hexadecimal.
; #
; # Input:
; #  DL: byte
; #
; # Changes:
; #  none
; ########################################################
PrintHexByte PROC
  PUSH DX
   SHR DL,4
   CALL PrintHexDigit   ; print high nibble
  POP DX

  PUSH DX
   AND DL,15
   CALL PrintHexDigit   ; print low nibble
  POP DX

  RET
PrintHexByte ENDP

; ########################################################
; # Prints a word in hexadecimal.
; #
; # Input:
; #  DX: word
; #
; # Changes:
; #  none
; ########################################################
PrintHexWord PROC
  PUSH DX
   MOV DL,DH
   CALL PrintHexByte    ; print high byte
  POP DX

  CALL PrintHexByte     ; print low byte
  RET
PrintHexWord ENDP

; ########################################################
; # Prints a byte in binary.
; #
; # Input:
; #  DL: byte
; #
; # Changes:
; #  none
; ########################################################
PrintBinByte PROC
  PUSH AX
  PUSH DX
   MOV DH,DL           ; save byte to print in DH
   MOV AH,2            ; AH = (print char DL and move cursor right)
   
   MOV AL,DH
   AND AL,128
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,64
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,32
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,16
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,8
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,4
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,2
   CALL PrintBinByte_PrintBinDigit
   
   MOV AL,DH
   AND AL,1
   CALL PrintBinByte_PrintBinDigit
  POP DX
  POP AX
  RET
 
 ; Prints binary digit based on ZF
 ; (AH assumed to already be 2)
 PrintBinByte_PrintBinDigit:
  JNZ PrintBinByte_PrintBinDigit_1
 PrintBinByte_PrintBinDigit_0:
  MOV DL,'0'
  INT 21h
  RET
 PrintBinByte_PrintBinDigit_1:
  MOV DL,'1'
  INT 21h
  RET
PrintBinByte ENDP

; ########################################################
; # Prints a word in binary.
; #
; # Input:
; #  DX: word
; #
; # Changes:
; #  none
; ########################################################
PrintBinWord PROC
  PUSH DX
   MOV DL,DH
   CALL PrintBinByte    ; print high byte of word (DH)
  POP DX
  CALL PrintBinByte     ; print low byte of word (DL)
  RET
PrintBinWord ENDP

; ########################################################
; # Parses an unsigned decimal byte from a string.
; # 
; # Input:
; #  DS:DI -> string to parse
; # 
; # Changes:
; #  AL: numeric value if success, undefined if error
; #  DS:DI -> after the last parsed character
; #  CF: clear if success, set if error
; ########################################################
ParseUnsignedDecByte PROC
  PUSH BX
  MOV BX,AX
  
  CALL ParseUnsignedDecWord
  JC ParseUDB_Done
  CMP AX,255
  JA ParseUDB_TooBig
 ParseUDB_Success:
  CLC
  JMP ParseUDB_Done
 ParseUDB_TooBig:
  STC
 ParseUDB_Done:
  MOV AH,BH
  POP BX
  RET
ParseUnsignedDecByte ENDP

; ########################################################
; # Parses a signed decimal byte from a string.
; # 
; # Input:
; #  DS:DI -> string to parse
; # 
; # Changes:
; #  AL: numeric value if success, undefined if error
; #  DS:DI -> after the last parsed character
; #  CF: clear if success, set if error
; ########################################################
ParseSignedDecByte PROC
  PUSH BX
  MOV BX,AX
  
  CALL ParseSignedDecWord
  JC ParseSDB_Done
  CMP AX,127
  JG ParseSDB_TooBig
  CMP AX,-128
  JL ParseSDB_TooBig
 ParseSDB_Success:
  CLC
  JMP ParseSDB_Done
 ParseSDB_TooBig:
  STC
 ParseSDB_Done:
  MOV AH,BH
  POP BX
  RET
ParseSignedDecByte ENDP

; ########################################################
; # Parses an unsigned decimal word from a string.
; # 
; # Input:
; #  DS:DI -> string to parse
; # 
; # Changes:
; #  AX: numeric value if success, undefined if error
; #  DS:DI -> after the last parsed character
; #  CF: clear if success, set if error
; ########################################################
ParseUnsignedDecWord PROC
  PUSH BX
  PUSH DX
  
  MOV AX,0              ; init accumulated value
  MOV BH,1              ; BH=1 (flag: haven't parsed anything yet)
 ParseUDW_Loop:
  ; Insure the next character is a decimal digit
  MOV BL,[DI]           ; BL: character to parse
  CMP BL,'0'
  JB ParseUDW_LoopDone
  CMP BL,'9'
  JA ParseUDW_LoopDone
  INC DI
  
  ; Accumulate the digit in AX
  CMP AX,6553
  JA ParseUDW_Fail_TooBig
  MOV DX,10
  MUL DX                ; AX *= 10
  SUB BL,'0'            ; BL: parsed digit value
  MOV BH,0
  ADD AX,BX             ; AX += BL
  JC ParseUDW_Fail_TooBig
  
  ; BH already 0        ; BH=0 (flag: we've parsed something)
  JMP ParseUDW_Loop
 ParseUDW_LoopDone:
  CMP BH,0              ; check whether we parsed something
  JNE ParseUDW_Fail_NotFound
 
 ParseUDW_Success:
  CLC
  JMP ParseUDW_Done
 ParseUDW_Fail_TooBig:
 ParseUDW_Fail_NotFound:
  STC
  JMP ParseUDW_Done
 
 ParseUDW_Done:
  POP DX
  POP BX
  RET
ParseUnsignedDecWord ENDP

; ########################################################
; # Parses a signed decimal word from a string.
; # 
; # Input:
; #  DS:DI -> string to parse
; # 
; # Changes:
; #  AX: numeric value if success, undefined if error
; #  DS:DI -> after the last parsed character
; #  CF: clear if success, set if error
; ########################################################
ParseDecWord:
ParseSignedDecWord PROC
  CMP BYTE PTR [DI],'-'
  JE ParseSDW_Negative
 
 ParseSDW_Positive:
  CALL ParseUnsignedDecWord
  JC ParseSDW_Done
  CMP AX,32767
  JA ParseSDW_TooBig
  JMP ParseSDW_Success
 
 ParseSDW_Negative:
  INC DI                        ; jump over the negative sign
  CALL ParseUnsignedDecWord
  JC ParseSDW_Done
  CMP AX,32768
  JA ParseSDW_TooBig
 ParseSDW_Negative_Success:
  NEG AX
  JMP ParseSDW_Success
 
 ParseSDW_TooBig:
  STC
  JMP ParseSDW_Done
 ParseSDW_Success:
  CLC
  
 ParseSDW_Done:
  RET
ParseSignedDecWord ENDP

; ########################################################
; # Inputs an unsigned decimal byte.
; # 
; # Input:
; #  none
; # 
; # Changes:
; #  AL: numeric value
; ########################################################
InputUnsignedDecByte PROC
  PUSH DX
  PUSH DI
  PUSH DS
  
  PUSH BX
  MOV BX,AX
  
  MOV AX,CS
  MOV DS,AX
 
 InputUDB_Input:
  ; Input string
  MOV AH,0Ah
  MOV DX,OFFSET CS:CIO_numericBuffer
  INT 21h
  
  ; Move cursor to the next line
  MOV AH,2
  MOV DL,10
  INT 21h
  
  ; Parse decimal number from string 
  MOV DI,OFFSET CS:CIO_numericBuffer_chars
  CALL ParseUnsignedDecByte
  JC InputUDB_Fail
  ; AL: parsed number
  
  ; Insure that the entire string was parsed
  ; (look for the end of the input buffer)
  MOV DL,[DI]
  CMP DL,13
  JE InputUDB_Success
 
 InputUDB_Fail:
  ; Print out error message
  MOV AH,9
  MOV DX,OFFSET CS:CIO_badUnsignedByteMsg
  INT 21h
  JMP InputUDB_Input
 
 InputUDB_Success:
  MOV AH,BH
  POP BX
  
  POP DS
  POP DI
  POP DX
  RET
InputUnsignedDecByte ENDP

; ########################################################
; # Inputs a signed decimal byte.
; # 
; # Input:
; #  none
; # 
; # Changes:
; #  AL: numeric value
; ########################################################
InputDecByte:
InputSignedDecByte PROC
  PUSH DX
  PUSH DI
  PUSH DS
  
  PUSH BX
  MOV BX,AX
  
  MOV AX,CS
  MOV DS,AX
 
 InputSDB_Input:
  ; Input string
  MOV AH,0Ah
  MOV DX,OFFSET CS:CIO_numericBuffer
  INT 21h
  
  ; Move cursor to the next line
  MOV AH,2
  MOV DL,10
  INT 21h
  
  ; Parse decimal number from string 
  MOV DI,OFFSET CS:CIO_numericBuffer_chars
  CALL ParseSignedDecByte
  JC InputSDB_Fail
  ; AL: parsed number
  
  ; Insure that the entire string was parsed
  ; (look for the end of the input buffer)
  MOV DL,[DI]
  CMP DL,13
  JE InputSDB_Success
 
 InputSDB_Fail:
  ; Print out error message
  MOV AH,9
  MOV DX,OFFSET CS:CIO_badSignedByteMsg
  INT 21h
  JMP InputSDB_Input
 
 InputSDB_Success:
  MOV AH,BH
  POP BX
  
  POP DS
  POP DI
  POP DX
  RET
InputSignedDecByte ENDP

; ########################################################
; # Inputs an unsigned decimal word.
; # 
; # Input:
; #  none
; # 
; # Changes:
; #  AX: numeric value
; ########################################################
InputUnsignedDecWord PROC
  PUSH DX
  PUSH DI
  PUSH DS
  MOV AX,CS
  MOV DS,AX
 
 InputUDW_Input:
  ; Input string
  MOV AH,0Ah
  MOV DX,OFFSET CS:CIO_numericBuffer
  INT 21h
  
  ; Move cursor to the next line
  MOV AH,2
  MOV DL,10
  INT 21h
  
  ; Parse decimal number from string 
  MOV DI,OFFSET CS:CIO_numericBuffer_chars
  CALL ParseUnsignedDecWord
  JC InputUDW_Fail
  ; AX: parsed number
  
  ; Insure that the entire string was parsed
  ; (look for the end of the input buffer)
  MOV DL,[DI]
  CMP DL,13
  JE InputUDW_Success
 
 InputUDW_Fail:
  ; Print out error message
  MOV AH,9
  MOV DX,OFFSET CS:CIO_badUnsignedWordMsg
  INT 21h
  JMP InputUDW_Input
 
 InputUDW_Success:
  POP DS
  POP DI
  POP DX
  RET
InputUnsignedDecWord ENDP

; ########################################################
; # Inputs a signed decimal word.
; # 
; # Input:
; #  none
; # 
; # Changes:
; #  AX: numeric value
; ########################################################
InputDecWord:
InputSignedDecWord PROC
  PUSH DX
  PUSH DI
  PUSH DS
  MOV AX,CS
  MOV DS,AX
 
 InputSDW_Input:
  ; Input string
  MOV AH,0Ah
  MOV DX,OFFSET CS:CIO_numericBuffer
  INT 21h
  
  ; Move cursor to the next line
  MOV AH,2
  MOV DL,10
  INT 21h
  
  ; Parse decimal number from string 
  MOV DI,OFFSET CS:CIO_numericBuffer_chars
  CALL ParseSignedDecWord
  JC InputSDW_Fail
  ; AX: parsed number
  
  ; Insure that the entire string was parsed
  ; (look for the end of the input buffer)
  MOV DL,[DI]
  CMP DL,13
  JE InputSDW_Success
 
 InputSDW_Fail:
  ; Print out error message
  MOV AH,9
  MOV DX,OFFSET CS:CIO_badSignedWordMsg
  INT 21h
  JMP InputSDW_Input
 
 InputSDW_Success:
  POP DS
  POP DI
  POP DX
  RET
InputSignedDecWord ENDP
