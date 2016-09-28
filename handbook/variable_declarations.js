//Variable Declarations
//var
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
//g is a function
console.log(g()); //returns 11
function f2() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log(f2()); //returns 2
//scoping rules
function f3(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f3(true));
console.log(f3(false)); //undefined
//same variable multiple times
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var matrix = [[1, 2], [3, 4], [5, 6]];
console.log(sumMatrix(matrix)); //returns 3
//variable capturing quirks
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
; //only log number 10, not 1, 2, 3, 4 ...
//IIFE - an Immediately Invoked Function Expression - to capture i at each iteration
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () { console.log("IIFE - " + i); }, 100 * i);
    })(i);
}
;
//let declarations
var hello = "Hello";
//block-scoping
function f4(input) {
    var a = 100;
    if (input) {
        //still okay to reference 'a'
        var b = a + 10;
        return b;
    }
    //error: 'b' doesn't exist here
    //return b;
}
//catch clause have similar scoping rules
try {
    throw "error...";
}
catch (e) {
    console.log(e);
}
//Erro
//console.log(e);
//
function foo() {
    console.log("OK a");
    return auto;
}
console.log("Before foo()");
foo();
console.log("After foo()");
var auto;
