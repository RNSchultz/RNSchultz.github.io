var _info_ = {
  Version   : "1.0.0",
  Author    : "Alyce Hoggan and James Dunn",
  Copyright : "Motivara Corporation",
  Source    : "github.com/RNSchultz/RNSchultz.github.io"
};

function toggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
    x.className += " responsive";
  else 
    x.className = "topnav";
}
function toggleOff() {
  var x = document.getElementById("myTopnav");
    x.className = "topnav";
}

// Accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++)
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activer");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block")
      panel.style.display = "none";
    else
      panel.style.display = "block";
    });