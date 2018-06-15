var matrix = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

var flipAndInvertImage = function(A) {
    for(var i=0; i<A.length; i++){
      for(var j=0; j<A[i].length/2; j++){
        var temp = A[i][j];
        A[i][j] = A[i][A[i].length - (j+1)];
        A[i][A[i].length - (j+1)] = temp;
      }
    }
    
    var m = 0;
    while(m < A.length){
      var k = 0;
      while(k<A[m].length){
        if(A[m][k] === 1){
          A[m][k] = 0;
          k++;
        }
        if(A[m][k] === 0){
          A[m][k] = 1;
          k++;
        }
      }
      m++;
    }
    
    return A;
};

flipAndInvertImage(matrix);

// arr[i] = arr[arr.length - (i+1)];