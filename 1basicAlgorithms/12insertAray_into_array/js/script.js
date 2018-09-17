function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!

    var newArr = arr2.slice(0);

    // console.log(newArr)

    for (var i = arr1.length - 1; i >= 0; i--) {

        newArr.splice(n, 0, arr1[i])

    }

    console.log(arr2)
    console.log(newArr)
    return newArr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);