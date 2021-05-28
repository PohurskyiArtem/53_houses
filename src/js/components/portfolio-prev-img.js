document.querySelectorAll(".portfolio-slider__preview-item img").forEach(img => {
  img.addEventListener("click", e => {
    let src = e.target.src;
    let alt = e.target.alt;
    let main_img = e.target.closest(".portfolio-slider__item").querySelector(".portfolio-slider__img");
    e.target.src = main_img.src;
    e.target.alt = main_img.alt;
    main_img.src = src;
    main_img.alt = alt;
  })
})

document.querySelectorAll(".review-card__preview-slider__slide img").forEach(img2 => {
  img2.addEventListener("click", e => {
    console.log(e.target)
    let src = e.target.src;
    let alt = e.target.alt;
    let main_img = e.target.closest(".review-card__gallery").querySelector(".review-card__image");
    e.target.src = main_img.src;
    e.target.alt = main_img.alt;
    main_img.src = src;
    main_img.alt = alt;
  })
})
