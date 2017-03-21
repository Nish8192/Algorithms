    //Recursively add all numbers from 1 to a
function rSigma(a){
    if(a <= 0){
        return 0;
    }
    a = Math.floor(a);

    if(a > 0){
        return a + rSigma(a - 1);
    }
}
// console.log(rSigma(3));
// console.log(rSigma(5));

    //Recursively find the factorial of a (a!)
function rFactorial(a){
    if(a <= 0){
        return 1;
    }
    a = Math.floor(a);

    if(a >= 1){
        return a * rFactorial(a - 1);
    }
}
// console.log(rFactorial(3));
// console.log(rFactorial(6));

    //Recursively return the numTH number in the Fibonacci Sequence
function rFibonacci(a){
    a = Math.floor(a);
    if(a <= 1){
        return 0;
    }
    if(a <= 2){
        return 1;
    }
    return rFibonacci(a - 1) + rFibonacci(a - 2);
}
// console.log(rFibonacci(10));
