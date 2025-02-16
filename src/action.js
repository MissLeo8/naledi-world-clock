function updateTime(){
  // Milan
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("Europe/Rome");

  milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
  milanTimeElement.innerHTML = milanTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Havana
  let havanaElement = document.querySelector("#havana");
  let havanaDateElement = havanaElement.querySelector(".date");
  let havanaTimeElement = havanaElement.querySelector(".time");
  let havanaTime = moment().tz("America/Havana");

  havanaDateElement.innerHTML = havanaTime.format("MMMM Do YYYY");
  havanaTimeElement.innerHTML = havanaTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}


function updatecity(event){
    let cityTimeZone = event.target.value;
    if( cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split('/')[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
            </div>
        </div>
        `;
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updatecity);

