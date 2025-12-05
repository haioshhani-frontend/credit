
let open = document.querySelector('.mobile-header .menu')
let close = document.querySelector('.sidemenu .close')
let side = document.querySelector('.sidemenu')
let heade = document.querySelector('header .container')
let mid = document.querySelector('header .mid-header')
let midLink = document.querySelector('header .mid-header a')

open.onclick = ()=> side.classList.add('open')

close.onclick = () => side.classList.remove('open')


  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      heade.classList.add('active');
      mid.classList.add('active');
      midLink.classList.add('active');
    } else {
      if (window.innerWidth < 992) {
        heade.classList.add('active');
        mid.classList.add('active');
      midLink.classList.add('active');
      } else {
        heade.classList.remove('active');
        mid.classList.remove('active');
      midLink.classList.remove('active');
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-shop');
  const closeBtn = document.querySelector('.close-shop');
  const cart = document.querySelector('.shopping-cart');
  const overlay = document.querySelector('.overlay');

  if (openBtn && closeBtn && cart && overlay) {
    openBtn.addEventListener('click', () => {
      cart.classList.add('open-shop');
    });

    closeBtn.addEventListener('click', () => {
      cart.classList.remove('open-shop');
    });

    overlay.addEventListener('click', () => {
      cart.classList.remove('open-shop');
    });
  }
});
 document.addEventListener('DOMContentLoaded', () => {
  const openBtnMo = document.querySelector('.open-shop-mobile');
  const closeBtn = document.querySelector('.close-shop');
  const cart = document.querySelector('.shopping-cart');
  const overlay = document.querySelector('.overlay');

if (openBtnMo && closeBtn && cart && overlay) {
    openBtnMo.addEventListener('click', () => {
      cart.classList.add('open-shop-mobile');
    });

    closeBtn.addEventListener('click', () => {
      cart.classList.remove('open-shop-mobile');
    });

    overlay.addEventListener('click', () => {
      cart.classList.remove('open-shop-mobile');
    });
  }
});


// carousel
document.addEventListener("DOMContentLoaded", () => {

  const sliderContent = document.getElementById("slider-content");
  const slides = Array.from(sliderContent.children);
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const dotsContainer = document.querySelector(".custom-dots");

  let currentIndex = 2;

  slides.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".custom-dots span");

  function activateDot(i) {
    dots.forEach(d => d.classList.remove("active"));
    dots[i].classList.add("active");
  }

  activateDot(currentIndex);

  function updateSlider() {
    slides.forEach(slide => {
      slide.classList.remove(
        "position-1",
        "position-2",
        "position-3",
        "position-4",
        "position-5"
      );
    });

    let total = slides.length;

    let indices = [
      (currentIndex - 2 + total) % total,
      (currentIndex - 1 + total) % total,
      currentIndex,
      (currentIndex + 1) % total,
      (currentIndex + 2) % total,
    ];

    slides[indices[0]].classList.add("position-1");
    slides[indices[1]].classList.add("position-2");
    slides[indices[2]].classList.add("position-3");
    slides[indices[3]].classList.add("position-4");
    slides[indices[4]].classList.add("position-5");

    activateDot(currentIndex);
  }

  updateSlider();

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      updateSlider();
    });
  });

});

// video && img
document.addEventListener('DOMContentLoaded', () => {
  let video = document.querySelector('#use .video-back video');
  let img = document.querySelector('#use .img-video img');

  if (video && img) {

    img.onclick = () => {
      if (!img.classList.contains('active')) {
        img.classList.add('active');
        video.play();
      }
    };

    video.onclick = () => {
      if (img.classList.contains('active')) {
        video.pause();
        img.classList.remove('active');
      }
    };

  }
});
