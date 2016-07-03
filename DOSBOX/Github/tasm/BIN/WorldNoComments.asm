MyStack segment stack
  DB 64 dup('12345678')			
MyStack endS					
MyData segment
  helloMsg DB "Hello World$"			
MyData endS								
MyCode segment                                  
 Assume CS:MyCode,DS:MyData                     
Main PROC
  Start:
   MOV AX, MyData                              
   MOV DS, AX                                  
   MOV AH,9                                     
   LEA DX,helloMsg                       
   INT 21h 
   MOV AH, 4Ch		
   XOR AL, AL		
   INT 21h
 Main ENDP
MyCode endS			
End Start