async function getWeather(place) {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=26020170b1344b12b4f190438232012&q=${place}`,
  );
  const dataBody = await data.json();
  console.log(dataBody);
}

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const place = submitBtn.previousElementSibling.value;
  getWeather(place);
});
