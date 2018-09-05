'use strict';

function translatePigLatin(str) {

    var regex, pigLatin;
    
    pigLatin = '';
    regex= /[aeiou]/gi;

   
    if(!str.match(regex)){

        // console.log(str + 'ay')

        ;
        // return console.log(str)
        return str + 'ay'

    }
   

    // g global, i case insensitive;

    if(str[0].match(regex)){

pigLatin= str+'way';

console.log(pigLatin)

return pigLatin

    }else {

var consonant, newStr;

consonant = str.indexOf(str.match(regex)[0]);

// console.log(str)

newStr = str.substr(consonant) + str.substr(0,consonant) + 'ay';

console.log(newStr)

return newStr;




    }


  
    
  }
  
  translatePigLatin("consonant");
  translatePigLatin("california"); 
translatePigLatin("paragraphs") ;
translatePigLatin("glove") ;
translatePigLatin("algorithm"); 
translatePigLatin("eight");
translatePigLatin("zdplt");


//   if word begins with a,e,i,o,u concat way to end
// else 