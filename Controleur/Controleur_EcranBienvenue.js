fetch("Vue/Vue_EcranBienvenue.html")
  .then(r => r.text())
  .then(html => document.body.innerHTML = html);
