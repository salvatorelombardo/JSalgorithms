'use strict';

function removeDuplicate(arr) {

    var exists = {},
        outArr = [],
        elm;

    for (var i = 0; i < arr.length; i++) {

        elm = arr[i]
        // on each iteration elm is = to arr[i]
        // console.log(elm);
        // continu
        // console.log(exists)

        // console.log(exists[elm])
        if (!exists[elm]) { //value= object[property]
            // if the element is not foind in the exists array (true or false) at the property = elm
            // push the element to the outArr
            outArr.push(elm)

            // console.log(outArr)

            // if element is true, set position in exists object to true
            exists[elm] = true;
            // console.log(exists[elm])
            console.log(exists)


            // check next elm to see if duplicate


        }
        // console.log(outArr)


    }
    // console.log(exists[elm])
    // console.log(outArr)

    // console.log()
    return outArr
}

removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);