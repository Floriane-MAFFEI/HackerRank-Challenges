/**
 * HackerRank – 30 Days of Code
 * Day 3 – Intro to Conditional Statements
 * Difficulty: Easy
 *
 * Objectif :
 * Déterminer si un nombre entier N est "Weird" ou "Not Weird"
 * en fonction de sa parité et de son intervalle de valeurs.
 *
 * Règles :
 * - Si N est impair → "Weird"
 * - Si N est pair et compris entre 2 et 5 → "Not Weird"
 * - Si N est pair et compris entre 6 et 20 → "Weird"
 * - Si N est pair et strictement supérieur à 20 → "Not Weird"
 *
 * Problème reformulé :
 * 1) Lire un entier depuis l’entrée standard
 * 2) Tester l'entier avec l’opérateur modulo (%)
 * 3) Appliquer les conditions dans l’ordre logique
 * 4) Afficher le résultat correspondant
 *
 * Raisonnement :
 * - Le test d’impair est prioritaire
 * - L’ordre des conditions évite les conflits logiques
 * - console.log() affiche exactement une ligne comme attendu
 *
 */

function main() {
  const N = parseInt(readLine().trim(), 10);

  if (N % 2 !== 0) {
    console.log("Weird");
  } else if (N >= 2 && N <= 5) {
    console.log("Not Weird");
  } else if (N >= 6 && N <= 20) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}
