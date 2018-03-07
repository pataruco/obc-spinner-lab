const svg = document.getElementById('js-svg');
const button = document.getElementById('js-button');

const svgCheckmark = document.getElementById('js-svg-checkmark');
const buttonCheckmark = document.getElementById('js-button-checkmark');


const showSuccess = (event) => {
  event.preventDefault();
  svg.classList.add('success');
}

const showSuccessCheckmark = (event) => {
  event.preventDefault();
  svgCheckmark.classList.add('success');
}

button.addEventListener('click', showSuccess);
buttonCheckmark.addEventListener('click', showSuccessCheckmark);
