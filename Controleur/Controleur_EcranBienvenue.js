fetch("Vue/Vue_EcranBienvenue.html")
  .then(r => r.text())
  .then(html => {

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Style/Style_EcranBienvenue.css";

    link.onload = () => {
      document.body.innerHTML = html;
    };

    document.head.appendChild(link);
  });
