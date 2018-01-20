// 1. Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.

function binary (arr){
  var si = 0;
  var ei = arr.length -1;
  
  while(si <= ei){
    var mi = Math.floor((si + ei)/2);
    console.log(si,mi,ei);
    
    if(arr[mi] !== arr[mi+1] && arr[mi] !== arr[mi-1]){
      return arr[mi];
    }
    if(arr[mi] === arr[mi-1]){
      mi = mi-1;
    }
    if(mi % 2 === 0){
      si = mi+2;
    }else{
      ei = mi-1;
    }
  }  
}
binary ([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]);