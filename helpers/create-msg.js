const createMsg = (reqBody) => {
  const fields =
    'material' in reqBody
      ? [
          `<b>Имя:</b> ${reqBody.name}`,
          `<b>Телефон:</b> ${reqBody.phone}`,
          `<b>Email:</b> ${reqBody.email ? reqBody.email : 'не указан'}`,
          `<b>Наименование:</b> ${
            reqBody.material ? reqBody.material : 'не указано'
          }`,
          `<b>Количество:</b> ${reqBody.number}`,
          `<b>Способ получения:</b> ${reqBody.delivery}`,
        ]
      : [
          `<b>Имя:</b> ${reqBody.name}`,
          `<b>Телефон:</b> ${reqBody.phone}`,
          `<b>Email:</b> ${reqBody.email ? reqBody.email : 'не указан'}`,
          `<b>Сообщение:</b> ${
            reqBody.message ? reqBody.message : 'отсутствует'
          }`,
        ];

  const msg = fields.reduce(
    (prev, field, index, array) =>
      `${prev}${field}${array[index + 1] ? '\n' : ''}`,
    '',
  );

  return encodeURI(msg);
};

module.exports = createMsg;
