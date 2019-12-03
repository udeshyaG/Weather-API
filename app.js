//Initialize storage class
const storage = new Storage();
//Get stored location
const weatherLocation = storage.getLocationData();

//Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//INit UI
const ui = new UI();

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {


    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    //Set location in local storage
    storage.setLocationData(city, country);

    //Get and display weather
    getWeather();

    //CLose the modal
    $('#locModal').modal('hide');

})

//weather.changeLocation('Delhi', 'in');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        let myCelcius = 0;
        let myCelciusRounded = 0;

        myCelcius = kelvin - 273.15;
        myCelciusRounded = Math.round(myCelcius);
        return myCelciusRounded;
    }
}

function windDirectionFromDegrees(deg) {
    if (deg <= 44) {
        return 'North';
    } else if (deg <= 89) {
        return 'Northeasterly'
    } else if (deg <= 134) {
        return 'Easterly'
    } else if (deg <= 179) {
        return 'Southeasterly'
    } else if (deg <= 224) {
        return 'South'
    } else if (deg <= 269) {
        return 'Southwesterly'
    } else if (deg <= 314) {
        return 'Westerly'
    } else {
        return 'Northwesterly'
    }
}