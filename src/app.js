/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector('.card')classList.add('heart'); 
  setTimeout(() => {
    document.querySelector('.card')classList.remove('heart'); 
    document.querySelector('.card')classList.add('spade'); 
  }, 1000);
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
  let symbolIndex = Math.floor(Math.random() * symbol.length);
  let numberIndex = Math.floor(Math.random() * number.length);


  return symbol[symbolIndex];
};

let generateRandomSymbol = () => {
  let symbol = ["♦", "♥", "♠", "♣"];
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
  let symbolIndex = Math.floor(Math.random() * symbol.length);
  let numberIndex = Math.floor(Math.random() * number.length);


  return symbol[symbolIndex];
};
let symbolIndex = Math.floor(Math.random() * symbol.length);
