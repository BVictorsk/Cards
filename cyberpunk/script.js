const toggleButton = document.getElementById('toggle-button');
const cardImage = document.querySelector('.card-image');
const cardText = document.querySelector('.card-text');

toggleButton.addEventListener('click', function() {
  if (toggleButton.textContent === 'See More') {
    toggleButton.textContent = 'Go Back';
    cardImage.classList.add('remove-image');
    cardText.classList.add('glitch-effect');
  } else {
    toggleButton.textContent = 'See More';
    cardImage.classList.remove('remove-image');
    cardText.classList.remove('glitch-effect');
  }
});
