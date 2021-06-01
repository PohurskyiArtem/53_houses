const imageZoom = src => {
  return (
    `
    <div class="popup-callback pop-up pop-up--image pop-up-container">
      <button class="btn-reset close-popup">
            <svg>
              <use xlink:href="img/sprite.svg#cross"></use>
            </svg>
      </button>
      <img class="image-zoom" src="${src}">
    </div>
    `
  )
}

document.querySelectorAll(".project-card__img").forEach(el => {
  let src = el.src;
  el.addEventListener('click', () => {
    document.body.insertAdjacentHTML('afterbegin', imageZoom(src));
    document.querySelector("body").classList.add("menu-open");

    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });

    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.currentTarget.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });
  })
})

const imageZoomSlider = imageList => {
  let slides = ``;
  imageList.forEach((src, index) => {
      slides += `
      <div class="swiper-slide">
        <img class="pop-up__slider-img" data-index="${index}" src="${src}">
      </div>
      `
  })

  return (
    `
    <div class="popup-callback pop-up pop-up--sliderImages pop-up--image pop-up-container">
      <button class="btn-reset close-popup">
            <svg>
              <use xlink:href="img/sprite.svg#cross"></use>
            </svg>
      </button>
      <div class="pop-up__slider-prev-btn"></div>
      <div class="pop-up__slider-next-btn"></div>
      <div class="pop-up__slider">
        <div class="swiper-wrapper">
          ${slides}
        </div>
      </div>
    </div>
    `
  )
}

document.querySelectorAll(".review-card__image").forEach(el => {
  let imageList = [];
  imageList.push(el.src);
  el.closest(".review-card__gallery").querySelectorAll(".review-card__preview-slider__slide img").forEach(img => {
    imageList.push(img.src);
  })
  el.addEventListener('click', () => {
    document.body.insertAdjacentHTML('afterbegin', imageZoomSlider(imageList));
    document.querySelector("body").classList.add("menu-open");

    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });

    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.target.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });

    const popUpSliderReview = new Swiper(document.querySelector(".pop-up__slider"), {
      loop: true,
      navigation: {
        nextEl: '.pop-up__slider-next-btn',
        prevEl: '.pop-up__slider-prev-btn'
      },
    })
  })
})

if(document.querySelector(".main-project")) {
  let imageListProjects = [];
  document.querySelectorAll(".product-page-card__gallery .swiper-slide img").forEach(img => {
    imageListProjects.push(img.src);
  })
  document.querySelectorAll(".product-page-card__gallery .swiper-slide img").forEach(img => {
    img.addEventListener("click", () => {
      document.body.insertAdjacentHTML('afterbegin', imageZoomSlider(imageListProjects));
      document.querySelector("body").classList.add("menu-open");

      document.querySelector(".close-popup").addEventListener("click", e => {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      });

      document.querySelector(".pop-up-container").addEventListener("click", e => {
        if (e.target.classList.contains("pop-up")) {
          document.querySelector(".pop-up").remove();
          document.querySelector("body").classList.remove("menu-open");
        }
      });

      const popUpSliderProject = new Swiper(document.querySelector(".pop-up__slider"), {
        loop: true,
        navigation: {
          nextEl: '.pop-up__slider-next-btn',
          prevEl: '.pop-up__slider-prev-btn'
        },
      })
    })
  })
}

