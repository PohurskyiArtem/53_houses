import Swiper from '../vendor/swiper.min.js';

const projectsSlider = new Swiper(document.querySelector(".projects__slider"), {
  loop: true,
  allowTouchMove: false,
  spaceBetween: 20,
  navigation: {
    nextEl: '.projects-slider-nav__next-btn',
    prevEl: '.projects-slider-nav__prev-btn'
  },
  slidesPerView: 2,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.projects__slider__pag',
    type: 'bullets',
    clickable: true
  }
})

const cardGallery = new Swiper(document.querySelectorAll(".project-card__gallery"), {
  loop: true,
  pagination: {
    el: ".project-card__swiper-pag",
    type: 'bullets',
    clickable: false
  }
})

const portfolioSlider = new Swiper(document.querySelector(".portfolio-slider"), {
  loop: true,
  pagination: {
    el: ".portfolio-slider__pag",
    type: 'bullets',
    clickable: true
  }
})

const previewSlider = new Swiper(document.querySelectorAll(".review-card__preview-slider"), {
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.review-card__preview-slider__next-btn',
    prevEl: '.review-card__preview-slider__prev-btn'
  },
  spaceBetween: 15,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    }
  },
})

const reviewSlider = new Swiper(document.querySelector(".reviews__slider"), {
  loop: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.reviews__slider__next-btn',
    prevEl: '.reviews__slider__prev-btn'
  },
  pagination: {
    el: ".reviews__slider-pag",
    type: 'bullets',
    clickable: true
  }
})

const projectPageSlider = new Swiper(document.querySelector(".product-page-card__gallery"), {
  loop: true,
  navigation: {
    nextEl: '.product-page-card__next-btn',
    prevEl: '.product-page-card__prev-btn'
  },
  pagination: {
    el: ".product-page-card__paginaton",
    clickable: true,
    type : 'custom',
    bulletClass:'product-page-card__prev-image'
  }
})




