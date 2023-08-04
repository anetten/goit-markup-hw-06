(() => {
  const reft = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  reft.openMenuBtn.addEventListener('click', toggleMenu);
  reft.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    reft.menu.classList.toggle('is-open');
  }
})();
