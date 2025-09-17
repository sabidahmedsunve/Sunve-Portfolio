function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function () {
  const typedEl = document.getElementById('typed-name');
  if (!typedEl) return; // safety check

  const text = "Sabid Ahmed Sunve";
  const typingSpeed = 120;    // ms per char when typing
  const deletingSpeed = 60;   // ms per char when deleting
  const pauseAfterTyped = 900; // pause after full name typed
  const pauseAfterDeleted = 300; // pause after fully deleted

  let i = 0;
  let isDeleting = false;

  function tick() {
    if (!isDeleting) {
      // type forward
      i = Math.min(i + 1, text.length);
      typedEl.textContent = text.slice(0, i);
      if (i === text.length) {
        // finished typing -> pause, then delete
        isDeleting = true;
        setTimeout(tick, pauseAfterTyped);
        return;
      }
      setTimeout(tick, typingSpeed);
    } else {
      // delete backward
      i = Math.max(i - 1, 0);
      typedEl.textContent = text.slice(0, i);
      if (i === 0) {
        // finished deleting -> pause, then start typing again
        isDeleting = false;
        setTimeout(tick, pauseAfterDeleted);
        return;
      }
      setTimeout(tick, deletingSpeed);
    }
  }

  // start the loop
  tick();
});
