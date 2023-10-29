//Returns True if it is Landscape else false

function isLandscape (width, height){
    if (width > height){
        return "It  is Landscape"
    }
    else{
        return "It is Portrait"
    }
}
console.log(isLandscape(900, 500))