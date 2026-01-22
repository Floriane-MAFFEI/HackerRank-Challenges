/**
 * HackerRank – 30 Days of Code
 * Day 2 – Operators
 * Difficulty: Easy
 *
 * Objectif :
 * Calculer le coût total d’un repas en prenant en compte :
 * - le prix du repas (meal_cost),
 * - le pourcentage du pourboire (tip_percent),
 * - le pourcentage de la taxe (tax_percent),
 * puis arrondir le résultat à l’entier le plus proche.
 *
 * Problème reformulé :
 * 1) Lire trois valeurs numériques :
 *    - meal_cost (double)
 *    - tip_percent (entier)
 *    - tax_percent (entier)
 * 2) Calculer :
 *    - le montant du pourboire
 *    - le montant de la taxe
 * 3) Additionner le tout
 * 4) Arrondir le résultat final
 * 5) Afficher le coût total
 *
 * Raisonnement :
 * - Les pourcentages doivent être convertis en montants réels
 * - Les calculs utilisent des nombres flottants (double)
 * - Math.round() permet d’arrondir à l’entier le plus proche
 * - console.log() affiche le résultat attendu par HackerRank
 *
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Calcul du pourboire
  const tip = meal_cost * tip_percent / 100;

  // Calcul de la taxe
  const tax = meal_cost * tax_percent / 100;

  // Calcul du total arrondi
  const totalCost = Math.round(meal_cost + tip + tax);

  // Affichage du résultat
  console.log(totalCost);
}
