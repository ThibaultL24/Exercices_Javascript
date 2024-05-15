function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

nombre = parseInt(nombre);

console.log("Le résultat est : " + factorielle(nombre));
