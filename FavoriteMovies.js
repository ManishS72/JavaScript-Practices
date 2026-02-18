
const favMovie="Avatar";
let guess = prompt("Guess Your Favorite Number");

while(( guess != favMovie) && (guess!="quite"))
{
    guess=prompt("Wrong Guess. Please try Agian");
}

if(guess==favMovie)
{
    console.log("Congrat");
}else{
    console.log("you quite");
}