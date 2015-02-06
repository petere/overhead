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
      /*jshint loopfunc: true */ /*eslint no-loop-func: 0 */
      allSlides[i].onclick = function() {};  // hack to make clickable on iOS
    }

    handleHashChange();
  });

  function requestFullscreen(element) {
    var method = element.requestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || element.msRequestFullscreen;

    if (method)
      method.call(element);
  }

  function exitFullscreen() {
    var method = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;

    if (method)
      method.call(document);
  }

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
      requestFullscreen(document.body);
      break;
    case 71: // g
      exitFullscreen();
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
}());
