// Tratamento antigo
function sum(x, y, z) {
    if(x === undefined) x=1;
    if(y === undefined) y=2;
    if(z === undefined) x=3;
    return x+y+z;
}

// Tratamento atual
function sum(x=1, y=2, z=3) {
    return x+y+z;
}
console.log(sum(4, 2));
// x = 4, y = 3, z = 3