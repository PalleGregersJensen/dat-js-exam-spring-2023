"use strict";

let students = [];

window.addEventListener("load", start);

async function start() {
    console.log("JS kører");
    students = await getJsonData();
    console.log(students);
    showStudents(students);
}

async function getJsonData() {
    const response = await fetch("students.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;

}

function showStudents(studentList) {
  for (const student of studentList) {
    const studentHtml = /*html*/ `<li>Name: ${student.name} - ID: ${student.id} - Enrolled: ${student.enrolled} - Email: ${student.mail} - Semester: ${student.semester}</li>`;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", studentHtml);
  }
}