function countNumber (n, num){
  if(num === 0){
    return 0;
  }
  if(n===0){
    return 0;
  }

  var count = 0;
  var matrix = [];
  for(var i=0; i<n; i++) {
    matrix[i] = new Array(n);
  }
 for(var i=0; i<n; i++){
   for(var j=0; j<n; j++){
     matrix[i][j] = (i+1)*(j+1);
     if(matrix[i][j] === num){
       count++;
     }
   }
 }
 
 return count;
}
