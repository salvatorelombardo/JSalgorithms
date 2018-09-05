'use strict';

function whatIsInAName(collection, source) {


    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {

                console.log('Value ', obj, obj[srcKeys[i]] /*, source[srcKeys[i]]*/ )
                return false;
            }
        }
        console.log(obj, source)
        return true;
    });
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});