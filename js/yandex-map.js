//yandex-map with a custom mark

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.760223, 37.614741],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  // Создание геообъекта с типом точка (метка).
  const myPlacemark = new ymaps.Placemark(
    [55.760223, 37.614741],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/markMap.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10],
    }
  );
  //Размещаем геообъекта на карте
  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}
