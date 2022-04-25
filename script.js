var slide = document.querySelector(".slider");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");

btn1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    btn1.classList.add("activeSlide")
    btn2.classList.remove("activeSlide")
    btn3.classList.remove("activeSlide")
    btn4.classList.remove("activeSlide")
}
btn2.onclick = function(){
    slide.style.transform = "translateX(-100%)";
    btn2.classList.add("activeSlide")
    btn1.classList.remove("activeSlide")
    btn3.classList.remove("activeSlide")
    btn4.classList.remove("activeSlide")
}
btn3.onclick = function(){
    slide.style.transform = "translateX(-200%)";
    btn3.classList.add("activeSlide")
    btn2.classList.remove("activeSlide")
    btn1.classList.remove("activeSlide")
    btn4.classList.remove("activeSlide")
}
btn4.onclick = function(){
    slide.style.transform = "translateX(-300%)";
    btn4.classList.add("activeSlide")
    btn1.classList.remove("activeSlide")
    btn3.classList.remove("activeSlide")
    btn2.classList.remove("activeSlide")
}




var userBox = document.querySelector(".userBox");
var overlay = document.querySelector(".overlay");

function myOverFunction(){
   overlay.style.display = "flex";
}

function mouseout(){
    overlay.style.display = "none";
}




var zippySlider =document.querySelector(".zippySlider");

var zippySliderBackward = document.querySelector("#zippySliderBackward");
var zippySliderForward = document.querySelector("#zippySliderForward");
var zippySliderbtn1 = document.querySelector("#zippySliderImg1")
var zippySliderbtn2 = document.querySelector("#zippySliderImg2")
var zippySliderbtn3 = document.querySelector("#zippySliderImg3")
var zippySliderbtn4 = document.querySelector("#zippySliderImg4")
var zippySliderbtn5= document.querySelector("#zippySliderImg5")



zippySliderForward.onclick = function(){
    zippySlider.style.transform = "translateX(-300%)";
   
    
}
zippySliderBackward.onclick = function(){
    zippySlider.style.transform = "translateX(0%)";
}


zippySliderbtn1.onclick = function(){
    zippySlider.style.transform = "translateX(0px)";
}
zippySliderbtn2.onclick = function(){
    zippySlider.style.transform = "translateX(-100%)";

}
zippySliderbtn3.onclick = function(){
    zippySlider.style.transform = "translateX(-200%)";

}
zippySliderbtn4.onclick = function(){
    zippySlider.style.transform = "translateX(-300%)";

}
zippySliderbtn5.onclick = function(){
    zippySlider.style.transform = "translateX(-400%)";

}


var videoSlide = document.querySelector(".videoSlider");
var videobtn1 = document.querySelector("#videobtn1");
var videobtn2 = document.querySelector("#videobtn2");
var videobtn3 = document.querySelector("#videobtn3");
var video1 = document.querySelector("#video1")
var video2 = document.querySelector("#video2")
var video3 = document.querySelector("#video3")

videobtn1.onclick = function(){
    videoSlide.style.transform = "translateX(25%)";

    videobtn1.classList.add("activeVideoSlide")
    videobtn2.classList.remove("activeVideoSlide")
    videobtn3.classList.remove("activeVideoSlide")

    video1.classList.add("activeVideo")
    video2.classList.remove("activeVideo")
    video3.classList.remove("activeVideo")
}
videobtn2.onclick = function(){
    videoSlide.style.transform = "translateX(-30%)";

    videobtn2.classList.add("activeVideoSlide")
    videobtn1.classList.remove("activeVideoSlide")
    videobtn3.classList.remove("activeVideoSlide")

    video1.classList.remove("activeVideo")
    video2.classList.add("activeVideo")
    video3.classList.remove("activeVideo")
}
videobtn3.onclick = function(){
    videoSlide.style.transform = "translateX(-85%)";

    videobtn3.classList.add("activeVideoSlide")
    videobtn2.classList.remove("activeVideoSlide")
    videobtn1.classList.remove("activeVideoSlide")

    video1.classList.remove("activeVideo")
    video2.classList.remove("activeVideo")
    video3.classList.add("activeVideo")
}