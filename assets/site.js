(() => {
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  const filters = document.querySelector('.filters');
  const cards = [...document.querySelectorAll('.work-card[data-category]')];
  if (!filters || cards.length === 0) return;
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !filters.contains(button)) return;
    const selected = button.dataset.filter;
    for (const item of filters.querySelectorAll('button[data-filter]')) {
      item.setAttribute('aria-pressed', String(item === button));
    }
    for (const card of cards) {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    }
  });
})();