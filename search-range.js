var searchRange = function(nums, target) {
    var result = [];
    var si = 0;
    var ei = nums.length-1;
    
    while(si<=ei){
      var mi = Math.floor((si+ei)/2);
      if(nums[mi] !== target && nums[mi] > target){
        ei = mi - 1;
      }else if(nums[mi] !== target && nums[mi] < target){
        si = mi + 1;
      }else{
        var index = mi;
        break;
      }
    }
    if(index === undefined){
      return [-1,-1];
    }
    var i=index;
    while(i>=0){
      if(nums[i-1] !== nums[i]){
        result.push(i);
        break;
      }else{
        i--;
      }
    }
    var j = index;
    while(j<nums.length){
      if(nums[j+1] !== nums[j]){
        result.push(j);
        break;
      }else{
        j++;
      }
    }
   return result;

};
