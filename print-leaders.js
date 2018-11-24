//Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.

arr = [16, 17, 4, 3, 5, 2];

function findLeader (arr){
 var result = [arr[arr.length-1]];
 for(var i=arr.length-2; i>=0; i--){
   for(var j=0; j<result.length; j++){
     if(arr[i] > result[result.length-1]){
       result.push(arr[i]);
     }
   }
 }
 
 return result;
}
findLeader (arr);
