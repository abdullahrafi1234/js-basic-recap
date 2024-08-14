//creating a function
function square(num) {
    var result = num * num
    // document.write("Result: "+result + '<br/>')
    return result;
    //return korle value ta function jekhane call kora hoisa okhane chole jay
}


//calling a function
square(5)
document.write(square(7) + '<br/>');



//..............Task 6.................
//add function

function addition(x, y) {
    var result = x + y;
    document.write('Sum ' + result + '<br/>')
}

//sub function 

function subtraction(x, y) {
    var result = x - y;
    document.write("Sub " + result + '<br/>')
}

//multiply 

function multiply(x, y) {
    var result = x * y;
    document.write('Multiply ' + result + '<br/>')
}

//division

function division(x, y) {
    var result = x / y;
    result = result.toFixed(2)
    document.write('Division ' + result + '<br/>')
}

//modulus function

function modulus(x, y) {
    var result = x % y;
    document.write('Modulus ' + result)
}




//calling function

addition(10, 49)
subtraction(45, 6)
multiply(39, 8);
division(98, 3)
modulus(45, 4)


// //IIFEs (Immediately Invokeable Function Expressions)
// (function display(num) {
//     console.log(num);
// })(254555);

//......Function Expression-------

const display = function displayMessage() {
    console.log('Hi i am message')
}
// displayMessage()
display() // variable diye call dite hbe


const display2 = function displayMessage(message) {
    console.log(message)
}
// displayMessage()
display2('This is Message')   // variable diye call dite hbe