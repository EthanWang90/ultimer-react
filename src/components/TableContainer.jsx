import React from 'react';
import Timer from './Timer.jsx';

const events = [
    {
        name:'a',
        time:'Jul 8, 2025'
    },
    {
        name:'b',
        time:'Jul 6, 2025'
    },
    {
        name:'c',
        time:'May 3, 2021'
    },
];

export default class TableContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <table>
                {
                    events.map((value,index)=>(
                        <Timer key={index} timerEvent={value}></Timer>
                    ))
                }
            </table>
        )
    }
}