/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx3RkFBd0YsTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHBsYWNlKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0yNjAyMDE3MGIxMzQ0YjEyYjRmMTkwNDM4MjMyMDEyJnE9JHtwbGFjZX1gLFxuICApO1xuICBjb25zdCBkYXRhQm9keSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zb2xlLmxvZyhkYXRhQm9keSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwbGFjZSA9IHN1Ym1pdEJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlO1xuICBnZXRXZWF0aGVyKHBsYWNlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9