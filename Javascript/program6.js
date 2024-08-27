var num = 20;
var num1 = "20";
var num2 = "20.24584";
var num3 = 20.25454;


console.log(typeof(num)) //kono datar type dekhar jonno

num = toString(num) //string e neoar jonno 

num = parseInt(num1) // string theke number e neoar jonno jokhn number ta purno shonkha hbe

num = parseFloat(num2) //string theke number e neoar jonno jodi number ta doshomik shongka hoy.

console.log(num3.toFixed(2)) // doshomik er por koto ghor dekhabe eitar jonno,,, and agular data type string return kore

console.log(num3.toPrecision(3)) // full number ta theke koto ghor dekhabe eitar jonno, 3 deoa mane mot 3 ghor dekhabe,,, and agular data type string return korbe...


console.log(Number("12")) //string k number e neoar jonno, jdio parseInt diyeo kora jay
