function controleurEcranBienvenue() {
    const app = document.getElementById('app');

    // 1. Charger la vue bienvenue
    fetch('./vue/vue_ecran_bienvenue.html')
        .then(res => res.text())
        .then(html => {
            app.innerHTML = html;

            const screen = document.getElementById('bienvenue');
            const text = screen.querySelector('p');

            // 2. animation blink
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);

            text.style.animation = "blink 1s infinite";

            // 3. clic → charger accueil
            screen.addEventListener('click', () => {
                screen.style.opacity = "0";
                screen.style.transition = "0.3s";

                setTimeout(() => {
                    chargerAccueil();
                }, 300);
            }, { once: true });
        });
}


// ============================
// ACCUEIL (toujours dans le même contrôleur)
// ============================
function chargerAccueil() {
    const app = document.getElementById('app');

    Promise.all([
        fetch('./vue/vue_entete.html').then(r => r.text()),
        fetch('./vue/vue_accueil.html').then(r => r.text()),
        fetch('./vue/vue_pied.html').then(r => r.text())
    ])
    .then(([entete, contenu, pied]) => {
        app.innerHTML = entete + contenu + pied;
    });
}
