class Controleur_EcranBienvenue {
  async chargerEcranBienvenue() {
    try {
      const response = await fetch("Vue/Vue_EcranBienvenue.html");
      const html = await response.text();


    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
