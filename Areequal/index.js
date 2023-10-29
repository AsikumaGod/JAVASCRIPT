function AddressCreator (street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}


let address1 = new AddressCreator("Vermont", "USA", 32723676)
let address2 = new AddressCreator("Vermont", "USA", 32723676)

function areEqual (address1, address2){
    if (address1.city === address2.city && address1.street === address2.street && address1.zip === address2.zip){
        return true
    }
    else{
        return false
    }
}

function areSame (address1, address2){
    if (address1.city == address2.city && address1.street == address2.city && address1.zip == address2.zip){
        return true
    }
    else{
        return false
    }
}

let testfile = areEqual(address1, address2)
let testfile2 = areSame(address1,address2)
console.log(testfile)
console.log(testfile2)