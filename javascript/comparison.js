/**
 *& Comparison in JavaScript
 *
 ** Greater/ Less than: a > b, a < b
 ** Greater/ Less than or Equals: a >= b, a <= b

 *^ Equals: a == b
 *^ NOTE: there double equality sign (==) means the equality test,
 *~ and single equality sign (=) is used for variable assignment.
 * ~ 
 * ? Not equals: a != b
 * 
 * ! Boolean is the result  
 *todo:  true: means "yes", "correct" or " the truth"
 *todo:  false: means "no", "wrong" or "not the truth"
 *
 */

console.log("JS Comparisons!")

//^ For example
    //alert(2 > 1); // true (correct)
    //alert( 2 == 1 ); // false (wrong)
    //alert( 2 != 1 ); // true (correct)

//~ A comparison result can be assigned to a variable, just like any value:
    let result = 5 > 3; // assign the result of the comaparison
    // to the variable 'result'
    //alert (result);
    console.log(`The result of 5 > 3 is ${result}`);

//? String comparison
    //* To see whether a string is greater than another, JavaScript uses the so-called “dictionary” order.
    //* In other words, strings are compared letter-by-letter.
    /**
     *~ The algorithm to compare two strings is simple:
        Compare the first character of both strings.
        If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
        Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
        Repeat until the end of either string.
        If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
        In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

        The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

        G is the same as G.
        l is the same as l.
        o is greater than e. Stop here. The first string is greater.

     */

    //^ example below:

    //alert ('Z' > 'A'); 
    // The output will be true because Z comes after A in dictionary order.
    //alert('a' > 'b');
    // Outputs false because a comes before b in dictionary order.

    //alert( 'Glow' > 'Glee' ); // true
    //alert( 'Apple' < 'Banana' ); // true
    //alert('apple' > 'banana'); //false

/**
 *ToDo: ( = ) in JavaScript is used for assigning values to a variable.
 *^  ( == ) in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
*!  ( === ) is used for comparing two variables, but this operator also checks datatype and compares two values.
*
*/



//^ Tasks:
    console.log(5 > 4); // true
    console.log("apple" > "pineapple"); // false
    console.log("2" > "12"); // true
    console.log(undefined == null); // true
    console.log(undefined === null); // false
    console.log(null == "\n0\n"); // false
    console.log(null === +"\n0\n"); // false

    var x;
    console.log(x == null); // true
    console.log(x === null); // false


/**
 * Single quotes, double quotes, and backticks
 * In JavaScript, you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. All of the following will work:
*/
    const single = 'Single quotes';
    const double = "Double quotes";
    const backtick = `Backtick`;

    console.log(single);
    console.log(double);
    console.log(backtick);

// 





