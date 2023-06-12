"use strict";

let postNumbers = [];

let citizens = [];

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  postNumbers = await fetchJsonData();
  console.log(postNumbers);
  showPostNumbers(postNumbers);
  document.querySelector("#address-form").addEventListener("submit", addNewObjectToArray);
}

async function fetchJsonData() {
  const response = await fetch("postnumre.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showPostNumbers(postNumberList) {
  for (const postNumber of postNumberList) {
    const postNumberHtml = /*html*/ `<p>${postNumber.postnr} - ${postNumber.by}</p>`;
    document.querySelector("body").insertAdjacentHTML("beforeend", postNumberHtml);
  }
}

function addNewObjectToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.navn.value;
  const address = form.adresse.value;
  const postNumber = form.postnr.value;
  const city = form.by.value;
  const email = form.email.value;
  const newsletter = form.nyhedsbrev.checked;
  console.log(newsletter);
  const newCitizen = createCitizen(name, address, postNumber, city, email, newsletter);
  console.log(newCitizen);
  citizens.push(newCitizen);
  console.log(citizens);
  form.reset();
  showCitizens(citizens);
}

function createCitizen(name, address, postNumber, city, email, newsletter) {
  const citizen = {
    name: name,
    address: address,
    postNumber: postNumber,
    city: city,
    email: email,
    newsletter: newsletter,
  };
  return citizen;
}

function showCitizens(citizenList) {
    // document.querySelector("body").innerHTML = "";
  for (const citizen of citizenList) {
    const citizenHtml = /*html*/ `<p>${citizen.name} - ${citizen.address} - ${citizen.postNumber} - ${citizen.city} - ${citizen.email} - ${citizen.newsletter}</p>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", citizenHtml);
  }
}
