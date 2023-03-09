/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
    const input = `${n}`;
    const a = Number(input.substr(0,1));
    const b = Number(input.substr(1,1));
    const c = Number(input.substr(2,1));
    const d = Number(input.substr(3,1));
    if (input.length>4){
        return `${input} harus lebih kecil dari 10000`;
    } else if(isNaN(a,b,c,d)){
        return `${n} is not number, try again...`;
    } else{        
        return a+b+c+d;
    }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...