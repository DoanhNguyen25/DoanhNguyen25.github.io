var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("utility")[0].style.top = "6.5rem";
  } else {
    document.getElementsByClassName("utility")[0].style.top = "-1rem";
  }
  prevScrollpos = currentScrollPos;
}