
let open = document.querySelector('.mobile-header .menu')
let close = document.querySelector('.sidemenu .close')
let side = document.querySelector('.sidemenu')
let heade = document.querySelector('header .container')
let mid = document.querySelector('header .mid-header-back')
let midLink = document.querySelector('header .mid-header-back a')

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


// slider
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
  let video = document.querySelector('.video-back video');
  let img = document.querySelector('.img-video img');

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


// carousel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');

let currdeg = 0,
    stepdeg = 60,
    intervalId = null,
    rotationId = null,
    rotationInProgress = false,
    mouseDownX = 0,
    mouseUpX = 0;

const dotsContainer = document.querySelector(".dots");
const totalSlides = items.length;

dotsContainer.innerHTML = "";
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots .dot");

function updateDots() {
  let index = Math.round((currdeg % 360) / -stepdeg);
  if (index < 0) index += totalSlides;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    stopRotation();
    let index = parseInt(dot.dataset.index);
    currdeg = -index * stepdeg;
    carousel.style.setProperty("transform", `rotateY(${currdeg}deg)`);
    items.forEach(item => item.style.setProperty("transform", `rotateY(${-currdeg}deg)`));
    updateDots();
    startRotation();
  });
});

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') stopRotation();
  else startRotation();
});

carousel.addEventListener('pointerdown', onPointerdown);

function onPointerdown(event) {
  mouseDownX = event.pageX;
  stopRotation();
  carousel.setPointerCapture(event.pointerId);
  carousel.addEventListener('pointerup', onPointerup);
  carousel.addEventListener('pointercancel', onPointerup);
  carousel.addEventListener('pointermove', onPointermove);
}

function onPointerup() {
  mouseDownX = 0;
  mouseUpX = 0;
  startRotation();
}

function onPointermove(event) {
  if (mouseDownX !== 0) {
    mouseUpX = event.pageX;
    handleSwipe();
  }
}

function handleSwipe() {
  let swipeThreshold = 50;
  if (mouseUpX - mouseDownX > swipeThreshold) rotate({ data: { dir: 'p' } });
  else if (mouseDownX - mouseUpX > swipeThreshold) rotate({ data: { dir: 'n' } });
}

function rotate(e) {
  if (rotationInProgress) return;
  rotationInProgress = true;

  if (e.data.dir == 'n') currdeg -= stepdeg;
  else if (e.data.dir == 'p') currdeg += stepdeg;

  carousel.style.setProperty('transform', `rotateY(${currdeg}deg)`);
  items.forEach(item => item.style.setProperty('transform', `rotateY(${-currdeg}deg)`));
  updateDots();

  rotationId = setTimeout(() => {
    clearTimeout(rotationId);
    rotationInProgress = false;
  }, 1000);
}

function startRotation() {
  if (intervalId === null) {
    rotationInProgress = false;
    intervalId = setInterval(() => {
      rotate({ data: { dir: 'n' } });
    }, 3000);
  }
}

function stopRotation() {
  if (intervalId !== null) {
    clearTimeout(rotationId);
    clearInterval(intervalId);
    intervalId = null;
    rotationInProgress = false;
  }
}
