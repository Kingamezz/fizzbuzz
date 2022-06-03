//create fizzbuzz
//create for loop which runs 100 times
var fizzValue = 3; //define the first value
var buzzValue = 5; //define the second value
var fizzbuzzValue = (fizzValue * buzzValue); //multiply the variables so that fizzbuzzValue is automatically updated

for(i = 1; i <= 100; i++) //for loop runs 100 times
{
    if(i % fizzbuzzValue === 0) //if i is a multiple of fizzvalue and buzzvalue (15 by default), log FizzBuzz
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
        console.log(i); //log i if it is not a multiple of any provided value
    }
}
