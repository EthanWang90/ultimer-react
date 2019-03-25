import React from 'react';
import Year from './Year.jsx';
import Day from './Day.jsx';
import Hour from './Hour.jsx';
import Minute from './Minute.jsx';
import Second from './Secound.jsx';

const myStyle = {
    display: 'inline-block',
    margin: 5,
    float: 'left',
}

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            years: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    timeCalc=()=>{
        let time = this.props.timerSpan;
        let second = Math.floor(time/1000);
        let year = Math.floor(second/31536000);
        second %= 31536000;
        let day = Math.floor(second/86400);
        second %= 86400;
        let hour = Math.floor(second/3600);
        second %= 3600;
        let min = Math.floor(second/60);
        second %= 60;
        this.setState({
            years: year,
            days: day,
            hours: hour,
            minutes: min,
            seconds: second,
        });
    }

    componentWillMount(){
        this.timeCalc();
    }

    componentWillReceiveProps(){
        this.timeCalc();
    }

    render(){
        return(
            <div id="timer" style={{textAlign:'center'}}>
                <div style={myStyle}>
                    <Year time={this.state.years.toString().split('').map(value=>{
                        return parseInt(value);
                    })}></Year>
                </div>
                <div style={myStyle}>
                    <Day time={this.state.days.toString().split('').map(value=>{
                        return parseInt(value);
                    })}></Day>
                </div>
                <div style={myStyle}>
                    <Hour time={this.state.hours.toString().split('').map(value=>{
                        return parseInt(value);
                    })}></Hour>
                </div>
                <div style={myStyle}>
                    <Minute time={this.state.minutes.toString().split('').map(value=>{
                        return parseInt(value);
                    })}></Minute>
                </div>
                <div style={myStyle}>
                    <Second time={this.state.seconds.toString().split('').map(value=>{
                        return parseInt(value);
                    })}></Second>
                </div>
            </div>
        )
    }
}