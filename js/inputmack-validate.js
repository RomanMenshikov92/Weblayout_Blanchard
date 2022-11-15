// document.addEventListener('DOMContentLoaded', function () {
// console.log('Init!');
// initialization Inputmask
var inputTel = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(inputTel);


// initialization Just Validate
new window.JustValidate('.contact__form', {
  // colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      name: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const ph = inputTel.inputmask.unmaskedvalue()
        return Number(ph) && ph.length === 10
      }
    }
  },

  messages: {
    name: {
      required: 'Обязательное поле для заполнения',
      name: "Недопустимый формат",
      minLength: 'Введите от двух букв вашего имени',
      maxLength: 'Введите до 15 букв вашего имени',
    },

    tel: {
      required: 'Обязательное поле для заполнения',
      function: 'Телефон должен содержать 10 цифр',
    }
  },
  submitHandler: function (thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
// })
