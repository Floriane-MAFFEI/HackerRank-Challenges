/**
 * HackerRank – SQL
 * Query: Japanese Cities' Attributes
 * Difficulty: Easy
 *
 * Objectif :
 * Récupérer tous les attributs (= toutes les colonnes) pour toutes
 * les villes situées au Japon dans la table CITY.
 *
 * Problème reformulé :
 * 1) Utiliser la table CITY
 * 2) Sélectionner tous les attributs avec SELECT *
 * 3) Filtrer les lignes où COUNTRYCODE = 'JPN'
 *
 * Raisonnement :
 * - Chaque colonne de la table correspond à un attribut (id, name, countrycode, district, population)
 * - SELECT * permet de récupérer tous les attributs pour chaque ligne
 * - WHERE COUNTRYCODE = 'JPN' filtre uniquement les villes japonaises
 *
 */

SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';
