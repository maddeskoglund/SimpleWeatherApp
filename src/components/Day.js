import React, { Component } from "react";
import ArrowUp from "react-icons/lib/fa/long-arrow-up";
import ArrowDown from "react-icons/lib/fa/long-arrow-down";
import Moon from "react-icons/lib/fa/moon-o";




class Day extends Component {
    render() {

        const Icons =
            ["", "sun.png", "sun.png", "suncloud.png", "suncloud.png", "cloud.png", "cloud.png",
                "cloud.png", "rain.png", "rain.png", "rain.png", "thunder.png", "rain.png", "rain.png",
                "rain.png", "snow.png", "snow.png", "snow.png", "rain.png", "rain.png", "rain.png",
                "thunder.png", "rain.png", "rain.png", "rain.png", "snow.png", "snow.png", "snow.png"]



        return (
            <div>

                <div className="place">Enköping</div>
                <div className="date">{this.props.datum}</div>
                <div className="weatherinfo">
                    <Moon />
                    <div>{this.props.IconNow}</div>
                    {/* <p><img src={"./images/" + Icons[{ this.props.IconNow }] + ".png"} /> </p> */}
                    <p><img src=`./images/${Icons[this.props.IconNow]}` /> </p>
                    <div className="tempnow">{this.props.TempNow}°</div>
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
        
        export default Day;
