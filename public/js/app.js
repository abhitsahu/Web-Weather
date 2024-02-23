
const weatherForm = document.querySelector("form");
const check = document.querySelector("input");
const img = document.querySelector(".weather_img");
const time = document.querySelector(".time");
const webcountry = document.querySelector(".country");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const humidityvalue = document.querySelector(".humidityvalue");
const windvalue = document.querySelector(".windvalue");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const error = document.querySelector(".error")
const text = document.querySelector(".text")
const pressurevalue = document.querySelector(".pressurevalue");
const uvindex = document.querySelector(".uv");
const uvvalue = document.querySelector(".uvalue");
const wind_direction = document.querySelector(".winddir");
const wind_direction_value = document.querySelector(".winddirvalue");
const feelslike = document.querySelector(".feelslike");
const feelslike_value = document.querySelector(".feelslikevalue");


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const locationValue = check.value;
   //
   error.textContent=""
   //
  
  



  fetch("http://localhost:3000/weather?address=" + locationValue).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
         
          error.textContent = data.error;
        } 
        else 
        {
          //
            text.textContent = "";
            time.textContent = "";
            webcountry.textContent = "";
            temperature.textContent="";
            humidity.textContent="Humidity";
            wind.textContent="Wind Speed";
            pressure.textContent="Pressure";
            humidityvalue.textContent="";
            windvalue.textContent="";
            pressurevalue.textContent="";
            uvindex.textContent="UV Index";
            wind_direction.textContent="Wind Dir";
            feelslike.textContent="Feelslike";
            uvvalue.textContent="";
            wind_direction_value.textContent="";
            feelslike_value.textContent="";
            
          //
          text.textContent = data.lpath.text;
          time.textContent = data.lpath.time;
          webcountry.textContent=data.lpath.placeName+","+data.lpath.region+","+data.lpath.country;
          temperature.textContent=data.lpath.temperature+"°C";
          humidityvalue.textContent=data.lpath.humidity+"%";
          windvalue.textContent=data.lpath.windspeed+ " mph";
          pressurevalue.textContent=data.lpath.pressure+ " mb";
          uvvalue.textContent=data.lpath.uvindex-1+" of 11";
          wind_direction_value.textContent=data.lpath.windDirection+"";
          feelslike_value.textContent=data.lpath.feelslike+"°C";
          img.src = data.lpath.icon;

        }
      });
    }
  );
});
