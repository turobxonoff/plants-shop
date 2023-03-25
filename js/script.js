const menuBtn = document.getElementById('menu-icon');
const links = document.querySelector('.links');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    links.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    links.classList.remove("active");
}

// Scroll Reveal 
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
})

sr.reveal('.home h1, .home p, .home .search, .info .info-item,.shop .content h1, .plants h1, .plants p, .about .flex, .footer h1, .footer .links a, .footer .search', {interval:200});