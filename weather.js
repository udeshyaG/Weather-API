class Weather {
    constructor(city, country) {
        this.apiKey = 'd4f2f285b7cd6b7ac6c2541e8fadab69';
        this.city = city;
        this.country = country;
    }

    //Fetch Weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change Weather Location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}