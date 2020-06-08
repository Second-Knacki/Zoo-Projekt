function zoomin() {
    var GFG = document.getElementById("Lageplan"); 
    var currWidth = GFG.clientWidth;
  GFG.style.width = (currWidth + 100) + "px";
}

function zoomout() {
    var GFG = document.getElementById("Lageplan");
    var currWidth = GFG.clientWidth;
    GFG.style.width = (currWidth - 100) + "px";
}
