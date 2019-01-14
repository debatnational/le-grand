import * as React from "react";
import { Link } from "react-router-dom";

export const HelloKitty = () => (
  <div>
    <h3>Bonjour citoyen français !</h3>
    <p>
      Bienvenue sur le débat national. C'est ici que tu pourras t'exprimer et
      être écouté.e avec ATTENTION par ton gouvernement.
    </p>
    <p>On commence ?</p>
    <div>
      <Link to="/bye-kitty" className="left">
        OK Manu t'es trop cool :)
      </Link>
      <Link to="/kitty-s-first-debate" className="right">
        Oui Mr. le Président
      </Link>
    </div>
  </div>
);
