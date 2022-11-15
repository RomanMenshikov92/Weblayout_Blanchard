document.addEventListener('DOMContentLoaded', function () {
  const defaultSelect = () => {

    const element = document.querySelector(".gallery__select-list");
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      position: 'bottom',
      itemSelectText: '',
    });

  }
  defaultSelect();
})
