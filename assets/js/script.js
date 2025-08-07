
function check(event) {
  const checkbox = event.target;
  const card = checkbox.closest('.card-img');
  card.classList.toggle('card-check');
}

const checkboxes = document.querySelectorAll('.checkbox');

for (const checkbox of checkboxes) {
  checkbox.addEventListener('click', check);
}

