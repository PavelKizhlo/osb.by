function toogleCatalogButtons() {
  const buttonBlock = document.querySelector('.catalog__button-block');
  buttonBlock.addEventListener('click', (evt) => {
    let clickedButton = evt.target;
    if (clickedButton.classList.contains('button_inactive')) {
      let primaryButton = buttonBlock.querySelector('.button_primary');
      primaryButton.classList.remove('button_primary');
      clickedButton.classList.add('button_primary');
      clickedButton.classList.remove('button_inactive');
      primaryButton.classList.add('button_inactive');
    }
  })
}

function materialsFilter() {
  const filterField = document.querySelector('.filter__field_material');
  let allMaterials = filterField.querySelector('#all-materials');
  let fanera = filterField.querySelector('#fanera');
  let dvp = filterField.querySelector('#dvp');
  let dsp = filterField.querySelector('#dsp');
  let osb = filterField.querySelector('#osb');
  allMaterials.addEventListener('click', () => {
    if (allMaterials.checked) {
      filterField.querySelectorAll('input[type="checkbox"]').forEach(item => {
        item.checked = true;
      });
    } else {
      filterField.querySelectorAll('input[type="checkbox"]').forEach(item => {
        item.checked = false;
      });
      fanera.checked = true;
    };
  });
  filterField.addEventListener('click', (evt) => {
    if (evt.target !== allMaterials &&
      evt.target.type === 'checkbox') {
      if (!evt.target.checked) {
        allMaterials.checked = false;
      }
      if (fanera.checked && dvp.checked && dsp.checked && osb.checked) {
        allMaterials.checked = true;
      }
    }
  })
}

toogleCatalogButtons();
materialsFilter();