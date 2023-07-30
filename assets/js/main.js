/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each link, we remove the show-menu clss
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Active Project =============== */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/*=============== Testimonials Swiper =============== */

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        Message.value === '' 
    ) {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_oerprzt',
            'template_7kfej1k',
            '#contact-form',
            'wRpj76mqxZb3kn-GW'
            )
            .then(() => {
                // show message and add color, window + dot to open emoji
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent';

                // remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 4000);
            });
    }
};

contactForm.addEventListener('submit', sendEmail);