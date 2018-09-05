'use strict';

function reverseString(str) {

    var newStr;

    newStr = str;

    newStr = newStr.split('');

    // console.log(newStr)

    newStr.reverse();

    // console.log(newStr)

    newStr = newStr.join('');

    console.log(newStr)

    return newStr



    // return str;
}

reverseString("hello");