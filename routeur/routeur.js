function chargerControleur(nom) {

    const script = document.createElement('script');

    script.src = `./controleur/${nom}.js`;

    script.onload = () => {

        // transforme "controleur_ecranbienvenue" → "controleurEcranbienvenue"
        const base = nom.replace("controleur_", "");
        const nomFonction =
            "controleur" + base.charAt(0).toUpperCase() + base.slice(1);

        if (typeof window[nomFonction] === "function") {
            window[nomFonction]();
        } else {
            document.getElementById('app').innerHTML =
                "<h1>Erreur : fonction non trouvée</h1>";
        }
    };

    document.body.appendChild(script);
}


// ROUTER
function router() {

    let hash = window.location.hash.replace("#", "");

    // page par défaut
    if (hash === "") hash = "ecranbienvenue";

    chargerControleur("controleur_" + hash);
}


// écoute changement URL
window.addEventListener("hashchange", router);

// lancement initial
router();
