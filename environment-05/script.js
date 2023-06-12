"use strict";

let runners = [];

window.addEventListener("load", start);

async function start() {
    console.log("JS kører");
    runners = await getJsonData();
    console.log(runners);
    sortByTime();
    const firstPlace = runners[0];

    console.log(firstPlace);
    document.querySelector("#gold-name").textContent = `${firstPlace.name}`; 
    document.querySelector("#gold-time").textContent = `${firstPlace.time.toFixed(2)}`;
    const secondPlace = runners[1];
    console.log(secondPlace);
    document.querySelector("#silver-name").textContent = `${secondPlace.name}`;
    document.querySelector("#silver-time").textContent = `${secondPlace.time.toFixed(2)}`;
    const thirdPlace = runners[2];
    console.log(thirdPlace);
    document.querySelector("#bronze-name").textContent = `${thirdPlace.name}`;
    document.querySelector("#bronze-time").textContent = `${thirdPlace.time.toFixed(2)}`;
    const runnerUps = runners.slice(3);
    console.log(runnerUps);
    showRunners(runnerUps);
}

async function getJsonData() {
    const response = await fetch("runners.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showRunners(runnerList) {
  for (const runner of runnerList) {
    const runnerHtml = /*html*/ `<li>${runner.name} - ${runner.time.toFixed(2)}</li>`;
    document.querySelector("#runnerups-list").insertAdjacentHTML("beforeend", runnerHtml);
  }
}

function sortByTime() {
    runners.sort((a, b) => a.time - b.time);
}