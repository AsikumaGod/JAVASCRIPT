//program takes a number as an input 
//list the range to the number
//specify whether they are odd or even

function ShowNumbers(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2===0){
            console.log(i, "EVEN")
        }
        else{
            console.log(i, "ODD")
        }
}
    }   

    console.log(ShowNumbers(20))