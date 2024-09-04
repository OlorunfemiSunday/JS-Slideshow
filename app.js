// Images in an array
let images = [
  "img/Image1.jpg",
  "img/Image2.jpg",
  "img/Image3.jpg",
  "img/Image4.jpg",
  "img/Image5.jpg",
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
