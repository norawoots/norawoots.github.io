// Javascript generated with generative AI (because I didn't know how to do it myself, 
// and it wasn't in the scope of the course)

// Comments from me to show that I understand what each command does now!


// Creates lists of the images that will be generated
const cats = [
  "tinder/tinder-img/cat1.jpg",
  "tinder/tinder-img/cat2.jpeg",
  "tinder/tinder-img/cat3.jpg",
  "tinder/tinder-img/cat4.jpeg",
  "tinder/tinder-img/cat5.jpeg",
  "tinder/tinder-img/cat6.jpg",
  "tinder/tinder-img/cat7.jpg"
];

const dogs = [
  "tinder/tinder-img/dog1.jpg",
  "tinder/tinder-img/dog2.jpg",
  "tinder/tinder-img/dog3.jpg",
  "tinder/tinder-img/dog4.jpg",
  "tinder/tinder-img/dog5.jpeg",
  "tinder/tinder-img/dog6.jpg",
  "tinder/tinder-img/dog7.jpeg",
  "tinder/tinder-img/dog8.jpeg"
];

// Gets the HTML elements card and swipeButton to use them in the JS
const card = document.getElementById("card");
const swipeButton = document.getElementById("swipeButton");
const resetButton = document.getElementById("resetButton");

// Again, gets the HTML elements in the HTML document to act on them in the JS
const catCountEl = document.getElementById("catCount");
const dogCountEl = document.getElementById("dogCount");
const dogRatioEl = document.getElementById("dogRatio");
const catRatioEl = document.getElementById("catRatio");

// Sets the values of the HTML elements
let catCount = 0;
let dogCount = 0;
let currentType = null;

// Gets the CSS element .card-container to act on the CSS styling later
const cardContainer = document.querySelector(".card-container");


// Function that generates the random image
function getRandomImage() {
  const leftTrue = Math.random() < 0.8;     // Boolean value, trie when the number is less than 0.8
  const newCard = document.createElement("img");    // Creates a neq img element in the HTML that will go where the img placeholder is in the HTML
  newCard.classList.add("card");    // Creates CSS styling that matches that image

  if (leftTrue) {   // If leftTrue is true (which is more likely because it is a 80% chance to be true)
    currentType = "cat";    // The current image is a cat
    newCard.src = cats[Math.floor(Math.random() * cats.length)];    // Picks a random image from the image list of cats
  } else {      // Otherwise does the same two things for dogs
    currentType = "dog";
    newCard.src = dogs[Math.floor(Math.random() * dogs.length)];
  }

  cardContainer.appendChild(newCard);   // Puts the selected image onto the page

  // Removes the old card after swipe animation
  const oldCard = cardContainer.querySelector(".card:not(:last-child)");
  if (oldCard) oldCard.remove();
}


// For the results page, updates the stats
function updateStats() {
  catCountEl.textContent = catCount; // Changes the text of the HTML element to the current ccat ount
  dogCountEl.textContent = dogCount; // Above, but dogs

  const total = catCount + dogCount; // Updates the total count
  const dogRatio = total === 0 ? 0 : Math.round((dogCount / total) * 100); // 
  const catRatio = 100 - dogRatio

  dogRatioEl.textContent = dogRatio + "%";
  catRatioEl.textContent = catRatio + "%";

  const pieChart = document.getElementById("pieChart"); // Gets the pie chart element in CSS
  pieChart.style.background = `conic-gradient(#F5D491 0% ${catRatio}%, #e47874 ${catRatio}% 100%)`; // Updates the ratios
}


// Swipe function to make images tranform upon swipe button click
function swipe() {
  const card = cardContainer.querySelector(".card:last-child"); // Finds the last card in the cardContainer container
  if (!card || !currentType) return; // Checks to make sure there is a card there

  const swipeClass = currentType === "cat" ? "swipe-left" : "swipe-right"; // Decides which animation depending on if the card is a cat or a dog

  card.classList.add(swipeClass); // Adds the specific animation to the current card depending on the card type

  // Update current counts
  if (currentType === "cat") catCount++;
  else dogCount++;

  // Call update stats function, and update states
  updateStats();

  // Wait for animation to finish, then create the next card
  setTimeout(() => {
    getRandomImage();
  }, 500);
}


// I wrote this function
function reset() {
    catCount = 0;
    dogCount = 0;

    catCountEl.textContent = catCount;
    dogCountEl.textContent = dogCount;

    dogRatioEl.textContent = "0%";
    catRatioEl.textContent = "0%";

    pieChart.style.background = `conic-gradient(#F5D491 0% 50%, #e47874 50% 100%)`;
}

// Wait to do swipe until the button is clicked
swipeButton.addEventListener("click", swipe);

// Wait to do swipe until the button is clicked
resetButton.addEventListener("click", reset);

// Initial load
getRandomImage();