/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    const [month, day, year] = s.split('/');
    const tgl = new Date(year,parseInt(month)-1,day);

    if(tgl=='Invalid Date'){
        return `${s} bad format date`;
    } else{
        return tgl;       
    }
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date