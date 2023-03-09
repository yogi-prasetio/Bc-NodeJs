
function isPalindrome(word){
    word = word.toLocaleLowerCase();
    return word == word.split('').reverse().join('');
}

console.log(isPalindrome('kasur ini rUsak'));//true