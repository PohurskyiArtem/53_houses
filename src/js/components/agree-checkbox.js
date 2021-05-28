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
