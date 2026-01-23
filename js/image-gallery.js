// Slideshow capability retrieved from: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-item");
  let dots = document.getElementsByClassName("slide-dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slide-active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("slide-active");
}