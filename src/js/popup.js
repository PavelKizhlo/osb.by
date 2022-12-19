function showPopup() {
  const popup = document.querySelector('.popup');
  const fade = document.querySelector('.popup-fade');
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('button_order')) {
      popup.classList.add('popup_active');
      fade.classList.add('popup-fade_active');
      document.body.style.overflow = 'hidden';
      const card = evt.target.parentElement;
      const title = card.querySelector('.card__title');
      const thickness = card.querySelector('.card__spec-item');
      const materialInput = popup.querySelector('input[name="material"]');
      materialInput.value = `${title.innerHTML} ${thickness.innerHTML}`;
    }
  });
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const fade = document.querySelector('.popup-fade');
  document.addEventListener('click', (evt) => {
    if (evt.target === fade || evt.target.classList.contains('popup__close')) {
      popup.classList.remove('popup_active');
      fade.classList.remove('popup-fade_active');
      document.body.style.overflow = 'visible';
    }
  });
}

export { showPopup, closePopup };
