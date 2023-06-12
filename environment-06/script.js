"use strict";

const runners = [
  { name: "Torben", time: 55.05 },
  { name: "Niels", time: 56.59 },
  { name: "Anders", time: 57.46 },
];

window.addEventListener("load", start);

function start() {
    console.log(runners);
    console.log("JS kører");
    addRunnerObjectToArray("Søren", 50.44)
}

function addRunnerObjectToArray(name, time) {
    const newRunner = createRunnerObject(name, time);
    runners.push(newRunner);
    sortByTime()
    console.log(runners);
    const firstPlace = runners[0];
    console.log(firstPlace);
    document.querySelector("#gold-name").textContent = firstPlace.name
    document.querySelector("#gold-time").textContent = firstPlace.time;
    const secondPlace = runners[1];
    console.log(secondPlace);
    document.querySelector("#silver-name").textContent = secondPlace.name;
    document.querySelector("#silver-time").textContent = secondPlace.time;
    const thirdPlace = runners[2];
    console.log(thirdPlace);
    document.querySelector("#bronze-name").textContent = thirdPlace.name;
    document.querySelector("#bronze-time").textContent = thirdPlace.time;
    const runnerUps = runners.slice(3);
    console.log(runnerUps);
    showRunners(runnerUps);
}

function createRunnerObject(name, time) {
    const runner = {
        name: name,
        time: time,
    }
    return runner;
}

function showRunners(runnerList) {
  for (const runner of runnerList) {
    const runnerHtml = /*html*/ `<li>${runner.name} - ${runner.time}</li>`;
    document.querySelector("#runnerups-list").insertAdjacentHTML("beforeend", runnerHtml);
  }
}

function sortByTime() {
    runners.sort((a, b) => a.time - b.time);
}