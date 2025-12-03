function setStatusColor(id, active) {
  var el = document.getElementById(id);
  if (!el) return;

  if (active) {
    el.style.backgroundColor = "red";
    el.style.color = "white";
  } else {
    el.style.backgroundColor = "white";
    el.style.color = "black";
  }
}

if (!!window.EventSource) {
  var source = new EventSource('/');
  source.onmessage = function(e) {

    console.log("Received:", e.data);
    var bumper = e.data[1];
    var cliff  = e.data[3];
    var drop   = e.data[5];

    // === BUMPER ===
    switch (bumper) {
      case '0':
        document.getElementById("but1").value = "OFF";
        setStatusColor("but1", false);
        break;
      case '1':
        document.getElementById("but1").value = "Right";
        setStatusColor("but1", true);
        break;
      case '2':
        document.getElementById("but1").value = "Center";
        setStatusColor("but1", true);
        break;
      case '4':
        document.getElementById("but1").value = "Left";
        setStatusColor("but1", true);
        break;
      case '3':
        document.getElementById("but1").value = "Right+Center";
        setStatusColor("but1", true);
        break;
      case '5':
        document.getElementById("but1").value = "Right+Left";
        setStatusColor("but1", true);
        break;
      case '6':
        document.getElementById("but1").value = "Center+Left";
        setStatusColor("but1", true);
        break;
      case '7':
        document.getElementById("but1").value = "ALL";
        setStatusColor("but1", true);
        break;
    }

    // === WHEEL DROP ===
    switch (drop) {
      case '0':
        document.getElementById("but2").value = "OFF";
        setStatusColor("but2", false);
        break;
      case '1':
        document.getElementById("but2").value = "Right";
        setStatusColor("but2", true);
        break;
      case '4':
        document.getElementById("but2").value = "Left";
        setStatusColor("but2", true);
        break;
      case '5':
        document.getElementById("but2").value = "Both";
        setStatusColor("but2", true);
        break;
    }

    // === CLIFF ===
    switch (cliff) {
      case '0':
        document.getElementById("but3").value = "OFF";
        setStatusColor("but3", false);
        break;
      case '1':
        document.getElementById("but3").value = "Right";
        setStatusColor("but3", true);
        break;
      case '2':
        document.getElementById("but3").value = "Front";
        setStatusColor("but3", true);
        break;
      case '4':
        document.getElementById("but3").value = "Left";
        setStatusColor("but3", true);
        break;
      case '3':
        document.getElementById("but3").value = "Right+Front";
        setStatusColor("but3", true);
        break;
      case '6':
        document.getElementById("but3").value = "Front+Left";
        setStatusColor("but3", true);
        break;
      case '7':
        document.getElementById("but3").value = "ALL";
        setStatusColor("but3", true);
        break;
    }
  };
}

