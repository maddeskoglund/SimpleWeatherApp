import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Arrow from "react-icons/lib/ti/arrow-forward";
import { Link } from 'react-router-dom'


class Sidebar extends Component {
    showSettings(event) {
        event.preventDefault();
        // .
        // .
        // .
    }

    render() {
        return (

            <Menu right={true} className='menu' customBurgerIcon={<Arrow />}>
                <Link to='/'><p className='dag'>Idag</p>
                    <p><img src={"images/" + this.props.TodayIcon + ".png"} /></p>
                    <p> {this.props.TodayTempMax}° /  {this.props.TodayTempMin}°</p>
                </Link>
                <Link to='/tomorrow'><p className='dag'>Imorgon</p>
                    <p>{this.props.TomorrowIcon}</p>
                    <p> {this.props.TomorrowTempMax}° /  {this.props.TomorrowTempMin}°</p>
                </Link>
                <Link to='/tomorrowPlus1'><p className='dag'>Övermorgon</p>
                    <p>{this.props.TomorrowPlus1Icon}</p>
                    <p> {this.props.TomorrowPlus1TempMax}° /  {this.props.TomorrowPlus1TempMin}°</p>
                </Link>


                {/* <a id="today" className="menu-item" href="/">Idag</a>
                <a id="tomorrow" className="menu-item" href="/about">Imorgon</a>
                <a id="contact" className="menu-item" href="/contact">Övermorgon</a> */}
                {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu>
        );
    }
}

export default Sidebar;

//https://github.com/negomi/react-burger-menu