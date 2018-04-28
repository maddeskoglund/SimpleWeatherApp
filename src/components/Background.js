import React, { Component } from 'react';
// import App from '../App'
import Moon from 'react-icons/lib/fa/moon-o';


function BackgroundImage(props) {
    const temperatureNow = this.state.tempNow;



    if (temperatureNow >= 30) {
        // bgColorClass += 'very-warm';
    }
    else if (temperatureNow > 20 && temperatureNow < 30) {
        // bgColorClass += 'warm';
    }
    else if (temperatureNow > 10 && temperatureNow < 20) {
        // bgColorClass += 'normal';
    }
    else if (temperatureNow > 0 && temperatureNow < 10) {
        return <Moon />;
    }
    else if (temperatureNow <= 0) {
        // bgColorClass += 'very-cold';
    }
}

export default BackgroundImage;




// class Background extends Component {

// var image = [];

// backgroundImage() {
//     if (this.state.tempNow >= 30) {
//         // bgColorClass += 'very-warm';
//     }
//     else if (this.state.tempNow > 20 && this.state.tempNow < 30) {
//         // bgColorClass += 'warm';
//     }
//     else if (this.state.tempNow > 10 && this.state.tempNow < 20) {
//         // bgColorClass += 'normal';
//     }
//     else if (this.state.tempNow > 0 && this.state.tempNow < 10) {
//         image += <Moon />;
//     }
//     else if (this.state.tempNow <= 0) {
//         // bgColorClass += 'very-cold';
//     }

// }

// render() {
//     return (
//         <div>Hej
//             <div>{image}</div>

//         </div>

//     )
// }
// }

// export default Background;
