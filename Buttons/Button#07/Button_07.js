const rippleButton = document.getElementById('rippleButton');

rippleButton.addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  this.appendChild(ripple);

  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;

  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
