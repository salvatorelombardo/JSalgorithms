'use strict';

function factorialize(num) {

    if (num <= 1) {
        console.log(num)
        return 1
    }


    var newNum, num, result;

    newNum = num - 1;

    for (var i = newNum; newNum >= 1; newNum--) {
        num = num * newNum;


        // return num

    }

    console.log(num)
    return num




}

factorialize(5);
factorialize(0);
factorialize(10);
factorialize(20);

/*access num
modify number -1 
multiply number by new number
-1 from num


*/