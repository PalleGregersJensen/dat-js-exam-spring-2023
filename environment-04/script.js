"use strict";

const events = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(events);
  document.querySelector("#create-event-form").addEventListener("submit", addObjectToArray);
}

function addObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const description = form.description.value;
  const date = form.date.value;
  const newEvent = createEvent(title, description, date);
  console.log(newEvent);
  events.push(newEvent);
  console.log(events);
  form.reset();
  document.querySelector("#events-list").innerHTML = "";
  events.forEach(showEvents);
}

function createEvent(title, description, date) {
  const event = {
    title: title,
    description: description,
    date: date,
  };
  return event;
}

function showEvents(event) {
  const eventHtml = /*html*/ `<li>${event.date} - ${event.title} - ${event.description}</li>`;
  document.querySelector("#events-list").insertAdjacentHTML("beforeend", eventHtml);
}
