function controleurAccueil() {
  const app = document.getElementById("app");

  Promise.all([
    fetch("./Vue/Vue_Entete.html").then((r) => r.text()),
    fetch("./Vue/Vue_Accueil.html").then((r) => r.text()),
    fetch("./Vue/Vue_Pied.html").then((r) => r.text()),
  ])
    .then(([entete, contenu, pied]) => {
      app.innerHTML = entete + contenu + pied;
    })
    .catch((err) => {
      console.error(err);
      app.innerHTML = "<p>Erreur accueil</p>";
    });
}
