console.log('Hello');

//TASK 2

//Single line comment

/*--- 
Multi
line
comment
---*/


//TASK 3

let productName = 'chicken';
let price = '4.20';
let quantity = '5';
let inStock = true;
let discountAmount = 2;

/*-- console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountAmount);
--*/


//TASK 4

function showProductName(){
    console.log(productName);
}

showProductName();


//TASK 5

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
}

totalPrice(price,quantity);


//TASK 6

function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = num => num * num;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared);


//TASK 7

function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount;
    } else {
        sum = price * quantity;
    }
    console.log(sum);
}

productDiscount();