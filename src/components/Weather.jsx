import React from "react";
import { getWeather, getHourlyForcast } from "./api";
import { Outlet, useLoaderData } from "react-router-dom";
import './style/Weather.css'
import Footer from './Footer'

export function loader() {
    return getWeather("Manila")
}

export async function hourlyForcast(lat, lon) {
    try {
      const result = await getHourlyForcast(lat, lon);
      return result.list;
    } catch (error) {

        return null;
    }
}

export default function Weather() {
    const [temp_6am, setTemp_6am] = React.useState(null);
    const [temp_9am, setTemp_9am] = React.useState(null);
    const [temp_12pm, setTemp_12pm] = React.useState(null);
    const [temp_3pm, setTemp_3pm] = React.useState(null);
    const [temp_6pm, setTemp_6pm] = React.useState(null);

    const [tday0_weatherDesc, setTday0_weatherDesc] = React.useState(null);
    const [tom1_weatherDesc, setTom1_weatherDesc] = React.useState(null);
    const [tom2_weatherDesc, setTom2_weatherDesc] = React.useState(null);
    const [tom3_weatherDesc, setTom3_weatherDesc] = React.useState(null);
    const [tom4_weatherDesc, setTom4_weatherDesc] = React.useState(null);
    const [tom5_weatherDesc, setTom5_weatherDesc] = React.useState(null);
    const [tom6_weatherDesc, setTom6_weatherDesc] = React.useState(null);

    
    const [lat, setLat] = React.useState(14.6042);
    const [lon, setLon] = React.useState(120.9822);

    const [searchCity, setSearchCity] = React.useState("")


    React.useEffect(() => {
        
        const fetchData = async () => {
          try {
            const weatherPerHour = await hourlyForcast(lat, lon);
            //console.log(weatherPerHour)
            
            setTemp_6am((Math.round((weatherPerHour[6].main.temp - 273.15) * 100) / 100).toFixed(0))
            setTemp_9am((Math.round((weatherPerHour[7].main.temp - 273.15) * 100) / 100).toFixed(0))
            setTemp_12pm((Math.round((weatherPerHour[0].main.temp - 273.15) * 100) / 100).toFixed(0))
            setTemp_3pm((Math.round((weatherPerHour[1].main.temp - 273.15) * 100) / 100).toFixed(0))
            setTemp_6pm((Math.round((weatherPerHour[2].main.temp - 273.15) * 100) / 100).toFixed(0))


            setTday0_weatherDesc(weatherPerHour[0].weather[0].description)
            setTom1_weatherDesc(weatherPerHour[7].weather[0].description)
            setTom2_weatherDesc(weatherPerHour[15].weather[0].description)
            setTom3_weatherDesc(weatherPerHour[23].weather[0].description)
            setTom4_weatherDesc(weatherPerHour[31].weather[0].description)
            setTom5_weatherDesc(weatherPerHour[39].weather[0].description)
            setTom6_weatherDesc(weatherPerHour[28].weather[0].description)
            
        } catch (error) {
    
        }
        };
        fetchData();
    }, [lat]);

    const [weather, setWeather] = React.useState(useLoaderData())
    
    
    

    let f1Temp = weather.main.temp - 273.15
    let f1ChanceOfRain = (weather.main.humidity / 100) * 100
    const f1 = 
    <div>
        <div className="f1--main-container">
            <div className="f1--city">{weather.name}</div>
            <div className="f1--chance">Chance of Rain: {f1ChanceOfRain}%</div>
            <div className="f1--temp">{(Math.round(f1Temp * 100) / 100).toFixed(2)}°</div>
        </div>
    </div>

    const f2 =
    <div>
        <div className="f2--title">Today's Forecast</div>
        <div className="f2--time-collection">
            <div className="f2--pack">
                <div className="f2--time">
                    <u>
                        6 : 00 AM
                    </u>
                </div>
                <div className="f2--temp">
                    {temp_6am}°
                </div>
            </div>
            <div className="f2--pack">
                <div className="f2--time">
                    <u>
                        9 : 00 AM
                    </u>
                </div>
                <div className="f2--temp"> 
                    {temp_9am}°
                </div>
            </div>
            <div className="f2--pack">
                <div className="f2--time">
                    <u>
                        12 : 00 PM
                    </u>
                </div>
                <div className="f2--temp">
                    {temp_12pm}°
                </div>
            </div>
            <div className="f2--pack">
                <div className="f2--time">
                    <u>
                        3 : 00 PM
                    </u>
                </div>
                <div className="f2--temp">
                    {temp_3pm}°
                </div>
            </div>
            <div className="f2--pack">
                <div className="f2--time">
                    <u>
                        6 : 00 PM
                    </u>
                </div>
                <div className="f2--temp">
                    {temp_6pm}°
                </div>
            </div>
        </div>
    </div>

    let f3FeelsLike = (Math.round((weather.main.feels_like - 273.15) * 100) / 100).toFixed(2)
    let f3Wind = weather.wind.speed 
    

    const f3 =
    <div>
        <div className="f2--title">
            Weather Condition
        </div>

        <div className="f2--dets">

            <div className="weather--condition-container">
                <div className="weather--title-icon">
                    <img className="weather--1" src="/images/thermometer.png" />
                </div>
                <div className="weather--dets">
                    <div className="weather--title">
                        Real Feel
                    </div>
                    <div className="weather--feels-like">
                        {f3FeelsLike}°
                    </div>
                </div>
            </div>

            <div className="weather--condition-container">
                <div className="weather--title-icon">
                    <img className="weather--1" src="/images/wind.png" />
                </div>
                <div className="weather--dets">
                    <div className="weather--title">
                        Wind
                    </div>
                    <div className="weather--feels-like">
                        {f3Wind} km / h
                    </div>
                </div>
            </div>

            <div className="weather--condition-container">
                <div className="weather--title-icon">
                    <img className="weather--1" src="/images/uv_index.png" />
                </div>
                <div className="weather--dets">
                    <div className="weather--title">
                        UV Index
                    </div>
                    <div className="weather--feels-like">
                        {(f3Wind - 1.3).toFixed(2)}
                    </div>
                </div>
            </div>

            <div className="weather--condition-container">
                <div className="weather--title-icon">
                    <img className="weather--1" src="/images/chance_of_rain.png" />
                </div>
                <div className="weather--dets">
                    <div className="weather--title">
                        Chance of Rain
                    </div>
                    <div className="weather--feels-like">
                        {f1ChanceOfRain}%
                    </div>
                </div>
            </div>
            
        </div>
    </div>



    var today = new Date();
    var dayOfWeek = today.getDay();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    var currentDay = daysOfWeek[dayOfWeek];
    var currentDay_1 = daysOfWeek[(dayOfWeek + 1) % 7];
    var currentDay_2 = daysOfWeek[(dayOfWeek + 2) % 7];
    var currentDay_3 = daysOfWeek[(dayOfWeek + 3) % 7];
    var currentDay_4 = daysOfWeek[(dayOfWeek + 4) % 7];
    var currentDay_5 = daysOfWeek[(dayOfWeek + 5) % 7];
    var currentDay_6 = daysOfWeek[(dayOfWeek + 6) % 7];


    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var formattedDate = day + '/' + month;


    var tomorrow_1 = new Date(today);
    tomorrow_1.setDate(today.getDate() + 1);
    var tomorrowDay_1 = String(tomorrow_1.getDate()).padStart(2, '0');
    var tomorrowMonth_1 = String(tomorrow_1.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_1= tomorrowDay_1 + '/' + tomorrowMonth_1;

    var tomorrow_2 = new Date(today);
    tomorrow_2.setDate(today.getDate() + 2);
    var tomorrowDay_2 = String(tomorrow_2.getDate()).padStart(2, '0');
    var tomorrowMonth_2 = String(tomorrow_2.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_2= tomorrowDay_2 + '/' + tomorrowMonth_2;

    
    var tomorrow_3 = new Date(today);
    tomorrow_3.setDate(today.getDate() + 3);
    var tomorrowDay_3 = String(tomorrow_3.getDate()).padStart(2, '0');
    var tomorrowMonth_3 = String(tomorrow_3.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_3= tomorrowDay_3 + '/' + tomorrowMonth_3;

    var tomorrow_4 = new Date(today);
    tomorrow_4.setDate(today.getDate() + 4);
    var tomorrowDay_4 = String(tomorrow_4.getDate()).padStart(2, '0');
    var tomorrowMonth_4 = String(tomorrow_4.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_4 = tomorrowDay_4 + '/' + tomorrowMonth_4;

    var tomorrow_5 = new Date(today);
    tomorrow_5.setDate(today.getDate() + 5);
    var tomorrowDay_5 = String(tomorrow_5.getDate()).padStart(2, '0');
    var tomorrowMonth_5 = String(tomorrow_5.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_5= tomorrowDay_5 + '/' + tomorrowMonth_5;

    var tomorrow_6 = new Date(today);
    tomorrow_6.setDate(today.getDate() + 6);
    var tomorrowDay_6 = String(tomorrow_6.getDate()).padStart(2, '0');
    var tomorrowMonth_6 = String(tomorrow_6.getMonth() + 1).padStart(2, '0'); 
    var formattedTomorrow_6 = tomorrowDay_6 + '/' + tomorrowMonth_6;

    

    const f4 =
    <div>
        <div className="weather--dashboard-left">
            <div className="weather--dashboard-left-title">
                7 Day Forecast
            </div>
            <div className="weather--dl-text">
                
                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        Today
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedDate}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tday0_weatherDesc}
                    </div>
                </div>
                
                <div class="bar-line"></div>
                
                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_1}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_1}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom1_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>

                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_2}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_2}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom2_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>

                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_3}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_3}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom3_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>

                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_4}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_4}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom4_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>

                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_5}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_5}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom5_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>

                <div className="weather--dl-day-pack">
                    <div className="weather--dl-day-txt">
                        {currentDay_6}
                    </div>
                    <div className="weather--dl-date-txt">
                        {formattedTomorrow_6}
                    </div>
                    <div className="weather--dl-desc-txt">
                        {tom6_weatherDesc}
                    </div>
                </div>

                <div class="bar-line"></div>
            </div>
        </div>
    </div>

    

    function handleSearchChange(event) {
        const {name, value} = event.target
        setSearchCity(prevData => {
            return ({
                ...prevData,
                [name]: value
            })
        })
    }


    function handleSubmitBtn(event) {
        event.preventDefault()
        loadNewCityWeather(searchCity.citySearch)
    }

    function newCityLoader(city) {
        return getWeather(city)
    }

    async function loadNewCityWeather(city) {
        try {
            const newWeatherData = await newCityLoader(city);
            setLat(newWeatherData.coord.lat)
            setLon(newWeatherData.coord.lon)
            setWeather(newWeatherData);
        } catch (error) {

        }
    }


    return (
        <>
            <div className="weather--main-container">
                <div className="weather--forecast">
                   {f4}
                </div>
                <div className="weather--right-container">
                    <div className="weather--search-container">
                        <input 
                            type="text" 
                            name="citySearch"
                            className="weather--search"
                            placeholder="Search for Cities"
                            onChange={handleSearchChange}
                            value={searchCity.citySearch}
                        >
                        </input>
                        <form onSubmit={handleSubmitBtn}>
                            <button className="weather--search-btn" type="submit">
                                <img className="weather--search-icon" src="/images/search.png" />
                            </button>
                        </form>
                    </div>
                    <div className="weather--dashboard-city">
                        {f1}
                    </div>
                    <div className="weather--dashboard">
                        {f2}
                    </div>
                    <div className="weather--dashboard">
                        {f3}
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}