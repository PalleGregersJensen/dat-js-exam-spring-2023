"use strict";

const athletes = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  console.log(athletes);
  document.querySelector("#create-athlete-form").addEventListener("submit", addObjectToArray);
}

function addObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const topSpeed = Number(form.topSpeed.value);
  const newAthlete = createAthlete(name, topSpeed);
  console.log(newAthlete);
  athletes.push(newAthlete);
  console.log(athletes);
  form.reset();
  showAthletes(athletes);
}

function createAthlete(name, topSpeed) {
  const athlete = {
    name: name,
    topSpeed: topSpeed,
  };
  return athlete;
}

function showAthletes(athleteList) {
    document.querySelector("#athletes-list").innerHTML = "";
  for (const athlete of athleteList) {
    const athleteHtml = /*html*/ `<li>Name: ${athlete.name} - Top speed: ${athlete.topSpeed}</li>`;
    document.querySelector("#athletes-list").insertAdjacentHTML("beforeend", athleteHtml);
  }
}
