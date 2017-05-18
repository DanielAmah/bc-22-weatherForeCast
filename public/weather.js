window.onload = function() {
    $(function() {
        if (window.location.protocol === "https:")
            window.location.protocol = "http";
    });
}



$(document).ready(function() {

    $('#submitWeather').click(function() {
        let city = $('#city').val();
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=7" + "&APPID=98b64b8a1094b7b9e011578dc1ca69b8",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    let widget = show(data);
                    $("#showWeather").html(widget);
                    $('#city').val('');

                }


            });

        } else {
            $('#error').html('Field can not be empty');
        }
    });

});

function show(data) {

    $("#cityName").html(data.city.name);
    $("#temp").html(data.list[0].temp.day);
    $("#weather").html(data.list[0].weather[0].main);
    $("#pressure").html(data.list[0].pressure);
    $("#humidity").html(data.list[0].humidity);

    $("#showWeather").empty();

    $.each(data.list, function(i, item) {

        $("#showWeather").append(
            "<center><div class='col-md-1' style=' margin: 2px; background-color: wheat;'>" +
            "<h5> " + item.dt + " </h5><h5> " + item.temp.day + " °C </h5>" +
            "<h5> " + item.weather[0].main + " </h5><h5> " + item.pressure + " </h5>" +
            "<h5> " + item.humidity + " </h5><h5></div></center>"

        )


    });
}