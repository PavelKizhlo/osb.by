function thicknessFilter() {
  const filterField = document.querySelector('.filter__field_thickness');
  const all = filterField.querySelectorAll('input');

  const cards = document.querySelectorAll('.card');

  filterField.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.type === 'checkbox') {
      all.forEach((checkbox) => {
        if (checkbox.checked) {
          const targetCards = document.querySelectorAll(
            `.card[data-thickness="${checkbox.id}"]`,
          );
          targetCards.forEach((card) => {
            card.classList.remove('thick-hide');
          });
        } else {
          const targetCards = document.querySelectorAll(
            `.card[data-thickness="${checkbox.id}"]`,
          );
          targetCards.forEach((card) => {
            card.classList.add('thick-hide');
          });
        }
        if (
          Array.prototype.slice.call(all).every((checkbox) => !checkbox.checked)
        ) {
          cards.forEach((card) => {
            card.classList.remove('thick-hide');
          });
        }
      });
    }
  });
}

function materialsFilter() {
  const filterField = document.querySelector('.filter__field_material');
  const all = filterField.querySelectorAll('input');
  const cards = document.querySelectorAll('.card');

  if (window.location.hash) {
    const startMat = document.querySelector(window.location.hash);
    startMat.checked = true;
    all.forEach((checkbox) => {
      if (checkbox.checked) {
        const targetCards = document.querySelectorAll(
          `.card[data-material="${checkbox.id}"]`,
        );
        targetCards.forEach((card) => {
          card.classList.remove('material-hide');
        });
      } else {
        const targetCards = document.querySelectorAll(
          `.card[data-material="${checkbox.id}"]`,
        );
        targetCards.forEach((card) => {
          card.classList.add('material-hide');
        });
      }
    });
  }

  filterField.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target.type === 'checkbox') {
      all.forEach((checkbox) => {
        if (checkbox.checked) {
          const targetCards = document.querySelectorAll(
            `.card[data-material="${checkbox.id}"]`,
          );
          targetCards.forEach((card) => {
            card.classList.remove('material-hide');
          });
        } else {
          const targetCards = document.querySelectorAll(
            `.card[data-material="${checkbox.id}"]`,
          );
          targetCards.forEach((card) => {
            card.classList.add('material-hide');
          });
        }
        if (
          Array.prototype.slice.call(all).every((checkbox) => !checkbox.checked)
        ) {
          cards.forEach((card) => {
            card.classList.remove('material-hide');
          });
        }
      });
    }
  });

  const goods = document.querySelector('.goods');
  goods.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('footer__link')) {
      window.location.hash = evt.target.dataset.hash;
      window.location.reload();
    }
  });
}

function showMobileFilter() {
  const filterButton = document.querySelector('.mobile-filter');
  const filter = document.querySelector('.catalog__filter');
  const fade = document.querySelector('.popup-fade');
  filterButton.addEventListener('click', () => {
    filter.classList.add('filter_mobile-active');
    fade.classList.add('popup-fade_active');
    document.body.style.overflow = 'hidden';
  });
}

function closeMobileFilter() {
  const filterButton = document.querySelector('.mobile-filter');
  const filter = document.querySelector('.catalog__filter');
  const fade = document.querySelector('.popup-fade');
  document.addEventListener('click', (evt) => {
    if (
      evt.target === fade ||
      evt.target === filterButton ||
      evt.target.classList.contains('button_show-results')
    ) {
      evt.preventDefault();
      filter.classList.remove('filter_mobile-active');
      fade.classList.remove('popup-fade_active');
      document.body.style.overflow = 'visible';
    }
  });
}

export {
  thicknessFilter,
  materialsFilter,
  showMobileFilter,
  closeMobileFilter,
};
