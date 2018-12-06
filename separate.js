//3. Write a small method  to do the below task.. this is not in sorted order.. all negative characters in left and positive on the right..
// input = { 4, -3, 2, -5, 5, -1, 3}
// output= {-3,-5, -1, 4, 2, 5, 3}
function swap (arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function separate(arr){
  var i=0;
  var j=arr.length-1;
  while(i<=j){
    if(arr[i] < 0){
      i++;
    }if(arr[j] > 0){
      j--;
    }if(arr[i] > 0 && arr[j] < 0){
      swap (arr, i, j);
      i++;
      j--;
    }
  }
  return arr;
}
separate([4, -3, 2, -5, 5, -1, 3]);

