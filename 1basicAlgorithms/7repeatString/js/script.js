function repeatStringNumTimes(str, num) {

    var str, num, newStr;

    str = str;
    num = num;
    newStr = ''

    // console.log(str, num)

    if (num < 0) {
        // console.log(str)
        return '';
    } else {

        for (var i = 0; i < num; i++) {

            // console.log(str);
            newStr += str;



            // str += str;


        }
        console.log(newStr)
        return newStr
    }

}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);