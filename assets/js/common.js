/*=============== Show Menu =============== */

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*=============== Background Header =============== */

/*=============== Contact Form =============== */

/*=============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggle'),
styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
})