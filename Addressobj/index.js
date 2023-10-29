//program takes in an address object and output each value and its parameters to the console

let address = {
    street: "Apegya",
    city: 'Accra',
    zipcode:22290
}
function showAddress (address){
    for (let key in address){
        console.log(key, address[key])
    }
}

console.log(showAddress(address))