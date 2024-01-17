// JavaScript if, else, and else if
// If you have a condition that can be true or false, the "if" statement is used
// to execute code based on whether the condition evaluates to true or false.
    //~ if... statement example
    let x = 10;
        if (x > 5) 
        {
            console.log("x is greater than 5"); // true
        }

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

//~ else ...... statement example:
    let time = 17;
        if ( time > 12 )
        {
            console.log("Good afternoon!");
        }
        else
        {
            console.log("Good morning!");
        }

//~ else....if......statement 
// if time is less than 10:00, create a "Good morning" greeting, 
// if not, but time is less than 20:00, create a "Good day" greeting, 
// otherwise a "Good evening":
    let _time = 16;
        if ( _time < 10 )
        {
            greeting = "Good morning, User!"
            //alert(greeting);
            console.log(greeting)
        }
        else if ( _time < 20 )
        {
            greeting = "Good day, User!";
            //alert(greeting);
            console.log(greeting)
        }
        else
        {
            greeting = "Good evening, user!";
            //alert(greeting);
            console.log(greeting)
        }


/**
 * ^ Task.
 * hour(s)
 * if hour is between 6am and 12pm: Good morning!
 * if between 12pm and 6pm: Good afternoon!
 * otherwise: Good evening!
 * 
*/

    let hour = 19;
    //~ let hour: be 24 hour-clock
        if (hour >= 6 && hour < 12) 
        {
            console.log("Morning user!");
        }
        else if ( hour >= 12 && hour < 18)
        {
            console.log("Afternoon user!")
        }
        else
        {
            console.log("Evening poa!");
        }
