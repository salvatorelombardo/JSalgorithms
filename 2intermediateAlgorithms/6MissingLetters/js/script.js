'use strict'

function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        /* code of current character */
        var code = str.charCodeAt(i);
        // console.log(code)

        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
            // console.log(str.charCodeAt(0) + i)
            /* if current character has escaped one character find previous char and return */
            // console.log(string)
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

// test here
fearNotLetter("abce");