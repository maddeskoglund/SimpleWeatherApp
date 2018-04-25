import React, { Component } from 'react';
// import App from '../App'


class Day1 extends Component {
    render() {
        return (
            <div>
                Hej {this.props.tempNow}
                <div className='tempnow'>{this.props.TempNow}</div>


            </div>
        )
    }
}

export default Day1;
