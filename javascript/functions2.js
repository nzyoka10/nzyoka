console.log("JavaScript Functions!");

function calc(a, b)
{
    return (2 * (a + b));
}
console.log(calc(7, 3));
//calc(2, 3)
console.log("\n================================");

//^ REST parameters
    // is something that allows a function to accept any number of arguments as an array, ANY NUMBER OF arguments
    console.log("Rest parameters!");
    function collectThings(k, ...n)
    {
        //* a function can only have one REST parameter
        console.log(k);
        console.log(n);
    }
    console.log(
        collectThings(1, 2, 3, 4, 5 , 6, 7, 8, 9, 10)
    );

console.log("\n================================");

//^       ARROW functions
    // convert below to arrow function
    console.log("Arrow functions!");
        const add = (x, y) =>        {
            return x + y;
        }
    console.log(add(2, 14));

    // simple code example
    const addT = (j, i) => j + i; 
    const sum = (j, i) => j + i; 
    console.log(`${sum(2, 9)}`);
    console.log(`${addT(2, 4)}`);
console.log("\n================================");

//*    ==== NESTED functions
    //  a function within another function
        console.log("Nested function!");

        function outerF()
        {
            console.log('\tOuter function!');

            function innerF()
            {
                console.log('\t\t Inner function!');
            }
            innerF();
        }
        outerF();


    // functions scope
        // variables defined inside a function can ONLY be accessed with the function
        //! CAN NOT BE ACCESS OUTSIDE THE FUNCTION

     console.log("\n== functions scope ==");
    // ~ ---      code Example
        function doSomething()
        {
            let num1 = 10;
            const num2 = 20;
            var num3 = 30;

            console.log(num1, num2, num3);
        }
        doSomething();
    
    //*  GLOBAL SCOPE example
        //~ variables declared outside a function can/ will be accessed/ or called anywhere
        var globalVar = "I am Global";
        const global = "new Global";

        function globalScope()
        {
            console.log(globalVar, '\n', global);
        }
        globalScope();

// ^    Js CLOSURES --------------------------------    
    console.log("===    Closures in javascript!");
      //? what is closure ?
        //* are functions that have access to the variables and parameter of their parent function....
        //* even after the parent function has completed execution

        //& Example................
        function makeCounter()
        {
            let count = 7;

            // counter function has access to the variables and parameter of its parent 

            function counter()
            {
                // inner function is the closure
                // the nested function
                // lives longer for execution
                return count++;
            }

            return counter;
        }
        const myCounter = makeCounter();
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());
        console.log(myCounter());

        

