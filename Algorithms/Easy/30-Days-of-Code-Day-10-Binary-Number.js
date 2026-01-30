/**
 * HackerRank – 30 Days of Code
 * Day 10 – Binary Numbers
 * Difficulty: Easy
 *
 * Objectif :
 * Convertir un entier en binaire (base 2)
 * puis déterminer le nombre maximal de
 * 1 consécutifs dans sa représentation binaire.
 *
 * Exemple :
 * n = 13
 * binaire = 1101
 * → maximum de 1 consécutifs = 2
 *
 * Concepts abordés :
 * - Conversion de base (10 → 2)
 * - Manipulation de chaînes de caractères
 * - Recherche de séquences
 *
 */

/*
 * The function is expected to print an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function main() {
    // Lecture de l'entier depuis l'entrée standard
    const n = parseInt(readLine().trim(), 10);

    // Conversion du nombre en binaire
    const binary = n.toString(2);

    // Découpage sur '0' pour isoler les groupes de '1'
    const maxConsecutiveOnes = Math.max(
        ...binary.split('0').map(group => group.length)
    );

    // Affichage du résultat
    console.log(maxConsecutiveOnes);
}
