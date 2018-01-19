function atIndex (arr, num){
  for(var i=0; i<arr.length; i++){
    if(arr[i] === num){
      return i;
    }
  }
  return "not found";
}
atIndex([8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3], 3);