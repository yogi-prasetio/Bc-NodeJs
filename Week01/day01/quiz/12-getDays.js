/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month) && isNaN(year)===false){
        return 'inputan bulan harus dalam integer';
    } else if(isNaN(month) === false && isNaN(year)){
        return 'inputan tahun harus dalam integer';
    } else if(isNaN(month,year)){
        return 'inputan bulan & tahun harus dalam integer';
    } else if(month===2 && year===2000){
        return 'This month has 29 days, 2000 adalah tahun kabisat';
    } else{
        return 'This month has 31 hari';
    }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari