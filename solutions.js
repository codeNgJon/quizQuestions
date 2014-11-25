/////////////////////////////////////////////////////////
/*Prime Numbers
Write a function to print out the first 100 prime numbers. 
*/
/////////////////////////////////////////////////////////
var primeGenerator = function(){
  var primes = [2,3];
  var num = 5;
  // helper function to check if a number is prime
  var isPrime = function(num){
    // if num is 2 or 3 
    if(num <= 3){return false;}
    // if num is divisible by 2 or 3 -> not prime
    if(num % 2 === 0 || num % 3 === 0){return false;}
      
    for(var i = 5 ; i <= Math.floor(Math.sqrt(num)) ; i++){
      if(num % i === 0){return false;}
    }
    return true; 
  }

  while(primes.length < 100){
    if(isPrime(num)){
      primes.push(num);
    };
    num++;
  }

  return primes;
}

/////////////////////////////////////////////////////////
/*DOM APIs
Using the DOM APIs, write a routine to change every paragraph in a content editable div into a blockquote.
*/
/////////////////////////////////////////////////////////
var blockQuoteReplacer = function(parent){
   var elements = parent.getElementsByTagName('p');
   var block = document.createElement('blockquote')
   for(var i = 0 ; i < elements.length; i++){
    block.innerHTML = elements[i].innerHTML;
    elements[i].parentNode.insertBefore(block,elements[i]);
    elements[i].parentNode.removeChild(elements[i])
   };
  
  /////WITH JQUERY, I WOULD USE THIS/////
  // $('p').each(function(){
  //   $(this).replaceWith($('<blockquote>' + this.innerHTML + '</blockquote>'));
  // });
}

/////////////////////////////////////////////////////////
/*Finding Pairs
Write a function: findSumPairs(intArr, sumTotal) 
*/
/////////////////////////////////////////////////////////
var findSumPairs = function(intArr, sumTotal){
  var results = [];
  var combos = [];
  for(var i = 0 ; i < intArr.length ; i++){
    var currentNum = intArr[i];
    var tempArr = intArr.slice(0,i).concat(intArr.slice(i+1));
    for(var j = 0 ; j < tempArr.length; j++){
      if(currentNum + tempArr[j] === sumTotal){
        results.push([currentNum, tempArr[j]].sort())
      }
    }
  } 
  for(var k = 0 ; k < results.length; k++){
    if(results.indexOf(results[k].toString() !== -1)){
      results.splice(k,1);
    }
  } 
  return results;
}


