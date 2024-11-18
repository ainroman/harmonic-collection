let body = getElementById('body')

function increaseFontSizeBy100px() {
    document.getElementById('endjol').style.fontSize = "50px";
    document.getElementById('button2').style.visibility = "visible";
}

function makeItBack() {
    document.getElementById('endjol').style.fontSize = "100px";
    document.getElementById('button3').style.visibility = "visible";
}

function goForward() {
    document.getElementById('endjol').style.display = "none";
    document.getElementById('picture').style.display = "inline";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundImage = "url(media/fire.gif)"
}


  
