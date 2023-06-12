"use strict";

let tickets = [];

window.addEventListener("load", start);

async function start() {
    console.log("JS kører");
    tickets = await fetchJsonData();
    console.log(tickets);
    showTickets(tickets);
}

async function fetchJsonData() {
    const response = await fetch("tickets.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showTickets(ticketList) {
  for (const ticket of ticketList) {
    const ticketHtml =
      /*html*/
      `<article>
                    <h3>${ticket.eventName}</h3>
                    <p class= 'ticketid'>${ticket.id}</p>
                    <button>Use</button>
                </article>`;
    document.querySelector("#tickets-list").insertAdjacentHTML("beforeend", ticketHtml);
  }
}