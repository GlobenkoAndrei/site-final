
const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header-menu');

burger.addEventListener("click", () => {
    headerMenu.classList.toggle('active');
});