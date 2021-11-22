// Code your solutions in this file
function writeCards(guestList) {
//1) returns an array of thank you messages for each name provided to the function
    const temp = [];
    for (let guests = 0; guests < guestList.length; guests ++){
       temp.push(`Thank you, ${guestList[guests]}, for the wonderful surprise gift!`)
    }
    
    return temp;
}

function countDown(num){
//2) invokes console.log once for each number, counting down from the number provided to zero
//3) logs each number when counting down, starting from the number provided
   if (num >= 0) {
    while (num >= 0) {
        console.log(num);
        num --;
        }
    }
}
