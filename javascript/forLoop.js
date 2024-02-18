// for loop statement creates a loop with 3 optional expressions
// print numbers 1 to 10
    // for (let k = 1; k <= 10; k++) 
    // {
        // console.log(k);
        // prints the numbers 1 to 10
    // }

// Example 2:
console.log("Array of the most fastest cars of the world!");
    // defining an array
        var carNames = ["Ferrari", "Bugatti Chiron", "Tesla Model S P85D", "Aston Martin V8 Vantage", "Pagani Huayra BC"];

        // accessing the second element of the array ONLY
        console.log("\t\n Second element of array(carNames)::  " + carNames[1]); //* Output: --> Bugatti Chiron

        console.log("\t\n");
        console.log("\t\n");

        // How to access array elements with dot notation (for objects)
        console.log("\t\n Array --> (fruits)"); 
        const fruits = ['apple', 'banana', 'orange'];
        console.log(fruits[1]); // Output: 'banana'

        console.log("\t\n");
        console.log("\t\n");

        // Printing Single Array Elements using the console.log function
        console.log("Array :: myArray");
        const myArray = ["apple", "banana", "orange"];
        console.log(myArray[0]); // Output: "apple"
        console.log(myArray[1]); // Output: "banana"
        console.log(myArray[2]); // Output: "orange"



        console.log("\t\n");
        console.log("\t\n");
    console.log(carNames);

    console.log("\n================================");
    
    // array 2 of the most fastest cars of the world!
        const fastestCars = [
            "Bugatti Chiron Super Sport 300+",
            "Koenigsegg Jesko Absolut",
            "SSC Tuatara",
            "Hennessey Venom F5",
            "Rimac C_Two"
        ];
    console.log(fastestCars);

    // use for loop to prints the array items
        for (let x = 0;  x < fastestCars.length; x++) 
        {
            console.log('\t' + fastestCars[x]);
        }
        console.log("\t\n");
    console.log("\t\n");
  //console.log(fastestCars);

//^  ---------    Loop Scope ---- 
        //~ Using var in a loop:
        //~ using (var), the variable declared in the loop re-declares the variable outside the loop
        //~ using (var), the variable declared in the loop re-declares the variable inside the loop itself (var i = 1) each time it loops, so you can see that the value changes with every iteration through the loop.

        console.log("Using var in a loop: ");
            var i = 7;
            for (var i = 1; i <= 10; i++)
            {
                console.log(i);
                //console.log(i.length);
            }
        console.log(i.length);


            console.log("\t\n");
            console.log("\t\n");

        //* Using let in a loop: 
        //*     using let, the variable declared in the loop does not redeclare the variable outside the loop
        //*     When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.

        console.log("Using let in a loop: ");
            let j = 7;
            for (let j = 0; j < 10; j++)
            {
                console.log(j);
            }