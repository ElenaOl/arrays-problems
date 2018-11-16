function merge (arr1,arr2){
  if(arr1 === null && arr2 === null){
    return null;
  }
  if(arr1 === null){
    return arr2;
  }
  if(arr2 === null){
    return arr1;
  }
  if(arr1.length === 0){
    return arr2;
  }
  if(arr2.length === 0){
    return arr1;
  }
  var i = arr1.length - arr2.length - 1;
  var j = arr2.length - 1;
  var k = arr1.length-1;
  while(i>=0 && j>=0){
    if(arr1[i] < arr2[j]){
      arr1[k] = arr2[j];
      k--;
      j--;
      console.log(arr1);
      console.log(i);
      console.log(j);
    }else if(arr1[i] > arr2[j]){
      arr1[k] = arr1[i];
      k--;
      i--;
      console.log(arr1);
    }else{
      arr1[k] = arr1[i];
      arr1[k-1] = arr1[i];
      i--;
      j--;
      k = k-2;
      console.log(arr1);
    }
  }
  if(arr1[0] > arr2[0]){
    arr1[0] = arr2[0];
  }
  return arr1;
}
merge (arr1, arr2);
