const loadingWrapper = document.getElementById('js-loading-wrapper');
const successButton = document.getElementById('js-success-button');
const loadingButton = document.getElementById('js-loading-button');
const checkmark = document.getElementById('js-checkmark');
const animationMessage = document.getElementById('js-animation-message');

loadingButton.addEventListener('click', (event)=>{
  event.preventDefault();
  loadingWrapper.classList.add('loading');
});

successButton.addEventListener('click', (event)=>{
  event.preventDefault();
  loadingWrapper.classList.add('success')
});

checkmark.addEventListener('animationend', (event) => {
  console.log('animation ended', event);
  animationMessage.textContent = 'animation ended';
});
