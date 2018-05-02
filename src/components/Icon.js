import React, { Component } from 'react';
import Cloud from "react-icons/lib/ti/weather-cloudy";
import PartSun from "react-icons/lib/ti/weather-partly-sunny";
import Rain from "react-icons/lib/ti/weather-shower";
import Snow from "react-icons/lib/ti/weather-snow";
import Thunder from "react-icons/lib/ti/weather-stormy";
import Sun from "react-icons/lib/ti/weather-sunny";



class Icon extends Component {

    const IconNow = { this.props.IconNow };

    const sun = [1, 2]
    const sunCloud = [3, 4]
    const cloud = [5, 6, 7]
    const rain = [8, 9, 10, 12, 13, 14, 18, 19, 22, 23, 24]
    const thunder = [11, 21]
    const snow = [15, 16, 17, 25, 26, 27]


    om IconNow === sunobjeketen {

}


sun ? <Sun /> :
    sunCloud ? <PartSun /> :
        cloud ? <Cloud /> :
            rain ? <Rain /> :
                thunder ? <Thunder /> :
                    snow ? <Snow /> : null;







}

export default Icon;



// 1	Clear sky
// 2	Nearly clear sky
// 3	Variable cloudiness
// 4	Halfclear sky
// 5	Cloudy sky
// 6	Overcast
// 7	Fog
// 8	Light rain showers
// 9	Moderate rain showers
// 10	Heavy rain showers
// 11	Thunderstorm
// 12	Light sleet showers
// 13	Moderate sleet showers
// 14	Heavy sleet showers
// 15	Light snow showers
// 16	Moderate snow showers
// 17	Heavy snow showers
// 18	Light rain
// 19	Moderate rain
// 20	Heavy rain
// 21	Thunder
// 22	Light sleet
// 23	Moderate sleet
// 24	Heavy sleet
// 25	Light snowfall
// 26	Moderate snowfall
// 27	Heavy snowfall

// 1, 2 = sol
// 3, 4 = sol med moln
// 5, 6 = moln
// 7 = dimma
// 8, 9, 10, 12, 13, 14, 18, 19, 20, 22, 23, 24 = regn
// 11, 21 = åska
// 15, 16, 17, 25, 26, 27 = snö