const items = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.pagination .page-item');
const number = document.querySelector('.indication .number');
let current = 0;

function updateSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('d-none', i !== index);
    item.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
  number.textContent = `0${index + 1}`;
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  updateSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  updateSlide(current);
});
