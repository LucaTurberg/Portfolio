
// 🔥 démarrage app
function startApp() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("app").style.display = "block";

  loadHeader();
  openTab("Accueil");
}

// 🔥 charger header Vue
function loadHeader() {
  fetch("Vue/Vue_Entete.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });
}

// 🔥 ouvrir tab + charger vue correspondante
function openTab(name, updateUrl = true) {

  let content = document.getElementById("content");

  // load view
  fetch("Vue/Vue_" + name + ".html")
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });

  // URL sync sans scroll
  if (updateUrl) {
    history.replaceState(null, "", "#" + name);
  }
}

// 🔥 reload direct avec hash
window.onload = function () {
  let tab = window.location.hash.replace("#", "");

  if (tab) {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("app").style.display = "block";

    loadHeader();
    openTab(tab, false);
  }
};
