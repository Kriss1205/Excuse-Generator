/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Raze", "Killjoy", "Phoenix", "Yoru"];
  let action = [
    "broke down",
    "has a flat",
    "ran out of gas",
    "got into an accident"
  ];
  let where = ["in the parking lot", "on the palmetto", "around the corner"];
  let when = [
    "before work",
    "before class",
    "after errands",
    "during my lunch",
    "leaving my house"
  ];

  function runningLate() {
    document.getElementById("excuse").innerHTML =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * action.length)] +
      " " +
      where[Math.floor(Math.random() * where.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
  }
  document.getElementById("btn").addEventListener("click", runningLate);
};
