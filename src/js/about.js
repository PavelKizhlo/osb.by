function toggleAboutButtons() {
  const whoWeAreButton = document.querySelector('#who-we-are');
  const ourProductsButton = document.querySelector('#about-products');
  const whoWeAreContent = document.querySelector('.about__content_who-we-are');
  const aboutProductsContent = document.querySelector(
    '.about__content_about-products',
  );
  whoWeAreButton.addEventListener('click', () => {
    if (whoWeAreButton.classList.contains('button_inactive')) {
      ourProductsButton.classList.remove('button_primary');
      whoWeAreButton.classList.add('button_primary');
      whoWeAreButton.classList.remove('button_inactive');
      ourProductsButton.classList.add('button_inactive');
      [whoWeAreContent, aboutProductsContent].forEach((item) => {
        item.classList.toggle('visually-hidden');
      });
    }
  });
  ourProductsButton.addEventListener('click', () => {
    if (ourProductsButton.classList.contains('button_inactive')) {
      whoWeAreButton.classList.remove('button_primary');
      ourProductsButton.classList.add('button_primary');
      ourProductsButton.classList.remove('button_inactive');
      whoWeAreButton.classList.add('button_inactive');
      [whoWeAreContent, aboutProductsContent].forEach((item) => {
        item.classList.toggle('visually-hidden');
      });
    }
  });
}

function toggleOurProducts() {
  const buttonBlock = document.querySelector('.our-products__button-block');
  const articles = document.querySelectorAll('.article');
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const img3 = document.querySelector('#img3');
  buttonBlock.addEventListener('click', (evt) => {
    let clickedButton = evt.target;

    if (clickedButton.classList.contains('button_inactive')) {
      let primaryButton = buttonBlock.querySelector('.button_primary');
      primaryButton.classList.remove('button_primary');
      clickedButton.classList.add('button_primary');
      clickedButton.classList.remove('button_inactive');
      primaryButton.classList.add('button_inactive');

      switch (clickedButton.id) {
        case 'fanera':
          img1.src = '../public/assets/images/our-products/fanera1.jpeg';
          img1.alt = 'Листы фанеры';
          img2.src = '../public/assets/images/our-products/fanera2.jpeg';
          img2.alt = 'Склад с листами фанеры';
          img3.src = '../public/assets/images/our-products/fanera3.jpeg';
          img3.alt = 'Производство фанеры';
          break;
        case 'dsp':
          img1.src = '../public/assets/images/our-products/dsp1.jpeg';
          img1.alt = 'Листы ДСП';
          img2.src = '../public/assets/images/our-products/dsp2.jpeg';
          img2.alt = 'Образцы ДСП';
          img3.src = '../public/assets/images/our-products/dsp3.jpeg';
          img3.alt = 'Листы ДСП на складе';
          break;
        case 'dvp':
          img1.src = '../public/assets/images/our-products/dvp1.webp';
          img1.alt = 'Образцы ДВП';
          img2.src = '../public/assets/images/our-products/dvp2.webp';
          img2.alt = 'Листы ДВП';
          img3.src = '../public/assets/images/our-products/dvp3.webp';
          img3.alt = 'Образцы ДВП разной толщины';
          break;
        case 'osb':
          img1.src = '../public/assets/images/our-products/osb1.jpeg';
          img1.alt = 'Листы OSB';
          img2.src = '../public/assets/images/our-products/osb2.webp';
          img2.alt = 'Обработка листов OSB';
          img3.src = '../public/assets/images/our-products/osb3.jpeg';
          img3.alt = 'Листы OSB на складе';
          break;
      }

      articles.forEach((item) => {
        if (item.id === `${clickedButton.id}-article`) {
          item.classList.remove('visually-hidden');
        } else {
          item.classList.add('visually-hidden');
        }
      });
    }
  });
}

export { toggleAboutButtons, toggleOurProducts };
