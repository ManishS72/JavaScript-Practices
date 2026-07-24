
function addSum(num1,num2)
{
    let sum = num1 + num2;
    return sum;
}

console.log(addSum(10,20));

function evenOdd(num1)
{
    
        if(num1%2==0)
        {
              return "even";
        }
          
        else
        {
            return "odd";
        }
}

console.log(evenOdd(50));

// Arrow Function start from here

const addNum = (num1 , num2) =>
{
    return num1+num2
};

console.log(addNum(23,7));