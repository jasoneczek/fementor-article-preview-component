const shareBtn = document.getElementById('shareBtn');
const shareOptions = document.getElementById('shareOptions');

shareBtn.addEventListener('click', () => {
  const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';
  const isHidden = shareOptions.getAttribute('aria-hidden') === 'true';

  shareBtn.setAttribute('aria-expanded', !isExpanded);
  shareOptions.setAttribute('aria-hidden', !isHidden);

  if (!isHidden) {
    shareOptions.style.display = 'none';
  } else {
    shareOptions.style.display = 'flex';
  }
});



