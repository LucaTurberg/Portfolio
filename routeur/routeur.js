function chargerControleur(nom) {

    const script = document.createElement('script');

    script.src = `./controleur/${nom}.js`;

    script.onload = () => {

        const nomFonction =
            "controleur" + nom.replace("controleur_", "")
                              .charAt(0).toUpperCase()
            + nom.replace("controleur_", "").slice(1);

        if (typeof window[nomFonction] === "function") {
            window[nomFonction]();
        } else {
            document.getElementById('app').innerHTML =
                "<h1>Erreur contrôleur</h1>";
        }
    };

    document.body.appendChild(script);
}


// ROUTING
function router() {

    let hash = window.location.hash.replace("#", "");

    if (hash === "") hash = "bienvenue";

    chargerControleur("controleur_" + hash);
}


// écoute changement URL
window.addEventListener("hashchange", router);

// lancement initial
router();
