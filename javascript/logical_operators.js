/**
 * ^ Js Logical operators
 * * namely: - OR ( || )
 * *              - AND ( && )
 * *              - NOT ( ! )
 * *              - Nullish coalescing ( ?? )
 * ~ Although they are called “logical”, 
 * ~ they can be applied to values of any type, not only boolean. 
 * ~ Their result can also be of any type.
 * 
*/

//* Logical OR ( || )
    // its denoted using two vertical line symbols
    // result = a || b;
    // console.log(result);  
    //^ there are four possible logical combinations:
    // true || true is true
    // false || true is true
    // true || false is true
    // false || false is false
    console.log( false || true);   // Output: true

//~  if (1 || 0) 
//~ { // works just like if( true || false )
//~   alert( 'truthy!' );
//~  }

//* Example 1:
let hour = 8;
    if ( hour < 10 || hour > 18 )
    {
        // alert( 'The office is closed.');
        console.log('The office is closed!');
    }

//* Example 2.
    // passing more condition
    let age = 6;
    let isYoung = false;
        if (age < 7 || age >= 18 || isYoung)
        {
            console.log( 'Okay, No boot camp!');
        }

//** Logical AND ( && ) 
        // its denoted using two ampersands ` && `
        // the expression will only return true if both sides are true.
        // The expression will not evaluate the second side if the first one is false.
        //^ there are four possible logical combinations:
        //~ true && true is true
        //~ true && false is false
        //~ false && true is false
        //~ false && false is false

    //* Example:
    let _hour = 12;
    let _minute = 30;
        if ( _hour == 12 && _minute == 30 )
        {
            console.log( ' Time is 12:30');
        }

//* Logical NOT ( ! )
        //? the boolean NOT operator is denoted using exclamation sign ( ! )
        //? it returns true if the operand is false and vice versa.
        //? it returns false if the operand is true and vice versa
        //! syntax: result = !value;
    // alert( !true ); // false
    // alert( !0 ); // true
        //? A double NOT ( !! ) is sometimes used for converting a value to boolean type
        //? It can be useful when you need to ensure that a variable gets treated as a Boolean
    // alert( !!"non-empty string" ); // true

   // alert( alert(1) && alert(2) );
   //console.log( 1 && 2 );