const prompt = require('prompt-sync')()
let nombre = Number(prompt("Entrez un nombre pour la table de multiplication de 1 à 10 :"));
for(let i = 1; i <= 10; i ++){
    let resultat = nombre * i
    console.log(`${nombre} * ${i} = ${resultat}`);
}