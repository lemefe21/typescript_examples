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
console.log(colorName);

//Any
let notSure: any = 4;
console.log(typeof notSure);
notSure = "maybe a string instead";
console.log(typeof notSure);
notSure = false;
console.log(typeof notSure);

let notSure2: any = 4;
console.log(typeof notSure2);
//notSure2.ifItExists();
notSure2.toFixed();

let prettySure: Object = 4;
//Erro
//'toFixed' doesn't exist on type 'Object'
//prettySure.toFixed();

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list[1]);

//Void
function warnUser(): void {
    console.log("This is my warning message!");
}
warnUser();

//only assings
let unusable: void = undefined;
console.log(`Undefined: ${typeof unusable}`);

let unusable2: void = null;
console.log(`Undefined: ${typeof unusable2}`);
//Erro
//Type 'number' is not assignable to type 'void'.
//let unusable3: void = 1234;

//Null and Undefined
let u1: number = undefined;
console.log(`number to undefined: ${typeof u1}`);
let u2: string = null;
console.log(`number to undefined: ${typeof u2}`);

//Type assertions (Cast)
//“trust me, I know what I’m doing.”
//“angle-bracket” syntax
let someValue: any = "This is a string";
console.log(`someValue: '${someValue}', is a type of ${typeof someValue}.`);

let strLength: number = (<string>someValue).length;
console.log(`strLength: ${strLength}, is a type of ${typeof strLength} with casting.`);

//as-syntax
//TypeScript with JSX, only as-style assertions are allowed
let someValue2: any = "This is a string as-syntax";
console.log(`someValue2: '${someValue2}', is a type of ${typeof someValue2}.`);

let strLength2: number = (someValue2 as string).length;
console.log(`strLength2: ${strLength2}, is a type of ${typeof strLength2} with casting.`);
