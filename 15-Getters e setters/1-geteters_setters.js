class Person {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
let lotrChar = new Person("Mateus");
console.log(lotrChar.name);
lotrChar.name = "Santos";
console.log(lotrChar.name);
lotrChar._name = "Silva";
console.log(lotrChar.name);