const navList = document.querySelectorAll(".product-info-nav__item");

navList.forEach(el => {
  el.addEventListener("click", e => {
    navList.forEach(el => {
      el.classList.remove("product-info-nav__item--active")
    })

    e.currentTarget.classList.add("product-info-nav__item--active");
  })
})

document.querySelectorAll(".open-plan").forEach(el => {
  el.addEventListener("click", e => {
    let set = e.target.getAttribute("data-set");

    let item = document.querySelector(`.product-info .product-info-nav__item[data-set="${set}"]`);
    let itemRect = item.getBoundingClientRect();
    let itemOffset = document.body.scrollTop + itemRect.top + 600;
    console.log(itemOffset)
    window.scrollTo(0, itemOffset);
    navList.forEach(el => {
      el.classList.remove("product-info-nav__item--active")
    })
    item.classList.add("product-info-nav__item--active");
  })
})
