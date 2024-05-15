let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

etages = parseInt(etages);

if (!isNaN(etages) && etages > 0) {
    for (let i = 1; i <= etages; i++) {
        let ligne = "";
        
        for (let j = 1; j <= etages - i; j++) {
            ligne += " ";
        }
        for (let k = 1; k <= i; k++) {
            ligne += "#";
        }

        console.log(ligne);
    }
} else {
    console.log("Veuillez entrer un nombre valide d'étages.");
}
