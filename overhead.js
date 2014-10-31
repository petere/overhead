(function() {
  "use strict";

  var allSlides = document.getElementsByClassName("slide");
  var currentSlide = 0;

  function showCurrentSlide() {
    for (var i = 0; i < allSlides.length; i++) {
      var slide = allSlides[i];
      if (i == currentSlide)
        slide.classList.remove("hidden-slide");
      else
        slide.classList.add("hidden-slide");
    }
    window.location.hash = currentSlide.toString();
  }

  function reachedEnd() {
    // do nothing for now
  }

  function nextSlide() {
    if (currentSlide == allSlides.length - 1)
      reachedEnd();
    else
      currentSlide++;
    showCurrentSlide();
  }

  function prevSlide() {
    if (currentSlide === 0)
      reachedEnd();
    else
      currentSlide--;
    showCurrentSlide();
  }

  window.onload = function(){
    // set document title from first page title
    if (!document.title) {
      document.title = document.getElementsByTagName('h1')[0].textContent;
    }

    var h = window.location.hash;
    if (h.charAt(0) == "#")
      h = h.substr(1);
    var x = parseInt(h);
    if (!isNaN(x))
      currentSlide = x;

    showCurrentSlide();
  };

  window.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
    case 37: // left
    case 38: // up
      prevSlide();
      break;
    case 13: // enter
    case 32: // space
    case 39: // right
    case 40: // down
      nextSlide();
      break;
    case 27: // escape
      currentSlide = 0;
      showCurrentSlide();
      break;
    default:
      return;
    }

    event.preventDefault();
  }, true);

  window.addEventListener("mousedown", function(event) {
    switch (event.button) {
    case 0: // left
      nextSlide();
      break;
    case 2: // right
      prevSlide();
      break;
    default:
      return;
    }

    event.preventDefault();
  }, true);
}());
