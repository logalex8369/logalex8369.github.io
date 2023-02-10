if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		fetch("https://api.weatherapi.com/v1/forecast.json?key=130a4c71c02a473cbd800633230702&q=" + position.coords.latitude + "," + 
position.coords.longitude + "&days=7&aqi=yes&alerts=no")
			.then(res => res.json())
			.then(weather => {
				
				if (weather.current.is_day) {
					document.getElementById("body").style["background-image"] = "url(https://cdn2.f-cdn.com/contestentries/329593/16030908/569a8dbc19409_thumb900.jpg)";
				} else {
					document.getElementById("body").style["background-image"] = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgbkLYgbTGcmkjiB7LgVRCMmdO_xcTkWAOg&usqp=CAU)";
					document.getElementById("holder").style.color = "white"
				}
				document.getElementById("place").innerHTML = "<h1>" + weather.location.name + ", " + weather.location.region + "</h1><h2>Today:</h2>";
				document.getElementById("icon").src = weather.current.condition.icon.slice(28);
				tempFace = "";
				if (weather.current.feelslike_f >= 80) {
					tempFace = "🥵";
				} else if (weather.current.feelslike_f >= 50) {
					tempFace = "😀";
				} else {
					tempFace = "🥶";
				}
				document.getElementById("highLow").innerHTML = "<h2>High: " + weather.forecast.forecastday["0"].day.maxtemp_f + "°F (" + weather.forecast.forecastday["0"].day.maxtemp_c + "°C)<br>Low: " + weather.forecast.forecastday["0"].day.mintemp_f + "°F (" + weather.forecast.forecastday["0"].day.mintemp_c + "°C)</h2>";
				document.getElementById("temp").innerHTML = "<h2>Temperature: " + weather.current.temp_f + "°F (" + weather.current.temp_c + "°C)<br>Wind chill: " + weather.current.feelslike_f + "°F (" + weather.current.feelslike_c + "°C)<br><br>It's " + tempFace + " outside.<br></h2>";
				
				document.getElementById("wind").innerHTML = "<h3>The wind is blowing to the " + weather.current.wind_dir + "<br>with a strength of " + weather.current.gust_mph + " mph (" + weather.current.gust_kph + " kph).</h3>";
				document.getElementById("visibility").innerHTML = "<h3>Visibility is " + weather.current.vis_miles + " miles (" + weather.current.vis_km + " kilometers).</h3>";
				goOutsideUS = ""
				goOutsideUK = ""
				if (weather.current.air_quality["us-epa-index"] = 1) {
					goOutsideUS = "good"
				} else if (weather.current.air_quality["us-epa-index"] = 2) {
					goOutsideUS = "moderate"
				} else if (weather.current.air_quality["us-epa-index"] = 3) {
					goOutsideUS = "unhealthy for sensitive group"
				} else if (weather.current.air_quality["us-epa-index"] = 4) {
					goOutsideUS = "unhealthy"
				} else if (weather.current.air_quality["us-epa-index"] = 5) {
					goOutsideUS = "very unhealthy"
				} else {
					goOutsideUS = "hazardous"
				}
				if (weather.current.air_quality["gb-defra-index"] <= 3) {
					goOutsideUK = "low"
				} else if (weather.current.air_quality["gb-defra-index"] <= 6) {
					goOutsideUK = "moderate"
				} else if (weather.current.air_quality["gb-defra-index"] <= 9) {
					goOutsideUK = "high"
				} else {
					goOutsideUK = "very high"
				}
				document.getElementById("visibility").innerHTML = "<h3>Air Quality is " + weather.current.air_quality["us-epa-index"] + " using US EPA Index (That is " + goOutsideUS + ")<br>and " + weather.current.air_quality["gb-defra-index"] + " using UK Defra Index (That is " + goOutsideUK + ").</h3>";
				
				document.getElementById("forecast").innerHTML="<h2><br>Forecast:</h2><h4>Today: Tomorrow: In 2 Days: In 3 Days: In 4 Days: In 5 Days: In 6 Days:</h4>"
				document.getElementById("forecast0").src = weather.forecast.forecastday["0"].day.condition.icon.slice(28);
				document.getElementById("forecast1").src = weather.forecast.forecastday["1"].day.condition.icon.slice(28);
				document.getElementById("forecast2").src = weather.forecast.forecastday["2"].day.condition.icon.slice(28);
				document.getElementById("forecast3").src = weather.forecast.forecastday["3"].day.condition.icon.slice(28);
				document.getElementById("forecast4").src = weather.forecast.forecastday["4"].day.condition.icon.slice(28);
				document.getElementById("forecast5").src = weather.forecast.forecastday["5"].day.condition.icon.slice(28);
				document.getElementById("forecast6").src = weather.forecast.forecastday["6"].day.condition.icon.slice(28);
				
				console.log(weather);
			});
	});
} else {
	console.log("Sorry. Your browser does not support geolocation.")
}

