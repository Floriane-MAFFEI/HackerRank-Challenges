/**
 * HackerRank – SQL
 * Query: Select By ID
 * Difficulty: Easy
 *
 * Objectif :
 * Récupérer toutes les colonnes pour une ville spécifique
 * de la table CITY en utilisant son identifiant unique (ID = 1661).
 *
 * Problème reformulé :
 * 1) Utiliser la table CITY
 * 2) Filtrer la ligne correspondant à l’ID 1661
 * 3) Sélectionner toutes les colonnes
 *
 * Raisonnement :
 * - SELECT * permet de récupérer toutes les colonnes
 * - WHERE ID = 1661 filtre la ville recherchée
 * - Utile pour interroger des lignes spécifiques par identifiant
 *
 */

SELECT *
FROM CITY
WHERE ID = 1661;
