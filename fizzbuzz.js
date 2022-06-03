//create fizzbuzz
//create for loop which runs 100 times
var fizzValue = 3;
var buzzValue = 5;
var fizzbuzzValue = 15;

for(i = 1; i <= 100; i++)
{
    if(i % fizzbuzzValue === 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % fizzValue === 0)
    {
        console.log("Fizz");
    }
    else if(i % buzzValue === 0) 
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}