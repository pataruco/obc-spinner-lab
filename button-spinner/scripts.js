const svg = document.getElementById('js-svg');
const button = document.getElementById('js-button');
const checkmark = document.getElementById('js-checkmark');
const circle = document.getElementById('js-circle');

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


checkmark.ontransitionend = (event) => {
  console.log('transition ends', event);
}

checkmark.addEventListener('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', (event) => {
  console.log('transition ends', event)
});

checkmark.ontransitiontun = (event) => {
  console.log('transition run', event);
}

circle.ontransitionend = (event) => {
  console.log('transition ends', event);
}

circle.ontransitiontun = (event) => {
  console.log('transition run', event);
}
