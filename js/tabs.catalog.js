document.addEventListener('DOMContentLoaded', function () {
  // Функция для табов с параметрами
  function setTabs(dataPath, dataTarget) {
    const painterBtn = document.querySelectorAll(`.catalog__subitem-author-btn[${dataPath}]`);
    const painterContent = document.querySelectorAll(`.js-tab[${dataTarget}]`);

    painterBtn.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
        const path = this.getAttribute(dataPath);
        console.log(path);
        const target = document.querySelector(`.js-tab[${dataTarget}="${path}"]`);


        painterBtn.forEach((currentBtn) => {
          currentBtn.classList.remove('is-active');
        });

        this.classList.add('is-active');

        painterContent.forEach((content) => {
          content.classList.remove('is-active');
        });

        target.classList.add('is-active');
      });
    });
  }

  // в аргументах функции передаем индивидуальные data атрибуты, которые установлены в разметке для кнопок и вкладок
  setTabs('data-painters-path', 'data-painters-target');

  // Функция для плавного скролла к табу художников
  // на ширине 970px и ниже в секции "Каталог"
  // function scrollToContent(link, isMobile) {
  //   if (isMobile && window.getWindowWidth() > window.HALFDESKTOP_WIDTH) {
  //     return;
  //   }

  //   const scrollPath = link.getAttribute('data-scroll-path');
  //   if (Boolean(scrollPath)) {
  //     const scrollTarget = document.getElementById(scrollPath);
  //     const elementPosition = scrollTarget.getBoundingClientRect().top;

  //     window.scrollBy({
  //       top: elementPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // }

  // document.querySelectorAll('.js-mobile-scroll').forEach(btn => {
  //   btn.addEventListener('click', function () {
  //     scrollToContent(this, true);
  //   });
  // });

})
