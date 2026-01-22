/**
 * HackerRank – SQL
 * Query: Weather Observation Station 2
 * Difficulty: Easy
 *
 * Objectif :
 * Calculer :
 * - la somme de toutes les latitudes (LAT_N)
 * - la somme de toutes les longitudes (LONG_W)
 * puis arrondir chaque résultat à 2 décimales.
 *
 * Problème reformulé :
 * 1) Utiliser la table STATION
 * 2) Additionner toutes les valeurs de LAT_N
 * 3) Additionner toutes les valeurs de LONG_W
 * 4) Arrondir les deux résultats à 2 chiffres après la virgule
 * 5) Retourner les résultats sur une seule ligne
 *
 * Raisonnement :
 * - SUM() est une fonction d’agrégation qui calcule un total
 * - ROUND(valeur, 2) permet de formater le résultat à 2 décimales
 * - Sans GROUP BY, l’agrégation s’applique à l’ensemble de la table
 * - Le calcul est effectué directement côté base de données
 *
 */

SELECT
  ROUND(SUM(LAT_N), 2),
  ROUND(SUM(LONG_W), 2)
FROM STATION;
