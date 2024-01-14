// Variables
    var first_name = "Eric";
    let last_name = "Nzyoka";
    const country = "Kenya";

    // Output variables on developer console
    console.log(first_name);
    console.log(last_name);
    console.log(country);

    // define multiple variables in this multiline style
    let user = 'Eric Doe',
        age = 25,
        message = 'Hello!';

        console.log(user);



/**
 * JavaScript scope
 * 3 types
 * * global scope
 * * functions scope
 * * block scope 
 */

    // Global scope
    // is the outermost scope in a Js program.
    // variables & functions declared in global scope are visible from anywhere inthe program
    // example below
    var j = "Hello, Eric!"; // accessed anywhere within the program

    function example()
    {
        console.log(j);
    }
    example();

// function scope - created when a functions is declared.
    // only accessible inside that function and nowhere else.

    function example2()
    {
        var fx = "I am function scope....";
        
        console.log(fx); 
    }
    example2();
   // console.log(fx);

// Block scope  - refers to the visibility of variables and functions within a block of code.
    // In JS if we declare any variable or function inside {} then it's known as block scope.
    function example3()
    {
        if (true)
        {
            let k = "I am block scope...";

            console.log(k);
        }
       // example3();
       //console.log(k);
    }
    example3();




