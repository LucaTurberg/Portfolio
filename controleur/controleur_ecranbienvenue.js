function controleurEcranbienvenue() {
    fetch('./vue/vue_ecran_bienvenue.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;

            document.getElementById('bienvenue')
                .addEventListener('click', () => {
                    window.location.hash = "accueil";
                });
        });
}
