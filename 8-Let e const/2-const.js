const PI = 3.121593;
// Dará error, pois estou tetando mudar o valor: PI = 3.0;
console.log(PI);

const jsFramework = {
    name: "Angular"
};
jsFramework.name = "React";

// O código abaixo dará erro
jsFramework = {
    name: "Vue"
};
