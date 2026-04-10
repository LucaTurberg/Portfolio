function controleurEcranBienvenue() {
  fetch("./Vue/Vue_EcranBienvenue.html")
    .then((r) => r.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;

      document.getElementById("bienvenue").addEventListener("click", () => {
        Routeur.Accueil();
      });
    })
    .catch((err) => {
      console.error("Erreur chargement bienvenue :", err);
    });
}
