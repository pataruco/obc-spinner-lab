var svg = document.getElementById('js-svg');
var button = document.getElementById('js-button');

var svgCheckmark = document.getElementById('js-svg-checkmark');
var buttonCheckmark = document.getElementById('js-button-checkmark');


var showSuccess =  function (event)  {
  event.preventDefault();
  svg.classList.add('success');
}

var showSuccessCheckmark =  function (event)  {
  event.preventDefault();
  svgCheckmark.classList.add('success');
}

button.addEventListener('click', showSuccess);
buttonCheckmark.addEventListener('click', showSuccessCheckmark);
