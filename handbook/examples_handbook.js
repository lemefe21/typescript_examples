//string
var color = "blue";
console.log(color);
color = 'red';
console.log(color);
//interpolação
var fullName = 'Leme';
var age = 29;
var sentence = "Hello, my name is " + fullName + ".";
console.log(sentence);
var sentence_two = "I'll be " + (age + 1) + " years old next month";
console.log(sentence_two);
//array
var list1 = [1, 2, 3];
console.log(list1);
var list2 = [4, 5, 6];
console.log(list2);
//tuple
var x;
x = ["Hello", 10];
//Erro
//x = [10, "Hello"];
//Type '[number, string]' is not assignable to type '[string, number]'
console.log(x);
console.log(x[0].substr(1));
//Erro
//console.log(x[1].substr(1)); //number does not have 'substr'
x[3] = "world";
console.log(x);
console.log(x[0].toString());
console.log(x[1].toString());
//Erro
//x[6] = true;
x[6] = 'true';
console.log(x);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color);
var c = Color.Blue;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
console.log(Color2);
var c2 = Color2.Green;
console.log(c2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 4] = "Red";
    Color3[Color3["Green"] = 6] = "Green";
    Color3[Color3["Blue"] = 10] = "Blue";
})(Color3 || (Color3 = {}));
;
console.log(Color3);
var c3 = Color3.Green;
console.log(c3);
var colorName = Color3[10];
console.log(colorName);
//Any
var notSure = 4;
console.log(typeof notSure);
notSure = "maybe a string instead";
console.log(typeof notSure);
notSure = false;
console.log(typeof notSure);
var notSure2 = 4;
console.log(typeof notSure2);
//notSure2.ifItExists();
notSure2.toFixed();
var prettySure = 4;
//Erro
//'toFixed' doesn't exist on type 'Object'
//prettySure.toFixed();
var list = [1, true, "free"];
list[1] = 100;
console.log(list[1]);
//Void
function warnUser() {
    console.log("This is my warning message!");
}
warnUser();
//only assings
var unusable = undefined;
console.log("Undefined: " + typeof unusable);
var unusable2 = null;
console.log("Undefined: " + typeof unusable2);
//Erro
//Type 'number' is not assignable to type 'void'.
//let unusable3: void = 1234;
//Null and Undefined
var u1 = undefined;
console.log("number to undefined: " + typeof u1);
var u2 = null;
console.log("number to undefined: " + typeof u2);
//Type assertions (Cast)
//“trust me, I know what I’m doing.”
//“angle-bracket” syntax
var someValue = "This is a string";
console.log("someValue: '" + someValue + "', is a type of " + typeof someValue + ".");
var strLength = someValue.length;
console.log("strLength: " + strLength + ", is a type of " + typeof strLength + " with casting.");
//as-syntax
var someValue2 = "This is a string as-syntax";
console.log("someValue2: '" + someValue2 + "', is a type of " + typeof someValue2 + ".");
var strLength2 = someValue2.length;
console.log("strLength2: " + strLength2 + ", is a type of " + typeof strLength2 + " with casting.");
//
