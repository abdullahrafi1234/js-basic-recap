//concatenate
var firstName = "Abdullah";
var lastName = " Al Rafi Bhuiyan"

// document.write(firstName + lastName)
document.write("Abdullah "+ lastName)


//library function for string
var text = "Bangladesh";

var len = text.length;
document.write("Number of character" + len)
document.write("Number of character" + text.length)

//promt function
// var text1 = prompt("Enter your name: ")
// document.write(text1)

//string to character check
var text2 = text.charAt(2)
document.write(text2)

//toUpperCase()
var upperCase = text.toUpperCase()
document.write(upperCase)

//Concatenate using concat function 
var textX = "Bangladesh";
var textY = "is very beautiful country"

document.write(textX.concat(textY))

//slice function
var sliceText = 'Bangladesh';
var sliceText2 = sliceText.slice(0, 3)
var upper = sliceText2.toUpperCase()
console.log(upper)

//task 2
console.log("--------------Task Ans------------")
var firstName = 'Abdullah Al';
var lastName = ' Rafi Bhuiyan';
var fullName = firstName + lastName;
console.log(fullName)
console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName.slice(1,2))



