class Controleur_Accueil {
  async chargerAccueil() {
    try {
      const [entete, accueil, pied] = await Promise.all([
        fetch("Vue/Vue_Entete.html").then((r) => r.text()),
        fetch("Vue/Vue_Accueil.html").then((r) => r.text()),
        fetch("Vue/Vue_Pied.html").then((r) => r.text()),
      ]);

      const html = entete + accueil + pied;

      document.open();
      document.write(html);
      document.close();

      // 👉 Affiche la page une fois tout chargé
      document.body.classList.add("loaded");

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
