document.querySelector(".footer__burger-btn").addEventListener("click", e => {
  e.currentTarget.querySelector(".burger-btn").classList.toggle("active");
  e.currentTarget.classList.toggle("footer__burger-btn--active");
  if(e.currentTarget.querySelector(".burger-text").textContent === "открыть меню") {
    e.currentTarget.querySelector(".burger-text").textContent = "закрыть меню"
  } else {
    e.currentTarget.querySelector(".burger-text").textContent = "открыть меню"
  }
  document.querySelector(".footer__links").classList.toggle("footer__links--active");
  document.querySelector("body").classList.toggle("menu-open")
  let item = document.querySelector(".footer__burger-btn");
  item.scrollIntoView();
  // let itemRect = item.getBoundingClientRect();
  // let itemOffset = document.body.scrollBottom + itemRect.top;
  // window.scrollTo(0, itemOffset);
  // let scrollHeight = (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)) - 1050;
  // window.scrollTo(0, scrollHeight);

});

document.querySelectorAll(".header-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".burger-btn").classList.remove("active");
    document.querySelector(".header__bottom").classList.remove("header__bottom--active");
    document.querySelector(".header__top").classList.remove("header__top--active");
    document.querySelector("body").classList.remove("menu-open");
    document.querySelector(".header__mobile-white-bg").classList.remove("header__mobile-white-bg--open");
  })
})

if(document.querySelector(".catalog-filters")) {
  document.querySelector(".hide-filters").addEventListener('click', e => {
    document.querySelector(".catalog-filters__main").classList.toggle("catalog-filters__main--active");
    e.target.classList.toggle("hide-filters--active");
  })
}
