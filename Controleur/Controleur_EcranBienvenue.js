class Controleur_EcranBienvenue {
  async chargerEcranBienvenue() {
    try {
      const response = await fetch("Vue/Vue_EcranBienvenue.html");
      const html = await response.text();

      // 👉 Écrit la page immédiatement
      document.open(); 
      document.write(html); 
      document.close();

      // 👉 Le loader est visible ici
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 👉 On déclenche l'affichage final
      document.body.classList.add("loaded");

    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  }
}
