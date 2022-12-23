function handleForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input');

  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });

    await sendMsg(data);
    evt.target.reset();
  });
}

async function sendMsg(data) {
  try {
    const res = await fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json' },
    });

    showMsg(res.status === 200);
  } catch {
    showMsg(false);
  }
}

function showMsg(isSuccess) {
  if (isSuccess) {
    Swal.fire({
      icon: 'success',
      title: 'Отправлено!',
      text: 'Мы скоро с вами свяжемся!',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Не удалось отправить форму',
      text: 'Что-то пошло не так...',
    });
  }
}

export { handleForm };
