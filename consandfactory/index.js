function addressCreator (street, city, zip){
    return{
        street,
        city, 
        zip
    }
}


function AddressCreator (street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let newadress = addressCreator('Apegya', "Breman Asikuma", 337387)
console.log(newadress)
let newAddress = new AddressCreator("Vermont", "USA", 32723676)
console.log(newAddress)