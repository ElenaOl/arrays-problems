function binarySearch (arr, si, ei, num){
  var mi = Math.floor((si+ei)/2);
  if(arr[mi] === num){
    return true;
  }
  if(si === ei){
    return false;
  }
  if(arr[mi] < num){
    var result = binarySearch (arr, mi+1, ei, num);
  }else{
    result = binarySearch (arr, si, mi-1, num);
  }
  return result;
}
binarySearch ([1,2,3,10,15,48], 0, 5, 48);