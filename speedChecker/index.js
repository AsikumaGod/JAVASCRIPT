//Speed Limit = 70km/h
//if speed is less than speed Limit, Ok
//Every 5 km above the speed Limit is 1 point
//more than 12 points, license is suspended

speedLimit = 70
function checkSpeed(drivingSpeed){
    points = Math.floor((drivingSpeed - speedLimit)/ 5)

    if (points <= 12){
        console.log(points)
        console.log("Driving speed is Ok")
    }
    else if (points > 12){
        console.log(points)
        console.log("License Suspended")
    }

}
console.log(checkSpeed(80))