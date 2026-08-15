// Main app code:
// =========================

import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.js";
import { getUsersNames } from "./utils.js";
import secretString from "./constants.js";

document.querySelector("#app").innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
  <form>
      <input type="text" class="nameInput" placeholder="Type your name.." />
      <br />
      <button class="nameButton">Add Name</button>
    </form>
</section>

<div class="ticks"></div>`;

setupCounter(document.querySelector("#counter"));

const username = getUsersNames([{ id: "1", name: "jack" }]);
console.log(username, secretString);

// =====================

// Fetching posts from db.json task

const nameInput = document.querySelector(".nameInput");
const nameButton = document.querySelector(".nameButton");

const loadPosts = async () => {
  try {
    const response = await fetch("http://localhost:3004/posts");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

const result = await loadPosts();
console.log(result);

nameButton.addEventListener("click", async () => {
  if (nameInput.value === "") {
    return;
  }

  await fetch("http://localhost:3004/posts", {
    method: "POST",
    body: JSON.stringify({ title: nameInput.value }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  nameInput.value = "";
  console.log("Added! ", nameInput.value);
});

// =====================
