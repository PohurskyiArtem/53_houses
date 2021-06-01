document.querySelector(".header__burger-btn").addEventListener("click", e => {
  e.currentTarget.querySelector(".burger-btn").classList.toggle("active");
  document.querySelector(".header__bottom").classList.toggle("header__bottom--active");
  document.querySelector(".header__top").classList.toggle("header__top--active");
  document.querySelector(".header__mobile-white-bg").classList.toggle("header__mobile-white-bg--open");
  document.querySelector("body").classList.toggle("menu-open")
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

document.querySelectorAll(".header-nav__item--dropdown svg").forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest(".header-nav__item--dropdown").classList.toggle("header-nav__item--dropdown--open")
  })
})
