// !Selectors For Our Project 

let weatherForm = document.querySelector(".weatherForm");
let cityInput = document.querySelector(".cityInput");
let card = document.querySelector(".card");

//! API Key of our Project
apikey = "6f102ac04e49a2b1ac1d9a16006e47c0";

//! 
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let city = cityInput.value;
  if (city) {
    try {
      let weatherData = await getweatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Plz Enter A City");
  }
});

async function getweatherData(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error("Could not fetch Data");
  }
  let data = await res.json();
  return await data;
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    main: { temp: taapmaan, humidity: geelapan },
    weather: [{ description: mosmKiStiti, id: iconId }],
  } = data;
  card.textContent = "";
  card.style.display = "flex";

  let cityDisplay = document.createElement("h1");
  let taapMaanDisplay = document.createElement("p");
  let geelapanDisplay = document.createElement("p");
  let mosmKiStitiDisplay = document.createElement("p");
  let weatherEmoji = document.createElement("p");

  cityDisplay.innerText = city;
  taapMaanDisplay.innerText = `${(taapmaan - 273.15).toFixed(1)}°C`;
  geelapanDisplay.innerText = `Humidity is ${geelapan}%`;
  mosmKiStitiDisplay.innerText = mosmKiStiti;
  weatherEmoji.innerText = getWeatherEmoji(iconId);

  cityDisplay.classList.add("cityDisplay");
  taapMaanDisplay.classList.add("tempDisplay");
  geelapanDisplay.classList.add("himidityDisplay");
  mosmKiStitiDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(taapMaanDisplay);
  card.appendChild(geelapanDisplay);
  card.appendChild(mosmKiStitiDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch(true){
    case (weatherId >= 200 && weatherId < 300):
        return "⛈";
    case (weatherId >= 300 && weatherId < 400):
        return "🌧";
    case (weatherId >= 500 && weatherId < 600):
        return "🌧";
    case (weatherId >= 600 && weatherId < 700):
        return "❄";
    case (weatherId >= 700 && weatherId < 800):
        return "🌫";
    case (weatherId === 800):
        return "☀";
    case (weatherId >= 801 && weatherId < 810):
        return "☁";
    default:
        return "❓";
}
}

function displayError(message) {
  let errorDIsplay = document.createElement("p");
  errorDIsplay.innerText = message;
  errorDIsplay.classList.add("errorDisplay");

  // card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDIsplay);
}
