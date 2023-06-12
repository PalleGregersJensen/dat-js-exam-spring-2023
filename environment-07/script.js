"use strict";

const rooms = [];

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#create-room-form").addEventListener("submit", addRoomToArray);
}

function addRoomToArray(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const width = Number(form.width.value);
  const length = Number(form.length.value);
  const newRoom = createRoom(name, width, length);
  console.log(newRoom);
  rooms.push(newRoom);
    console.log(rooms);
    showRooms(rooms);
    form.reset();
}

function createRoom(name, width, length) {
  const room = {
    name: name,
    width: width,
    length: length,
    calculatedArea: length * width,
  };
  return room;
}

function showRooms(roomsList) {
    document.querySelector("#rooms-table").innerHTML = "";
  for (const room of roomsList) {
    const roomHtml =
      /*html*/
      `<tr>
                      <td>${room.name}</td>
                      <td>${room.width}</td>
                      <td>${room.length}</td>
                      <td>${room.calculatedArea}</td>
                    <tr>`;
    document.querySelector("#rooms-table").insertAdjacentHTML("beforeend", roomHtml);
  }
}