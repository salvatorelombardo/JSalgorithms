function findLongestWordLength(str) {

    var str, longestStr = '';

    str = str.split(' ')
    // console.log(str);


    for (var i = 0; i < str.length; i++) {

        if (str[i].length > longestStr.length) {

            longestStr = str[i]
        }



    }
    // console.log(longestStr)

    return longestStr.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");