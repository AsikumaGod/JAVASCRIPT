




function showTruthy (values){
    i = 0
    for (let value of values){
        if (value){
            i++
        }
    }
    console.log(i)
}

let array = [1, 2, 4, 8]
console.log(showTruthy(array))