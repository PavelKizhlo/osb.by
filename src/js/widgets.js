function showWidgets() {
  const widget = document.getElementById('widget');
  const headerHeight = document.querySelector('.header').clientHeight;
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clHeight = document.documentElement.clientHeight;
  const top = scrollTop * 0.25;

  if (top > headerHeight) {
    widget.style.display = 'flex';
    widget.style.top =
      top + 200 > clHeight ? `${clHeight - 200}px` : `${top}px`;
  } else {
    widget.style.display = 'none';
  }

  if (docHeight === clHeight) {
    widget.style.display = 'flex';
    widget.style.top = `${clHeight - clHeight / 3}px`;
  }

  document.addEventListener('scroll', showWidgets);
}

export { showWidgets };
