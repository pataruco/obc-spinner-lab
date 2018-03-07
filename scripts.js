const svg = document.getElementById('js-svg');
const button = document.getElementById('js-button');


const showSuccess = (event) => {
  event.preventDefault();
  svg.classList.add('success');
}

button.addEventListener('click', showSuccess);
