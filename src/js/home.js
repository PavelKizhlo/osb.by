function showAdvantages() {
  const advantages = document.querySelectorAll('.advantages__item');
  advantages.forEach((item) => {
    item.addEventListener('click', () => {
      let advantageText = item.querySelector('.advantages__text');
      advantageText.classList.toggle('visually-hidden');
      item.classList.toggle('advantages__item_opend');
      item.classList.toggle('advantages__item_closed');
    });
  });
}

function slidePopularItems() {
  const leftBtn = document.querySelector('.button_popular-mobile-left');
  const rightBtn = document.querySelector('.button_popular-mobile-right');
  const wrapper = document.querySelector('.popular-items__wrapper');
  const width = window.outerWidth;
  let position = 0;

  rightBtn.addEventListener('click', () => {
    position++;
    leftBtn.disabled = false;
    wrapper.style.right = `${position * width}px`;
    if (position >= 3) {
      rightBtn.disabled = true;
    }
  });

  leftBtn.addEventListener('click', () => {
    position--;
    rightBtn.disabled = false;
    wrapper.style.right = `${position * width}px`;
    if (position <= 0) {
      leftBtn.disabled = true;
    }
  });
}

export { showAdvantages, slidePopularItems };
