function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function random_splash() {

    let splash = ""

    var en_splash = ["Try our new WDYC v1.0.0 plugin!", "Join our discord server to stay up to date!", "Need a custom plugin? Contact us!", "Have you tried our new AAE discord bot script yet?" , "Check out our repositories on github!"]
    var it_splash = ["Prova il nostro nuovo plugin WDYC v1.0.0!", "Entra nel nostro server discord per rimanere aggiornato!", "Bisogno di un plugin personalizzato? Contattaci!", "Hai già provato il nostro nuovo script per bot discord AAE?", "Guarda le nostre repository su github!"]

    if(document.documentElement.lang == "en"){
        splash = choose(en_splash);
    } else {
        splash = choose(it_splash);
    }

    document.getElementById("splash").innerHTML = '"' + splash + '"';

    console.log("Sended new splash in " + document.documentElement.lang + ":");
    console.log("     " + splash);
}

function goto(link, bool) {
    if(bool == true){
        window.open(link, "_self")
    }
    else{
        window.open(link, "_blank")
    }
}

function changeSplashLan(lan){
    document.documentElement.lang = lan;
    return(document.documentElement.lang);
}