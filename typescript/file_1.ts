function getDefaultNumber(mult: number, canNegative: boolean){
 let n = 1;
 n = mult * n;

 if(!canNegative && n < 0){
  return n * -1;
 };

 return n;
}; 

function getDefaultString(add: string){
 let s = "Hello, ";
 return s + add;
}; 

export {
 getDefaultNumber,
 getDefaultString
};