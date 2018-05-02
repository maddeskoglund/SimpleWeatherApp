import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import Moon from "react-icons/lib/fa/moon-o";


class FutureDay extends Component {
    render() {
        return (
            <div>

                <div className="place">Enköping</div>
                <div className="date">{this.props.datum}</div>
                <div className="weatherinfo">
                    <Moon />

                    <div className="temphighlow">
                        <ArrowUp /> {this.props.TempMax}° <ArrowDown />{" "}
                        {this.props.TempMin}°
          </div>
                    <div className="wind">Vindstyrka: {this.props.Wind} m/s</div>
                    <div className="rain">Nederbörd: {this.props.Rain} mm</div>
                </div>
            </div >

        );
    }
}

export default FutureDay;