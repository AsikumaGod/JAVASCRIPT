//This code implements the FizzBuzz algorithm in Js
//Output "Fizz" if number is divisible by 3 without a remainder
//Output "Buzz" if number is divisible by 5 wirhout a remainder
//Output "FizzBuzz" if number is divisible by both 3 and 5 without a remainder
//Output the number if it does not meet any of the conditions listed above

for (let i = 0; i <= 30; i++){
    if (i % 3===0 && i % 5===0){
        console.log("FizzBuzz")
    }
    else if (i % 3===0){
        console.log('Fizz')
    }
    else if (i % 5===0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}