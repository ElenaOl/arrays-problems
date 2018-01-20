//2. A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index if one exists, in an array A. FOLLOW UP: What if the values are not distinct?
//assuming there are negative numbers
function magicIndex(arr){
  si=0;
  ei=arr.length-1;
  while(si<=ei){
    var mi=Math.floor((si+ei)/2);
    if(arr[mi] === mi){
      return mi;
    }
    if(arr[mi] > mi){
      ei=mi-1;
      
    }else{
      si=mi+1;
    }
  }
}

magicIndex([-4,1, 2, 4, 5, 6, 7, 8]);