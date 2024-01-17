/**
 * * Javascript datatypes
 * primitive - string, number, boolean, null, undefined, bigInt, symbol
 * reference - object, arrays, function
 * 
 */

console.log("Js Datatypes")

// string datatype - sequence of zero or more characters
    let name = 'Eric' // single quotes are used for strings in JS
    let lname = "Mutua";     // double quotes can also be used for strings

    console.log(name);
    console.log(lname)
    console.log(typeof name)   // returns 'string'

// number datatype - represents integer and floating-point numbers
    let num = 67.0;
    let num2 = 67.9;


    console.log(num);
    console.log(num2);
    console.log(typeof num)

//^ Boolean datatype - true or false
    let learning = true;
    let completed = false; 
    let k = 4 > 7;

    console.log(k)
    console.log(typeof k);

    console.log(learning);
    console.log(completed);
    console.log(typeof learning) // returns 'boolean'

// Null datatype - a special value that denotes 'no value' or 'empty'
    let nulValue = null;
    console.log(nulValue);
    console.log(typeof nulValue) // returns 'object' because JS treats null

// Undefined datatype - variable declared but value not assigned 
    let age; 
    //let age = 27;

    console.log(age);
    console.log(typeof age) // returns 'undefined'

// Reference datatypes
    // Object datatype - are collection of key-value pairs. Each value is associated with a unique key.
    const person = {
        firstName : 'Eric',
        lastName : 'Nzyoka',
        age : 27
    };

    console.log(person);
    console.log(typeof person);
    
    // Array datatype - ordered and changeable, can hold values of different data types
    const arr = [10, "Hello", true, null];
    console.log(arr);
    console.log(typeof arr);

    // function datatype - 
    function msg(){
        console.log("Hello, Eric!")
    }
    msg();
    console.log(typeof msg);
    