const runAway = document.getElementById('btn-runaway');
const radius = 100;

runAway.addEventListener('click', () => {
  const btnWidth = runAway.offsetWidth;
  const btnHeight = runAway.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  runAway.style.left = randomX + 'px';
  runAway.style.top = randomY + 'px';
});

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnRect = runAway.getBoundingClientRect();
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const dx = mouseX - btnX;
  const dy = mouseY - btnY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < radius) {
    const angle = Math.atan2(dy, dx);
    const moveX = Math.cos(angle) * -50;
    const moveY = Math.sin(angle) * -50;

    let newLeft = runAway.offsetLeft + moveX;
    let newTop = runAway.offsetTop + moveY;

    newLeft = Math.max(0, Math.min(window.innerWidth - runAway.offsetWidth, newLeft));
    newTop = Math.max(0, Math.min(window.innerHeight - runAway.offsetHeight, newTop));

    runAway.style.left = newLeft + 'px';
    runAway.style.top = newTop + 'px';
  }
})