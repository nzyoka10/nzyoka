//^ Array --> a variable like structure that can hold more than 1 value
// create array of fruits
let fruits = [ "apple", "banana", "orange" ];
// console.log(fruits);

//^  -------  Array index  --------------------------------
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//console.log(fruits[3]);

//^     -----  Array methods  -----
//* push() --> add item to end of the array
//* pop() --> remove item from end of the array
//* shift() --> remove first item in the array
//* unshift() --> add item to beginning of the array
//* .length --> gives you number of items in an array
//* sort() --> sorts the elements of an array in place and returns the array
//* reverse() --> reverses the order of the elements in an array
// Exapmles belw
    fruits.push("grape");
    //fruits.pop();
   // fruits.shift();
    fruits.unshift("kenya");
    console.log(fruits.length)
    fruits.sort();
    fruits.reverse();

console.log(fruits);

// ^ Searching for an element in an array using method indexOf()






