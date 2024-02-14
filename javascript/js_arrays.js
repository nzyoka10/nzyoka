/**
 * ! ======   Arrays in JavaScript ----
 * create array below
 */

// emapty array
    let array = [];
    console.log(array);  

//!             Js Arrays 
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)
console.log(cars[1]);    //&      Volvo at index 1

// Arrays start at Zero(0)
    const fruits = ["Apple", "Mango", "Android", "Pawpaw", "Avocado", ]
    console.log(fruits);  //~ Output: [ 'Apple', 'Mango', 'Android', 'Sympian' ]
    console.log(`At index 0, ${fruits[0]} `); 
    console.log(`At index 1, ${fruits[1]}`);
    console.log(`At index 2, ${fruits[2]}`);
    console.log(`At index 3, ${fruits[3]}`);
    console.log(`At index 4, ${fruits[4]}`);

//^  === Basic Array Methods
    // Js array length :: returns the size of the array
    console.log("\nBasic Array Methods");
    console.log("Length of the array (Cars) is : ", cars.length);
    console.log("Length of the array (Fruits) is : ", fruits.length);

    // Js array to String()
    // It will convert all elements into string and return a single string
    console.log("Js array CARS to String : ", cars.toString());
    console.log("Js array FRUITS to String : ", fruits.toString());

    // Js array at()
    console.log("cars array - at(2) method :", cars[2]);
    console.log("fruits array - at(3) method :", fruits[3]);

//* Array methods - continued 
console.log("\n");

    const items = [
        { name: "Laptop", price: 70 },
        { name: "Mobile", price: 200 },
        { name: "Bike", price: 100 },
        { name: "Tv", price: 10 },
        { name: "Book", price: 7 },
        { name: "Tv", price: 1000 },
        { name: "Book", price: 700 }
    ];
    console.log(items);

    // filter method -> items by price
    const filterItems = items.filter((item) => {
        return item.price < 100
    })
    console.log(filterItems);

    // map method
    const mapItems = items.map((item) => {
        return item.name
    });
    console.log('Item names only', mapItems);

    //~ print itme prices only
    const itemPrices = items.map((item) => {
        return item.price
    });
    console.log('Item prices only', itemPrices);



