function dropDownMenu (){

    let menuList=document.getElementById("menu");
    if (menuList.style.display=="block"){
        menuList.style.display="none"
    }else menuList.style.display="block"
   
}

function bgColorGrey() {
    document.body.style.backgroundColor = " darkgrey";
}
function bgColorYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function bgColorBlue() {
    document.body.style.backgroundColor = "blue";
}
function bgColorRed() {
    document.body.style.backgroundColor = "Red";
}


/* dropdown; als je klikt op menu/button/image/ zie je het menu UL of div class dropdown
 als je erop klikt  klapt die in.
 als je niets doet gebeurd er niet.
 */