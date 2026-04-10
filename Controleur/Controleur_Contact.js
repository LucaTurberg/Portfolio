class Controleur_Contact {
  async chargerContact() {
    const [entete, contact, pied] = await Promise.all([
      fetch("Vue/Vue_Entete.html").then((r) => r.text()),
      fetch("Vue/Vue_Contact.html").then((r) => r.text()),
      fetch("Vue/Vue_Pied.html").then((r) => r.text()),
    ]);

    document.body.innerHTML = entete + contact + pied;
  }
}
