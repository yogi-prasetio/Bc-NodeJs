function maxWordLength(params) {
    const s = params.split(' ');
    let wordLength = [];
    for(let i = 0; i < s.length; i++){
        wordLength.push(s[i].length);        
    }
    const maxWord = wordLength.indexOf(Math.max(...wordLength));
    return s[maxWord];
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp