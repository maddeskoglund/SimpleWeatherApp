import React, { Component } from 'react';
import Today from './Date'
import ArrowUp from 'react-icons/lib/fa/long-arrow-up';
import ArrowDown from 'react-icons/lib/fa/long-arrow-down';
import Moon from 'react-icons/lib/fa/moon-o';
import Arrow from "react-icons/lib/ti/arrow-forward";
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Menu'

class Day extends Component {


    render() {
        return (
            <div>
                <Sidebar />
                {/* <div className='navarrow' ><Arrow /></div> */}
                {this.props.datum}
                <div className='place'>Enköping</div>
                <div className='date'>Torsdag, 26 april</div>
                <div className='weatherinfo'>
                    <Moon />
                    <div className='tempnow'>{this.props.TempNow}°<span className='deg'>°</span></div>
                    <div className='temphighlow'><ArrowUp /> {this.props.TodayTempMax}° <ArrowDown /> {this.props.TodayTempMin}°</div>
                    <div className='wind'>Vindstyrka: {this.props.TodayWind} m/s</div>
                    <div className='rain'>Nederbörd: {this.props.TodayRain} mm</div>
                </div>

            </div>
        )
    }
}

export default Day;



