
/* LE MESSAGES DES BOUTON */
function commencer(){
document.getElementById("popup").style.display="block";
}

function closeMessage(){
document.getElementById("popup").style.display="none";
}

/* POPUP MESSAGE1 */
function message1(){
    document.getElementById("popup1").style.display="block";
}
function closeMessage1(){
    document.getElementById("popup1").style.display="none";
}


/* POPUP MESSAGE2 */
function message2(){
    document.getElementById("popup2").style.display="block";
}
function closeMessage2(){
    document.getElementById("popup2").style.display="none";
}

/* POPUP MESSAGE3 */
function message3(){
    document.getElementById("popup3").style.display="block";
}
function closeMessage3(){
    document.getElementById("popup3").style.display="none";
}


/* POPUP MESSAGE4 */
function message4(){
    document.getElementById("popup4").style.display="block";
}
function closeMessage4(){
    document.getElementById("popup4").style.display="none";
}

/* NAV-MENU */
function navToggle(){
    document.getElementById("popup-menu").style.display="block";
}
function closeMenu(){
    document.getElementById("popup-menu").style.display="none";
}





function toggleMenu(){
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}