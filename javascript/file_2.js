const a = (b,c) => {
 let e = b * c;

 if(e > 0){
  return e;
 }else if(e < 0){
  return -e;
 }else{
  return 1;
 };
};

const x = a(10, 5);
console.log(x);