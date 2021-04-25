import "../css/style.scss";
import html from '../index.html';

function magicMenu() {
    document.getElementById("hamburgerNav").classList.toggle("responsive"); //IT_ Aggiunge/rimuove la classe per la visualizzazione del menu. | EN_ Add/remove the class for the menu display.
    var elMenuCta = document.getElementById("hamburgerCTA");
    (elMenuCta.classList.contains("button")) ? (elMenuCta.classList.remove("button", "button__base")) : (elMenuCta.classList.add("button", "button__base")); // IT_ Aggiunge/rimuove la classe bottone a elemento CTA, così appare semplice in mobile e bottone in desktop. | EN_ Add/remove the button class to the CTA element.
}