function truncateString(str, num) {

    var nStr;
    // console.log(str)

    if (str.length <= num) {
        // console.log(str)
        return str
    } else {

        nStr = str.substr(0, num) + '...'
        return nStr
    }
    // console.log(nStr)






    return nStr;
}

truncateString("A-tisket a-tasket A green and yellow basket barf", 8);
truncateString("A-tisket a-tasket A green and yellow basket snarf", 8);
truncateString("Peter Piper picked a peck of pickled peppers garf", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer larf", 2);