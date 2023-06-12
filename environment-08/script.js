"use strict";

let posts = [];

window.addEventListener("load", start);

async function start() {
    console.log("JS kører");   
    posts = await getJsonData();
    console.log(posts);
    showPosts(posts)
}

async function getJsonData() {
    const response = await fetch("posts.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data; 
}

function showPosts(postList) {
  for (const post of postList) {
    const postHJtml =
      /*html*/
      `<article>
                    <img src=${post.image} alt="post.caption" />
                    <h2>Caption: ${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>`;
    document.querySelector("#posts-list").insertAdjacentHTML("beforeend", postHJtml);
  }
}