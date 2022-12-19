function menuHandler() {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.burger');
  const fade = document.querySelector('.popup-fade');
  const mailLink = document.querySelector('.header__mail');
  const phoneLink = document.querySelectorAll('.header__phone')[1];

  const showMenu = (evt) => {
    evt.stopPropagation();
    menu.classList.toggle('menu_mobile-active');
    fade.classList.toggle('popup-fade_active');
    burger.classList.toggle('burger_opend');
    mailLink.classList.toggle('header__mail_mobile-active');
    phoneLink.classList.toggle('header__phone_mobile-active');
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMenu = (evt) => {
    if (evt.target === fade || evt.target.classList.contains('burger_opend')) {
      menu.classList.remove('menu_mobile-active');
      fade.classList.remove('popup-fade_active');
      burger.classList.remove('burger_opend');
      mailLink.classList.remove('header__mail_mobile-active');
      phoneLink.classList.remove('header__phone_mobile-active');
      document.body.style.overflow = '';
    }
  };

  burger.addEventListener('click', showMenu);
  document.addEventListener('click', closeMenu);
}

export { menuHandler };
