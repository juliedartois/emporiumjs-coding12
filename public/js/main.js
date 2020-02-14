// // Logo in Navbar
let logoNav = document.getElementsByTagName('h1')[1];
let nav = document.getElementsByTagName('nav')[0];
let beige = document.getElementsByClassName('beige')[0];
let menu = document.getElementsByClassName('navbar-toggler')[0];
let menuDrop = document.getElementsByClassName('collapse')[0];

if (window.innerWidth <= 425) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 146) {
            logoNav.classList.remove('d-none');
            nav.classList.add('fixed-top');
            nav.style.borderBottom = '2px lightgray solid';
            beige.style.marginTop = '150px';
        } else if (window.scrollY < 146) {
            logoNav.classList.add('d-none');
            nav.classList.remove('fixed-top');
            nav.style.border = '0px';
            beige.style.marginTop = '0px';
        };
    });
} else if (window.innerWidth <= 991) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 161) {
            logoNav.classList.remove('d-none');
            nav.classList.add('fixed-top');
            nav.style.borderBottom = '2px lightgray solid';
            beige.style.marginTop = '150px';
        } else if (window.scrollY < 161) {
            logoNav.classList.add('d-none');
            nav.classList.remove('fixed-top');
            nav.style.border = '0px';
            beige.style.marginTop = '0px';
        };
    })
} else {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 182) {
            logoNav.classList.remove('d-none');
            nav.classList.add('fixed-top');
            nav.style.borderBottom = '2px lightgray solid';
            beige.style.marginTop = '150px';
        } else if (window.scrollY < 182) {
            logoNav.classList.add('d-none');
            nav.classList.remove('fixed-top');
            nav.style.border = '0px';
            beige.style.marginTop = '0px';
        };
    });
};

menu.addEventListener('click', () => {
    menuDrop.style.zIndex = '1'
});

// // MODAL
let connect = document.getElementsByClassName('btn-secondary')[0];
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

connect.addEventListener('click', () => {
    modal.classList.remove('d-none');
    body.style.zIndex = '-2';
    nav.classList.add('d-none')
});

// Sign In
let logIn = document.getElementsByTagName('h2')[0];
let logInForm = document.getElementsByClassName('logInForm')[0];

logIn.addEventListener('click', () => {
    logInForm.classList.remove('d-none');
    logInForm.classList.add('d-flex');
    signUpForm.classList.add('d-none');
    signUpForm.classList.remove('d-flex');
});

// Sign Up
let signUp = document.getElementsByTagName('h2')[1];
let signUpForm = document.getElementsByClassName('signUpForm')[0];

signUp.addEventListener('click', () => {
    signUpForm.classList.remove('d-none');
    signUpForm.classList.add('d-flex');
    logInForm.classList.add('d-none');
    logInForm.classList.remove('d-flex');
});

// Close
let cross1 = document.getElementsByClassName('fa-times')[0];
let cross2 = document.getElementsByClassName('fa-times')[1];

cross1.addEventListener('click', () => {
    modal.classList.remove('d-block');
    modal.classList.add('d-none');
    body.style.zIndex = '0';
    nav.classList.remove('d-none')
});

cross2.addEventListener('click', () => {
    modal.classList.remove('d-block');
    modal.classList.add('d-none');
    body.style.zIndex = '0';
    nav.classList.remove('d-none')
});









// // Carousel
const track = document.querySelector('.carousel__track');
const slides = [...document.querySelectorAll('.carousel__track .carousel__slide')];
const prevBtn = document.querySelector('.carousel__button--left');
const nextBtn = document.querySelector('.carousel__button--right');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].offsetWidth;
console.log(slideWidth);

const setSlidePosition = (slide, index) => {  // Arrange slides next to one another
    slide.style.left = `${slideWidth * index}px`;
};


// for (let i = 0; i < slides.length; i++) {
//     console.log(slides[i].target);
//     // slides[i].setSlidePosition(slides[i], i);
// };


// slides.forEach((el, i) => {
//     setSlidePosition(el, i)
// })

// slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${slides.indexOf(targetSlide) * slideWidth}px)`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

dotsNav.addEventListener('click', e => {  // click indicator => move to slide n
    const targetDot = e.target.closest('button');  // which indicator clicked ?

    if (!targetDot || targetDot.classList.contains('current-slide')) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});