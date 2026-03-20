"use strict";
const ranColors = ["#e03131", "#f03e3e", "#fa5252", "#ff6b6b"];
const sayingYes = document.querySelector(".saying-yes");
const sayingNo = document.querySelector(".saying-no");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const card = document.querySelector(".love-card");
let currentFont = 24;
sayingNo.addEventListener("click", () => {
  sayingNo.style.position = "absolute";
  heading.textContent = "w3lach !!!!";
  sayingNo.style.top = `${Math.trunc(Math.random() * 800)}px`;
  sayingNo.style.left = `${Math.trunc(Math.random() * 800)}px`;
  body.style.backgroundColor =
    ranColors[Math.trunc(Math.random() * ranColors.length)];
  sayingYes.style.fontSize = `${currentFont + Math.trunc(Math.random() * 40)}px`;
  currentFont = Number(sayingYes.style.fontSize.split("px")[0]);
  sayingYes.classList.add("center");
});
sayingYes.addEventListener("click", () => {
  heading.textContent = "Ary bossa😘😘";
  card.innerHTML = "";
  const html = `
    <h1 class="heading">ary bossa😘😘</h1>
  <img src="https://c.tenor.com/qviRNgLXxbUAAAAd/tenor.gif" alt="" class="hidden" hidden />
  `;
  document.querySelector(".love-card").innerHTML = html;
  document.querySelector("img.hidden").hidden = false;
});
