document.addEventListener('DOMContentLoaded', function () {
  /* variable declarations */
  const windowBtnOpen = document.querySelectorAll('.gallery__link-slide') // open btn
  const windowBtnClose = document.querySelectorAll('.popup-gallery__btn-close'); // close btn
  const wrapperPopup = document.querySelector('.popup-gallery__wrapper'); // popup wrapper
  const windowPopup = document.querySelectorAll('.popup-gallery__window'); // popup window
  const body = document.body; // body
  const fixBlocks = document.querySelectorAll('.fix-block');

  /* variable declarations scroll disabled */
  let disableScroll = function () {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    let pagePosition = window.scrollY;
    fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    body.style.paddingRight = paddingOffset;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  }

  /* variable declarations scroll enabled */
  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    body.style.paddingRight = '0px';
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
  }

  /* function open btn popup */
  windowBtnOpen.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
      // disabled scroll
      disableScroll();
      windowPopup.forEach((el) => {
        el.classList.remove('popup-gallery__window--visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('popup-gallery__window--visible');
      wrapperPopup.classList.add('popup-gallery__wrapper--visible');
    });
  });

  /* function close btn popup */
  windowBtnClose.forEach((elem) => {
    enableScroll();
    elem.addEventListener('click', function () {
      wrapperPopup.classList.remove('popup-gallery__wrapper--visible');
      windowPopup.forEach((el) => {
        el.classList.remove('popup-gallery__window--visible');
      });
    });
  });

  /* function close window popup */
  windowPopup.forEach((e) => {
    enableScroll();
    e.addEventListener('click', function () {
      wrapperPopup.classList.remove('popup-gallery__wrapper--visible');
      windowPopup.forEach((el) => {
        el.classList.remove('popup-gallery__window--visible');
      });
    });
  });

  /* function close wrapper popup */
  wrapperPopup.addEventListener('click', (e) => {
    enableScroll();
    if (e.target == wrapperPopup) {
      wrapperPopup.classList.remove('popup-gallery__wrapper--visible');
      windowPopup.forEach((el) => {
        el.classList.remove('popup-gallery__window--visible');
      });
    }
  });
})
