document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.js-hero-swiper', {
    direction: 'horizontal',
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 3000,
    autoplay: {
      delay: 5000,
    }
  });

  let gallerySlider = new Swiper(".gallery__container-slide", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__test-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-right",
      prevEl: ".gallery__btn-left"
    },

    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },

      // when window width is >= 685px
      685: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },

      // when window width is >= 925px
      925: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      // when window width is >= 1300px
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  let eventSlider = new Swiper(".event__container-slide", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".event__btn-right",
      prevEl: ".event__btn-left"
    },

    breakpoints: {

      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      // when window width is >= 685px
      685: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      // when window width is >= 925px
      925: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },

      // when window width is >= 1300px
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  let projectSlider = new Swiper(".project__container-slide", {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true
    }, type: "fraction",
    navigation: {
      nextEl: ".project__btn-right",
      prevEl: ".project__btn-left"
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
      },

      // when window width is >= 685px
      685: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      // when window width is >= 925px
      925: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },

      // when window width is >= 1300px
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

});

