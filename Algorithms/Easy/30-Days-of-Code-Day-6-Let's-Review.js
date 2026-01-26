/**
 * HackerRank – 30 Days of Code
 * Day 6 – Let's Review
 * Difficulty: Easy
 *
 * Objectif :
 * Pour chaque chaîne donnée, afficher :
 * - les caractères situés à des indices pairs
 * - les caractères situés à des indices impairs
 * sur une seule ligne, séparés par un espace.
 *
 * Rappel :
 * - Les chaînes sont indexées à partir de 0
 * - L’indice 0 est donc pair
 *
 * Problème reformulé :
 * 1) Lire l’entrée standard et la découper en lignes
 * 2) Récupérer le nombre de cas de test T
 * 3) Pour chaque chaîne :
 *    - parcourir ses caractères
 *    - séparer les caractères selon la parité de l’indice
 * 4) Afficher le résultat sous la forme :
 *    caractères_pairs + " " + caractères_impairs
 *
 * Raisonnement :
 * - Une boucle permet de parcourir chaque caractère d’une chaîne
 * - L’opérateur modulo (%) permet de tester si un indice est pair ou impair
 * - La concaténation de chaînes permet de construire le résultat final
 * - console.log() affiche une ligne par chaîne
 *
 */

function processData(input) {
  // Découpage de l'entrée en lignes
  const lines = input.trim().split('\n');

  // Nombre de cas de test
  const T = parseInt(lines[0], 10);

  // Traitement de chaque chaîne
  for (let i = 1; i <= T; i++) {
    const s = lines[i];
    let even = "";
    let odd = "";

    // Parcours des caractères de la chaîne
    for (let j = 0; j < s.length; j++) {
      if (j % 2 === 0) {
        even += s[j]; // indice pair
      } else {
        odd += s[j];  // indice impair
      }
    }

    // Affichage du résultat
    console.log(even + " " + odd);
  }
}

/* ===== Gestion de l'entrée standard (HackerRank) ===== */

process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
