
// Print numbers from 1 to 10.....

let num = 10;

for(let i=1; i<=10; i++)
{
    console.log(i);
}

// Print even numbers from 1 to 20.....

let num1 =20;

for(let i=1; i<=20; i++)
{
    if(i % 2 == 0)
    {
            console.log(i);
    }
    
}

// Find sun of array elements...

let arr=[10,20,30];

let sum = 0;

for(let i=0; i<arr.length; i++)
{
    sum = sum + arr[i];
}

console.log("Sum of Array = " ,sum);


// Find largest number in array...

let arr1=[5,9,2,15,6];

let largest = arr1[0];

for(let i=0; i<arr1.length; i++)
{
    if(arr1[i] > largest)
    {
        largest = arr1[i];
    }
}

console.log("Largest Number of = ",largest);

//  Reverse a string..

let str="react";

let rev = "";

for(let i=str.length-1; i>=0; i--)
{
   rev = rev + str[i];

}
console.log(rev);

// Find smallest number in array..

let small=[5,9,2,15,6];

let smallest = small[0];

for(let i=0; i<small.length; i++)
{
    if(small[i]<smallest)
    {
        smallest = small[i];
    }
}

console.log("Smallest Number = ",smallest);