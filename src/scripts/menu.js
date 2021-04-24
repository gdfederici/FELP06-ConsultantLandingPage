function magicMenu() {
    document.getElementById("hamburgerNav").classList.toggle("responsive"); //aggiungre e rimuove la classe per la visualizzazione del menu
    var elMenuCta = document.getElementById("hamburgerCTA");
    (elMenuCta.classList.contains("button")) ? (elMenuCta.classList.remove("button", "button__base")) : (elMenuCta.classList.add("button", "button__base")); // aggiunge rimuove la classe bottone a elemento CTA così appare semplcie in mobile e bottone in desktop funziona sempre tranne quando da mobile si allarga a desktop
}