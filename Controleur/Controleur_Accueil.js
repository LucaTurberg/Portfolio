Promise.all([
  // 1. Charger toutes les vues HTML
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Accueil.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, accueil, pied]) => {

  // 2. Effacer complètement le contenu actuel de la page
  document.body.innerHTML = "";
  document.head.innerHTML = "";

  // 3. Ouvrir le document pour réécrire toute la page
  document.open();

  // 4. Recréer la structure HTML + charger le CSS en premier
  document.write(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="Style/Style_Accueil.css">
      <title>Accueil</title>
    </head>
    <body>
  `);

  // 5. Insérer le HTML dans l’ordre d’affichage
  // Entête -> Accueil -> Pied de page
  document.write(entete);
  document.write(accueil);
  document.write(pied);

  // 6. Charger les scripts en dernier
  // Important : le HTML doit déjà exister pour utiliser getElementById
  document.write('<script src="Model/Model_Entete.js"><\/script>');

  // 7. Fermer body + html
  document.write(`
    </body>
    </html>
  `);

  // 8. Fermer l’écriture du document
  document.close();
});
