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