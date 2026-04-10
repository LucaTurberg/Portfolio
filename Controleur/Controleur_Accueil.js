document.open();
document.write(""); // efface tout le contenu actuel
document.close();

Promise.all([
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  document.open();

  // CSS
  document.write('<link rel="stylesheet" href="Style/Style_Accueil.css">');

  // Scripts (src)
  document.write('<script src="Routeur/Routeur.js"><\/script>');
  document.write('<script src="Model/Model_Entete.js"><\/script>');

  // Vues
  document.write(entete);
  document.write(accueil);
  document.write(pied);

  document.close();
});
