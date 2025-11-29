
let open = document.querySelector('.mobile-header .menu')
let close = document.querySelector('.sidemenu .close')
let side = document.querySelector('.sidemenu')

open.onclick = ()=> side.classList.add('open')

close.onclick = () => side.classList.remove('open')


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
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stagePadding: 35,
        nav: true,
        dots: true,
        dotsContainer: '.custom-dots',
        responsive:{
            0: {
                items:2
            },
            768: {
                items:1
            }
         }
        })
  });

// list && grid
document.addEventListener('DOMContentLoaded', () => {

  const gridBtn = document.querySelector('.view-grid');
  const listBtn = document.querySelector('.view-list');
  const row = document.querySelector('.products-shop .row');

  if (gridBtn && listBtn && row) {
    listBtn.addEventListener('click', () => {
      row.classList.add('list-view');
    });

    gridBtn.addEventListener('click', () => {
      row.classList.remove('list-view');
    });
  }
 
  // select
  const filter = document.getElementById("filter");
  const cards = document.querySelectorAll(".products-shop .col-6");

  if (filter && cards.length > 0) {
    filter.onchange = () => {
      cards.forEach(c => {
        c.style.display = "none";

        if (filter.value === "all") c.style.display = "block";
        if (filter.value === "new" && c.querySelector(".new")) c.style.display = "block";
        if (filter.value === "discount" && c.querySelector(".percent")) c.style.display = "block";
      });
    };
  }

});




// gallery

function registerComponent() {
    Alpine.data('lightbox', function() {
      return {
        urls: [],
        index: 0,

        init() {
          this.urls = Array.from(this.$root.querySelectorAll('.gallery img'))
                           .map(img => img.src);
        }
      }
    });
  }

  document.addEventListener('alpine:init', registerComponent, false);

  // counter
document.addEventListener('DOMContentLoaded', () => {
  const minusBtn = document.getElementById("minus-btn");
  const count = document.getElementById("count");
  const plusBtn = document.getElementById("plus-btn");

  if (minusBtn && count && plusBtn) {
    let countNum = 1;
    count.innerHTML = countNum;

    minusBtn.addEventListener("click", () => {
      if (countNum > 1) { 
        countNum -= 1;
        count.innerHTML = countNum;
      }
    });

    plusBtn.addEventListener("click", () => {
      countNum += 1;
      count.innerHTML = countNum;
    });
  }

  const form = document.querySelector('form');
  const req_inputs = document.querySelectorAll('.required');

  if (form && req_inputs.length > 0) {

    form.onsubmit = (e) => {
      req_inputs.forEach(el => {
        if (el.value.trim().length === 0) {
          e.preventDefault();
          el.style.borderColor = 'red';
        } else {
          el.style.borderColor = '#ababab';
        }
      });
    };

    form.onkeyup = () => {
      req_inputs.forEach(el => {
        if (el.value.trim().length > 0) {
          el.style.borderColor = '#ababab';
        } else {
          el.style.borderColor = 'red';
        }
      });
    };

  }
});
