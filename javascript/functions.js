//  
//^ Java script functions :: a set of statements that performs a task or calculates a value
//****************

// Example of a function
    function square(number) {
        return number * number;
    }
    let input = 52;
    console.log(`The square of ${input} is ${square(input)}`);

//* ====== Example 1=======================
    function sayHi()
    {
        console.log("Hello, Js is fun!");
    }
    // calling the function
    sayHi();

//* function to add two numbers
    function addNumbers(x , y)
    {
         console.log(x);
        console.log(y)
        console.log("x + y is: ", x + y);
    }
    addNumbers(7, 8); // output: 15

//* Defining and Invoking Functions:
    // A function is a reusable block of code that performs a specific task.
    //We'll learn how to define functions using the function keyword and how to invoke (call) them when needed.


    
    //! function definition
    function greet(name){
        console.log("Hello, " + name + "!");

    }
    // functions invoke (calling)
    greet("Eric Nzyoka" ); // calls "Hello, Eric Nzyoka"
    greet("John Doe");     // calls "Hello, John Doe"

//* Js functions : Return value
    //~ function can return a value using the `return` keyword
    //~ function with return value
    function multiply(a, b) 
    {
        return a * b;
    }
    // using the return value, to get output
    let multiply_sum = multiply(3, 5);
    console.log(multiply_sum);

//! ----------  Function Scope  ---------
    // types of scopes 
    // namely:- global scope, local scope and block scope

//~ Global Scope:
    //~   in global scope variables can be accessed anywhere inthe code
    let globalVar = "global variable. I can be ACCESSED anywhere in the code!";
    console.log(globalVar);

//^ Local Scope: 
    //^  ONLY accessed within where it is defined
    //~ example 1
        function localScope()
        {
            let local = "Local scope (variable). I can be accessed ONLY inside this function.";
            console.log(local);
        }
        localScope();
    //~ example 2
        function calculate()
        {
            let k = 10; 
            console.log(k);
        }
        calculate(); //* Outputs: 10
       // console.log(k); //! ERROR: variable k is not defined (outside the function scope)

//& Block Scope
        // It is used in conditional statements and loops, so thses are only accessed within that block
        //It is used in conditional statements and loops, so thses are only accessed within that block
        if(true){
            let blockVar = "Block variable. I can be accessed only within this block"
            console.log(blockVar);
        }

//Now in order to test the above statements consider the following example.
//In the following example only the globalVar is will print the message
    function testing(){
        console.log(globalVar)
        console.log(calculate)
        //console.log(blockVar)
    }
    testing()

    function favoriteAnimal(animal) {
        return animal + " is my favorite animal!"
      }
    
      console.log(favoriteAnimal('Goat'))

      function showMessage() {
        alert( 'Hello everyone!' );
      }
      
      showMessage();
//showMessage();
/**
 * Local variables
    A variable declared inside a function is only visible inside that function.
    For example:
        function showMessage() {
            let message = "Hello, I'm JavaScript!"; // local variable
            alert( message );
        }
    showMessage(); // Hello, I'm JavaScript!
    alert( message ); // <-- Error! The variable is local to the function

*/

//^    Outer variables
    //      A function can access an outer variable as well, for example:
    var userName = "Nzyoka";
        function showMessage() 
        {
            let message = "Hello, " + userName;
            alert(message);
        }
        //userName = "Nzyoka";
        showMessage(userName); // to output: Hello, nzyoka