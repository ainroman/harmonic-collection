function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "I am happy and dandy and everything's nice!!!!") {
      x.innerHTML = "I am sad and not dandy and everything's awful!!!!";
    } else {
      x.innerHTML = "I am happy and dandy and everything's nice!!!!";
    }
  }

    var smile = document.getElementById('smile');
function one(){
    if (smile.style.display === "none") {
        smile.style.display = "block";
    } else {
        smile.style.display = "none";
      }
}

function two() {
    let main = document.getElementById('main');
    main.style.display = "none";
    smile.style.display = "none";

    let fini = document.getElementById('fini');
    fini.style.display = "block";

    document.body.style.backgroundImage = "url(media/giphy.webp)";
    document.body.style.backgroundSize = "5%";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "5%";
}