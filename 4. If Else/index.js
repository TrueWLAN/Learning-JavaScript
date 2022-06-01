// If and If Else Statements

function count(num){
    if (num > 10) {
        console.log("num is greater than 10");
    if (num < 10) {
        console.log("num is less than 10");
    }
    }
}


function alive(isAlive){
    if (isAlive){
        console.log("I am alive");
    }else{
        console.log("I am dead");
    }
}

count(5);
count(15);
alive(true);
alive(false);