function updateTime(){

let milanElement = document.querySelector("#milan");
let milanDateElement = milanElement.querySelector(".date");
let milanTimeElement = milanElement.querySelector(".time");
let milanTime = moment().tz("Europe/Rome");

milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
milanTimeElement.innerHTML = milanTime.format("hh:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);