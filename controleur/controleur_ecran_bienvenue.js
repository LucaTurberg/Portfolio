function controleurEcranBienvenue() {
    const app = document.getElementById('app');

    // Charger la vue
    fetch('./vue/vue_ecran_bienvenue.html')
        .then(res => res.text())
        .then(html => {
            app.innerHTML = html;

            // Animation clignotante du texte
            const p = app.querySelector('p');
            p.style.animation = "blink 1s infinite";
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);

            // Au clic n'importe où, passer à l'accueil
            app.querySelector('#bienvenue').addEventListener('click', () => {
                controleurAccueil();
            }, { once: true });
        });
}
