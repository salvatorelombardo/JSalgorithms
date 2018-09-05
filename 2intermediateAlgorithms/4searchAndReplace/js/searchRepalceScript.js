'use strict'

function myReplace(str, before, after) {

var regex = /^[A-Z]/;
var index = str.indexOf(before)

// console.log(before.match(regex));

if(before.match(regex)===after.match(regex)){
    // console.log(str.replace(before,after))

    return str.replace(before,after)

}else if(str[index]===str[index].toUpperCase()){

    // console.log(str[index])

    after = after.charAt(0).toUpperCase() + after.slice(1);

    // console.log(after)
    return str.replace(before,after)
    

    
    
}



  }
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall") ;
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") ;
myReplace("This has a spellngi error", "spellngi", "spelling") ;
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");

//   locate argument in string