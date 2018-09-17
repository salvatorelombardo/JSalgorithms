function titleCase(str) {

    var newStr, lowStr;
    lowStr = str.toLowerCase().split(' ');

    // console.log(lowStr)

    for (var i = 0; i < lowStr.length; i++) {

        lowStr[i] = lowStr[i].charAt(0).toUpperCase() + lowStr[i].substr(1);



    }

    lowStr = lowStr.join(' ');
    console.log(lowStr)







    return lowStr
    // return str;
}

titleCase("I'm a little tea pot");
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");