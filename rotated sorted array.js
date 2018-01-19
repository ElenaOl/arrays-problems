//Given a sorted array of n integers that has been rotated an unknown number of times, 
//write code to find an element in the array. You may assume that the array was originally sorted in increasing order.
var rotated = function(arr, num){
    si= 0;
    ei= arr.length-1;
    
    while(si<=ei){
      mi= Math.floor((si+ei)/2);
      if(arr[mi] === num){
        return num;
      }
      if(arr[si]<arr[mi] && arr[mi]>num){
          // console.log(arr[mi]);
          ei = mi-1;
      }else if(arr[si]>arr[mi]){
        if(arr[mi]>num){
          console.log(arr[mi]);
          ei = mi-1;
        }else{
          si = mi+1;
        }
      }else{
        si = mi+1;
      }
    }
    return console.log('this number is not found');
  }
  
  rotated([12,13,1,2,3,4,5,6,7,8,9,10,11], 13);