window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
//    console.log("hahó");
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
    //console.log("validalas");
    //a név beviteli mezőt ellenőrizzük
    //nagybeűtvel kezdődik
    //betűt adott-e meg?
    //1 karakternél hosszabb legyen
    var urlapAdatok = "";
    var hiba = "";
    var filter = /[A-Z]+[a-z]{2,}/;
    if (!filter.test(ID("nev").value)) {
        hiba += "A név nagybetűvel kezdődjön és legalább 3 karakter legyen!";
        urlapAdatok += "Hiba: " + ID("nev").value + "<br>";
        ID("nev").style.border = "3px solid red";

    } else {
        ID("nev").style.border = "none";
        urlapAdatok += "Név: " + ID("nev").value + "<br>";
    }

    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!filter.test(ID("email").value)) {
        hiba = "Az e-mail nem tartalmaz elég karakter vagy hiányzik a @-jel (valaki@vmi.hu)!";
        urlapAdatok += "Email: " + ID("email").value + "<br>";
        ID("email").style.border = "3px solid red";
        ID("email2").style.border = "3px solid red";
    } else {
        ID("email").style.border = "none";
        if (ID("email").value === ID("email2").value) {
            urlapAdatok += "Email: " + ID("email").value + "<br>";
            ID("email2").style.border = "none";
        } else {
            hiba += "Nem egyforma a két e-mail.";
            ID("email2").style.border = "3px solid red";
        }
    }


    console.log(hiba);

    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;



}


