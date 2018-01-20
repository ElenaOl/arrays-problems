//6. Given an array of numbers, split the array into two where one array contains the sum of n-1 numbers and the other array with all the n-1 elements.

//if array sorted and contains the number that is the sum of all others this number will be last.
//if array not sorted we can find maximum and sum of elements and check if sum === 2*max num O(n) solution.
//memory it is taken two arr, sum, max, indexOfMax.

var arr = [1,2,3,4,15,5];
var arr1 = [];
var sum = 0;
var max = arr[0];
function split(arr){
  for(var i=0; i<arr.length; i++){
    sum += arr[i];
  }
  for(var i=0; i<arr.length-1; i++){
    if(arr[i] > arr[i+1]){
      max = arr[i];
      indexOfMax = i;
    }else{
      max = arr[i+1];
      indexOfMax = i+1;
    }
  }
  if(sum === 2*max){
    arr1.push(max);
    arr.splice(indexOfMax, 1);
    return "the sum of n-1 is " + arr1 + " the n-1 elements are " + arr;
  }else{
    return "there is no element that equals the sum of others found";
  }
}
split(arr);









