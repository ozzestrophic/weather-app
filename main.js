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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx3RkFBd0YsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocGxhY2UpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTI2MDIwMTcwYjEzNDRiMTJiNGYxOTA0MzgyMzIwMTImcT0ke3BsYWNlfWAsXG4gICk7XG4gIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICBjb25zdCBkYXRhQm9keSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGFCb2R5KTtcbiAgICByZXR1cm4gZGF0YUJvZHk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJDb3VsZG4ndCBmaW5kIHRoaXMgbG9jYXRpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbERhdGEoZGF0YSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvblwiKS5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKS5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRyeVwiKS5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKS5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlXCIpLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIikuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZFwiKS5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kRmlsbChwbGFjZSkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihwbGFjZSk7XG4gIGZpbGxEYXRhKGRhdGEpO1xufVxuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGxhY2UgPSBzdWJtaXRCdG4ucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZTtcbiAgZmV0Y2hBbmRGaWxsKHBsYWNlKTtcbn0pO1xuXG4vLyB0b2dnbGUgc3R1cGlkIHVuaXRzXG5jb25zdCB0b2dnbGVVbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVVbml0XCIpO1xudG9nZ2xlVW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuaW5uZXJUZXh0ID09PSBcIvCfpKEgU3R1cGlkIHVuaXRzXCIpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpLnZhbHVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVwiKS5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9mO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlVW5pdFwiKS5pbm5lclRleHQgPSBcIsKwRlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFNwZWVkXCIpLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX21waDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRVbml0XCIpLmlubmVyVGV4dCA9IFwiTXBIXCI7XG4gICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwi8J+RqPCfj7vigI3wn5SsIFNtYXJ0IHVuaXRzXCI7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKS52YWx1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdyZWVcIikuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVVuaXRcIikuaW5uZXJUZXh0ID0gXCLCsENcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZFwiKS5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGg7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kVW5pdFwiKS5pbm5lclRleHQgPSBcIktwSFwiO1xuICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBcIvCfpKEgU3R1cGlkIHVuaXRzXCI7XG4gIH1cbn0pO1xuXG5mZXRjaEFuZEZpbGwoXCJrdWFsYSBsdW1wdXJcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=