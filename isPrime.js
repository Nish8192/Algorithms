function isPrime(num){
    if(num % 2 == 0 || num < 2){
        return false;
    }
    for(let i = num - 2; i >= 3; i = i - 2){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(99));
