// api url
const searchBtn = document.querySelector("#searchbtn");
const inputCity = document.querySelector(".search>input");
const cityName = document.querySelector("#data>h2");
const temp = document.querySelector("#data>span")
const weather = document.querySelector("#data>h3:first-of-type")
const minmax = document.querySelector("#data>h3:nth-of-type(2)")
const day = document.querySelector("#data>p")


searchBtn.addEventListener('click',async ()=>{
    const searchedCity = inputCity.value;
    const api_url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity},units=metric&appid=f6944d79186f641f5c7de1fb6d5224cf`;
    await getapi(api_url);
})

// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {

        const date = new Date();
        weather.innerHTML = data.weather[0].main
        
        day.innerHTML = date.getDate()+" / "+ date.getMonth() +" / "+ date.getFullYear() ;


        cityName.innerHTML=data.name;    
        temp.innerHTML= Math.trunc(data.main.temp - 273.15) + "°C";    

        minmax.innerHTML = "min : " + Math.trunc(data.main.temp_min - 273.15) + "°C" + " / " + "max : " + Math.trunc(data.main.temp_max - 273.15) + "°C"

        
    }   
}

