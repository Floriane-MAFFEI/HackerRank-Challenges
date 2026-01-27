/**
 * HackerRank – 30 Days of Code
 * Day 7 – Arrays
 * Difficulty: Easy
 *
 * Objectif :
 * Lire un tableau d’entiers et afficher ses éléments
 * dans l’ordre inverse, séparés par des espaces.
 *
 * Problème reformulé :
 * 1) Lire la taille du tableau n (non utilisée directement)
 * 2) Lire la ligne contenant n entiers
 * 3) Convertir la ligne en tableau d’entiers
 * 4) Inverser le tableau
 * 5) Afficher les éléments sur une seule ligne
 *
 * Raisonnement :
 * - split(' ') découpe la chaîne en éléments
 * - map() convertit chaque élément en nombre
 * - reverse() inverse l’ordre du tableau
 * - join(" ") permet de formater la sortie
 * - console.log() affiche le résultat final
 *
 */

/* ===== Gestion de l'entrée standard (HackerRank) ===== */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* ===== Solution de la fonction main ===== */

function main() {
  const n = parseInt(readLine().trim(), 10); // taille du tableau

  const arr = readLine()
    .trim()
    .split(' ')
    .map(Number);

  console.log(arr.reverse().join(" "));
}
