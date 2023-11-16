                          
const city=document.getElementById('city')
const search=document.getElementById('search');                           


const windDetail=document.getElementsByClassName('windDetail');
const key="af4358566d01551685f7c0f98e30e17b";
const keyUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const img=document.querySelector('.weather-icon')

async function checkWeather(city){
       const response=await fetch(keyUrl +city +`&appid=${key}`);
       let data=await response.json();
       console.log(data)
       document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+`°c`;
       document.querySelector('.humDetail').innerHTML=data.main.humidity+"%";
       document.querySelector('.windDetail').innerHTML=data.wind.speed+"km/h";
       document.querySelector('.cityName').innerHTML=data.name; 

        if(data.weather[0].main=="Clear"){
           img.src="images/clear.png";
        }
        else if(data.weather[0].main=="Clouds"){
            img.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Mist"){
            img.src="images/mist.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            img.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            img.src="images/snow.png";
        }
        else if(data.weather[0].main=="Rain"){
            img.src="images/rain.png";
        }
        document.querySelector('.weather').style.display="block";

}

search.addEventListener('click',()=>{
    checkWeather(city.value);
})