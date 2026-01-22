/**
 * HackerRank – SQL
 * Query: Japanese Cities' Names
 * Difficulty: Easy
 *
 * Objectif :
 * Afficher uniquement les noms (NAME) de toutes les villes
 * situées au Japon dans la table CITY.
 *
 * Problème reformulé :
 * 1) Utiliser la table CITY
 * 2) Identifier les villes japonaises grâce au code pays 'JPN'
 * 3) Sélectionner uniquement la colonne NAME
 *
 * Raisonnement :
 * - COUNTRYCODE permet d’identifier le pays
 * - WHERE sert à filtrer les lignes correspondant au Japon
 * - SELECT NAME limite l’affichage aux données utiles
 * - Requête de lecture simple et efficace
 *
 */

SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';
