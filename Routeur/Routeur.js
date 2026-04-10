class Routeur {
  static chargerControleur(nom) {
    const src = `./Controleur/${nom}.js`;

    // éviter de charger 2 fois le même script
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement("script");
      script.src = src;

      script.onload = () => this.executerControleur(nom);

      document.body.appendChild(script);
    } else {
      this.executerControleur(nom);
    }
  }

  static executerControleur(nom) {
    const base = nom.replace("Controleur_", "");
    const nomFonction =
      "controleur" + base.charAt(0).toUpperCase() + base.slice(1);

    if (typeof window[nomFonction] === "function") {
      window[nomFonction]();
    } else {
      document.getElementById("app").innerHTML =
        "<h1>Erreur : fonction non trouvée</h1>";
    }
  }

  // 🔥 NAVIGATION (IMPORTANT : change le hash)
  static EcranBienvenue() {
    window.location.hash = "EcranBienvenue";
  }

  static Accueil() {
    window.location.hash = "Accueil";
  }

  static Contact() {
    window.location.hash = "Contact";
  }

  static erreur404() {
    document.getElementById("app").innerHTML =
      "<h1>404 - Page non trouvée</h1>";
  }

  // 🔁 ROUTER
  static router() {
    let hash = window.location.hash.replace("#", "");

    switch (hash) {
      case "":
      case "EcranBienvenue":
        this.chargerControleur("Controleur_EcranBienvenue");
        break;

      case "Accueil":
        this.chargerControleur("Controleur_Accueil");
        break;

      case "Contact":
        this.chargerControleur("Controleur_Contact");
        break;

      default:
        this.erreur404();
        break;
    }
  }

  static init() {
    window.addEventListener("hashchange", () => this.router());
    this.router(); // premier chargement
  }
}

// 🚀 LANCEMENT
Routeur.init();
