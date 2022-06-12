function fibo(c){
    let num1=0;
    let num2=1;
    let num3=0;
    for ( let n=0; n<c; n++){
        num3 = num1 + num2;
        console.log(num3);
        num1= num2;
        num2= num3;
        }
    }

    fibo(9);
    fibo(10);

    function abc(){
        console.log("soemthigng");
    }
    
