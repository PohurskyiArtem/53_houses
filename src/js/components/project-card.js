const tabBtns = document.querySelectorAll(".project-card__tab button");

tabBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    if(event.target.closest(".project-card__tab--left")) {
      event.target.closest(".project-card__content").querySelector(".project-card__price-list--left").style.display = "block";
      event.target.closest(".project-card__content").querySelector(".project-card__price-list--right").style.display = "none";

      event.target.closest(".project-card__tab--left").classList.add("project-card__tab--active");
      event.target.closest(".project-card__content").querySelector(".project-card__tab--right").classList.remove("project-card__tab--active");
    } else {
      event.target.closest(".project-card__content").querySelector(".project-card__price-list--right").style.display = "block";
      event.target.closest(".project-card__content").querySelector(".project-card__price-list--left").style.display = "none";

      event.target.closest(".project-card__tab--right").classList.add("project-card__tab--active");
      event.target.closest(".project-card__content").querySelector(".project-card__tab--left").classList.remove("project-card__tab--active");
    }
  })
})

