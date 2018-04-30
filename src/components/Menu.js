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
                <Link to='/'>Idag</Link>

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