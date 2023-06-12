import { events } from "./data.js";

("use strict");

window.addEventListener("load", start);

function start() {
    console.log(events);
    sortBydate();
    showEvents(events);
}

function showEvents(eventsList) {
  for (const event of eventsList) {
    const eventHtml = /*html*/ `<li>Title: ${event.title} - Description: ${event.description} - Date: ${event.date} - </li>`;
    document.querySelector("#events-list").insertAdjacentHTML("beforeend", eventHtml);
  }
}

function sortBydate() {
    events.sort((a, b) => a.date.localeCompare(b.date));
}