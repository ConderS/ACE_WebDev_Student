import React, { Component } from 'react';

import '../styles/components/weather.css';

const API_KEY = 'eacc07830fd7d628994f5254d19ba01d';

export class Weather extends Component {
    constructor(props) {
        super(props);

        const days = this.getDays();

        this.state = {
            coords: {},
            days: days,
            weather: []
        }

        this.getCoordinates = this.getCoordinates.bind(this);
        this.getDays = this.getDays.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.processWeatherData = this.processWeatherData.bind(this);
        this.renderWeather = this.renderWeather.bind(this);
    }

    componentDidMount() {
        this.getWeather();
    }

    getCoordinates() {

        var coords = {};

        const coordPromise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(function(position) {
                coords.lat = position.coords.latitude;
                coords.long = position.coords.longitude;
                
                console.log("COORDS: ", coords);

                resolve(coords);
            });
        }); 

        return coordPromise;
    }

    getWeather() {
        this.getCoordinates().then((coords) => {

                console.log("RECEIVED COORDS: ", coords);

                var URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`;

                console.log("URL: ", URL);

                var request = new Request(URL, {
                    method: 'GET',
                    mode: 'cors',
                });

                fetch(request)
                    .then(response => {
                        console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        
                        var weather = this.processWeatherData(data);

                        // this.setState({ weather });
                    })
                    .catch(err => console.log(err));
        });
    }
    
    processWeatherData(data) {
        var weather = [];
        const weatherList = data.list;
        
        var prevDay = 999;

        weatherList.map(day => {
            var date = day.dt_txt;
            var currWeather = day.weather[0].main;

            var currDate = new Date(date);
            var day = currDate.getDay();
            
            if (day !== prevDay) {
                weather.push(currWeather);
                prevDay = day;
            }
        });

        this.setState({ weather });
    }

    getDays() {
        const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        const date = new Date();

        var days = [];
        const currentDay = date.getDay();
        for (var i = 0; i < 5; i++) {
            var weatherDay = currentDay + i;
             if (weatherDay > 6) {
                weatherDay -= 7;
             }
             
            days.push(DAYS[weatherDay]);
        }
        
        return days;
    }

    renderWeather() {
        const { weather } = this.state;

        if (!weather ) {
            return (
                <p>Loading...</p>
                );
        }
        
        const weatherClass = {
            "Clouds": {color: '#b2bec3'},
            "Clear": {color: '#dff9fb'},
            "Rain": {color: '#7ed6df'},
            "Snow": {color: '#ffffff'}
        }
        return weather.map((weather, index) => {
            return (
                <td key={index} style={weatherClass[weather]}>{weather}</td>
                )
        });
    }


    render() {

        const { days } = this.state;

        return (
            <div className="weather-container">
                <table className="weather-table">
                    <tbody>
                        <tr>
                            <th>Today</th>
                            <th>Tomorrow</th>
                            <th>{days[2]}</th>
                            <th>{days[3]}</th>
                            <th>{days[4]}</th>
                        </tr>
                        <tr className="w-results">
                            {this.renderWeather()}
                        </tr>
                    </tbody>
                </table>
            </div>
            )
    }
}

export default Weather;