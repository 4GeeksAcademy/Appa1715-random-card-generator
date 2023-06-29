/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generateExcuse = () => {
    let symbol = ["♦", "♥", "♠", "♣"];
    let symbolIndex = Math.floor(Math.random() * symbol.length);

    return symbol[symbolIndex];
  };
};
