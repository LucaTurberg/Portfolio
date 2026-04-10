class Controleur_Accueil() {
  async chargerAccueil() {
    const [entete, accueil, pied] = await Promise.all([
      fetch("Vue/Vue_Entete.html").then((r) => r.text()),
      fetch("Vue/Vue_Accueil.html").then((r) => r.text()),
      fetch("Vue/Vue_Pied.html").then((r) => r.text()),
    ]);

    document.innerHTML = entete + accueil + pied;
  }
}
