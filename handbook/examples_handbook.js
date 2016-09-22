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
alert(colorName);
