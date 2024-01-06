import { setStorage } from "./storage/storage.js";
import { setDocumentHeight, setHTMLTitle } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */


/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

// INTERACTIONS UTILISATEUR -------------------------------

// GÉNÉRATION DOM -----------------------------------------


/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------
setStorage();
setDocumentHeight();

// Manuelle -----------------------------------------------

setHTMLTitle(APP_NAME);

const header = document.getElementById('header');
header.innerHTML = `
  <span>${APP_NAME}</span>
`;

const main = document.getElementById('main');
main.innerHTML = `
  <h1>${APP_NAME}</h1>
  <p>Hello World</p>
  <p>Test paragraphe</p>
`;

const footer = document.getElementById('footer');
footer.innerHTML = `
  <span>v ${APP_VERSION}</span>
`;

