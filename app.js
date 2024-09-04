// Images in an array
let images = [
  "Assets/img/Image1.jpg",
  "Assets/img/Image2.jpg",
  "Assets/img/Image3.jpg",
  "Assets/img/Image4.jpg",
  "Assets/img/Image5.jpg",
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
