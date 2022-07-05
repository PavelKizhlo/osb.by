function showAdvantages() {
  const advantages = document.querySelectorAll('.advantages__item');
  advantages.forEach(item => {
    item.addEventListener('click', () => {
      let advantageText = item.querySelector('.advantages__text');
      advantageText.classList.toggle('visually-hidden');
      item.classList.toggle('advantages__item_opend');
      item.classList.toggle('advantages__item_closed');
    })
  })
}

showAdvantages();

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  });
})