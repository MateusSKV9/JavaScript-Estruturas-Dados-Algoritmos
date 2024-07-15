var circleAreaES5 = function circleArea1(r1) {
    const PI1 = 3.14;
    const area1 = PI1 * r1 * r1;
    return area1;
}
console.log(circleAreaES5(1));


// ARROW FUNCTION   
var circleArea2 = r2 => {
    const PI2 = 3.14;
    const area2 = PI2 * r2 * r2;
    return area2;
}
console.log(circleArea2(2));

// ARROW FUNCTION (COM UMA ÚNICA ISNTRUÇÃO)
const circleArea3 = r3 => 3.14 * r3 * r3;
console.log(circleArea3(2));