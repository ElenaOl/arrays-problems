// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

function zeroToEnd (arr){
  // for (var i=0; i<arr.length; i++){
  //   if(arr[i] === 0){
  //     temp = arr.splice (i, 1);
  //     arr.push(temp.pop());
  //   }
  // }
  var countZero = 0;
  var j=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] === 0){
      countZero++;
    }else{
     arr[j] = arr[i];
     j++;
    }
  }
  for (var k= arr.length-countZero; k<arr.length; k++){
    arr[k] = 0;
  }
  
  return arr;
}
zeroToEnd([0, 1, 0, 3, 12]);