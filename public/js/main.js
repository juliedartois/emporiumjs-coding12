// Logo in Navbar
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

