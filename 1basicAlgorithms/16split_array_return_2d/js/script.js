function chunkArrayInGroups(arr, size) {

    var newArr, i, arrlen;
    newArr = [];
    i = 0;

    arrlen = arr.length;



    while (arrlen > 0) {
        newArr[i] = arr.splice(size - size, size);
        // console.log(newArr, arr.length)
        arrlen -= size;
        i++;
        // return
        console.log(arr);
    }

    console.log(newArr)

    return newArr


}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);