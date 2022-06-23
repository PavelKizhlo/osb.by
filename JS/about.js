function toggleAboutButtons() {
  const whoWeAreButton = document.querySelector('#who-we-are');
  const ourProductsButton = document.querySelector('#about-products');
  const whoWeAreContent = document.querySelector('.about__content_who-we-are');
  const aboutProductsContent = document.querySelector('.about__content_about-products');
  whoWeAreButton.addEventListener('click', () => {
    if (whoWeAreButton.classList.contains('button_inactive')) {
      ourProductsButton.classList.remove('button_primary');
      whoWeAreButton.classList.add('button_primary');
      whoWeAreButton.classList.remove('button_inactive');
      ourProductsButton.classList.add('button_inactive');
      [whoWeAreContent, aboutProductsContent].forEach(item => {
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
      [whoWeAreContent, aboutProductsContent].forEach(item => {
        item.classList.toggle('visually-hidden');
      });
    }
  })
}

function toogleOurProducts() {
  const buttonBlock = document.querySelector('.our-products__button-block');
  const articles = document.querySelectorAll('.article');
  buttonBlock.addEventListener('click', (evt) => {
    let clickedButton = evt.target;

    if (clickedButton.classList.contains('button_inactive')) {
      let primaryButton = buttonBlock.querySelector('.button_primary');
      primaryButton.classList.remove('button_primary');
      clickedButton.classList.add('button_primary');
      clickedButton.classList.remove('button_inactive');
      primaryButton.classList.add('button_inactive');

      articles.forEach(item => {
        if (item.id === `${clickedButton.id}-article`) {
          item.classList.remove('visually-hidden');
        } else {
          item.classList.add('visually-hidden');
        }
      })
    }
  })
}

toggleAboutButtons();
toogleOurProducts();