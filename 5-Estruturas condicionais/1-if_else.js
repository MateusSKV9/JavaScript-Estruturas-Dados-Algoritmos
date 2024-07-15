// IF
var num1 = 1;
if(num1 ===1 ) {
    console.log("num1 is equal to 1!");
} 

// IF & ELSE
var num2 = 0;
if(num2 === 1) {
    console.log("num2 is equal to 1!");
} else {
    console.log("num2 is not equal to 1, the value of num is "+num2);
}

if(num1 === 1) {
    num1--;
} else {
    num1++;
}
console.log("num1 = "+num1);

// OPERADOR TERNÁRIO
(num1===1) ? num1-- : num1++;
console.log("num1: "+num1);

// ELSE IF
var month = 4;
if(month===1) {
    console.log("Junuary");
} else if(month===2) {
    console.log("February");
} else if (month===3) {
    console.log("March");
} else {
    console.log("month is not January, february or march");
}