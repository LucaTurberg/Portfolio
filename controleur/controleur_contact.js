export async function controleurAccueil() {
    const app = document.getElementById('app');

    try {
        // Charger les vues
        const entete = await fetch('./vue/vue_entete.html').then(res => res.text());
        const accueil = await fetch('./vue/vue_contact.html').then(res => res.text());
        const pied = await fetch('./vue/vue_pied.html').then(res => res.text());

        // Injection dans la page
        app.innerHTML = entete + accueil + pied;

    } catch (error) {
        app.innerHTML = "<p>Erreur de chargement des vues</p>";
        console.error(error);
    }
}
