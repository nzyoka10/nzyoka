//^ ---- JavaScript For In Loop  --------------------------------
    // ~ Js for in statement loops through the properties of an object
    /**
     * *   SYNTAX
     * ~      for (KEY in OBJECT)
     * ~        {
    *                  // some code here to be executed
    * ~          }
    * 
     */
    //^    Example 1: Object (person)
        // create object person
        console.log("\t\n The for in Loop");
            const person = {
                fname: "Eric",
                lname: "Nzyoka",
                city: "Nairobi"
            };
                /**
                 * *      ---  Example explained --- 
                 * ~ The for in loop iterates over the person object and
                 * @each :: iteration (loop) returns a key (x)
                 * ~ The key is used to access the value of the key
                 * ~ The value of the key is person[x]
                 * 
                 */
            let text = "";
            for (let x in person)
            {
                text += " " + person[x];
            }
        console.log(text);// Eric Nzyoka Nairobi
    
    //^    Example 2:
        //~ For In Over Arrays
        //~ The JavaScript for in statement can also loop over the properties of an Array:
        console.log("\t\n The for in Over Arrays");
            const arr = ["Mutua", "Jumah","John","Doe","Jane"];
            
            let str = "";
            for (let i in arr)
            {
                str += " " + arr[i];
            }
        console.log(str); //

    //^     Example 3:
            //~ Array.ofEach()
            // ~ the forEach() - method calls a function once for each element in the array, in order.
            console.log("\t\n (Array.ofEach) forEach JavaScript!");
                const numbers = [23, 3, 65,67, 100, 89, 12];

                    /**
                     * &    -----     the forEach explained  -------- 
                     * *  NOTE that the function takes  3 arguments
                     * ~       1. The item value
                     * ~       2. The item index
                     * ~       3. The array itself
                     *  ! This example uses only the value parameter.
                     * !   which can be rewritten to as; 
                     * *           function myFun(value)
                     * *               {
                     * &                  txt += value
                     * *                }
                     * &          console.log(txt);
                     */

                let txt = "";
                numbers.forEach(myFun);
                function myFun(value, index, array)
                {
                    txt += value;
                }
                console.log(txt); // 23365671008


