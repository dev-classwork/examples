public class File1 {
 private int getID(String name) {
  switch(name){
   case "User1": 
    return 3;
   case "User2":
    return 2;
   case "User3":
    return 1;
   default:
    return 0;
  };
 };
 private String getName(int id) {
  switch(name){
   case 3: 
    return "User1";
   case 2:
    return "User2";
   case 1:
    return "User3";
   default:
    return "User4";
  };
 };
};