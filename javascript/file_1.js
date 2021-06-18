function getDefaultNumber(mult, canNegative){
 let n = 1;
 n = mult * n;

 if(!canNegative && n < 0){
  return n * -1;
 };

 return n;
}; 

function getDefaultString(add){
 let s = "Hello, ";
 return n + add;
}; 