// for (var i = 1; i< 100; i=i+1){
//     document.write(" "+i)
// }

//------ while loop -----(starting surote diye dite hobe and body te update part ta dite hbe,, body te update na dile bar bar cholte thakbe)

var i = 1 ; // starting age dite hbe
var sum = 0;


while(i <= 50) {
    
    if(i % 3 == 0 && i%5 == 0){
        sum = sum+i;
    }
    i = i+1 //body te update condition dite hbe
}

document.write(sum);


//do while loop.......