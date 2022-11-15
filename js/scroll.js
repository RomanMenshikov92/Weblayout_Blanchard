document.addEventListener('DOMContentLoaded', function () {
  const scrolls = document.querySelectorAll('a.js-scroll')

  for (let scroll of scrolls) {
    scroll.addEventListener('click', function (e) {
      e.preventDefault()

      const viewID = scroll.getAttribute('href')

      document.querySelector(viewID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // function smooth scroll with tab "catalog" (width 970)
  function scrollToContent(link, isMobile) {
    if (isMobile && window.getWindowWidth() > window.HALFDESKTOP_WIDTH) {
      return;
    }

    const scrollPath = link.getAttribute('data-scroll-path');
    if (Boolean(scrollPath)) {
      const scrollTarget = document.getElementById(scrollPath);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  document.querySelectorAll('.js-mobile-scroll').forEach(btn => {
    btn.addEventListener('click', function () {
      scrollToContent(this, true);
    });
  });

})


