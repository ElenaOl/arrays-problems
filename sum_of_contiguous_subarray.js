// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.

function maxSumSubArray (arr){
  if(arr === null || arr === undefined){
    return Number.MIN_SAFE_INTEGER;
  }
  var max =  Number.MIN_SAFE_INTEGER;
  var maxSoFar = 0;
  for(var i=0; i<arr.length; i++){
    maxSoFar = maxSoFar + arr[i];
    if(max < maxSoFar){
      max = maxSoFar;
      continue;
    }
    console.log(maxSoFar)
    if(maxSoFar < 0){
      maxSoFar = 0;
    }
  }
  return max;
}
