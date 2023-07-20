/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  setInterval(() => {
    let cardSymbol = generateRandomSymbol();
    let symbolTop = document.querySelector(".symbol-top");
    symbolTop.innerHTML = cardSymbol;

    document.querySelector(".number").innerHTML = generateRandomNumber();
    let symbolFooter = document.querySelector(".symbol-footer");
    symbolFooter.innerHTML = cardSymbol;
    if (cardSymbol == "♦" || cardSymbol == "♥") {
      symbolTop.style.color = "red";
      symbolFooter.style.color = "red";
    } else {
      symbolTop.style.color = "black";
      symbolFooter.style.color = "black";
    }
  }, 5000);
};
let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberIndex = Math.floor(Math.random() * number.length);

  return number[numberIndex];
};

let generateRandomSymbol = () => {
  let symbol = ["♦", "♥", "♠", "♣"];

  let symbolIndex = Math.floor(Math.random() * symbol.length);

  return symbol[symbolIndex];
};
