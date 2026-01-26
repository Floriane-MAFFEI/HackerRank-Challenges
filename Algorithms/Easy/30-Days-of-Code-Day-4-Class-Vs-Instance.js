/**
 * HackerRank – 30 Days of Code
 * Day 04 – Class vs. Instance
 * Difficulty: Easy
 *
 * Objectif :
 * Comprendre la différence entre une classe (fonction constructeur)
 * et une instance, en implémentant une classe Person capable de :
 * - gérer un âge valide
 * - évoluer dans le temps
 * - afficher un message adapté à l’âge
 *
 * Problème reformulé :
 * 1) Créer une fonction constructeur Person(initialAge)
 * 2) Si l’âge est négatif :
 *    - afficher un message d’erreur
 *    - forcer l’âge à 0
 * 3) Implémenter deux méthodes :
 *    - amIOld() : affiche un message selon l’âge
 *    - yearPasses() : incrémente l’âge de 1
 * 4) Laisser le code principal tester plusieurs instances
 *
 * Raisonnement :
 * - Une fonction constructeur agit comme une classe
 * - Chaque instance possède son propre état (this.age)
 * - Les méthodes permettent d’agir sur cet état
 * - La validation des données se fait dans le constructeur
 *
 */

/* ===== Code fourni par HackerRank pour la gestion de stdin ===== */

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = [];
let input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/* ===== Implémentation de la classe Person ===== */

function Person(initialAge) {
  // Validation de l'âge
  if (initialAge < 0) {
    this.age = 0;
    console.log("Age is not valid, setting age to 0.");
  } else {
    this.age = initialAge;
  }

  // Méthode : affiche un message selon l'âge
  this.amIOld = function () {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };

  // Méthode : incrémente l'âge d'un an
  this.yearPasses = function () {
    this.age++;
  };
}

/* ===== Code principal de test ===== */

function main() {
  const T = parseInt(readLine(), 10);

  for (let i = 0; i < T; i++) {
    const age = parseInt(readLine(), 10);
    const p = new Person(age);

    p.amIOld();
    for (let j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    console.log("");
  }
}
