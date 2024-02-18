/**
 * * The For Of Loop
        The JavaScript for of statement loops through the values of an iterable object.

        It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

    * * Syntax
        for (variable of iterable) 
        {
            //~ code block to be executed
        }
    * 
    *~ variable - For every iteration the value of the next property is assigned to the variable. 
    *~ Variable can be declared with const, let, or var.
 */

    // looping over an Array
    console.log("\t\n Looping Over An Array");
      const cars = ["BMW", "Volvo", "Mini"];
      let txt = [];
      for (let x of cars)
      {
        txt += x;
      }
    console.log(txt);

    //! Example 2
      console.log("\t\n Looping Over An Array");
      let language = "JavaScript";

      let textT = "";
      for (let n of language)
      {
        textT += n;
      }
    console.log(textT);
