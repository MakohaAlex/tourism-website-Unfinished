// Smooth scrolling for back to top
document.querySelector('footer a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hero Image Transition
let hero = document.querySelector('header');
let images = [
    'https://source.unsplash.com/random/1920x1080?travel',
    'https://source.unsplash.com/random/1920x1080?beach',
    'https://source.unsplash.com/random/1920x1080?mountains'
];
let i = 0;

setInterval(function() {
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url(${images[i]})`;
}, 5000);
