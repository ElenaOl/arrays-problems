//Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
//Examples:
//Input: arr[] = {9, 29,10, 2, 50, 24, 100}, n = 50
//Output: Pair Found: (50, 100)
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
function difference (arr, n){
  arr = bubbleSort(arr);
  console.log(arr)
  var size = arr.length;
  var result = [];
  if(n<0){
    n = Math.abs(n);
  }
  var i = 0;
  var j = 1;
  while(i < size && j < size){
    if (i != j && arr[j] - arr[i] === n) 
    { 
        result.push(arr[i]);
        result.push(arr[j]);
        i++;
        j++;
    } 
    else if (arr[j] - arr[i] < n){
      j++; 
    } 
    else 
    {
       i++;
    }
  }
  return result;
}
difference ([9, 29,10, 2, 50, 24, 100], 50)
