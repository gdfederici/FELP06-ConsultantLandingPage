import "../css/style.scss";
import Thumb from '../img/consultantlandingpage_thumb.jpg';

/*** ------------------------- *** ------------------------- *** ------------------------- *** ------------------------- ***/

/*** HAMBURGER MENU ***/
window.magicMenu = function() {
    document.getElementById("hamburgerNav").classList.toggle("responsive"); //IT_ Aggiunge/rimuove la classe per la visualizzazione del menu. | EN_ Add/remove the class for the menu display.
    var elMenuCta = document.getElementById("hamburgerCTA");
    (elMenuCta.classList.contains("button")) ? (elMenuCta.classList.remove("button", "button__base")) : (elMenuCta.classList.add("button", "button__base")); // IT_ Aggiunge/rimuove la classe bottone a elemento CTA, così appare semplice in mobile e bottone in desktop. | EN_ Add/remove the button class to the CTA element.
}

/*** BUTTON LOAD MORE FAQ ***/
window.moreFaq = function() {
    /* var faqExtra = document.getElementsByClassName("faq-extra");
       for ( let i = 0; i < faqExtra.length; i++) { faqExtra[i].style.display = "flex"; } */
    /* IT_ Collezione di oggetti simil vettore, ma non vettore per questo forEach non funziona. Per farlo funzionare occorre aggiungere come di seguito - VALE PER TUTTI */
    Array.from(document.getElementsByClassName("faq-extra")).forEach(element => element.style.display = "flex" );
    /*  var faqMobile = document.getElementsByClassName("faq__mobile");
        for ( let i = 0; i < faqMobile.length; i++) { faqMobile[i].style.display = "flex"; } */
    Array.from(document.getElementsByClassName("faq__mobile")).forEach(element => element.style.display = "flex" );
    document.getElementById("more-faq").style.display = "none";
}

/*** FORM VALIDATION ***/
window.validateForm = function() {
    let usrRegex = /^[A-Za-z\d]+$/;
    let pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].{8,}$/;
    let usrValid = document.forms["loginForm"]["username"].value.match(usrRegex);
    let pswValid = document.forms["loginForm"]["password"].value.match(pswRegex);
    if (usrValid == null) {
        alert("Username can only contain letters and numbers");
        return false;
    }
    if (pswValid == null) {
        alert("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        return false;
    }
}


/*** SOCIAL SHARE ***/
const myThumb = new Image();
myThumb.src = Thumb;

/*** FAQ ***/
var faqList = document.getElementsByClassName("faq-button"); /* IT_ Collezione di oggetti simil vettore, ma non vettore per questo forEach non funziona */
for ( let i = 0; i < faqList.length; i++) {
    faqList[i].addEventListener("click", function() { 
        this.classList.toggle("faq__active");
        let faqResponse = this.nextElementSibling;     // EN_ Toggle between hiding and showing the active panel 
        (faqResponse.style.display === "block") ? (faqResponse.style.display = "none") : (faqResponse.style.display = "block"); // IT_ Opertore ternario.
        }
    );
}

/*** TESTIMONIAL ***/
var slideTestimonial = 1;
    showTestimonial(slideTestimonial);
window.moreTestimonial = function() {
    showTestimonial(slideTestimonial += 1);
}
function showTestimonial(n) {
    var singleTestimonial = document.getElementsByClassName("testimonial-single");
    if (n > singleTestimonial.length) {slideTestimonial = 1}
    /* for (let j = 0; j < singleTestimonial.length; j++) { singleTestimonial[j].style.display = "none"; } */
    Array.from(singleTestimonial).forEach(element => element.style.display = "none" );
    singleTestimonial[slideTestimonial-1].style.display = "block";
}