import "../css/style.scss";
import Thumb from '../img/consultantlandingpage_thumb.jpg';
import faqJson from './faq.json';

/*** ------------------------- *** ------------------------- *** ------------------------- *** ------------------------- ***/

/*** HAMBURGER MENU ***/
window.magicMenu = function() {
    document.getElementById("hamburgerNav").classList.toggle("responsive"); //IT_ Aggiunge/rimuove la classe per la visualizzazione del menu. | EN_ Add/remove the class for the menu display.
    var elMenuCta = document.getElementById("hamburgerCTA");
    (elMenuCta.classList.contains("button")) ? (elMenuCta.classList.remove("button", "button__base")) : (elMenuCta.classList.add("button", "button__base")); // IT_ Aggiunge/rimuove la classe bottone a elemento CTA, così appare semplice in mobile e bottone in desktop. | EN_ Add/remove the button class to the CTA element.
}

/*** CREATE FAQ ***/
// IT_
window.isFaq = function() {
    try {
        let listFaq = faqJson.faqList;
        let faqCol = document.createElement("ul");
        faqCol.className = "faq-col";
        let faqCol1 = document.createElement("ul");
        faqCol1.className = "faq-col__1";
        let faqCol2 = document.createElement("ul");
        faqCol2.className = "faq-col__2";
        let allFaq = listFaq.length;
        let halfFaq = Math.floor(allFaq/2);
        for (let i=0; i<halfFaq; i++) {
            let extra = true;
            if (i < 7) { extra = false; }
            faqCol1.appendChild(createFaq(listFaq[i].question, listFaq[i].answer, extra, 1, i));
        }
        for (let i=halfFaq; i<allFaq; i++) {
            let extra = true;
            if (i < halfFaq+6) { extra = false; }
            faqCol2.appendChild(createFaq(listFaq[i].question,listFaq[i].answer, extra, 2, i));
        }
        faqCol.appendChild(faqCol1);
        faqCol.appendChild(faqCol2);
        document.getElementById("magicfaq").appendChild(faqCol);
        
        var faqList = document.getElementsByClassName("faq-button"); /* Collezione di oggetti simil vettore, ma non vettore per questo forEach non funziona */
        for ( let i = 0; i < faqList.length; i++) {
            faqList[i].addEventListener("click", function() { 
                this.classList.toggle("faq__active");
                let faqResponse = this.nextElementSibling;     // Toggle between hiding and showing the active panel 
                (faqResponse.style.display === "block") ? (faqResponse.style.display = "none") : (faqResponse.style.display = "block"); // opertore ternario
                }
            );
        }
        return;
    } catch (error) {
        console.log("Si è verificato un errore in isFaq:", error)
        return false;
    }
}

function createFaq(itemQuestion, itemAnswer, hidden, column, position) {
        let listItem = document.createElement("li");
        listItem.className = "item-column"+column;
        let listItemButton = document.createElement("button");
        if (column === 1) {
            (hidden) ? (listItemButton.className = "button__faq faq-button faq-extra") : (listItemButton.className = "button__faq faq-button");
        }
        else {
            (hidden) ? (listItemButton.className = "button__faq faq-button faq-extra") : (listItemButton.className = "button__faq faq-button faq__mobile");
        }
        listItemButton.appendChild(document.createElement("p").appendChild(document.createTextNode(itemQuestion)));
        let listItemAccordion = document.createElement("div");
        ( position === 0) ? (listItemAccordion.className = "faq-response faq__everactive") : (listItemAccordion.className = "faq-response");
        listItemAccordion.appendChild(document.createElement("p").appendChild(document.createTextNode(itemAnswer)));
        listItem.appendChild(listItemButton);
        listItem.appendChild(listItemAccordion);
        return listItem;
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

/*** TESTIMONIAL FUNCTIONS */
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



/*** SOCIAL SHARE ***/
const myThumb = new Image();
myThumb.src = Thumb;

/*** FAQ ***/
isFaq();

/*** TESTIMONIAL ***/
var slideTestimonial = 1;
showTestimonial(slideTestimonial);