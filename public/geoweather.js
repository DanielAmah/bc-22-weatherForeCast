var url;
var iconURL;
var temp;
var units;

$.getJSON("http://ip-api.com/json", function(position) {
    console.log("Get location step");
    var locationInfo = position;
    var lat = position.lat;
    var long = position.lon;
    var cityName = position.city;
    var country = position.countryCode;
    console.log(locationInfo);

    $("#local-city").html(cityName + ", " + country);

    url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=98b64b8a1094b7b9e011578dc1ca69b8&units=imperial";
})

.done(function() {
    $.getJSON(url, function(jsonData) {
        var weatherData = jsonData;
        var weatherTemp = Math.round(weatherData.main.temp);
        var weatherDescription = weatherData.weather[0].description;
        var weatherIcon = weatherData.weather[0].icon;

        iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

        $("#temperature").html(weatherTemp + "°F");
        $("#weatherIcon").attr("src", iconURL);
        $("#descriptor").html(weatherDescription);

        units = "fahrenheit";

        function F2C(weatherTemp) {
            var celsius = (weatherTemp - 32) * (5 / 9);
            return Math.round(celsius);
        }

        $("#temperature").on("click", function() {
            if (units === "fahrenheit") {
                $("#temperature").html(F2C(weatherTemp) + "°C");
                units = "celsius";
            } else {
                $("#temperature").html(weatherTemp + "°F");
                units = "fahrenheit";
            }
        });

        //Change background image according to temperature
        if (weatherTemp < 32) {
            $("body").css({
                "background-image": "url('http://www.gomn.com/wp-content/uploads/2016/12/icicle-winter-weather.jpg')"
            });
        } else if (weatherTemp >= 32 && weatherTemp <= 60) {
            $("body").css("background-image", "url('http://16749-presscdn-0-94.pagely.netdna-cdn.com/wp-content/uploads/2015/11/173490_LW_exercise_cold_41-1024x667.jpg')");
        } else if (weatherTemp > 60 && weatherTemp < 80) {
            $("body").css("background-image", "url('http://inspiyr.com/wp-content/uploads/2013/08/warm-weather-health-benefits.jpg')");
        } else {
            $("body").css("background-image", "url('http://www.ultimate-survival-training.com/wp-content/uploads/2012/09/desert-001.jpg')");
        }
    });
});