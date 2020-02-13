// // Logo in Navbar
let logoNav = document.getElementsByTagName('h1')[1];
let nav = document.getElementsByTagName('nav')[0];
let beige = document.getElementsByClassName('beige')[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= 190) {
        logoNav.classList.remove('d-none');
        nav.classList.add('fixed-top');
        nav.style.borderBottom = '2px lightgray solid'
        beige.style.marginTop = '158px'
    } else if (window.scrollY < 190) {
        logoNav.classList.add('d-none');
        nav.classList.remove('fixed-top');
        nav.style.border = '0px'
        beige.style.marginTop = '0px'
    };
});

// // MODAL
let connect = document.getElementsByClassName('btn-secondary')[0];
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

connect.addEventListener('click', () => {
    modal.classList.remove('d-none');
    body.style.zIndex = '-1'
});

// Sign In
let logIn = document.getElementsByTagName('h2')[0];
let logInForm = document.getElementsByClassName('logInForm')[0];

logIn.addEventListener('click', () => {
    logInForm.classList.remove('d-none');
    signUpForm.classList.add('d-none')
});

// Sign Up
let signUp = document.getElementsByTagName('h2')[1];
let signUpForm = document.getElementsByClassName('signUpForm')[0];

signUp.addEventListener('click', () => {
    signUpForm.classList.remove('d-none');
    logInForm.classList.add('d-none');
});