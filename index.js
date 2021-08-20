function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X: " + x + ", Y: " + y;
    document.getElementById("coords").innerHTML = coords;
  }