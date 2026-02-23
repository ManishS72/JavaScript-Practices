
let arr = [1,2,3,4,5,7,9,22,56,6];

 let max = -1;
 for(let i = 0; i < arr.length; i++)
 {
    if(max < arr[i])
    {
        max = arr[i];
    }
 }

 console.log(max);