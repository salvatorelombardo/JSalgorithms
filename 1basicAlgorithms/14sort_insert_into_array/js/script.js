function getIndexToIns(arr, num) {

    if (arr.length === 0) {
        console.log(0)
        return 0
    }





    var newArr, newNum, i = 0;

    newNum = num;

    newArr = arr;

    newArr = newArr.sort(function (a, b) {
        return a - b
    });

    if (newNum >= newArr.slice(-1)[0]) {

        // console.log(arr.length + 1)

        return arr.length


    }

    // console.log(newArr)

    for (i; i < newArr.length; i++) {

        if (newNum <= newArr[i]) {
            console.log(i);
            return i
            if (newNum >= newArr[i]) {
                console.log(i)
                return i
            }
        }

    }





}

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35);
// getIndexToIns([], 1);
// getIndexToIns([], 1);
// getIndexToIns([10, 20, 30, 40, 50], 30);
// getIndexToIns([5, 3, 20, 3], 5);
// getIndexToIns([2, 20, 10], 19);
// getIndexToIns([2, 5, 10], 15)
// getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);



// sort array;

// loop through array - locate first number num is >= and print index