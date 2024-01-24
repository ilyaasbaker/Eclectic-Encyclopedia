// using pre-written code from https://codepen.io/mykt0ngc0/pen/XWjgELa

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomOrder = function(element) {
  
  // Viewport Dimensions
  var vpHeight = window.innerHeight;
  var vpWidth = window.innerWidth;
  
  // Image Position
  var xPos = getRandomInt(0, vpWidth - element.offsetWidth);
  var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
  var zIndex = getRandomInt(0,13);
  
element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
};

//Setup
var imgs = document.querySelectorAll('img');

imgs.forEach((the_img) => {

window.addEventListener('load', function() {
  randomOrder(the_img);
});

}); //end foreach
