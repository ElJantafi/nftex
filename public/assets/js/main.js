let primaryNav = document.getElementById('primary-navigation');
let burgerIcon = document.getElementById('burger-icon');
let closeIcon = document.getElementById('close-icon');

burgerIcon.onclick = ()=>{
    primaryNav.classList.toggle('nav-active');
    closeIcon.classList.toggle('visually-hidden');
    burgerIcon.style.display = 'none';
}
closeIcon.onclick = ()=>{
    primaryNav.classList.toggle('nav-active');
    closeIcon.classList.toggle('visually-hidden');
    burgerIcon.style.display = 'flex';
}