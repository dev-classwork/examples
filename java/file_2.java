public class File2 {
 private int run(bool boost, int countStart) {
  int count = countStart;

  while(count < 100){
   if(boost){
    count+=3; 
   }else{
    count++;
   };
  };

  System.out.println("The race is over.");
 };
};