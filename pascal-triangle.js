var generate = function(numRows) {
    if(numRows === 0){
        return [];
    }
    var res = [[1]];
    if(numRows === 1){
        return res;
    }
    res = [[1],[1,1]];
    if(numRows === 2){
        return res;
    }
    i=numRows-2;
    while(i>0){
      var curr =[1];
      var arr = res[res.length-1];
      for(var j=0; j<arr.length-1; j++){
          curr.push(arr[j]+arr[j+1]);
      } 
      curr.push(1);
      res.push(curr)
      i--; 
    }
    return res;    
};
