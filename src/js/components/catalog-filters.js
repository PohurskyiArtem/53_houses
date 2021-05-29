if(document.querySelector('.catalog-filters')) {
  const createChoiceItem = text => {
    return (
      `
      <li class="catalog-filters__choice-item" data-choice-text="${text}">
          <span>${text}</span>
      </li>
      `
    )
  }

  const checkboxes = document.querySelectorAll(".catalog-filters__checkbox");
  const choiceList = document.querySelector(".catalog-filters__choice-list");
  const clearBtn = document.querySelector(".catalog-filters__reset-filters");

  const disableClearBtn = () => {
    if(document.querySelectorAll(".catalog-filters__choice-item").length == 0) {
      clearBtn.setAttribute("disabled", "true")
    } else {
      clearBtn.removeAttribute("disabled")
    }
  }

  checkboxes.forEach(el => {
    el.querySelector("input").addEventListener('change', (e) => {
      let checked = el.querySelector('input').checked;
      if(checked) {
        el.classList.add("catalog-filters__checkbox--active");
        let text = el.querySelector('.catalog-filters__checkbox-text').textContent;
        choiceList.insertAdjacentHTML('afterbegin', createChoiceItem(text));

        disableClearBtn();
      } else {
        el.classList.remove("catalog-filters__checkbox--active");

        let text = el.dataset.text;
        document.querySelector(`[data-choice-text="${text}"]`).remove();

        disableClearBtn();
      }
    })

  })

  clearBtn.addEventListener("click", e => {
    document.querySelectorAll(".catalog-filters__choice-item").forEach(el => {
      el.remove();
      checkboxes.forEach(checkbox => {
        checkbox.querySelector('input').checked = false;
        checkbox.classList.remove("catalog-filters__checkbox--active");
      })
    })

    e.target.setAttribute("disabled", "true");
  })

  document.querySelectorAll(".catalog-filters__inputs-list__item input").forEach(el => {
    el.addEventListener("focus", e => {
      e.target.style.borderColor = "var(--color-cerulean)";
    })
    el.addEventListener("blur", e => {
      e.target.style.borderColor = "var(--color-mystic)";
    })
  })



  //Range slider

  const rangeSlider = document.querySelector(".catalog-filters__range");
  const inputNumber = document.querySelectorAll('.catalog-filters__inputs-list__item input');

  noUiSlider.create(rangeSlider, {
    start: [220000, 1500000],
    connect: true,
    range: {
        'min': 0,
        'max': 2000000
    }
  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {

      var value = values[handle];

      if (handle) {
          inputNumber[1].value = Math.round(value);
      } else {
        inputNumber[0].value = Math.round(value);
      }
  });

  inputNumber.forEach(el => {
    el.addEventListener('change', function () {
      html5Slider.noUiSlider.set([null, this.value]);
    })
  })
}




