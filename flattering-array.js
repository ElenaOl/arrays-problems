// flatteiing array

var arr = [1, [2,[3]], [4,5], [[[6]]]];
var result = [];
var embeded = true;

while(embeded){
  embeded = false;
  for(var i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      console.log('here')
      embeded = true;
      for(var j=0; j<arr[i].length; j++){
        result.push(arr[i][j]);
      }
    }else{
      console.log('there')
      result.push(arr[i]);
    }
  }
  arr = result;
  result = [];
  console.log(arr)
}  
  
// console.log(arr);


// flatteiing array

var arr = [1, [2,[3]], [4,5], [[[6]]]];
var result = [];
var embeded = true;


while(embeded){
  embeded = false;
  for(var i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      embeded = true;
      result = result.concat(arr[i]);
    }else{
      result.push(arr[i]);
    }
  }
  arr = result;
  result = [];
}  
  
console.log(arr);




// flatteiing array

var arr = [[[[[1]]]], [2,[3]], [4,5], 6];
var result = [];
var embeded = true;


while(embeded){
  embeded = false;
  if(Array.isArray(arr[0])){
      embeded = true;
  }
  arr = arr.reduce(function (e1,e2){
    if(Array.isArray(e2)){
      embeded = true;
    }
    if(Array.isArray(e1)){
      return e1.concat(e2);
    }else{
      return [e1].concat(e2);
    }
  })
    
  // arr = result;
  // result = [];
}  
  
console.log(arr);


var arr = [[[[[1]]]], [2,[3]], [4,5], 6];
var embeded = true;

function flattenArray (arr){

  
    embeded = false;
    if(Array.isArray(arr[0])){
        embeded = true;
    }
    arr = arr.reduce((e1,e2) => {
      if(Array.isArray(e2)){
        embeded = true;
      }
      if(Array.isArray(e1)){
        return e1.concat(e2);
      }else{
        return [e1].concat(e2);
      }
    })
    if(embeded){
      arr = flattenArray(arr);  
    }
 
  return arr;
}  
// console.log(arr);
flattenArray (arr);





var arr = [1, [2,[3]], [4,5], 6];

function flattenArray (arr){
  arr = arr.reduce((e1,e2) => {
    if(Array.isArray(e1)){
      e1 = flattenArray(e1);
    }
    if(Array.isArray(e2)){
      e2 = flattenArray(e2);
    }
    if(!Array.isArray(e1)){
      e1 = [e1];
    }  
    return e1.concat(e2);
  })
  return arr;
}
flattenArray (arr);

