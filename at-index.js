// 5. Search an element in an array where difference between adjacent elements is 1.
// For example: arr[] = {8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3}
// Search for 3 and Output: Found at index 7

//O(n) will be best, we can't be sure at what half to look only by middle number, sorting will bring to O(nlog(n))
function atIndex (arr, num){
  for(var i=0; i<arr.length; i++){
    if(arr[i] === num){
      return i;
    }
  }
  return "not found";
}
atIndex([8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3], 3);

//8-3 = 5 5-3=2, improvement to solve as n/2 solution

function atIndex (arr, num){
  for(var i=0; i<arr.length; ){
    if(arr[i] === num){
      return "found at index " + i;
    }
    var diff = Math.abs(arr[i] - num);
    i = i+diff; 
  }
  return "not found";
}

atIndex([8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3], 3);
