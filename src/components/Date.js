import React from "react";
import { Component } from "react";
import Day from './Day'
import Springimg from './images/springimg.jpg'

class Datum extends Component {
    render() {
        const monthNames = [
            "Januari",
            "Februari",
            "Mars",
            "April",
            "Maj",
            "Juni",
            "Juli",
            "Augusti",
            "September",
            "Oktober",
            "November",
            "December"
        ];

        const dayNames = [
            "Måndag",
            "Tisdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lördag",
            "Söndag"
        ];


        const theDay = new Date();
        const datum = theDay.getDate();
        const day = dayNames[theDay.getDay() - 1];
        const month = monthNames[theDay.getMonth()];



        //this below is new
        // const Spring = monthNames['Mars', 'April', 'Maj']

        // chooseBackgroundImage() {

        //     { Spring } ? <Springimg /> : null;
        // }





        return (
            <div>
                <Day
                    datum={datum}
                />

            </div>
        );
    }
}

export default Datum;