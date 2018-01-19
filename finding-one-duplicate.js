//4. Given an array that contains numbers from 1 to n-1 and exactly 1 duplicate, find that duplicate.

//assuming that array sorted

function duplicate(arr){
  si=0;
  ei=arr.length-1;
  while(si<ei){
    var mi = Math.floor((si+ei)/2)
    if(arr[mi] === arr[mi+1] || arr[mi] === arr[mi-1]){
      return arr[mi];
    }
    if(arr[mi] === mi+1){
      si=mi+1;
    }else{
      ei=mi-1;
    }
  }
}

duplicate([1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);