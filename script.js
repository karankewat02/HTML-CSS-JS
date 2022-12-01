// LOADER 
$(window).on("load", function() {
    $(".loader").fadeOut("slow");
    $("body").fadeIn("slow");

})




// BURGER MENU
const burgerMenu = document.querySelector(".burgerMenu");
const menu = document.querySelector("#navLinks");
const body = document.querySelector("#body");
const theamToggle = document.querySelector(".teamSwitch");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    menu.classList.toggle("activeMenu");
})

theamToggle.addEventListener("click", () => {
    body.classList.toggle("darkTheam");

})


// PARTICLE JS
particlesJS("particles-js", {
    particles: {
        number: { value: 1000, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});



// SLIDER JS

// Collaboration Slider
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    fade: { crossFade: true },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// SLIDER JS

// Collaboration Slider
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});



// WAYPOINT JS

$(document).ready(function() {


    function fadeEffect(classname){
        $(`.${classname}`).waypoint(function(direction) {
            $(`.${classname}`).addClass('animated fadeIn');
        }, {
            offset: "70%"
        })
    }

    fadeEffect("aboutUs");

    fadeEffect("clubs");

    fadeEffect("collaboration");

    fadeEffect("event");

    fadeEffect("blogs");

    fadeEffect("contactUs");

    fadeEffect("photoGallary");

    fadeEffect("joinUS");

    fadeEffect("mainEvent");
    
    fadeEffect("recentEvent");

    for (let i = 1; i <= 3; i++) {
        fadeEffect(`clubCard:nth-of-type(${i})`)
    }
    for (let i = 1; i <= 4; i++) {
        fadeEffect(`blogCard:nth-of-type(${i})`)
    }

})