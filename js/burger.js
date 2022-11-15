document.addEventListener('DOMContentLoaded', function () {
  // function burger
  function setBurger(params) {
    // initialization burger
    const burgerBtn = document.querySelector(`.${params.btnClass}`);
    const burgerMenu = document.querySelector(`.${params.menuClass}`);
    const linksMenu = document.querySelectorAll(`.${params.linksClass}`);
    // click burger
    function onBtnClick() {
      if (window.getWindowWidth() <= window.TABLET_WIDTH) {

        burgerBtn.classList.toggle(params.activeClass);
        if (
          !burgerMenu.classList.contains(params.activeClass) &&
          !burgerMenu.classList.contains(params.hiddenClass)
        ) {
          burgerMenu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          burgerBtn.setAttribute('aria-label', 'Закрыть бургер-меню');
        } else {
          burgerMenu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          burgerBtn.setAttribute('aria-label', 'Открыть бургер-меню');
        }
      }
    }
    // handling event burgerMenu
    burgerMenu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
    // handling event burgerBtn
    burgerBtn.addEventListener("click", window.debounce(onBtnClick, 450));
    // handling event links in burger
    linksMenu.forEach((link) => {
      link.addEventListener("click", window.debounce(onBtnClick, 450));
    });
  };

  // call function and give clacces
  setBurger({
    btnClass: "js-burger", // class btn burger
    menuClass: "js-menu-burger", // class menu burger
    activeClass: "is-open", // class open state menu burger
    hiddenClass: "is-close", // class close state menu burger
    linksClass: "js-menu-link-burger", // class links in menu burger
  });
})
