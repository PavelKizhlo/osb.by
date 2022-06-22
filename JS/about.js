function toggleAboutButtons() {
  const whoWeAreButton = document.querySelector('#who-we-are');
  const ourProductsButton = document.querySelector('#about-products');
  const whoWeAreText = document.querySelector('.about__text_who-we-are');
  const aboutProductsText = document.querySelector('.about__text_about-products');
  const articleList = document.querySelector('.article-list');
  whoWeAreButton.addEventListener('click', (evt) => {
    if (whoWeAreButton.classList.contains('button_inactive')) {
      ourProductsButton.classList.remove('button_primary');
      whoWeAreButton.classList.add('button_primary');
      whoWeAreButton.classList.remove('button_inactive');
      ourProductsButton.classList.add('button_inactive');
      [whoWeAreText, aboutProductsText, articleList].forEach(item => {
        item.classList.toggle('visually-hidden');
      });
    }
  });
  ourProductsButton.addEventListener('click', (evt) => {
    if (ourProductsButton.classList.contains('button_inactive')) {
      whoWeAreButton.classList.remove('button_primary');
      ourProductsButton.classList.add('button_primary');
      ourProductsButton.classList.remove('button_inactive');
      whoWeAreButton.classList.add('button_inactive');
      [whoWeAreText, aboutProductsText, articleList].forEach(item => {
        item.classList.toggle('visually-hidden');
      });
    }
  })
}

toggleAboutButtons();