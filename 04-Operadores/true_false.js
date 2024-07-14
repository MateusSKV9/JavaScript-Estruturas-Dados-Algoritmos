function testThuthy(val) {
    return val ? console.log("truthy") : console.log("falsy");
}

testThuthy(true);
testThuthy(false);
testThuthy(new Boolean(false));
testThuthy('');
testThuthy("Mateus");
testThuthy(new String(''));
testThuthy(1);
testThuthy(-1);
testThuthy(NaN);
testThuthy(new Number(NaN));
testThuthy({});
var obj = {name:"Mateus"};
testThuthy(obj);
testThuthy(obj.name);
testThuthy(obj.age);