async function getWeather(place) {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=26020170b1344b12b4f190438232012&q=${place}`,
  );
  if (data.status == 200) {
    const dataBody = await data.json();
    console.log(dataBody);
    return dataBody;
  } else {
    alert("Couldn't find this location");
  }
}

function fillData(data) {
  document.getElementById("condition").innerText = data.current.condition.text;
  document.getElementById("city").innerText = data.location.name;
  document.getElementById("country").innerText = data.location.country;
  document.getElementById("icon").src = data.current.condition.icon;
  document.getElementById("degree").innerText = data.current.temp_c;
  document.getElementById("humidity").innerText = data.current.humidity;
  document.getElementById("windSpeed").innerText = data.current.wind_kph;
}

async function fetchAndFill(place) {
  const data = await getWeather(place);
  fillData(data);
}

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const place = submitBtn.previousElementSibling.value;
  fetchAndFill(place);
});

// toggle stupid units
const toggleUnit = document.getElementById("toggleUnit");
toggleUnit.addEventListener("click", async function (event) {
  if (event.target.innerText === "🤡 Stupid units") {
    const data = await getWeather(document.getElementById("input").value);
    document.getElementById("degree").innerText = data.current.temp_f;
    document.getElementById("degreeUnit").innerText = "°F";
    document.getElementById("windSpeed").innerText = data.current.wind_mph;
    document.getElementById("windUnit").innerText = "MpH";
    event.target.innerText = "👨🏻‍🔬 Smart units";
  } else {
    const data = await getWeather(document.getElementById("input").value);
    document.getElementById("degree").innerText = data.current.temp_c;
    document.getElementById("degreeUnit").innerText = "°C";
    document.getElementById("windSpeed").innerText = data.current.wind_kph;
    document.getElementById("windUnit").innerText = "KpH";
    event.target.innerText = "🤡 Stupid units";
  }
});

fetchAndFill("kuala lumpur");
