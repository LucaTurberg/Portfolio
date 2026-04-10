fetch("Vue/Vue_EcranBienvenue.html")
  .then(r => r.text())
  .then(html => {

    // Charger le CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "Style/Style_EcranBienvenue.css";

    css.onload = () => {

      // Injecter le HTML
      document.body.innerHTML = html;

      // Charger le script
      const scriptModel = document.createElement("script");
      scriptModel.src = "Model/Model_EcranBienvenue.js";

      document.body.appendChild(scriptModel);
    };

    document.head.appendChild(css);
  });
