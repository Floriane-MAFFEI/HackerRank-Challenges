/**
 * HackerRank – SQL
 * Query: Weather Observation Station 1
 * Difficulty: Easy
 *
 * Objectif :
 * Afficher la liste des villes (CITY) ainsi que leurs États associés (STATE)
 * à partir de la table STATION.
 *
 * Problème reformulé :
 * 1) Utiliser la table STATION
 * 2) Sélectionner uniquement les colonnes CITY et STATE
 * 3) Aucun filtre ni tri n’est requis
 *
 * Raisonnement :
 * - SELECT permet de choisir précisément les colonnes à afficher
 * - CITY et STATE contiennent les informations géographiques textuelles utiles
 * - L’absence de clause WHERE implique la récupération de toutes les lignes
 * - Requête simple, lisible et conforme à l’énoncé
 *
 */

SELECT CITY, STATE
FROM STATION;
