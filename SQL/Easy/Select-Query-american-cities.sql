/**
 * HackerRank – SQL
 * Query: Select Query (American Cities)
 * Difficulty: Easy
 *
 * Objectif :
 * Sélectionner uniquement le nom (NAME) des villes situées
 * aux États-Unis (COUNTRYCODE = 'USA') dont la population
 * est strictement supérieure à 120000 habitants.
 *
 * Problème reformulé :
 * 1) Utiliser la table CITY
 * 2) Afficher uniquement la colonne NAME
 * 3) Filtrer les villes :
 *    - POPULATION > 120000
 *    - COUNTRYCODE = 'USA'
 *
 * Raisonnement :
 * - SELECT ciblé pour ne récupérer que la colonne nécessaire
 * - WHERE permet de filtrer les lignes
 * - AND combine plusieurs conditions
 *
 */

SELECT NAME
FROM CITY
WHERE POPULATION > 120000
  AND COUNTRYCODE = 'USA';
