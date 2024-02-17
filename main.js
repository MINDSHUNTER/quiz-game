const prompt = require("prompt-sync")();

console.log("🌟🌟🌟Bienvenue dans le Quiz sur JavaScript!🌟🌟🌟 \nTestez vos connaissances en répondant aux questions suivantes.\n Choisissez la meilleure réponse parmi les options fournies. Bonne chance!");
console.log(" Calcul du Score: Chaque réponse correcte vaut 20 points. La note maximale est de 100 points.",
  "🎉🎉🎉 Votre score est calculé en fonction du nombre de réponses correctes. 🎉🎉🎉",
);

console.log("Questions:");
let strQuest = ""
let score = 0;
let correctAnswer = ["c", "a", "c", "b", "c"]
let listAnswer = ["a", "b", "c", "d"]
let questions = [
  "Quel est le résultat de l'expression 3 + 2 + \"7\" en JavaScript?",
  "Comment peut-on itérer sur les propriétés d'un objet en JavaScript?",
  "Quelle méthode est utilisée pour convertir une chaîne de caractères en majuscules en JavaScript?",
  "Quelle est la différence entre == et === en JavaScript?",
  "Quelle méthode est utilisée pour générer un nombre aléatoire entre 0 (inclus) et 1 (exclus) en JavaScript?"
];

let choices = [
  ["a. 12", "b. 327", "c. 57", "d. 6"],
  ["a. for...in loop", "b. forEach loop", "c. for loop", "d. while loop"],
  ["a. toUpperCase()", "b. upperCase()", "c. toUpperCaseCase()", "d. changeCase(\"upper\")"],
  ["a. Aucune différence", "b. == compare la valeur, === compare la valeur et le type", "c. === compare la valeur et le type, == compare la valeur", "d. == compare la référence mémoire, === compare la valeur"],
  ["a. random()", "b. getRandomNumber()", "c. Math.random()", "d. generateRandom()"]
];

for (let i = 0; i < questions.length; i++) {
  console.log((i + 1) + '. ' + questions[i]);
  for (let j = 0; j < choices[i].length; j++) {
    strQuest = strQuest + '   ' + choices[i][j] + "\n"
  }
  console.log(strQuest);
  let userAnswer = prompt("Veuillez choisir la lettre de la réponse correcte (a, b, c , d):");
  console.log(listAnswer.includes(userAnswer));

  while (!listAnswer.includes(userAnswer)) {
    console.log((i + 1) + '. ' + questions[i]);
    console.log(strQuest);
    userAnswer = prompt("Veuillez choisir la lettre de la réponse correcte (a, b, c , d):");
  }
  strQuest = ""

  if (userAnswer === correctAnswer[i]) {
    console.log(" 🎉 Correct! Vous avez gagné 20 points!");
    score += 20;
  } else {
    console.log(` Désolé, la réponse  est incorrecte .`);
  }

}
console.log("votre score finale est : " + score + "points");

console.log("🎉🎉🎉 Félicitations pour avoir terminé le Quiz sur JavaScript! 🎉🎉🎉");