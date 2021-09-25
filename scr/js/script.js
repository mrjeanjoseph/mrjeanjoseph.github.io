//
'use strick';



//Header section
let myName = "Frednel Jean-Joseph",
    MyTitle = "Software Developer at TBS-LLC",
    inMyToolBelt = "jQuery, Node.JS, PL/SQL";

document.getElementById("myName").innerHTML = myName;
document.getElementById("MyTitle").innerHTML = MyTitle;
document.getElementById("inMyToolBelt").innerHTML = inMyToolBelt;

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}