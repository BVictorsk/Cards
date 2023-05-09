const items = [
    {
        title: "Item 1",
        description: "This is the first item.",
        bgColor: "#F44336"
    },
    {
        title: "Item 2",
        description: "This is the second item.",
        bgColor: "#E91E63"
    },
    {
        title: "Item 3",
        description: "This is the third item.",
        bgColor: "#9C27B0"
    },
    {
        title: "Item 4",
        description: "This is the fourth item.",
        bgColor: "#673AB7"
    },
    {
        title: "Item 5",
        description: "This is the fifth item.",
        bgColor: "#3F51B5"
    }
];

const carouselContainer = document.querySelector(".carousel-container");
const content = carouselContainer.querySelector(".content");
const backButton = carouselContainer.querySelector("button:first-of-type");
const forwardButton = carouselContainer.querySelector("button:last-of-type");

let currentItem = 0;

function updateCarousel() {
    content.innerHTML = `
      <div class="card-info">
        <h2>${items[currentItem].title}</h2>
        <p>${items[currentItem].description}</p>
      </div>
      <div class="card-container">
        <div class="card" style="background-color: ${items[currentItem].bgColor}">
        </div>
      </div>
    `;
}

updateCarousel();

backButton.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = items.length - 1;
    }
    updateCarousel();
});


forwardButton.addEventListener("click", () => {
    currentItem++;
    if (currentItem === items.length) {
        currentItem = 0;
    }
    updateCarousel();
});
