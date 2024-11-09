function ChangeTextAndBackground () {
    let bodyID = document.getElementById ("body");
    bodyID.style.backgroundImage = "url(media/rain.gif)";
    bodyID.style.backgroundRepeat = "repeat";

    document.getElementById ("word").innerHTML = 'Rain';

    var text = document.getElementById('runningtext');
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
      }
    var next = document.getElementById('next');
      if (next.style.display === "none") {
          next.style.display = "block";
      } else {
          next.style.display = "none";
        }
}


