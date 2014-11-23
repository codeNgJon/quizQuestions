var primeGenerator = function(){
  var primes = [2,3];
  var num = 5;
  // helper function to check if a number is prime
  var isPrime = function(num){
    // if num is 2 or 3 
    if(num <= 3){ return false;}
    // if num is divisible by 2 or 3 -> not prime
    if(num % 2 === 0 || num % 3 === 0){ return false;}
      
    for(var i = 5 ; i <= Math.floor(Math.sqrt(num)) ; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true; 
  }

  while( primes.length < 100){
    if(isPrime(num)){
      primes.push(num);
    }
    num++;
  }

  return primes;
}
