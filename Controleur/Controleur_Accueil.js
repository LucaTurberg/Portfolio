class Controleur_Accueil {
  async chargerAccueil() {
    try {
      const [entete, accueil, pied] = await Promise.all([
        fetch("Vue/Vue_Entete.html").then((r) => r.text()),
        fetch("Vue/Vue_Accueil.html").then((r) => r.text()),
        fetch("Vue/Vue_Pied.html").then((r) => r.text()),
      ]);

      // Assemblage du HTML
      const html = entete + accueil + pied;

      document.open();
      document.write(html);
      document.close();

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
