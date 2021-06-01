const checkboxes = document.querySelectorAll(".custom-checkbox-agree");

checkboxes.forEach(el => {
  el.querySelector("input").addEventListener('change', (e) => {
    let checked = el.querySelector('input').checked;
    if(checked) {
      el.classList.add("custom-checkbox-agree--active");
    } else {
      el.classList.remove("custom-checkbox-agree--active");
    }
  })
})

document.querySelectorAll(".callback-form .callback-form-social-list__item").forEach(el => {
  el.querySelector("input").addEventListener('change', (e) => {
    let checked = el.querySelector('input').checked;
    if(checked) {
      el.classList.add("callback-form-social-list__item--active");
    } else {
      el.classList.remove("callback-form-social-list__item--active");
    }
  })
})
