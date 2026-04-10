class Routeur {
  EcranBienvenue() { 
    window.location.hash = "#EcranBienvenue", import("../Controleur/Controleur_EcranBienvenue.js"); 
  }
  Accueil() {
    window.location.hash = "#Accueil", import("../Controleur/Controleur_Accueil.js"); 
  }
  Contact() {
    window.location.hash = "#Contact", import("../Controleur/Controleur_Contact.js"); 
  }
}
