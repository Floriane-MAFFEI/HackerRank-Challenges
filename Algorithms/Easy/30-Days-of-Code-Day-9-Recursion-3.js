/**
 * HackerRank – 30 Days of Code
 * Day 9 – Recursion 3
 * Difficulty: Easy
 *
 * Objectif :
 * Implémenter une fonction récursive permettant
 * de calculer la factorielle d’un entier n.
 *
 * Rappel mathématique :
 * n! = n × (n - 1)!
 * avec :
 * 0! = 1
 * 1! = 1
 *
 * Principe de la récursion :
 * - Une fonction s’appelle elle-même
 * - Elle doit impérativement avoir un cas de base
 *   pour éviter une récursion infinie
 *
 */

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    // Cas de base
    if (n === 0 || n === 1) {
        return 1;
    }

    // Appel récursif
    return n * factorial(n - 1);
}
