/**TYPING ANIMATION OF TEXT */


// function changeColor(clickedText) {
//     let texts = document.getElementsByClassName("active");
//     for (let i = 0; i < texts.length; i++) {
//       if (texts[i] == clickedText) {
//         texts[i].classList.add("selected");
//       } else {
//         texts[i].classList.remove("selected");
//       }
//     }
//   }

const home = document.getElementById("home-sel");
const about = document.getElementById("about-sel");
const service = document.getElementById("service-sel");
const portfolio = document.getElementById("portfolio-sel");
const contact = document.getElementById("contact-sel");


home.addEventListener('click', function onClick(event){
        home.style.color = "#ec1839"
        about.style.color = "#302e4d"
        service.style.color = "#302e4d"
        portfolio.style.color = "#302e4d"
        contact.style.color = "#302e4d"
})

about.addEventListener('click', function onClick(event){
    about.style.color = "#ec1839"
    home.style.color = "#302e4d"
    service.style.color = "#302e4d"
    portfolio.style.color = "#302e4d"
    contact.style.color = "#302e4d"    
})

service.addEventListener('click', function onClick(event){
    service.style.color = "#ec1839"
    home.style.color = "#302e4d"
    about.style.color = "#302e4d"    
    portfolio.style.color = "#302e4d"
    contact.style.color = "#302e4d"    
})

portfolio.addEventListener('click', function onClick(event){
    portfolio.style.color = "#ec1839"
    home.style.color = "#302e4d"
    about.style.color = "#302e4d"    
    service.style.color = "#302e4d"
    contact.style.color = "#302e4d"    
})

contact.addEventListener('click', function onClick(event){
    contact.style.color = "#ec1839"    
    home.style.color = "#302e4d"
    about.style.color = "#302e4d"    
    service.style.color = "#302e4d"
    portfolio.style.color = "#302e4d"
})



var typed = new Typed(".typing", {
    strings:["", "Web Designer", "Graphics Designer", "Smart Contract Developer", "Social Media Manager", "Digital Marketer"],
    typeSpeed: 100,
    BackSpeed:60,
    loop: true
}) 
