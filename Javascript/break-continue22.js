//break ----> loop er modde if condition diye jodi break use kora hoy tahole condition match korle loop theme jabe

for (var i = 1; i <= 100; i = i + 1) {
    if (i == 10) {
        break
    }
    document.write(' ' + i)
}

document.write(' end  <br/> <br/>')

//continue ----> loop er modde continue use korle jei conditon deoa thakbe oita sara baki gula show korbe


for (var i = 1; i <= 100; i = i + 1) {
    if (i % 2 == 0) {
        continue
    }
    document.write(' ' + i)
}

//......ternary operator ......

var num1 = 20;
var num2 = 30;
var num3 = 5;

var result = num1 > num2 && num1 > num3 ? 'Greater than ' + num1 : num2 > num3 && num2 > num1 ? 'Greater than ' + num2 : 'Greater than ' + num3

console.log(result)


    //IIFEs (Immediately Invokeable Function Expressions)
    (function display() {
        console.log('hello');
    })();