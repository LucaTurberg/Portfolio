function controleurEcranBienvenue() {

    document.body.innerHTML = "";

    fetch('./vue/vue_ecran_bienvenue.html')
        .then(r => r.text())
        .then(html => {

            document.body.innerHTML = html;

            const screen = document.getElementById('bienvenue');
            const text = screen.querySelector('p');

            // animation blink
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);

            text.style.animation = "blink 1s infinite";

            // clic → charger le JS accueil
            screen.addEventListener('click', () => {

                screen.style.opacity = "0";

                setTimeout(() => {

                    // 🔥 on charge le fichier JS comme PHP include
                    const script = document.createElement('script');
                    script.src = './controleur/controleur_accueil.js';

                    script.onload = () => {
                        controleurAccueil(); // 👈 une fois chargé on appelle
                    };

                    document.body.appendChild(script);

                }, 300);

            }, { once: true });

        });
}
