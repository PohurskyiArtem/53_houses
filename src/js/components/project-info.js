const navList = document.querySelectorAll(".product-info-nav__item");

navList.forEach(el => {
  el.addEventListener("click", e => {
    navList.forEach(el => {
      el.classList.remove("product-info-nav__item--active")
    })

    e.currentTarget.classList.add("product-info-nav__item--active");
  })
})
