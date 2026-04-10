class Controleur_EcranBienvenue {
  async chargerEcranBienvenue() {
    try {
      const response = await fetch("Vue/Vue_EcranBienvenue.html");
      const html = await response.text();

      document.getElementById("app").innerHTML = html;

      // Ajout de la classe sur le conteneur
      document.getElementById("app").classList.add("loaded");

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
