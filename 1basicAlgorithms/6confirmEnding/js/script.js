'use strict';

function confirmEnding(str, target) {

    // find length of target
    var target, str, strLen, tarLen, strSubStr;
    strLen = str.length;
    tarLen = target.length;
    strSubStr = str.substr(strLen - tarLen, tarLen);

    if (strSubStr === target) {

        console.log(target)
        return true
    } else {

        console.log(false)
        return false
    }

    // console.log(tarLen)

}

confirmEnding("Bastian", "n");
confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
confirmEnding("Open sesame", "pen");
confirmEnding("Open sesame", "game");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
confirmEnding("Abstraction", "action");