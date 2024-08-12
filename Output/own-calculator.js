// var num1 = prompt("Enter First Number: ");
// var num2 = prompt("Enter Second Number: ");

// //prompt function er value type string thake......

// num1 = parseInt(num1, 10)
// num2 = parseInt(num2, 10) 

// var sum , sub

// sum = num1 + num2
// document.write("Sum = "+sum + '<br/>')

// sub = num1 - num2
// document.write("Sub = "+ sub)



//.............Task 3 .......

var taskNum1 = prompt("Enter First Number");
var taskNum2 = prompt("Enter Second Number");

taskNum1 = parseInt(taskNum1);
taskNum2 = parseInt(taskNum2);

var taskSum, taskSub, taskMultiply, taskDivide, taskModulus;

taskSum = taskNum1 + taskNum2;
taskSub = taskNum1 - taskNum2;
taskMultiply = taskNum1 * taskNum2;
taskDivide = taskNum1 / taskNum2;
taskModulus = taskNum1 % taskNum2

document.write(taskNum1 + " + " + taskNum2 + " = " + taskSum + '<br/>')
document.write(taskNum1 + " - " + taskNum2 + " = " + taskSub + '<br/>')
document.write(taskNum1 + " * " + taskNum2 + " = " +  taskMultiply + '<br/>')
document.write(taskNum1 + " / " + taskNum2 + " = " + +taskDivide + '<br/>');
document.write(taskNum1 + " % " + taskNum2 + " = " +taskModulus)




