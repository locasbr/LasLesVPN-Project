// document.addEventListener('DOMContentLoaded', function () {
//     bulmaCarousel.attach('#slider', {
//         // Opções de configuração aqui (ex: slides visíveis, autoplay)
//     });
// });

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

    let currentIndex = 0;
    const slides = document.querySelectorAll('#slider .card');
    const totalSlides = slides.length;
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    function changeSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;
      updateCarousel();
    }

    function currentSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    // Opcional: auto-play
    // setInterval(() => changeSlide(1), 5000);