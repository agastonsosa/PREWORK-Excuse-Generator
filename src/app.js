/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = generateExcuse();
  });
  console.log("Welcome excuse-seeker!");
};
let generateExcuse = () => {
  let pronoun = ["A big fat", "A disgusting", "An agry", "A psycho"];
  let subject = ["rat", "beaver", "dog", "cat"];
  let action = ["has chewed", " has eaten", "has pooped", "has scratched"];
  let what = ["my homework", "my car keys", "my shoes", ""];
  let where = [
    "back on the streets",
    "back in the alley",
    "in my house",
    "in my friend's house"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whaIndex = Math.floor(Math.random() * what.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    what[whaIndex] +
    " " +
    where[wheIndex]
  );
};
