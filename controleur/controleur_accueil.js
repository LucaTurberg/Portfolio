function controleurAccueil() {
    const app = document.getElementById('app');

    // On récupère plusieurs fragments comme en PHP include
    Promise.all([
        fetch('./vue/vue_entete.html').then(r => r.text()),
        fetch('./vue/vue_accueil.html').then(r => r.text()),
        fetch('./vue/vue_pied.html').then(r => r.text())
    ])
    .then(([entete, contenu, pied]) => {
        // On injecte le tout dans #app
        app.innerHTML = entete + contenu + pied;
    })
    .catch(err => {
        console.error("Erreur lors du chargement des vues :", err);
        app.innerHTML = "<p>Impossible de charger la page d'accueil.</p>";
    });
}
