const slider = document.querySelector('.slider');
const imageWidth = 350 + 40; // Image width + padding

function scrollLeft() {
  slider.scrollBy({
    left: -imageWidth,
    behavior: 'smooth'
  });
}

function scrollRight() {
  slider.scrollBy({
    left: imageWidth,
    behavior: 'smooth'
  });
}


