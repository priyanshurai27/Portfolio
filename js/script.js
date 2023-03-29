let weather = {
  fetchWeather: function (city) {
	//alert(city)
    fetch('https://api.api-ninjas.com/v1/weather?city='+city, {
		method: 'GET',
		headers: {
			'X-Api-Key': 'vbLL83dqdy8l14JZNfPXvw==slqPWgsBpm8iIQ8k'			
		},
	})
      .then((response) => response.json())
      .then((data) => this.displayWeather(data,city));
      }, 
  displayWeather: function (data,city) {
	
	const name = city	
	const { humidity } = data;
	const { temp } = data;
	
	const { wind_speed } = data;
	//console.log(name,humidity,temp,wind_speed)
	document.querySelector(".city").innerText = "Weather in " + name;
    /*document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";*/
    /*document.querySelector(".description").innerText = description;*/
    //alert(temp)
    document.querySelector(".temp").innerText = temp+" °C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + wind_speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Varanasi");