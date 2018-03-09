const svg = document.getElementById('js-svg');
const button = document.getElementById('js-button');

const svgCheckmark = document.getElementById('js-svg-alltogether');
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

/*Transition listeners*/

const circle = document.getElementById('js-svg-circle');
const checkmark = document.getElementById('js-svg-checkmark');
 
circle.addEventListener('transitionend', (event) =>{
  console.log('circle transitionend', event);
});

checkmark.addEventListener('transitionend', (event) =>{
  console.log('checkmark transitionend', event);
});



/*Button Spinner*/

const triggerButton = document.getElementById('js-button-buttonspinner');
const buttonSpinnerSvg = document.getElementById('js-svg-buttonspinner');
const buttonSpinnerList = document.getElementById('js-buttonspinner-list');


triggerButton.addEventListener('click', (event) => {
  event.preventDefault();
  buttonSpinnerSvg.classList.add('success');
})

// animation listener

const buttonSpinnerCircle = document.getElementById('js-svg-circle-buttonspinner');
const buttonSpinnerCheckmark = document.getElementById('js-svg-checkmark-buttonspinner');


buttonSpinnerCircle.addEventListener('animationend', (event) =>{
  console.log('CIRCLE animationend ===>', event )
  const eventString = JSON.stringify(event);
  const listItem = document.createElement('li')
  const message = document.createTextNode(`CIRCLE animationend ===> ${event}`);
  listItem.appendChild(message);
  buttonSpinnerList.appendChild(listItem);
});


// transition listener

buttonSpinnerCheckmark.addEventListener('animationend', (event) => {
  console.log('Checkmark animationend ===>', event )
  const eventString = JSON.stringify(event);
  const listItem = document.createElement('li')
  const message = document.createTextNode(`Checkmark animationend ===> ${event}`);
  listItem.appendChild(message);
  buttonSpinnerList.appendChild(listItem);
});