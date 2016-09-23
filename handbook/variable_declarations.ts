//Variable Declarations
//var
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
//g is a function
console.log(g());

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
console.log(f2());

//scoping rules
function f3(shouldInitialize: boolean) {
    if(shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f3(true));
console.log(f3(false)); //undefined

//



