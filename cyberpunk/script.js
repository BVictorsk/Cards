const toggleButton = document.getElementById('toggle-button');
const cardContent = document.querySelector('.card-content');
const cardContentMore = document.querySelector('.card-content-more');

toggleButton.addEventListener('click', () => {
  if (cardContent.style.display === 'none') {
    cardContent.style.display = 'flex';
    cardContentMore.style.display = 'none';
    toggleButton.textContent = 'See More';
  } else {
    cardContent.style.display = 'none';
    cardContentMore.style.display = 'flex';
    toggleButton.textContent = 'See Less';
  }
});

const toggleButtonMore = document.querySelector('.card-content-more #toggle-button');
toggleButtonMore.addEventListener('click', () => {
  cardContent.style.display = 'flex';
  cardContentMore.style.display = 'none';
  toggleButton.textContent = 'See More';
});
