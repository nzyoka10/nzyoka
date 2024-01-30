//^ Java script functions
    //* ====== Example 1=======================
    function sayHi()
    {
        console.log("Hello, Js functions!");
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