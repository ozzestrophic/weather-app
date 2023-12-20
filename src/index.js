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

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const place = submitBtn.previousElementSibling.value;
  const data = await getWeather(place);
  fillData(data);
});

function fillData(data) {
  document.getElementById("condition").innerText = data.current.condition.text;
  document.getElementById("city").innerText = data.location.name;
  document.getElementById("country").innerText = data.location.country;
  document.getElementById("icon").src = data.current.condition.icon;
  document.getElementById("degree").innerText = data.current.temp_c;
  document.getElementById("humidity").innerText = data.current.humidity;
  document.getElementById("windSpeed").innerText = data.current.wind_kph;
}

const toggleUnit = document.getElementById("toggleUnit");
toggleUnit.addEventListener("click", function (event) {
  if (event.target.innerText === "Stupid units") {
    event.target.innerText = "Smart units";
  } else {
    event.target.innerText = "Stupid units";
  }
});
