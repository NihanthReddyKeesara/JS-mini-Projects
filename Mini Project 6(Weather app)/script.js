

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '88cd68afe3msh835901a5ab1466ap12add0jsna6bf6ad49ade',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};



const getWeather=(city)=>{
  cityName.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)
    
        
        temp.innerText=response.temp
        feels_like.innerText=response.feels_like
        humidity.innerText=response.humidity
        min_temp.innerText=response.min_temp
        max_temp.innerText=response.max_temp
        wind_speed.innerText=response.wind_speed
        wind_degrees.innerText=response.wind_degrees
        sunrise.innerText=response.sunrise
        sunset.innerText=response.sunset
    })
    .catch(err=>console.error(err));
    
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
});

getWeather("Delhi");