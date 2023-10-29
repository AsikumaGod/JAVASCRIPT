//Program takes in an object and show the key value pairs

function showProps (obj){
    for (let key in obj){
        console.log(key, obj[key]);
    }
}

let testfile = {
    name: "Kofi",
    age: 19,
    class: 3,
    birthMonth: "August"
}
console.log(showProps(testfile))