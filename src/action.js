function updateTime(){
// Milan
let milanElement = document.querySelector("#milan");
let milanDateElement = milanElement.querySelector(".date");
let milanTimeElement = milanElement.querySelector(".time");
let milanTime = moment().tz("Europe/Rome");

milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
milanTimeElement.innerHTML = milanTime.format("hh:mm:ss [<small>]A[</small>]");

// Johannesburg
let johannesburgElement = document.querySelector("#johannesburg");
let johannesburgDateElement = johannesburgElement.querySelector(".date");
let johannesburgTimeElement = johannesburgElement.querySelector(".time");
let johannesburgTime = moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
johannesburgTimeElement.innerHTML = johannesburgTime.format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);