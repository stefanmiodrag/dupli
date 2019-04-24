
/*
Function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once (both uppercase and lowercase) in the input string. 
*/

twinStr = (str) => {
    const strArray = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    try {
        const result = strArray.length;
        return result + " duplicates were found...";
        
    } catch (e) {
        return 0;
    }
}

module.exports = twinStr;

