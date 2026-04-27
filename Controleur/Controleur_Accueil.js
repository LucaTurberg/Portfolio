Promise.all([
  // 1. Charger toutes les vues HTML
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  // 2. Ouvrir le document pour réécrire toute la page
  document.open();

  // 3. Charger le CSS en premier pour appliquer le style dès l’affichage
  document.write('<link rel="stylesheet" href="Style/Style_Accueil.css">');

  // 4. Insérer le HTML dans l’ordre d’affichage de la page
  // Entête -> Accueil -> Pied de page
  document.write(entete);
  document.write(accueil);
  document.write(pied);

  // 5. Charger les scripts en dernier
  // Important : le HTML doit déjà être chargé pour utiliser getElementById
  document.write('<script src="Model/Model_Entete.js"><\/script>');

  // 6. Fermer l’écriture du document
  document.close();
});
