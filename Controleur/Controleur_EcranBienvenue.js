class Controleur_EcranBienvenue {
  async chargerEcranBienvenue() {
    try {
      const response = await fetch("Vue/Vue_EcranBienvenue.html");
      const html = await response.text();
      document.open(); 
      document.write(html); 
      document.close(); // 👉 Affiche la page une fois tout chargé 
      
      document.body.classList.add("loaded");

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
