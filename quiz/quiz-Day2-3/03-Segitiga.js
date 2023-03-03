/** buat segitiga  */ 

for (let i = 5; i > 1; i--){
    let angka = '';
    for(let j = 1; j < i; j++){
        angka = angka + j + " ";
    }
    console.log(angka);
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let x = 5;
for (let i = 0; i < 6; i++) {
    let angka = '';
    for (let k = x; k > 0; k--){
        angka = angka + k + " ";
    }
    console.log(angka);
    x -= 1;
}
// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

