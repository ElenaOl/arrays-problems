//Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. For example, in an array A:

var arr = [-7, 1, 5, 2, -4, 3, 0];

function isEq (arr){
  var sum1 = arr[0];
  var eq = 1;
  var sum2 = 0;
  var j = 2;
  while(j<arr.length){
    for (var i=j; i<arr.length; i++){
      sum2 = sum2 + arr[i];
    }
    if(sum1 === sum2){
      return eq;
    }
    sum2 = 0;
    sum1 = sum1 + arr[j-1];
    eq = j;
    j++;
  }
  
  return -1;
}
isEq (arr);
