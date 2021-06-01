const callbackForm = () => {
  return (
    `
    <div class="popup-callback pop-up pop-up-container">
      <div class="popup-callback__form">
        <div class="popup-callback__form__header">
          <span>оставить заявку</span>
          <button class="btn-reset close-popup">
            <svg>
              <use xlink:href="img/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>
        <div class="popup-callback__form__content">
          <span class="popup-callback__form__social-descr">как с вами связаться:</span>
          <form class="callback-form">
            <div class="popup-callback__form__social">
              <ul class="callback-form-social-list__list">
                <li class="callback-form-social-list__item callback-form-social-list__item--whats">
                  <label for="WhatsApp">
                    <input type="checkbox" name="WhatsApp" id="WhatsApp" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/whatsapp-ios.png" alt="WhatsApp icon">
                    <a class="callback-form-social-list__link">WhatsApp</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--viber">
                  <label for="Viber">
                    <input type="checkbox" name="Viber" id="Viber" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/viber-ios.png" alt="Viber icon">
                    <a class="callback-form-social-list__link">Viber</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--telega">
                  <label for="Telegram">
                    <input type="checkbox" name="Telegram" id="Telegram" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/telega-ios.png" alt="Telegram icon">
                    <a class="callback-form-social-list__link">Telegram</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--call">
                  <label for="Call">
                    <input type="checkbox" name="Call" id="Call" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/call-ios.png" alt="Call icon">
                    <a class="callback-form-social-list__link">Звонок</a>
                  </label>
                </li>
              </ul>
            </div>
            <span class="callback-form__label">Как к вам обращаться:</span>
            <input class="callback-form__phone callback-form__phone--name phone-input" type="text" name="name" placeholder="Имя" required>
            <span class="callback-form__label">Введите номер телефона:</span>
            <input class="callback-form__phone phone-input" inputmode="tel" type="tel" name="tel" placeholder="Номер телефона" required>
            <button class="btn-reset yellow-btn callback-form__btn" type="submit">
              <img src="../img/finger.png" alt="finger icon">
              <span>записаться</span>
            </button>
            <label for="agree-cb" class="callback-form__agree custom-checkbox-agree">
              <input type="checkbox" name="agree-cb" id="agree-cb" class="visually-hidden custom-checkbox-agree__input" required>
              <span class="custom-checkbox-agree__text">
                Нажимая на кнопку «Отправить заявку», я даю свое согласие на обработку персональных данных в соответствии с политикой конфиденциальности
              </span>
            </label>
          </form>
        </div>
        <div class="popup-callback__form__footer">
          <span class="popup-callback__form__footer__title">Или свяжитесь самостоятельно</span>
          <a href="tel:+8 800 250 53 23" class="popup-callback__form__footer__tel">8 800 250 53 23</a>
          <span class="popup-callback__form__footer__descr">Ежедневно, 9:00 — 18:00</span>
          <ul class="contacts-messengers popup-callback__form__footer__messengers">
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--whats"></a></li>
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--viber"></a></li>
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--telegram"></a></li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
}

const responseToRequest = name => {
  return (
    `
    <div class="popup-callback pop-up pop-up-container">
      <div class="popup-callback__form">
        <div class="popup-callback__form__header">
          <span>заявка отправлена</span>
          <button class="btn-reset close-popup">
            <svg>
              <use xlink:href="img/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>
        <div class="popup-callback__form__content popup-callback__form__content--response">
          <span class="popup-callback__form__content__name">${name ? name : "Уважаемый клиент"},</span>
          <p class="popup-callback__form__content__text">мы получили вашу заявку и начали ее обработку, ожидайте звонка от нашего менеджера ;)</p>
          <a class="popup-callback__form__content__back-link">вернуться на сайт</a>
        </div>
        <div class="popup-callback__form__footer">
          <span class="popup-callback__form__footer__title">Или свяжитесь самостоятельно</span>
          <a href="tel:+8 800 250 53 23" class="popup-callback__form__footer__tel">8 800 250 53 23</a>
          <span class="popup-callback__form__footer__descr">Ежедневно, 9:00 — 18:00</span>
          <ul class="contacts-messengers popup-callback__form__footer__messengers">
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--whats"></a></li>
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--viber"></a></li>
            <li class="contacts-messengers__item"><a href="#" class="contacts-messengers__link contacts-messengers__link--telegram"></a></li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
}

const calculateModal = () => {
  return (
    `
    <div class="popup-callback pop-up pop-up-container">
      <div class="popup-callback__form">
        <div class="popup-callback__form__header">
          <span>рассчитать проект</span>
          <button class="btn-reset close-popup">
            <svg>
              <use xlink:href="img/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>
        <div class="popup-callback__form__content">
          <form class="callback-form">
            <select class="popup-callback__form__select" name="plan">
              <option>Под усадку</option>
              <option>Под ключ</option>
              <option>Дачный</option>
              <option>Зимний</option>
              <option>Не разбираюсь - помогите с этим</option>
            </select>
            <span class="popup-callback__form__social-descr">как с вами связаться:</span>
            <div class="popup-callback__form__social">
              <ul class="callback-form-social-list__list">
                <li class="callback-form-social-list__item callback-form-social-list__item--whats">
                  <label for="WhatsApp">
                    <input type="checkbox" name="WhatsApp" id="WhatsApp" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/whatsapp-ios.png" alt="WhatsApp icon">
                    <a class="callback-form-social-list__link">WhatsApp</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--viber">
                  <label for="Viber">
                    <input type="checkbox" name="Viber" id="Viber" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/viber-ios.png" alt="Viber icon">
                    <a class="callback-form-social-list__link">Viber</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--telega">
                  <label for="Telegram">
                    <input type="checkbox" name="Telegram" id="Telegram" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/telega-ios.png" alt="Telegram icon">
                    <a class="callback-form-social-list__link">Telegram</a>
                  </label>
                </li>
                <li class="callback-form-social-list__item callback-form-social-list__item--call">
                  <label for="Call">
                    <input type="checkbox" name="Call" id="Call" class="visually-hidden">
                    <img class="callback-form-social-list__img" src="../img/call-ios.png" alt="Call icon">
                    <a class="callback-form-social-list__link">Звонок</a>
                  </label>
                </li>
              </ul>
            </div>
            <span class="callback-form__label">Введите номер телефона:</span>
            <input class="callback-form__phone phone-input" inputmode="tel" type="tel" name="tel" placeholder="Номер телефона" required>
            <button class="btn-reset yellow-btn callback-form__btn" type="submit">
              <img src="../img/finger.png" alt="finger icon">
              <span>отправить заявку</span>
            </button>
            <label for="agree-cb" class="callback-form__agree custom-checkbox-agree">
              <input type="checkbox" name="agree-cb" id="agree-cb" class="visually-hidden custom-checkbox-agree__input" required>
              <span class="custom-checkbox-agree__text">
                Нажимая на кнопку «Отправить заявку», я даю свое согласие на обработку персональных данных в соответствии с политикой конфиденциальности
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
    `
  )
}

const callbackPopUp = () => {
  document.body.insertAdjacentHTML('afterbegin', callbackForm());
  let callback_input_phone = document.querySelector('.callback-form input[type=tel]');
  let imf = new Inputmask('+8 (999) 999-99-99');
  imf.mask(callback_input_phone);
  document.querySelectorAll(".pop-up .callback-form-social-list__item").forEach(el => {
    el.querySelector("input").addEventListener('change', (e) => {
      let checked = el.querySelector('input').checked;
      if(checked) {
        el.classList.add("callback-form-social-list__item--active");
      } else {
        el.classList.remove("callback-form-social-list__item--active");
      }
    })
  })
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
  document.querySelector(".pop-up .custom-checkbox-agree input").addEventListener('change', (e) => {
    let checked = e.target.checked;
    if(checked) {
      document.querySelector(".custom-checkbox-agree").classList.add("custom-checkbox-agree--active");
    } else {
      document.querySelector(".custom-checkbox-agree").classList.remove("custom-checkbox-agree--active");
    }
  })


  document.querySelector(".callback-form").addEventListener("submit", e => {
    e.preventDefault();
    let name = e.target.querySelector('input[name="name"]').value;
    document.querySelector(".pop-up").remove();
    document.body.insertAdjacentHTML('afterbegin', responseToRequest(name));
    document.querySelector("body").classList.add("menu-open");
    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });
    document.querySelector(".popup-callback__form__content__back-link").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
      location.href = "/";
    })
    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.target.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });
  })
}

document.querySelectorAll(".open-callback-modal").forEach(btn => {
  btn.addEventListener("click", callbackPopUp);
})


if(document.querySelector(".excursion__phone")) {
  document.querySelector(".excursion__phone .callback-form").addEventListener("submit", e => {
    e.preventDefault();
    document.body.insertAdjacentHTML('afterbegin', responseToRequest());
    document.querySelector("body").classList.add("menu-open");
    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });
    document.querySelector(".popup-callback__form__content__back-link").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
      location.href = "/";
    })
    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.target.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });
  })
}

if(document.querySelector(".callback")) {
  document.querySelector(".callback .callback-form").addEventListener("submit", e => {
    e.preventDefault();
    document.body.insertAdjacentHTML('afterbegin', responseToRequest());
    document.querySelector("body").classList.add("menu-open");
    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });
    document.querySelector(".popup-callback__form__content__back-link").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
      location.href = "/";
    })
    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.target.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });
  })
}


const calculatePopUp = () => {
  document.body.insertAdjacentHTML('afterbegin', calculateModal());
  document.querySelectorAll(".pop-up .callback-form-social-list__item").forEach(el => {
    el.querySelector("input").addEventListener('change', (e) => {
      let checked = el.querySelector('input').checked;
      if(checked) {
        el.classList.add("callback-form-social-list__item--active");
      } else {
        el.classList.remove("callback-form-social-list__item--active");
      }
    })
  })
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
  document.querySelector(".pop-up .custom-checkbox-agree input").addEventListener('change', (e) => {
    let checked = e.target.checked;
    if(checked) {
      document.querySelector(".custom-checkbox-agree").classList.add("custom-checkbox-agree--active");
    } else {
      document.querySelector(".custom-checkbox-agree").classList.remove("custom-checkbox-agree--active");
    }
  })


  document.querySelector(".callback-form").addEventListener("submit", e => {
    e.preventDefault();
    document.querySelector(".pop-up").remove();
    document.body.insertAdjacentHTML('afterbegin', responseToRequest());
    document.querySelector(".close-popup").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
    });
    document.querySelector(".popup-callback__form__content__back-link").addEventListener("click", e => {
      document.querySelector(".pop-up").remove();
      document.querySelector("body").classList.remove("menu-open");
      location.href = "/";
    })
    document.querySelector(".pop-up-container").addEventListener("click", e => {
      if (e.target.classList.contains("pop-up")) {
        document.querySelector(".pop-up").remove();
        document.querySelector("body").classList.remove("menu-open");
      }
    });
  })
}

document.querySelectorAll(".open-calculate-modal").forEach(btn => {
  btn.addEventListener("click", calculatePopUp);
})
