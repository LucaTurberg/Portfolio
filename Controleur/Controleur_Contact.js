Promise.all([
  fetch("Vue/Vue_Entete.html").then(r => r.text()),
  fetch("Vue/Vue_Contact.html").then(r => r.text()),
  fetch("Vue/Vue_Pied.html").then(r => r.text())
])
.then(([entete, contact, pied]) => {

  // Charger le CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "Style/Style_Contact.css";

  css.onload = () => {

    // Injecter les 3 vues dans le body
    document.body.innerHTML = entete + contact + pied;

  };

  document.head.appendChild(css);
});
