const childTask = document.querySelector("#childrenTaskDescption");
const childTaskBtn = document.querySelector("#childrenTask");
const teenTask = document.querySelector("#teenTaskDescription");
const teenTaskBtn = document.querySelector("#teenageTask");
const adultTask = document.querySelector("#adultTaskDescription");
const adultTaskBtn = document.querySelector("#adultTask");

childTaskBtn.addEventListener("click",()=>{
    childTask.classList.toggle("active");
    childTaskBtn.classList.toggle("rotate");
})
teenTaskBtn.addEventListener("click",()=>{
    teenTask.classList.toggle("active");
    teenTaskBtn.classList.toggle("rotate");
})
adultTaskBtn.addEventListener("click",()=>{
    adultTask.classList.toggle("active");
    adultTaskBtn.classList.toggle("rotate");
})
