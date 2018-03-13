const loadingWrapper = document.getElementById('js-loading-wrapper');
const button = document.getElementById('js-button');
const checkmark = document.getElementById('js-checkmark');
const animationMessage = document.getElementById('js-animation-message');

button.addEventListener('click', (event)=>{
  event.preventDefault();
  loadingWrapper.classList.add('success')
});

checkmark.addEventListener('animationend', (event) => {
  console.log('animation ended', event);
  animationMessage.textContent = 'animation ended';
});
