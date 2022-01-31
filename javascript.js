function goto(link, bool) {
    if(bool == true){
        window.open(link, "_self")
    }
    else{
        window.open(link, "_blank")
    }
}