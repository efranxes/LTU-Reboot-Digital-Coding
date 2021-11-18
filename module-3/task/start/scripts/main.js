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