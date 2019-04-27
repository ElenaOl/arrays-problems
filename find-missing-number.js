//You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

function findMissing (arr){
  var count = arr.length +1;
  var teorethicalSum = count*((arr[0]+arr[arr.length-1])/2);
  var sum = arr[0];
  for(var i=1; i<arr.length; i++){
    sum = sum + arr[i];
  }
  console.log(sum)
  return teorethicalSum -sum;
}
findMissing ([1,2,3,4,6,7,8]);
