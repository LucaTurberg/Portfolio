Promise.all([
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  document.open();

  // Ajouter le CSS
  document.write('<link rel="stylesheet" href="Style/Style_Accueil.css">');

  // Injecter les vues
  document.write(entete);
  document.write(accueil);
  document.write(pied);

  document.close();
});
