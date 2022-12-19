function toggleDeliveryButtons() {
  const entityButton = document.querySelector('#entity');
  const individualButton = document.querySelector('#individual');
  const subtitleIndividual = document.querySelector(
    '.delivery__subtitle_individual',
  );
  const subtitleEntity = document.querySelector('.delivery__subtitle_entity');
  const textIndividual = document.querySelector('.delivery__text_individual');
  const textEntity = document.querySelector('.delivery__text_entity');
  entityButton.addEventListener('click', (evt) => {
    if (entityButton.classList.contains('button_inactive')) {
      individualButton.classList.remove('button_primary');
      entityButton.classList.add('button_primary');
      entityButton.classList.remove('button_inactive');
      individualButton.classList.add('button_inactive');
      [subtitleIndividual, subtitleEntity, textIndividual, textEntity].forEach(
        (item) => {
          item.classList.toggle('visually-hidden');
        },
      );
    }
  });
  individualButton.addEventListener('click', (evt) => {
    if (individualButton.classList.contains('button_inactive')) {
      entityButton.classList.remove('button_primary');
      individualButton.classList.add('button_primary');
      individualButton.classList.remove('button_inactive');
      entityButton.classList.add('button_inactive');
      [subtitleIndividual, subtitleEntity, textIndividual, textEntity].forEach(
        (item) => {
          item.classList.toggle('visually-hidden');
        },
      );
    }
  });
}

export { toggleDeliveryButtons };
