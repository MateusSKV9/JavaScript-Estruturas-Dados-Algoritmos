const sum = (x, y) => x+y;

let params = [3, 4, 5];
console.log(sum(...params));

console.log(sum.apply(undefined, params));

// SUBTITUIR ARGUMENTS
function restParamaterFunction1(x, y, ...a) {
    return (x+y) * a.length;
}
console.log(restParamaterFunction1(1, 2, "hello", true, 7));

function restParamaterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments,2);
    return (x+y) * a.length;
}
console.log(restParamaterFunction2(1, 2, "hello", true, 7));