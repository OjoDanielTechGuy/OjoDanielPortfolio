/**TYPING ANIMATION OF TEXT */

// function changeColor(clickedText) {

//     let texts = document.querySelector(".active");
//     for (let i = 0; i < texts.length; i++) {
//       if (texts[i] == clickedText) {
//         document.querySelector(".active").classList.add("selected");
//       } else {
//         document.querySelector(".active").classList.remove("selected");
//       }
//     }
//   }

// const home = document.getElementById("home-sel");
// const about = document.getElementById("about-sel");
// const service = document.getElementById("service-sel");
// const portfolio = document.getElementById("portfolio-sel");
// const contact = document.getElementById("contact-sel");


// home.addEventListener('click', function onClick(event){
//         home.style.color = '#ec1839';
//         about.style.color = "#302e4d"
//         service.style.color = "#302e4d"
//         portfolio.style.color = "#302e4d"
//         contact.style.color = "#302e4d"
// })

// about.addEventListener('click', function onClick(event){
//     about.style.color = "#ec1839"
//     home.style.color = "#302e4d"
//     service.style.color = "#302e4d"
//     portfolio.style.color = "#302e4d"
//     contact.style.color = "#302e4d"    
// })

// service.addEventListener('click', function onClick(event){
//     service.style.color = "#ec1839"
//     home.style.color = "#302e4d"
//     about.style.color = "#302e4d"    
//     portfolio.style.color = "#302e4d"
//     contact.style.color = "#302e4d"    
// })

// portfolio.addEventListener('click', function onClick(event){
//     portfolio.style.color = "#ec1839"
//     home.style.color = "#302e4d"
//     about.style.color = "#302e4d"    
//     service.style.color = "#302e4d"
//     contact.style.color = "#302e4d"    
// })

// contact.addEventListener('click', function onClick(event){
//     contact.style.color = "#ec1839"    
//     home.style.color = "#302e4d"
//     about.style.color = "#302e4d"    
//     service.style.color = "#302e4d"
//     portfolio.style.color = "#302e4d"
// })


//Typing Effect via JS library
var typed = new Typed(".typing", {
    strings:["", "Web Designer", "Graphics Designer", "Smart Contract Developer", "Social Media Manager", "Digital Marketer"],
    typeSpeed: 100,
    BackSpeed:60,
    loop: true
}) 

//Scrolling Effects via Scroll Reveal

//Picture scroll effects in a big screen
ScrollReveal().reveal('.d-p', {
    delay: 500,
    duration: 600,
    reset: true, 
    distance: '50%',   
    origin: 'left',
    opacity: 0,
    easing: 'cubic-bezier(0.5,0,0,1)'
});

//ABOUT ME SECTION

//About me
ScrollReveal().reveal('.ab-m', {
    delay: 400,
    duration: 600,
    reset: true,
    distance: '150%',
    origin: 'bottom',
    easing: 'ease-in'
});

//Profile Info
ScrollReveal().reveal('.p-i', {
    delay: 800,
    duration: 700,
    reset: true,
    distance: '20%',    
    origin: 'left',
    easing: 'ease-in'
});

//Skills list
ScrollReveal().reveal('.s-l', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '50%',
    origin: 'left',
    opacity: 0,
    easing: 'ease-out'
});

//Education
ScrollReveal().reveal('.edu', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '50%',
    origin: 'left',
    opacity: 0,
    easing: 'ease-in'
});

//Experience
ScrollReveal().reveal('.exp', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in'
});


//SERVICES SECTION
ScrollReveal().reveal('.wid', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '80%',
    origin: 'top',
    opacity: 0,
    easing: 'ease-out'
});

ScrollReveal().reveal('.wid2', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in'
});

//Projects Done

ScrollReveal().reveal('.port-folio', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in'
});


ScrollReveal().reveal('.port-folio2', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '100%',
    origin: 'top',
    opacity: 0,
    easing: 'ease-in'
});

//CONTACT ME
ScrollReveal().reveal('.c-d', {
    delay: 500,
    duration: 600,
    reset: true,
    distance: '20%',
    origin: 'left',
    opacity: 0,
    easing: 'ease-in'
});



