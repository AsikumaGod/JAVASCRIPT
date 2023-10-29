//factory functions serve as bluieprints for creating objetcs
//factory functions produces objects

function CreateCircle (radius, diameter){
    return{
    radius,
    diameter,
    draw (){
        console.log("Hello world")
    }
    }
}
let circ1 = CreateCircle(2,4)
console.log(circ1)