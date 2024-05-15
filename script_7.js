function acneBot() {
    const message = prompt("Tu veux parler à l'Acné-Bot ?");

    if (!message || message.trim() === '') {
        console.log("t'es en PLS ?");
        return;
    }

    if (message.endsWith("?")) {
        console.log("Ouais Ouais...");
        return;
    }

    if (message === message.toUpperCase()) {
        console.log("Pwa, calme-toi...");
        return;
    }

    if (message.toLowerCase().includes("fortnite")) {
        console.log("on s' fait une partie soum-soum ?");
        return;
    }

    console.log("balek.");
}

acneBot();
