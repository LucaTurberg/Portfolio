Promise.all([
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  // Charger le CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "Style/Style_Accueil.css";

  css.onload = () => {

    // Injecter les 3 vues dans le body
    document.body.innerHTML = entete + accueil + pied;

  };

  document.head.appendChild(css);
});
