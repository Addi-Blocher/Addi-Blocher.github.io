let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click, darken');

function darken()
{
    if (btn.getAttribute('class')=== 'dark')
    {
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn,textContent='Lighten';
    }
    else
    {
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor = 'rgba(o,o,o,o)';
        btn.textContent = 'Darken';
    }
}
