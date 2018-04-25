import React, { Component } from 'react';
import Today from './components/Today'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      today: {
        city: [],
        tempNow: [],
        tempMax: [],
        tempMin: [],
        rain: [],
        wind: []
      },
      tomorrow: {
        city: [],
        tempMax: [],
        tempMin: [],
        rain: [],
        wind: []
      },
      tomorrowPlus1: {
        city: [],
        tempMax: [],
        tempMin: [],
        rain: [],
        wind: []
      },
    }
  }

  // error????


  componentDidMount() {
    // const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
    const long = '16.90267';
    const lat = '59.65584';
    let tempNow = -Infinity;

    const todayTemp = [];
    const todayRain = [];
    const todayWind = [];
    const tomorrowTemp = [];
    const tomorrowRain = [];
    const tomorrowWind = [];
    const tomorrowPlus1Temp = [];
    const tomorrowPlus1Rain = [];
    const tomorrowPlus1Wind = [];





    // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
    const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data);

        const today = new Date();
        const todayStr = today.toLocaleString().slice(0, 10);
        const tomorrow = new Date(today.setDate(today.getDate() + 1));
        const tomorrowStr = tomorrow.toLocaleString().slice(0, 10);
        const tomorrowPlus1 = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
        const tomorrowPlus1Str = tomorrowPlus1.toLocaleString().slice(0, 10);

        tempNow = data.timeSeries[0].parameters.filter(
          element => element.name === "t"
        )[0].values[0];

        data.timeSeries.map(listItem => {
          const { validTime, parameters } = listItem;
          // Temp
          let temperature = parameters.filter(element => {
            return element.name === "t";
          })[0].values[0];

          let rainfall = parameters.filter(element => {
            return element.name === "pmin";
          })[0].values[0];

          // Wind
          let windspeed = parameters.filter(element => {
            return element.name === "ws";
          })[0].values[0];


          if (validTime.startsWith(todayStr)) {
            todayTemp.push(temperature);
            todayRain.push(rainfall);
            todayWind.push(windspeed);
          } else if (validTime.startsWith(tomorrowStr)) {
            tomorrowTemp.push(temperature);
            tomorrowRain.push(rainfall);
            tomorrowWind.push(windspeed);
          } else if (validTime.startsWith(tomorrowPlus1Str)) {
            tomorrowPlus1Temp.push(temperature);
            tomorrowPlus1Rain.push(rainfall);
            tomorrowPlus1Wind.push(windspeed);
          }

        })

        const todayTempMax = Math.max(...todayTemp)
        const todayTempMin = Math.min(...todayTemp)
        const tomorrowTempMax = Math.max(...tomorrowTemp)
        const tomorrowTempMin = Math.min(...tomorrowTemp)
        const tomorrowPlus1TempMax = Math.max(...tomorrowPlus1Temp)
        const tomorrowPlus1TempMin = Math.min(...tomorrowPlus1Temp)



        // console.log(Math.add(todayRain))

        // const todayRainStr = todayRain.toString()
        // const todayRainStr1 = Math.subtract(todayRainStr)
        // console.log(todayRainStr)



        this.setState((prevState) => {
          prevState.today.tempNow = tempNow;
          prevState.today.tempMax = todayTempMax;
          prevState.today.tempMin = todayTempMin;
          prevState.tomorrow.tempMax = tomorrowTempMax;
          prevState.tomorrow.tempMin = tomorrowTempMin;
          prevState.tomorrowPlus1.tempMax = tomorrowPlus1TempMax;
          prevState.tomorrowPlus1.tempMin = tomorrowPlus1TempMin;

          // city
          // rain
          // wind
        })
        console.log(tempNow)
        // .catch((error) => console.log(error));
      });

  }







  render() {
    return (
      <div>
        <Today
          tempNow={this.state.tempNow}
        />

      </div >
    );
  }
}

export default App;
