const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if(stringOne.length!=stringTwo.length){
        return false;
    } else{
      // else sort and compare 
      // (doesnt matter how it's sorted, as long as it's sorted the same way)
        const strOne = stringOne.split('');
        const strTwo = stringTwo.split('');
        strOne.sort();
        strTwo.sort();

        let isEqual = false;
        for(let i = 0; i < strOne.length; i++){
            if(strOne[i] == strTwo[i]){      
                isEqual = true;
            } else{
                return isEqual = false;
            }
        }
        return isEqual;
    }
  };
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;