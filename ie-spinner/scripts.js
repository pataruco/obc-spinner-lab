var button = document.getElementById('js-button');
var svgWrapper = document.getElementById('js-svg-wrapper');
var svgCheckmark = document.getElementById('js-checkmark-svg');
var mesage = document.getElementById('js-message');

button.addEventListener('click', function(event){
  event.preventDefault();
  svgWrapper.classList.add('success');
});

svgCheckmark.addEventListener('animationend', function(event){
  mesage.textContent = 'Animation ended ' + JSON.stringify(event);
});
