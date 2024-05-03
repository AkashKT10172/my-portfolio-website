const hamB = document.querySelector(".hamburger");
const navI = document.querySelector(".navigation-items");

hamB.addEventListener(("click"), () => {
    hamB.classList.toggle("active");
    navI.classList.toggle("active");
})

const items = document.querySelectorAll(".navigation-items a");

const clicked = (item) => {
    item.addEventListener(("click"), () => {
        navI.classList.remove("active"); 
        hamB.classList.remove("active");  
    })
} 

items.forEach(clicked);

const sun = document.querySelector(".sun-logo");
const moon = document.querySelector(".moon-logo");
const container = document.querySelector(".container");

container.addEventListener("click", () => {
    sun.classList.toggle("sun-anim");
    moon.classList.toggle("moon-anim");
})

ScrollReveal({
    reset : true,
    distance : '60px',
    duration : 2500,
    delay : 400
});
ScrollReveal().reveal('.my-image', { delay: 200, origin: 'left' });
// ScrollReveal().reveal('.intro-details', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.title', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.contents', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.h1-code', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.clubs', { delay: 200, origin: 'left' });
// ScrollReveal().reveal('.skills-intro', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.li-skills', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.sites', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.card-container', { delay: 200, origin: 'left' });

var typed = new Typed(".auto-type", {
    strings : ["Web Developer", "Competitive Programmer", "Electrical and Electronics Engineer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})