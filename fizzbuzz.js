// Is the number divisible by 5? Then say, "Fizz".
// Is the number divisible by 3? Then say, "Buzz".
// Is the number divisible by 5 and 3? Then say, "FizzBuzz".

function areTheNumbersDivisible (numerator, denominator){
    if (numerator%denominator===0)
        return true;
    else
        return false;
}

 function fizz (testnumber) {
     const fizzNumber = 5;
    // do i print fizz?
    if (areTheNumbersDivisible(testnumber, fizzNumber)===true)
        return true;
    else
        return false;
}

function buzz (testnumber) {
    const buzzNumber = 3;
    // do i print buzz?
    if (areTheNumbersDivisible(testnumber, buzzNumber)===true)
        return true;
    else
        return false;
}

function fizzBuzz(howManyTimes){
    for(i=1;i<=howManyTimes; i++){
        if (fizz(i) && buzz(i))
            console.log("(" + i + ")FizzBuzz")
        else if (fizz(i)===true)
            console.log("("+ i +")" + "Fizz")
        else if (buzz(i)===true) 
            console.log("(" + i + ")" + "Buzz")
    }

}

fizzBuzz(100);



