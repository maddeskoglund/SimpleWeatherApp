import React, { Component } from 'react';
import Day from './components/Day'
import Datum from './components/Date'


// import Background from './components/Background'
import { BrowserRouter } from 'react-router-dom';
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


    const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);

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
            return element.name === "pmean";
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
        const sumTodayRain = Math.round(todayRain.reduce((total, amount) => total + amount));
        const sumTomorrowRain = Math.round(tomorrowRain.reduce((total, amount) => total + amount));
        const sumTomorrowPlus1Rain = Math.round(tomorrowPlus1Rain.reduce((total, amount) => total + amount));
        const avTodayWind = Math.round(todayWind.reduce((total, amount) => total + amount) / (todayWind.length));
        const avTomorrowWind = Math.round(tomorrowWind.reduce((total, amount) => total + amount) / (tomorrowWind.length));
        const avTomorrowPlus1Wind = Math.round(tomorrowPlus1Wind.reduce((total, amount) => total + amount) / (tomorrowPlus1Wind.length));


        this.setState((prevState) => {
          prevState.today.tempNow = tempNow;
          prevState.today.tempMax = todayTempMax;
          prevState.today.tempMin = todayTempMin;
          prevState.tomorrow.tempMax = tomorrowTempMax;
          prevState.tomorrow.tempMin = tomorrowTempMin;
          prevState.tomorrowPlus1.tempMax = tomorrowPlus1TempMax;
          prevState.tomorrowPlus1.tempMin = tomorrowPlus1TempMin;
          prevState.today.rain = sumTodayRain;
          prevState.tomorrow.rain = sumTomorrowRain;
          prevState.tomorrowPlus1.rain = sumTomorrowPlus1Rain;
          prevState.today.wind = avTodayWind;
          prevState.tomorrow.wind = avTomorrowWind;
          prevState.tomorrowPlus1.wind = avTomorrowPlus1Wind;



          //   // city

          return prevState;
        })

        // .catch((error) => console.log(error));
      });

  }







  render() {
    return (
      <div>




        <Day
          //today
          TempNow={this.state.today.tempNow}
          TodayTempMax={this.state.today.tempMax}
          TodayTempMin={this.state.today.tempMin}
          TodayRain={this.state.today.rain}
          TodayWind={this.state.today.wind}


        />



      </div >
    );
  }
}

export default App;
