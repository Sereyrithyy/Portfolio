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

// hide switcher on scroll
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
})

const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}