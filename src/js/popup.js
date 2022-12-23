function handlePopup() {
  const fade = document.querySelector('.popup-fade');
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('button_order'))
      showPopup(evt.target.parentElement);
    if (evt.target === fade || evt.target.classList.contains('popup__close'))
      closePopup();
  });
}

function showPopup(card) {
  const popup = document.querySelector('.popup');
  const fade = document.querySelector('.popup-fade');
  const form = document.getElementById('order-form');

  popup.classList.add('popup_active');
  fade.classList.add('popup-fade_active');
  document.body.style.overflow = 'hidden';
  const title = card.querySelector('.card__title');
  const thickness = card.querySelector('.card__spec-item');
  const materialInput = popup.querySelector('input[name="material"]');
  materialInput.value = `${title.innerHTML} ${thickness.innerHTML}`;

  form.addEventListener('submit', closePopup);
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const fade = document.querySelector('.popup-fade');

  popup.classList.remove('popup_active');
  fade.classList.remove('popup-fade_active');
  document.body.style.overflow = 'visible';
}

export { handlePopup };
