/**
 * *    Javascript while loop
 * ~       --> Loops can execute a block of code as long as a specified condition is true.
 * 
 * ~       SYNTAX
 * &            while (condition)
 * &                  {
 * ~                       //& Some code to be executed
 * &                   }
 * 
 */

//The while loop loops through a block of code as long as a specified condition is true.
    // print 1 to 10
    console.log("print 1 to 10using  (while loop): in js  "); 
    let i = 1;
    let text = '';

    while (i <= 10)
    {
        text += "\t\n the number is :--> " +i;
        i++;
    }
console.log(text);

console.log("\nExample 2 using  (while loop): in js  "); 
let myNum = 59;
while(myNum >= 14)
{
    console.log("myNum is :--> " +myNum);
    myNum++;
}