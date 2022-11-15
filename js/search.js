document.addEventListener('DOMContentLoaded', function () {
  // function search
  function setSearch(params) {
    // initialization search
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);
    // handling event search
    search.addEventListener("animationend", function (evt) {
      if (this._isOpened && !openBtn.disabled) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function (evt) {
      evt._isSearch = true;
    });
    // handling event openBtn search
    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;
      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });
    // handling event closeBtn search
    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }
  // call function and give clacces
  setSearch({
    openBtnClass: "header__btn-search", // class btn open
    closeBtnClass: "header__btn-search-exit", // class btn close
    searchClass: "header__search-form", // class form search
    activeClass: "is-opened", // class active search
    hiddenClass: "is-closed" // class hidden search
  });
})


