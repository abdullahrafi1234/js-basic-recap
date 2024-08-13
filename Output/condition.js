//if , else condition ----> 

var num = 0;

// if (num % 2 == 0) {
//     console.log("Even")
// }
// else (
//     console.log("Odd")
// )

if (num > 0){
    console.log("Positive")
}

else if(num < 0) {
    console.log("Negative")
}
else(
    console.log("Zero")
)

//......Task 4.......

var marks = prompt("Enter Marks");

if (marks >= 80 && marks <= 100){
    document.write('A+')
}
else if(marks >=70 && marks<= 79){
    document.write("A")
}
else if (marks >= 60 && marks<=69) {
    document.write("A-")
}
else if (marks>=34 && marks<= 50) {
    document.write('B-D')
}
else(
    document.write('Fail')
)