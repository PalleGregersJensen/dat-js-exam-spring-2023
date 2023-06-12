"use strict";

let posts = [];

window.addEventListener("load", start);

async function start() {
  console.log("JS kører");
  posts = await fetchJsonData();
    console.log(posts);
    showPosts(posts);
}

async function fetchJsonData() {
  const response = await fetch("posts.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

function showPosts(postList) {
  for (const post of postList) {
    const postHtml =
      /*html*/
      `<article>
                    <img src=${post.image} alt="post.caption" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes} </p>
                </article>`;
    document.querySelector("#posts-list").insertAdjacentHTML("beforeend", postHtml);
  }
}
