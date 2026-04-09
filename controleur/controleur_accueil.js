function controleurAccueil() {
    const app = document.getElementById('app');

    // Charger plusieurs vues HTML
    Promise.all([
        fetch('./vue/vue_entete.html').then(r => r.text()),
        fetch('./vue/vue_accueil.html').then(r => r.text()),
        fetch('./vue/vue_pied.html').then(r => r.text())
    ])
    .then(([entete, contenu, pied]) => {
        app.innerHTML = entete + contenu + pied;
    })
    .catch(err => {
        console.error("Erreur lors du chargement des vues :", err);
        app.innerHTML = "<p>Impossible de charger la page d'accueil.</p>";
    });
}
