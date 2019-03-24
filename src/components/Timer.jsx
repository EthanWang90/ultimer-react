import React from 'react';
import Year from './Year.jsx';
import Day from './Day.jsx';
import Hour from './Hour.jsx';
import Minute from './Minute.jsx';
import Second from './Secound.jsx';

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

    componentWillMount(){
        let time = this.props.timerSpan;
        let year = Math.floor(time/31536000000);
        let second = Math.floor(time/1000);
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

    componentWillReceiveProps(){
        let time = this.props.timerSpan;
        let year = Math.floor(time/31536000000);
        let second = Math.floor(time/1000);
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

    render(){
        return(
            <div style={{width: 100, height: 100}}>
                <Year></Year>
                <Day></Day>
                <Hour></Hour>
                <Minute></Minute>
                <Second></Second>
                {this.state.years}
                <span>----</span>
                {this.state.minutes}
                <span>----</span>
                {this.state.seconds}
            </div>
        )
    }
}