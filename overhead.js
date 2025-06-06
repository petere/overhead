(function() {
  "use strict";

  var allSlides = document.getElementsByClassName("slide");
  var currentSlide = 0;

  function showCurrentSlide() {
    for (var i = 0; i < allSlides.length; i++) {
      var slide = allSlides[i];
      if (i === currentSlide)
        slide.classList.add("current-slide");
      else
        slide.classList.remove("current-slide");
    }
    window.location.hash = currentSlide > 0 ? currentSlide.toString() : "";
  }

  function nextSlide() {
    if (currentSlide < allSlides.length - 1)
      currentSlide++;
    showCurrentSlide();
  }

  function prevSlide() {
    if (currentSlide > 0)
      currentSlide--;
    showCurrentSlide();
  }

  function handleHashChange() {
    var h = window.location.hash;
    if (h.charAt(0) === "#")
      h = h.substr(1);
    var x = parseInt(h);
    currentSlide = !isNaN(x) ? x : 0;

    showCurrentSlide();
  }

  window.onhashchange = handleHashChange;

  document.addEventListener("DOMContentLoaded", function() {
    // set document title from first page title
    if (!document.title) {
      document.title = document.getElementsByTagName("h1")[0].textContent;
    }

    for (var i = 0; i < allSlides.length; i++) {
      allSlides[i].onclick = function() {};  // hack to make clickable on iOS
    }

    handleHashChange();
  });

  document.addEventListener("fullscreenchange", function() {
    // hide cursor in full-screen mode
    document.documentElement.style.cursor = document.fullscreenElement ? 'none' : 'auto';
  });

  window.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
    case 33: // page up
    case 37: // left
    case 38: // up
      prevSlide();
      break;
    case 13: // enter
    case 32: // space
    case 34: // page down
    case 39: // right
    case 40: // down
      nextSlide();
      break;
    case 27: // escape
      currentSlide = 0;
      showCurrentSlide();
      break;
    case 70: // f
      document.documentElement.requestFullscreen();
      break;
    case 71: // g
      document.exitFullscreen();
      break;
    default:
      return;
    }

    event.preventDefault();
  }, true);

  window.addEventListener("click", function(event) {
    if (event.target.tagName === "A")
      return;

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
  }, false);

  var startX, startY;

  window.addEventListener("touchstart", function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, false);

  window.addEventListener("touchmove", function(event) {
    if (!startX || !startY)
      return;

    var diffX = event.touches[0].clientX - startX;
    var diffY = event.touches[0].clientY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0)
        nextSlide();  // right swipe
      else
        prevSlide();  // left swipe
    }

    startX = null;
    startY = null;
  }, false);
}());
