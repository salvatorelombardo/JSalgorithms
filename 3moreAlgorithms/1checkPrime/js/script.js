'use strict';

function isPrime(n) {

    var divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            console.log('Not prime: ', n)
            return false;
        } else {
            divisor++;
            if (n % divisor == 0) {
                console.log('Not prime: ', n);
                return
            }

        }
        console.log('Prime: ', n)
        return true
    }
    // console.log(n)

}

isPrime(137);
isPrime(237);
isPrime(22);
isPrime(400);
isPrime(89);
isPrime(50);