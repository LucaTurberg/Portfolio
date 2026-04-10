class Routeur {
  Bienvenue() {
    const script = document.createElement("script");
    script.src = "Controleur/Controleur_EcranBienvenue.js";

    script.onload = () => {
      const ctrl = new Controleur_EcranBienvenue();
      ctrl.chargerEcranBienvenue();
    };

    document.head.appendChild(script);
  }

  Accueil() {
    const script = document.createElement("script");
    script.src = "Controleur/Controleur_Accueil.js";

    script.onload = () => {
      const ctrl = new Controleur_Accueil();
      ctrl.chargerAccueil();
    };

    document.head.appendChild(script);
  }

  Contact() {
    const script = document.createElement("script");
    script.src = "Controleur/Controleur_Contact.js";

    script.onload = () => {
      const ctrl = new Controleur_Contact();
      ctrl.chargerContact();
    };

    document.head.appendChild(script);
  }
}
