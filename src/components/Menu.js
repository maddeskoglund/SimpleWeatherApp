import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Arrow from "react-icons/lib/ti/arrow-forward";

class Sidebar extends Component {
    showSettings(event) {
        event.preventDefault();
        // .
        // .
        // .
    }

    render() {
        return (

            <Menu className='menu' customBurgerIcon={<Arrow />}>
                <a id="today" className="menu-item" href="/">Idag</a>
                <a id="tomorrow" className="menu-item" href="/about">Imorgon</a>
                <a id="contact" className="menu-item" href="/contact">Övermorgon</a>
                {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu>
        );
    }
}

export default Sidebar;