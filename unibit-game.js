//   first combine 2D array 
 function FindFirst2DArray(array,target){
    var First2D=[]
    for(let i=0;i<array.length-1;i++){

        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==target ){
                First2D.push([array[i],array[j]])
            }
        }
    }
   
   return First2D
 }

//  Merge sond sort the array 
 function MergeAndSort(array){
    let merge=[].concat(...array).sort((a,b)=>a-b)
    return merge
 }


 function findDoubleTarget(arr, target) {
    let finatarray=[]
   for(let i=0;i<arr.length;i++){
       let sum=0;
       let temp=[]
     for(let j=i+1;j<arr.length;j++){
        sum+=(arr[i]+arr[j])
        temp.push([arr[i],arr[j]])
        if(sum===target*2){
          finatarray.push(temp)
        }
    }
   }
   return finatarray
  }



 let array= [1, 3, 2, 2, -4, -6, -2, 8]
 let target=4;

 let FindCombination =FindFirst2DArray(array,target)
console.log("First combination :"+ FindCombination)
let Merge=MergeAndSort(FindCombination)
console.log("merge into a single array :"+ Merge)
console.log( "second combination :"+findDoubleTarget(Merge,target))



