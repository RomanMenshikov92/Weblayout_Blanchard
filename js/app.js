document.addEventListener('DOMContentLoaded', function () {

  // -----GLOBAL-------

  // Глобальный декоратор debounce
  function debounce(f, ms) {
    let isCooldown = false;

    return function () {
      if (isCooldown) return;

      f.apply(this, arguments);
      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
    };
  }

  // Глобальная функция getWindowWidth
  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  // Глобальные константы ширины
  const MOBILE_WIDTH = 576;
  const HALFDESKTOP_WIDTH = 970;
  const TABLET_WIDTH = 1300;

  window.debounce = debounce;
  window.getWindowWidth = getWindowWidth;
  window.TABLET_WIDTH = TABLET_WIDTH;
  window.MOBILE_WIDTH = MOBILE_WIDTH;
  window.HALFDESKTOP_WIDTH = HALFDESKTOP_WIDTH;


})
