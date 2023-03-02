function isArraysEqual(arrayA, arrayB) {
    let isEqual = false;
    for(let i = 0; i < arrayA.length; i++){
        if(arrayA[i] == arrayB[i]){      
            isEqual = true;
        } else{
            return isEqual = false;
        }
    }
    return isEqual;
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
