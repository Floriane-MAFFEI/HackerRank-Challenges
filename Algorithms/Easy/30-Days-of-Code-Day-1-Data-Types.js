/**
 * HackerRank – 30 Days of Code
 * Day 1 – Data Types
 * Difficulty: Easy
 *
 * Objectif :
 * Manipuler les types de données de base en JavaScript (int, double, string)
 * à partir de valeurs fournies par HackerRank et de données lues depuis stdin.
 *
 * Problème reformulé :
 * 1) HackerRank fournit trois variables initiales :
 *    - i = 4 (entier)
 *    - d = 4.0 (nombre décimal)
 *    - s = "HackerRank " (chaîne)
 * 2) Créer 3 nouvelles variables
 * 3) Lire trois valeurs depuis l’entrée standard (stdin):
 *    - un entier
 *    - un nombre décimal
 *    - une chaîne de caractères
 * 4) Effectuer les opérations suivantes :
 *    - Additionner les entiers
 *    - Additionner les nombres décimaux (formatés à 1 décimale)
 *    - Concaténer les chaînes
 * 5) Afficher les résultats dans l’ordre demandé
 *
 * Raisonnement :
 * - Les entrées stdin arrivent sous forme de chaînes
 * - Conversion explicite nécessaire :
 *    • parseInt() pour les entiers
 *    • parseFloat() pour les décimaux
 * - Utilisation de toFixed(1) pour respecter le format de sortie
 * - console.log() pour afficher chaque résultat sur une ligne
 *
 */

function processData(input) {
  // Valeurs initiales fournies par HackerRank
    const i = 4;
    const d = 4.0;
    const s = "HackerRank ";

  // Création des nouvelles variables
    var integer;
    var double;
    var sentence;

  // Lecture et conversion des entrées utilisateur
    integer = parseInt(readLine());
    double = parseFloat(readLine());
    sentence = readLine();

  // Affichage des résultats
    console.log(i + integer);
    console.log((d + double).toFixed(1));
    console.log(s + sentence);
}
