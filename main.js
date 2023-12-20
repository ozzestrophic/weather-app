/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx3RkFBd0YsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBsYWNlKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yNjAyMDE3MGIxMzQ0YjEyYjRmMTkwNDM4MjMyMDEyJnE9JHtwbGFjZX1gLFxuICApO1xuICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgY29uc3QgZGF0YUJvZHkgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhQm9keSk7XG4gICAgcmV0dXJuIGRhdGFCb2R5O1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiQ291bGRuJ3QgZmluZCB0aGlzIGxvY2F0aW9uXCIpO1xuICB9XG59XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwbGFjZSA9IHN1Ym1pdEJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihwbGFjZSk7XG4gIGZpbGxEYXRhKGRhdGEpO1xufSk7XG5cbmZ1bmN0aW9uIGZpbGxEYXRhKGRhdGEpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25cIikuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIikuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cnlcIikuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIikuc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVwiKS5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kU3BlZWRcIikuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoO1xufVxuXG5jb25zdCB0b2dnbGVVbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVVbml0XCIpO1xudG9nZ2xlVW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuaW5uZXJUZXh0ID09PSBcIlN0dXBpZCB1bml0c1wiKSB7XG4gICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiU21hcnQgdW5pdHNcIjtcbiAgfSBlbHNlIHtcbiAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gXCJTdHVwaWQgdW5pdHNcIjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=