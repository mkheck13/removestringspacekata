// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"


// I am fairly certain that there is a method that returns the string with no spaces
// but for now I'm just going to do a for loop that does it
// first we want to initialize an empty string (result) where we will store the final string
// we then iterate through the string with a for loop
// as it's iterating through the string its checking if the characters is a space or not
// if its a space nothing happens, if its a character then its added to to final string
// we then return the final string which will contain no spaces
function noSpace(x){
    let result = "";
    for (let i = 0; i < x.length; i++){
        if (x[i] !== " "){
            result += x[i];
        }
    }
    return result;
}

// we could also have done a .split() and a .join() to get the same results
function noSpace(x){
    return x.split(' ').join('')
}

// also we could do a .replace() that would take out the spaces
// .replace() takes two values, the thing you want changed and what you want it changed to
// with the .replace() we use /\s/g   \s matches any whitespace characters  g makes it global
// we then replace the whitespaces with an empty string, so no spaces
function noSpace(x){
    return x.replace(/\s/g, '');
}