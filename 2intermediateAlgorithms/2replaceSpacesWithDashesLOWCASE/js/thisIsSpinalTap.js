'use strict';

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var newStr;
    var regex = /\s+|_+/g;


    newStr = str;
    newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // newStr = newStr.toLowerCase();

    return newStr.replace(regex, '-').toLowerCase();

    



    console.log(newStr);

    // return
    return str;
}

spinalCase('This Is Spinal Tap');