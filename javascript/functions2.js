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
    
        console.log("\t Example 2 on Js closure!");
    //& Example 2
        function outer(y)
        {
            // nested function
            function inner(z)
            {
                return y + z;
            }
            return inner;
        }
        const outerReturn = outer(4);
        console.log(outerReturn(15));   // returns 19
        console.log(outerReturn(23));  // returns 27
        console.log(outerReturn(35));  // returns 39
        console.log(outerReturn(46));   // returns 50
        console.log(outerReturn(59));  // returns 63
        console.log(outerReturn(69)); // returns 73
    
    //& Example 3 on closure
        // Outer function
        function outerT() 
        {
	        function create_Closure(val) 
            {
		        return function ()
                {
			        return val;
		        }
            }

	    let arr = [];
	    let i;

	    for (i = 0; i < 4; i++) 
        {
		    arr[i] = create_Closure(i);
	    }

	    return arr;
    }
    let get_arr = outerT();
    console.log("\t\n");
    console.log(get_arr[0]());
    console.log(get_arr[1]());
    console.log(get_arr[2]());
    console.log(get_arr[3]());

//  console.log(get_arr[4]()) - Error! Because there is no index 4 in the array. 

//^  ---- Call Back function
         //? what is call back function? --> 
         // is a function that is passed as an argument to another function (CALL BACK)
         // A callback function is executed at some point in the future, when some operation has completed

    //* example of call back function:
    console.log("------ Call Back function -------");

        function greet(name)
        {
            // `greet()` function is passed as an argument to `setTimeout` function
            // then the setTimeout function the waits for 2seconds before returning executing greet() function

            console.log("\t\n Hello, " + name);
        }
        setTimeout(greet, 200, "Eric Nzyoka");
    
    //* Example 2
        // the addEventListener method :: 
        // this method takes a callback function as an argument, which is executed when a specific event occurs
        //* document.getElementById('myButton').addEventListener("click", alert('Button clicked!'));
    
    //& ------   Example 3  ----
        // in Js functions are first class citizens
        function foo(bar)
        {
            bar();
        }
            foo(function()
            {
                console.log('\n Bar!.......');
            });
        
        // callback based on condition
        function addT7(sum)
        {
            if(isNight)
            {
                sum();
            }

            if(isDrinksOverCheckOnline)
            {
                sum();
            }
        }

console.log("\n");

//^   ------    HOF - High Order Function   -----
    console.log("\n HOF - High Order Function.");
        // what is HOF?
            //~ 1. takes one or more functions as argument
            //~ 2. It may return a function
            //! NOTE ::: -->  HOF and CALLBACK are not the same/ or equivalent

        //& Example 1
        function getCapture(camera)
        {
            // camera() is a function
            camera();
        }
        getCapture(function()
        {
            console.log('Canon');
        })

    //& Example 2 :: function return another function
        function returnFn()
        {
            return function()
            {
                console.log('Returning!.......');
            }
        }
        const fn = returnFn();
        fn();

//^ ---- Pure functions ----
        // functions that git same output as input given
    function sayGreeting(name)
    {
        return `Hola, ${name}`;
    }
    sayGreeting('Nzyoka');
    console.log(sayGreeting("Nzyoka!"));









