/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if(isNaN(start,end)){
        return `${start} or ${end} harus dalam angka`;
    } else {
        const profit = end-start;
        const income = Math.floor((profit/start)*100);        
        if(income>0){
            return `Total kenaikan income ${income}%`;
        } else if(income<0){
            return `Total penurunan income ${income}%`;
        }
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%


