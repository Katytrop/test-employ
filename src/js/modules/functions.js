// кастомный селект
document.querySelectorAll('.custom-select').forEach(select => {
  const header = select.querySelector('.custom-select__header');
  const items = select.querySelectorAll('.custom-select__item');
  const current = select.querySelector('.custom-select__current');
  const hidden = document.querySelector('input[name="system-type"]'); 

  header.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      current.textContent = item.textContent;
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      select.classList.remove('open');
      hidden.value = item.dataset.value ? item.dataset.value : item.textContent.trim();
    });
  });

  document.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
});

//кастомный прогресс
const range = document.querySelector('.order-form__range');
const percent = document.querySelector('.order-form__percent');

range.addEventListener('input', () => {
  percent.textContent = `${range.value} %`;
});

