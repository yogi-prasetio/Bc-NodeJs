
function showPrimeNumber(n){
	let prima = '';
    for(let i = 2; i <= n; i++){
		if(isPrime(i) !== false){
        	prima = prima + isPrime(i) + ' ';
		}
    }
	return prima;
}

function isPrime(n){
	let bagi = 0;
  	for(let i = 1; i <= n; i++){
    	if(n % i == 0){
      		bagi++;
    	}
  	}
  	if(bagi == 2){
	    return n;
  	} else {
		return false;
	}
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */


