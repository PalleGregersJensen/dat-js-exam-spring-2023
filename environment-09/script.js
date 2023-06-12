"use strict";

let posts = [];

window.addEventListener("load", start);

async function start() {
    console.log("JS kører");
    posts = await fetchJsonData();
    console.log(posts);
    showPosts(posts);
    document.querySelector("#sortorder").addEventListener("change", handleSortBy);
    
}

async function fetchJsonData() {
    const response = await fetch("posts.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

function showPosts(postList) {
    document.querySelector("#posts-list").innerHTML = "";
  for (const post of postList) {
    const postHtml =
      /*html*/
      `<article>
                    <img src=${post.image} alt="post.caption" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>`;
    document.querySelector("#posts-list").insertAdjacentHTML("beforeend", postHtml);
  }
}

function handleSortBy() {
  const sortorder = document.querySelector("#sortorder").value;
  console.log(sortorder);
  if (sortorder === "ascending") {
    posts.sort((a, b) => a.likes - b.likes);
    console.log("læses dette?");
    showPosts(posts);
  } else if (sortorder === "descending") {
    posts.sort((a, b) => b.likes - a.likes);
    console.log("læses dette?");
    showPosts(posts);
  }
}