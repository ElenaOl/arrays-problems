//Segregate 0s on left side and 1s on right side of the array. Traverse array only once.
//Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]
//Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
function swap (arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function sort (arr){
  var i=0;
  var j=arr.length-1;
  while(i<j){
    if(arr[i] === 0){
      i++;
    }if(arr[j] === 1){
      j--;
    }if(arr[i] === 1 && arr[j] === 0){
      swap (arr, i, j);
      i++;
      j--;
    }
  }
  return arr;

}
sort ([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
