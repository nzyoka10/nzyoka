//alert("Hello Eric!");
//console.log(23 + 9);
//~ function greet()
    function greet()
    {
        console.log("Hello, JavaScript!");
    }
greet();

//& Parameters and Arguments
    //** Parameters :: are the variables that are declared in the function definition
            // ** firstName and lastName are the parameters
    //^  Arguments :: are values that are passed to the function when called.
            // ^ firstName and lastName = "Eric Nzyoka"; are arguments passed to the function greet1()
    // Example
    function greet1(firstName, lastName) 
    {
        console.log("Hello " + firstName + " " + lastName);
    }
greet1("Eric", "Nzyoka");

//^  ____--------=====0------___ Assignment starts here ____--------=====0------___
/**
 ** write function called add7
 *@add : function add, take number
 ** return  :: number then ADD it to 7
 *^ 
 */
    function add7(num) 
    {
        var  num = 3;
        //alert(sum = num + 7);
        console.log(num+7)
    }
    add7();

    //** Return function  */
    //~ Example 2:
    function add(i, j)
    {
        return i + j;
    }
    let sum = add(4, 7);
    console.log("Sum if i and j is ::--> " + sum);

/**
 ** Write a function called multiply that takes 2 numbers and returns their product.
 * @param {myNum1} myNum1 : The first number
 * @param {myNum2}  myNum2 : The second number
 * @return {multiply} multiply :: The product of `x` and `y`.
 * 
 */
// let a = 10, b = 2;
    function multiply (myNum1, myNum2, sum) 
    {
        console.log("myNum1: " + myNum1);
        console.log("myNum2: " + myNum2);
        console.log("mutiply: " + myNum1 + " * " + myNum2);
        console.log("My  answer is: " + (myNum1*myNum2));
        
        console.log("\n ");       
    }
    multiply (10, 5);

    //~  --------   Example 2   ------    
    function multiply1(a, b)
    {
        console.log(a * b); 
    }
    multiply1(4,9);

/**
 * * Capitalize the First Letter of Multiple Strings
 * function capitalize
 * takes a string and returns  that string, with ONLY 
 * * the first letter capitalized
 * ~ Capitalize the first letter
 * 
 */





function capitalize(string) 
{
    //return string.charAt(0).toUpperCase();
    console.log(string.charAt(0).toUpperCase());
}
capitalize("eric");

//var string = ("eric");
//console.log(string);

/**
 * *    function to return the last letter of a string
 * * @param {String} string
 * @return {String} The last character in the string
 * @
 * end!
 */
function lastLetter(str) 
{
    // lastLetter ("abcd") should return "d"
    console.log(str.slice(-1)); 
}
lastLetter("abcd"); //~ Output :: "d"
lastLetter("nzyoka"); //~ Output :: "a"



"Problem solving is writing an original program that performs a particular set of tasks and meets all stated constraints.
- Think Like a Programmer"