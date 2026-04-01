function calculatesArea(length, width)
{
    if(length <=0) 
    {
        throw new RangeError("Lenght number should be positive");
    }

    if(width <=0) 
    {
        throw new RangeError("Width number should be positive");
    }
    const area = length * width;

    console.log("Area of Rectangle = ",area);
}
calculatesArea(2,-2);