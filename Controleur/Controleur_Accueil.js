Promise.all([
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  document.open();

  // CSS
  document.write('<link rel="stylesheet" href="Style/Style_Accueil.css">');

  // Vues
  document.write(entete);
  document.write(accueil);
  document.write(pied);

  // Scripts (en dernier, après le HTML)
  document.write('<script src="Model/Model_Entete.js"><\/script>');

  document.close();
});
