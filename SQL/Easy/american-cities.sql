/**
 * HackerRank – SQL
 * Query: American Cities with Population > 100000
 * Difficulty: Easy
 *
 * Objectif :
 * Sélectionner toutes les colonnes de la table CITY pour les villes
 * situées aux États-Unis (COUNTRYCODE = 'USA') ayant une population
 * strictement supérieure à 100000.
 *
 * Problème reformulé :
 * 1) Utiliser la table CITY
 * 2) Sélectionner toutes les colonnes
 * 3) Filtrer les lignes où :
 *    - POPULATION > 100000
 *    - COUNTRYCODE = 'USA'
 *
 * Raisonnement :
 * - SELECT * permet de récupérer toutes les colonnes
 * - La clause WHERE sert à filtrer les données
 * - AND permet de combiner plusieurs conditions
 *
 */

SELECT *
FROM CITY
WHERE POPULATION > 100000
  AND COUNTRYCODE = 'USA';
