const photoDialog = document.querySelector('#photo-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#dialog-caption');
document.querySelectorAll('.photo-open').forEach(button => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    photoDialog.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => photoDialog.close());
photoDialog.addEventListener('click', event => {
  if (event.target !== photoDialog) return;
  const bounds = photoDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) photoDialog.close();
});
