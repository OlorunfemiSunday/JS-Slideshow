// Images in an array
let images = [
  "Images/Image1.jpg",
  "Images/Image2.jpg",
  "Images/Image3.jpg",
  "Images/Image4.jpg",
  "Images/Image5.jpg",
];

// To keep track of the current image index
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}
