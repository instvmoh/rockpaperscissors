"use strict";
const choix = ["rock", "paper", "scissors"];
let mesPoints = 0;
let pcPoints = 0;
let monChoix;
let pcChoix;

let jeu = function () {
  monChoix = prompt("Entrez 'pierre', 'papier' ou 'ciseaux'");
  pcChoix = choix[Math.floor(Math.random() * choix.length)];

  if (monChoix.toLowerCase() === pcChoix) {
    console.log("Draw");
  }

  if (monChoix.toLowerCase() === "rock" && pcChoix === "paper") {
    console.log("Perdu");
    pcPoints += 1;
  }

  if (monChoix.toLowerCase() === "rock" && pcChoix === "scissors") {
    console.log("Gagné");
    mesPoints += 1;
  }

  if (monChoix.toLowerCase() === "paper" && pcChoix === "rock") {
    console.log("Gagné");
    mesPoints += 1;
  }

  if (monChoix.toLowerCase() === "paper" && pcChoix === "scissors") {
    console.log("Perdu");
    pcPoints += 1;
  }

  if (monChoix.toLowerCase() === "scissors" && pcChoix === "paper") {
    console.log("Gagné");
    mesPoints += 1;
  }

  if (monChoix.toLowerCase() === "scissors" && pcChoix === "rock") {
    console.log("Perdu");
    pcPoints += 1;
  }

  console.log(`Mes points : ${mesPoints}, Les points du PC : ${pcPoints}`);

  if (
    monChoix.toLowerCase() !== "paper" &&
    monChoix.toLowerCase() !== "scissors" &&
    monChoix.toLowerCase() !== "rock"
  ) {
    monChoix = prompt(
      "Donnée invalide, Entrez 'pierre', 'papier' ou 'ciseaux'"
    );
  }

  if (mesPoints === 5) {
    console.log("Vous avez gagné!");
  } else if (pcPoints === 5) {
    console.log("Vous avez perdu!");
  }
};

while (mesPoints < 5 || pcPoints < 5) {
  jeu();
}
