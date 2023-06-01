import { events } from "./data.js";

("use strict");

window.addEventListener("load", start);

function start() {
  console.log(events);
  sortByDate();
  events.forEach(showDataFromEventsArray);
  console.log(events);
}

function showDataFromEventsArray(event) {
  const eventsHtml =
    /**/
    `<li>${event.title} - ${event.description} - ${event.date}</li>`;
  document.querySelector("#students-list").insertAdjacentHTML("beforeend", eventsHtml);
}

function sortByDate() {
  events.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}
// localeCompare kunne også fungere til sortering
// const date1 = new Date (event1.date);
// const date 2 = new Date (event2.date);
// console.log(event1);
// console.log(event2)
// return date1.getTime() - date2.getTime();