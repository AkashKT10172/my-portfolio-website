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
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const logoCont = document.querySelector(".logo-cont-a");
const navItems = document.querySelectorAll(".nav-i-a");
const hamBar = document.querySelectorAll(".ham-bar");
const navItemsBig = document.querySelector(".navigation-items");
const footer = document.querySelector(".footer");
const tw = document.querySelectorAll(".tw");
const clubName = document.querySelectorAll(".club-name");
const code = document.querySelector(".code");
const codeBg = document.querySelector(".code-bg");
const h1Code = document.querySelectorAll("#h1-code");
const projectCont = document.querySelector(".projects-cont");
const projectContBg = document.querySelector(".proj-bg");
const clubsCont = document.querySelector(".asso");
const clubsContBg = document.querySelector(".clubs-bg");
const eduCont = document.querySelector(".col");
const eduContBg = document.querySelector(".edu-bg");
const skillsCont = document.querySelector(".skills");
const skillsContBg = document.querySelector(".skills-bg");
const introCont = document.querySelector(".intro");
const para = document.querySelector("#para");
let a = 1;
container.addEventListener("click", () => {
    sun.classList.toggle("sun-anim");
    moon.classList.toggle("moon-anim");
    if(a===1){
        header.style.backgroundColor = "rgb(33, 4, 84)";
        nav.style.backgroundColor = "rgb(33, 4, 84)";
        navItemsBig.style.backgroundColor = "rgb(33, 4, 84)";
        footer.style.backgroundColor = "rgb(33, 4, 84)";
        footer.style.color = "white";
        tw.forEach((social) => {social.style.color = "white";});
        clubName.forEach((social) => {social.style.color = "white";});
        logoCont.style.color = "white";
        navItems.forEach((navitem) => {navitem.style.color = "white";});
        hamBar.forEach((hamBar) => {hamBar.style.backgroundColor = "white";});
        code.style.backgroundColor = "rgb(33, 4, 84)";
        codeBg.style.backgroundColor = "rgb(33, 4, 84)";
        h1Code.forEach((h1) => {h1.style.color = "white";});
        projectCont.style.backgroundColor = "chocolate";
        projectContBg.style.backgroundColor = "chocolate";
        clubsCont.style.backgroundColor = "rgb(33, 4, 84)";
        clubsContBg.style.backgroundColor = "rgb(33, 4, 84)";
        eduCont.style.backgroundColor = "chocolate";
        eduContBg.style.backgroundColor = "chocolate";
        skillsCont.style.backgroundColor = "chocolate";
        skillsContBg.style.backgroundColor = "chocolate";
        introCont.style.backgroundColor = "rgb(33, 4, 84)";
        h1Code[2].style.color = "black";
        para.style.color = "white";
        a=0;    
    }
    else {
        header.style.backgroundColor = "chocolate";
        nav.style.backgroundColor = "chocolate";
        navItemsBig.style.backgroundColor = "chocolate";
        footer.style.backgroundColor = "chocolate";
        footer.style.color = "black";
        tw.forEach((social) => {social.style.color = "black";});
        clubName.forEach((social) => {social.style.color = "black";});
        logoCont.style.color = "black";
        navItems.forEach((navitem) => {navitem.style.color = "black";});
        hamBar.forEach((hamBar) => {hamBar.style.backgroundColor = "black";});
        code.style.backgroundColor = "chocolate";
        codeBg.style.backgroundColor = "chocolate";
        h1Code.forEach((h1) => {h1.style.color = "black";});
        projectCont.style.backgroundColor = "rgb(216, 216, 220)";
        projectContBg.style.backgroundColor = "rgb(216, 216, 220)";
        clubsCont.style.backgroundColor = "chocolate";
        clubsContBg.style.backgroundColor = "chocolate";
        eduCont.style.backgroundColor = "rgb(216, 216, 220)";
        eduContBg.style.backgroundColor = "rgb(216, 216, 220)";
        skillsCont.style.backgroundColor = "rgb(216, 216, 220)";
        skillsContBg.style.backgroundColor = "rgb(216, 216, 220)";
        introCont.style.backgroundColor = "chocolate";
        para.style.color = "black";
        a=1; 
    }
})

ScrollReveal({
    reset : false,
    distance : '60px',
    duration : 1500,
    delay : 100
});
ScrollReveal().reveal('.my-image', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.title', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.box', {scale : 0.5});
ScrollReveal().reveal('.h1-code', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.club', {scale : 0.5});
ScrollReveal().reveal('.li-skills', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.site', { scale : 0.5 });
ScrollReveal().reveal('.card', {scale : 0.5});

var typed = new Typed(".auto-type", {
    strings : ["Web Developer", "Competitive Programmer", "Electrical and Electronics Engineer"],
    typeSpeed : 75,
    backSpeed : 75,
    loop : true
})