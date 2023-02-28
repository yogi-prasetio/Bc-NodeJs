/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    const x = Number(seconds) % 86400;
    const y = x % 3600;
    
    const day = Math.round(Number(seconds)/86400);
    const hour = Math.round(x / 3600);
    const minute = Math.floor(y / 60);
    const second = y % 60;  
    
    if(isNaN(second)){
        return `${seconds} is not number`;
    } else{
        return `${day} hari ${hour} jam ${minute} menit ${second} detik`;
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik