var matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];

var isToeplitzMatrix = function(matrix) {//true/false
   for(var i=0; i<matrix.length; i++){
     for(var j=0; j<matrix[i].length; j++){
       if(matrix[i+1] !== undefined && matrix[i+1][j+1] !== undefined && matrix[i][j] !== matrix[i+1][j+1]){
         return false;
       }
     }
   }
  return true;
};
isToeplitzMatrix(matrix);

var isToeplitzMatrix2 = function(matrix) {//true/false
   for(var i=0; i<matrix.length-1; i++){
     for(var j=0; j<matrix[i].length-1; j++){
       if(matrix[i][j] !== matrix[i+1][j+1]){
         return false;
       }
     }
   }
  return true;
};
isToeplitzMatrix2(matrix);

