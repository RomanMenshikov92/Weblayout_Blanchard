document.addEventListener('DOMContentLoaded', function () {
  $(".js-accordion").accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content',
    duration: 1000,
    openOnInit: [0]
  });
});
