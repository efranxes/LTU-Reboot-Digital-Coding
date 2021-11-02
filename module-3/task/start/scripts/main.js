// // This is a single line comment

// /**
//  *  This is a multiple
//  *  line comment
//  * */

// /**
//  *    let age = 37;
//  *    const name = 'Luke';
//  *    var address = '123 long avenue';
//  * 
//     *  let $variable = 0;
//     *  let variable = 0;
//     *  let _variable = 0;
//     * 
//     * let firstName = "Luke";
//     * let lastName = "Ashton-Johnson";
//  */

// const productName = 'Baked Beans';
// let price = 1.27;
// let quantity = 4;
// let inStock = true;
// let discountAmount = 10;

// // console.log( 'Product Name:', productName );
// // console.log( 'Price:',price );
// // console.log( 'Quantity:', quantity );
// // console.log( 'In Stock:',inStock );
// // console.log( 'Discount:', discountAmount );

// // console.log( typeof productName );
// // console.log( typeof price );
// // console.log( typeof quantity );
// // console.log( typeof inStock );
// // console.log( typeof discountAmount );
 
// // document.write( "<p>" + productName + "</p>");

// // let myName = '';
// // let numOfKids = 0;
// // let isMarried;

// // let newName = 'Luke';
// // let newNumOfKids = '1';

// // console.log( Boolean(myName) );
// // console.log( Boolean(numOfKids) );
// // console.log( Boolean(isMarried) );
// // console.log( Boolean(null) );
// // console.log( Boolean(undefined) );
// // console.log( '--------')
// // console.log( Boolean(newName) );
// // console.log( Boolean(newNumOfKids) );

// function showProductName() {
//    console.log( productName );
// }

// function totalPrice( productPrice,productQuantity ) {
//    console.log( productPrice * productQuantity );
// }

// // totalPrice( price, quantity );

// // function checkAvailability( productInStock ) {
// //    console.log( productInStock );
// // }

// const checkAvailability = productInStock => console.log( productInStock );

// // checkAvailability( inStock );

// // let global = 'Global scope';

// // const localScope = () => {
// //    let scope = 'Local Scope'; // Local
// //    console.log(`Inside the function localScope: ${scope}`);
// //    console.log(`From outside the function : ${global}`);
// // }

// // localScope();

// // console.log( global );

// const productDiscount = () => {
//    if( quantity > 1 ) {
//       let newPrice = discountAmount - ( price * quantity );
//       console.log( newPrice );
//    } else {
//       console.log( price * quantity );
//    }
// }

// // productDiscount();


// // switch Statement

// // const level = 6;

// // switch( level ) {
// //    case 1 :
// //       console.log('You are on level 1');
// //       break;
// //    case 2 :
// //       console.log('You are on level 2');
// //       break;
// //    case 3 :
// //       console.log('You are on level 3');
// //       break;
// //    case 4 :
// //       console.log('You are on level 4');
// //       break;
// //    default:
// //       console.log('No level found');
// //       break;
// // }

// // if( level === 1 ) {
// //    console.log('You are on level 1');
// // } else if(level === 2) {
// //    console.log('You are on level 2');
// // } //....
// // else {
// //    console.log('No level found');
// // }

// // ....... code


// const drinkOrder = ( drink, size ) => {

//    switch( drink ) {
//       case 'cola':
//          console.log( `${size} : ${drink}`);
//          break;
//       case 'lemonade':
//          console.log( `${size} : ${drink}`);
//          break;
//       case 'orangeade':
//          console.log( `${size} : ${drink}`);
//          break;
//       default:
//          console.log(`We currently don't have your ${drink} in stock`);
//          break;
//    }

// }

// // drinkOrder('cola', 'x-large');

// const calculator = ( num1, num2, operator ) => {

//    switch( operator ) {
//       case '+':
//          console.log( `${num1} + ${num2} = ${num1 + num2}` );
//          break;

//       case '-':
//          console.log( `${num1} - ${num2} = ${num1 - num2}` );
//          break;

//       case '/':
//          console.log( `${num1} / ${num2} = ${num1 / num2}` );
//          break;

//       case '*':
//          console.log( `${num1} * ${num2} = ${num1 * num2}` );
//          break;

//       default:
//          console.log(`The ${operator} that you chose is invalid`);
//          break;

//    }

// }

// // calculator( 5, 5,'+');
// // calculator( 5, 5,'*');
// // calculator( 5, 5,'/');
// // calculator( 5, 5,'-');
// // calculator( 5, 5,'?');

// const product1 = [ productName, price, quantity, inStock, discountAmount ];

// // let firstItem = product[0];
// // let lastItem = product[product.length - 1];

// // console.log( firstItem, lastItem );

// const product2 = {
//    "product name" : 'Apples',
//    price: 1.60,
//    quantity: 6,
//    inStock: true,
//    discountAmount: 0.20,
// };

// // console.log( `Before : ${product2.price}` );

// product2.price = 1.25; // Modifying the object
// product2.colour = 'Green'; // Adding to the object

// // console.log( `After : ${product2.price}` );

// // console.dir( product2 ); // Helps console the object
// // console.table( product2 ); // Helps console the object

// // console.log( product2.colour );
// // const productName = product["product name"];

// // console.log( product.price ); // Dot notation
// // console.log( product["price"] ); // square bracket  notation
// // console.log( product["product name"]); // Square Bracket notation


// // let colours = ['Green', 'Orange', 'Blue', 'Brown', 'Pink', 'Purple'];

// // for ( let index = 0; index < colours.length; index++ ) {

// //    console.log( colours[index]); 

// // }

// /**
//  * get the results of the 7 times table
//  * 
//  */


// function multiply( num, maxNum ) {

//    for( let counter = 1; counter <= maxNum; counter++ ) {

//       let multiplyBy = num;

//       let result = counter * multiplyBy;

//       console.log( `${counter} * ${num} = ${result}` );

//    }

// }

// // multiply( 7, 12 );

// // 1. Create a function called totalPriceOfShopping that takes one (1) parameter, name the parameter arr - short for array

// function totalPriceOfShopping( arr ) {

//    // 2. Inside the function create a variable called totalPrice and assign it the value of 0

//    let totalPrice = 0;

//    // 3. Next create a for loop, this will loop over each object ( product )

//    for( let index = 0; index < arr.length; index++  ) {

//       // 4. Inside the loop write totalPrice = totalPrice +

//       // 5. Inside the for loop access both the price and quantity and multiply them with each other to get the price of that product

//       // 6. Place the result of step 5 after the + in step 4, e.g totalPrice = totalPrice + price `*` quantity

//       totalPrice = totalPrice +  ( arr[index].price * arr[index].quantity );
//    }

//       // 7. outside of the for loop but still inside the function return totalPrice
//     return totalPrice.toFixed(2);
// }

// // 8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
// //   - console.log( totalPriceOfShopping( shoppingBasket ) );
// //   * Your output should be: 74.90

// // console.log( totalPriceOfShopping( shoppingBasket ) );



// // 1. Create a function called discountToiletries that takes one (1) parameter, name the parameter arr - short for array
// // 2. Inside the function create a variable called totalPrice and assign it the value of 0
// // 3. Next create a for loop, this will loop over each object ( product )
// // 4. Use an if else statement to check if the product's type is === 'toiletries'
// // 5. If it is then remove 50% from its price and add it to the totalPrice
// // 6. Else just work out the price and add it to the totalPrice
// // 7. outside of the for loop but still inside the function return totalPrice
// // 8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
// //    - console.log( discountToiletries( shoppingBasket ) );
// //    * Your output should be: 68.22


// function discountToiletries( arr ) {
//    let totalPrice = 0;

//    for( let index = 0; index < arr.length; index++ ) {

//       if( arr[index].type === 'toiletries') {
//          let discount = ( arr[index].price * arr[index].quantity ) / 2;

//          totalPrice = totalPrice +  ( arr[index].price * arr[index].quantity -  discount );
//       }  else {
//          totalPrice = totalPrice +  ( arr[index].price * arr[index].quantity)
//       }
//    } // end of for loop 

//    return totalPrice.toFixed(2);
// }

// // console.log( discountToiletries( shoppingBasket ) );

// function discountType( arr, type, discount ) {
//    let totalPrice = 0;

//    for( let index = 0; index < arr.length; index++ ) {

//       if( arr[index].type === type) {

//          let discountAmount =  discount * ( arr[index].price * arr[index].quantity ) / 100;
//          totalPrice = totalPrice +  ( arr[index].price * arr[index].quantity -  discountAmount );

//       }  else {

//          totalPrice = totalPrice +  ( arr[index].price * arr[index].quantity);

//       }
//    } // end of for loop 

//    return totalPrice.toFixed(2);
// }

// // console.log( discountType( shoppingBasket, 'vegetables', 20 ) );
// // console.log( discountType( shoppingBasket, 'toiletries', 50 ) );
// // console.log( discountType( shoppingBasket, 'beverages', 10 ) );

// // arr, type, discount

// // shoppingBasket.forEach( function( item ) {
// //    console.log( item );
// // } );

// // shoppingBasket.forEach( item => console.log( item ) );

// // for( let index = 0; index < shoppingBasket.length; index++ ) {
// //    console.log( shoppingBasket[index]);
// // }


// // map, filter, reduce - High Level Functions


// /** map  */
// // const newArray = arr.map( (element) => {
// //    return element + 2;
// // } );

// // const newArray = arr.map( function(element) {
// //    return element + 2;
// // });

// // const newArray = arr.map( element => element + 2 );

// // console.log( arr, newArray );

// /** Filter */
// // const moreThanThree = arr.filter((element)=> {
// //    return element > 3 ;
// // });

// // const moreThanThree = arr.filter( element => element > 3);

// // console.log( moreThanThree );


// // let arr = [ 1, 2, 3, 4, 5 ];

// /** Reduce */

// // const total = arr.reduce(( acc, curr ) => {
// //    return acc + curr;
// // }, 0 );

// // const total = arr.reduce(( acc, curr ) => acc + curr, 0 );

// // console.log( total );

// // let name = 'Bob';

// // Ternarty operator
// // (name === 'Bob') ? console.log('Hi Bob') : console.log('What is your name?');

// const obj = {
//    name: 'Luke',
//    age: 37,
//    profession: 'web developer'
// }

// // for in loop for objects
// for( let key in obj ) {
//    console.log( `${key} : ${obj[key]}` );
// }

// DOM 

// const heading1 = document.querySelector('h1');
// const heading4 = document.querySelector('h4');

// const paragraphs = document.querySelectorAll('p');
