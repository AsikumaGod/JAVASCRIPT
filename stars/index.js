//Function takes in a number as parameter and output * the number of times specified

function showStars (rows){
    str = "*"
    for (let i = 0; i <= rows; i++){
    console.log(str.repeat(i))
    }
}
console.log(showStars(9))