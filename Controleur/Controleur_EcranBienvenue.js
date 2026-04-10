class Controleur_EcranBienvenue {
    async chargerEcranBienvenue() {
        const res = await fetch("Vue/Vue_EcranBienvenue.html");
        const html = await res.text();

        document.open();
        document.write(html);
        document.close();
    }
