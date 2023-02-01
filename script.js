function uniqueChars(string) {
    // split the string into characters
    const string1 = string.split("")

    // create new set from array of characters
    // note:set returns unique values
    const setArray = new Set(string1)
    console.log(setArray);

    // convert the set into an array using spread
    // join the array to make a string.
    const finalResult = [...setArray].join("")
    console.log(finalResult)
   
}
uniqueChars("hello how are you")