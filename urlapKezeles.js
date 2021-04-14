window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init(){
//    console.log("hahó");
ID("kuld").addEventListener("click", validalas);
}

function validalas(){
    console.log("validalas");
    //a név beviteli mezőt ellenőrizzük
    //nagybeűtvel kezdődik
    //betűt adott-e meg?
    //1 karakternél hosszabb legyen
    var urlapAdatok = "";
    var hiba = "";   
    var filter = /[A-Z]+[a-z]{2,}/;
    if(!filter.test(ID("nev").value)){
        hiba += "A név nagybetűvel kezdődjön és legalább 3 karakter legyen!";
        ID("nev").style.border = "3px solid red";

    }else{
        ID("nev").style.border = "none";
        urlapAdatok += "Név: " + ID("nev").value + "<br>";
    }
    var filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!filter.test(ID("email").value)){
        hiba += "Az e-mail nem tartalmaz elég karakter vagy hiányzik a @-jel (valaki@vmi.hu)!";
        ID("nev").style.border = "3px solid red";
    }else{
        ID("email").style.border = "none";
        urlapAdatok += "Email: " + ID("email").value + "<br>";
    }
    console.log(hiba);
    $("aside section:nth-child(1) p").innerHTML = hiba;       
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;
    
    
}


