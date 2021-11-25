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



//TASK 8

function drinkOrder(size,drink){
    
    if(size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a size we don\'t sell!');
        return;
    }
    let message = 'You have ordered a ' + size;

    switch(drink){
        case 'orange':
            message += ' orange';
            break;
        case 'lemonade':
            message += ' lemonade';
            break;
        case 'cola':
            message += ' cola';
            break;
        default:
            message = 'You have ordered a drink we don\'t sell!';
    }
    console.log(message);
}

drinkOrder('small','lemonade');
drinkOrder('medium','cola');
drinkOrder('large','coffee');
drinkOrder('tiny','orange');


//TASK 9

//FUNCTION calculator {num1} {num2} {operator}
    //VALIDATE all data
    //SWITCH {operator}
        //based on the operator do maths
    //RETURN sum

function calculator(num1,num2,operator){
    if(isNaNValidator(num1)){
        console.log('Number 1 is not a number');
        return;
    }
    if(isNaNValidator(num2)){
        console.log('Number 2 is not a number')
        return;
    }
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            console.log('Operator is not recognized.')
            return;
    }
    return sum;
}

function isNaNValidator(number){
    return isNaN(number);
}

console.log(calculator(5,10,'+'));
console.log(calculator(222,9,'/'));
console.log(calculator(49,8,'%'));


//TASK 10

let arrProductInfo = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrProductInfo);


//TASK 11

console.log(arrProductInfo[0]);
console.log(arrProductInfo[4]);


//TASK 12

let objProductInfo = {
    "productName" : productName,
    "price" : price,
    "quantity" : quantity,
    "inStock" : inStock,
    "discountAmount" : discountAmount,
};

console.log(objProductInfo);


//TASK 13

console.log(objProductInfo.productName);

objProductInfo["productName"] = "ferret";

console.log(objProductInfo.productName);


//TASK 14

objProductInfo["price"] = "68.99";

console.log(objProductInfo.price);


//TASK 15

objProductInfo.productLocation = "shelf 5";
objProductInfo["mailingAddress"] = "Hawaii";

console.log(objProductInfo);


//FIZZBUZZ

for(let counter = 1; counter <= 20; counter ++){
    if(counter % 3 == 0 && counter % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(counter % 3 == 0){
        console.log("FIZZ");
    }
    else if(counter % 5 == 0){
        console.log("BUZZ");
    }
    else {
        console.log(counter);
    }
}


//TASK 16

function outputTimesTable(number){
    for(counter = 0; counter <= 12; counter ++){
        let sum = counter * number;
        let strMessage = counter + " x " + number +  " = " + sum;
        console.log(strMessage);
    }
}

outputTimesTable(5);

for(multiplier = 1; multiplier <=12; multiplier ++){
    outputTimesTable(multiplier);
}


//TASK 17 & 18

function totalPriceOfShopping(shoppingCart, objCoupon=null){
    let totalPrice = 0;
    for(arrayKey = 0; arrayKey < shoppingCart.length; arrayKey ++){
        let currentItem = shoppingCart[arrayKey];
        //Price of item x quantity
        let currentItemPrice = currentItem.quantity * currentItem.price;

        //Apply discounts to individual items
        let discount = 0;
        if(objCoupon && objCoupon.type != "basketTotal" && objCoupon.type != "basketPercent"){ //if the coupon applies to individual items
            if(objCoupon.types.includes(currentItem.type)){ //if the coupon applies to current item
                switch(objCoupon.type){
                    case "flatFee":
                        discount = objCoupon.amount * currentItem.quantity;
                        currentItemPrice = currentItemPrice - discount;
                        break;
                    case "percentage":
                        discount = (currentItemPrice / 100) * objCoupon.amount;
                        currentItemPrice = currentItemPrice - discount;
                        break;
                }
            }
        }
        totalPrice += currentItemPrice;
    }
    //Apply discounts to basket
    if(objCoupon && (objCoupon.type == "basketTotal" || objCoupon.type == "basketPercent")){
        switch(objCoupon.type){
            case "basketTotal":
                totalPrice = totalPrice - objCoupon.amount;
                break;
            case "basketPercentage":
                discount = (totalPrice / 100) * objCoupon.amount;
                totalPrice = totalPrice - discount;
                break;
        }
    }
    return totalPrice.toFixed(2);
}

//Create coupons
let objCoupon1 = {
    types: ["toiletries", "condiment"],
    type: "flatFee",
    amount: 0.5,
};

let objCoupon2 = {
    types: ["canned", "snacks"],
    type: "percentage",
    amount: 30,
}

let objCoupon3 = {
    types: [""],
    type: "basketTotal",
    amount: 25,
}

let objCoupon4 = {
    types: [""],
    type: "basketPercent",
    amount: 40,
}

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);

shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon1);
console.log(shoppingCartPrice);

shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon2);
console.log(shoppingCartPrice);

shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon3);
console.log(shoppingCartPrice);

shoppingCartPrice = totalPriceOfShopping(shoppingCart, objCoupon4);
console.log(shoppingCartPrice);