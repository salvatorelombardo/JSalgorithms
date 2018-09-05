'use strict';

function pairElement(str) {

    var paired = [];



    // Function to check with strand to pair.
    var search = function (str) {

        // console.log(str)
        switch (str) {
            case 'A':
                paired.push(['A', 'T']);
                break;
            case 'T':
                paired.push(['T', 'A']);
                break;
            case 'C':
                paired.push(['C', 'G']);
                break;
            case 'G':
                paired.push(['G', 'C']);
                break;
        }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);

    }

    console.log(paired)
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");


/* access - 
arguement 
A
T
G
C

turn argument into array 

access array at i

*/