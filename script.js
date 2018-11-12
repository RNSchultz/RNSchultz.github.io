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
