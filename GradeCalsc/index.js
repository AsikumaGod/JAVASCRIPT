if (average < 60){
    console.log("F")
}
else if (average < 70){
    console.log("D")
}
else if ( average < 80){
    console.log('C')
}
else if (average < 90){
    console.log('B')

}

function gradecalc(marks){
    let sum = 0
    for (let mark of marks){
        sum = sum + mark
        let average = sum / marks.length;
    }
}
console.log(gradecalc([90, 90,89, 90]))