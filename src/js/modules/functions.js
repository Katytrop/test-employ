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

//анимация
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hero__body .js-animate');
  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 500 * i);
  });
});

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.js-animate-scroll').forEach((el, i) => {
  el.style.transitionDelay = `${i * 400}ms`; 
  observer.observe(el);
});