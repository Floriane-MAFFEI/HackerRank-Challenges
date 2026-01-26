/**
 * HackerRank – 30 Days of Code
 * Day 5 – Loops
 * Difficulty: Easy
 *
 * Objectif :
 * Afficher les 10 premiers multiples d’un entier donné n
 * sous la forme :
 * n x i = résultat
 * où i varie de 1 à 10.
 *
 * Problème reformulé :
 * 1) Lire un entier n depuis l’entrée standard
 * 2) Utiliser une boucle for de 1 à 10
 * 3) Calculer n * i à chaque itération
 * 4) Afficher le résultat avec le format exact demandé
 *
 * Raisonnement :
 * - Une boucle for permet de répéter une action un nombre fixe de fois
 * - Le calcul n * i est effectué à chaque itération
 * - Les template literals facilitent la mise en forme des chaînes
 * - console.log() affiche chaque ligne de la table de multiplication
 *
 */

function main() {
  const n = parseInt(readLine().trim(), 10);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
