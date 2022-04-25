$(document).ready(function() {


    function fadeEffect(classname,effect){
        $(`.${classname}`).waypoint(function(direction) {
            $(`.${classname}`).addClass(`animated ${effect}`);
        }, {
            offset: "70%"
        })
    }

    fadeEffect(`mockupImg:nth-of-type(${3})`,"fadeIn");

    for(let i=1;i<=1;i++){
        fadeEffect(`mockupImg:nth-of-type(${i})`,"fadeIn");
        fadeEffect(`mockupImg:nth-of-type(${3+i})`,"fadeIn");
    }

    for(let i=2;i<=2;i++){
        fadeEffect(`mockupImg:nth-of-type(${i})`,"fadeIn");
        fadeEffect(`mockupImg:nth-of-type(${3+i})`,"fadeIn");
    }
   
    

})
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
    
}
function changeCircleColor(color){
    const circle = document.querySelector('.right');
    circle.style.background = color;
}


// BURGER MENU
const burgerMenu = document.querySelector(".burgerMenu");
      const menu = document.querySelector("nav ul");
      
      burgerMenu.addEventListener("click",() => {
          burgerMenu.classList.toggle("active");
          menu.classList.toggle("activeMenu");
      })