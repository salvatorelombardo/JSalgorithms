function findElement(arr, func) {

    var test;
    // console.log(arr)
    test = arr.filter(func);
    console.log(test[0])

    return test[0]




}

findElement([1, 2, 3, 4], num => num % 2 === 0);