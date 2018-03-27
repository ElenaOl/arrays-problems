// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

function included (arr1, arr2){
  var h = {};
  var res = [];
  for(let i=0; i<arr1.length; i++){
      if(h[arr1[i]] !== undefined ){
        h[arr1[i]] +=1;
      }else{
        h[arr1[i]] = 1;  
      }
  }
  for(let j=0; j<arr2.length; j++){
    if(h[arr2[j]] !== undefined ){
      res.push(arr2[j]);
      h[arr2[j]] -=1;
    }
  }
  return res;
}
included ([1, 2, 2,3,4,5,6 ,8], [2, 2,3,5])


