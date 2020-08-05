window.onload = function() {
  // Internet Explorer
  document.onselectstart = function() {return false;}
  // Mozilla
  document.onmousedown = function() {return false;}
}