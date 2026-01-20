/**
 * HackerRank – Hello, World.
 * Difficulty: Easy
 *
 * Objectif :
 * Lire une ligne d’entrée depuis stdin, afficher "Hello, World."
 * puis afficher la valeur reçue.
 *
 * Problème reformulé :
 * 1) Lire une chaîne depuis l’entrée standard
 * 2) Afficher "Hello, World."
 * 3) Afficher la même chaîne lue en entrée
 *
 * Raisonnement :
 * - La fonction reçoit l’entrée automatiquement via un paramètre
 * - Utiliser console.log() pour afficher les lignes dans l’ordre
 *
 */

function processData(inputString) {
  // Print the first required line
  console.log("Hello, World.");

  // Print the input string on the second line
  console.log(inputString);
}
