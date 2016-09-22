//string
let color: string = "blue";
console.log(color);
color = 'red';
console.log(color);

//interpolação
let fullName: string = 'Leme';
let age: number = 29;
let sentence: string = `Hello, my name is ${fullName}.`;
console.log(sentence);
let sentence_two: string = `I'll be ${age + 1} years old next month`;
console.log(sentence_two);

//array
let list1: number[] = [1,2,3];
console.log(list1);

let list2: Array<number> = [4,5,6];
console.log(list2);

//tuple
let x: [string, number];
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
enum Color{Red, Green, Blue};
console.log(Color);
let c:Color = Color.Blue;
console.log(c);

enum Color2{Red = 1, Green, Blue};
console.log(Color2);
let c2:Color2 = Color2.Green;
console.log(c2);

enum Color3{Red = 4, Green = 6, Blue = 10};
console.log(Color3);
let c3:Color3 = Color3.Green;
console.log(c3);
let colorName: string = Color3[10];
alert(colorName);

//Any











