function isCharsUnique(string){
    const chars = string.split('');
    let charCount = [];
    for(let i = 0; i < chars.length; i++) {
        if(charCount[chars[i]] != null) {
           charCount[chars[i]] += 1;
        } else {
           charCount[chars[i]] = 1;
        }
    }
    for(let j = 0; j < chars.length; j++){
        if(charCount[chars[j]] > 1){
            return false;
        } else {
            return true;
        }
    }
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false