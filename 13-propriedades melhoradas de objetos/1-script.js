// DESESTRUTURÇÃO
/* 
    let x = 'a';
    let y = 'b';
*/
let [x, y] = ['a', 'b'];
console.log(`${x} and ${y}`);

// SWAP
/* 
    var temp = x;
    x = y;
    y = temp;
*/
[x, y] = [y, x];
console.log(`${x} and ${y}`);

// DESESTRUTURAÇÃO DE OBJETOS
/* 
    var x = "a";
    var y = "b";
    var obj = {x: "a", y:"b"};
*/
let [x1, y1] = ["a", "b"];
let obj = {x , y};
console.log(obj);

// NOMES DE MÉTODO ABREVIAOS
const hello = {
    name: "Mateus",
    printHello() {
        console.log("Hello!");
    }
};
console.log(hello.printHello());

var hello2 = {
    nome: "Santos",
    printHello: function printHello2() {
        return console.log("Hello!!");
    }
};
hello2.printHello(); 