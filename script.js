let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
  resetSlideInterval();
  showSlide((currentSlide += n));
}

function setSlide(n) {
  resetSlideInterval();
  showSlide((currentSlide = n));
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) currentSlide = 1;
  if (n < 1) currentSlide = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentSlide - 1].style.display = "block";
  dots[currentSlide - 1].classList.add("active");
}

let slideInterval = setInterval(() => changeSlide(1), 5000);

function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => changeSlide(1), 5000);
}
